import { useCallback, useEffect, useState } from "react";
import SDK from "@hyperledger/identus-sdk";

import { AgentContext } from "@/context";
import { ResolverClass, createResolver } from "@/utils/resolvers";
import { useDatabase } from "@/hooks";
import { v4 as uuidv4 } from 'uuid';
import { base64 } from "multiformats/bases/base64";

export function AgentProvider({ children }: { children: React.ReactNode }) {
    const {
        db,
        getMediator,
        getSeed,
        getResolverUrl,
        state: dbState,
        getMessages,
        pluto,
        getIssuanceFlow,
        deleteMessage: dbDeleteMessage
    } = useDatabase();

    const [agent, setAgent] = useState<SDK.Agent | null>(null);
    const [state, setState] = useState<SDK.Domain.Startable.State>(SDK.Domain.Startable.State.STOPPED);
    const [messages, setMessages] = useState<{ message: SDK.Domain.Message, read: boolean }[]>([]);
    const [connections, setConnections] = useState<SDK.Domain.DIDPair[]>([]);
    const [credentials, setCredentials] = useState<SDK.Domain.Credential[]>([]);
    const [peerDID, setPeerDID] = useState<SDK.Domain.DID | null>(null);
    const currentState = agent?.state || SDK.Domain.Startable.State.STOPPED;


    const deleteMessage = useCallback(async (message: SDK.Domain.Message) => {
        await dbDeleteMessage(message);
        setMessages((prev) => prev.filter((m) => m.message.id !== message.id));
    }, [dbDeleteMessage]);

    //TODO: Add support for SD+JWT
    const processRequestCredentialMessage = useCallback(async (message: SDK.RequestCredential) => {
        const issuanceFlow = await getIssuanceFlow(message.thid!);
        if (!issuanceFlow) {
            throw new Error("No issuance flow found");
        }
        const issuerDID = SDK.Domain.DID.fromString(issuanceFlow.issuingDID)
        const sk = await pluto.getDIDPrivateKeysByDID(issuerDID);
        const privateKey = sk.at(0);
        if (!privateKey) {
            throw new Error("No private key found");
        }
        const credentialTask = new SDK.Tasks.CreateJWT({
            did: SDK.Domain.DID.fromString(issuanceFlow.issuingDID),
            payload: {
                iss: issuanceFlow.issuingDID,
                sub: issuanceFlow.issuingDID,
                iat: Date.now(),
                exp: Date.now() + 1000 * 60 * 60 * 24 * 365, //1 year
                nbf: Date.now(),
                jti: uuidv4(),
                vc: {
                    credentialSubject: issuanceFlow.claims.reduce((all, { name, value, type }) => {
                        if (type === 'number') {
                            all[name] = Number(value);
                        } else if (type === 'boolean') {
                            all[name] = value === 'true';
                        } else if (type === 'string') {
                            all[name] = value;
                        } else if (type === 'date') {
                            all[name] = new Date(value);
                        } else {
                            all[name] = value;
                        }
                        return all;
                    }, {} as Partial<SDK.Domain.JWT.Payload>)
                }
            },
            privateKey
        })
        const jwtCredential = await agent?.runTask(credentialTask);
        const issueCredentialMessage = new SDK.Domain.Message(
            {
                comment: null,
                goal_code: null,
                more_available: null,
                replacement_id: null
            },
            uuidv4(),
            SDK.ProtocolType.DidcommIssueCredential,
            message.to,
            message.from,
            [
                new SDK.Domain.AttachmentDescriptor({
                    base64: base64.baseEncode(
                        Buffer.from(jwtCredential!.toString())
                    )
                },
                    "application/jwt",
                    uuidv4(),
                    undefined,
                    "prism/jwt"
                )
            ],
            message.thid
        )
        return SDK.IssueCredential.fromMessage(issueCredentialMessage)
    }, [agent, getIssuanceFlow, pluto]);

    const start = useCallback(async () => {
        if (!db) {
            throw new Error("No db found");
        }
        const seed = await getSeed();
        if (!seed) {
            throw new Error("No seed found");
        }
        setState(SDK.Domain.Startable.State.STARTING);
        const apollo = new SDK.Apollo();
        const mediatorDID = await getMediator() ?? undefined;
        const resolverUrl = await getResolverUrl();
        const resolvers: ResolverClass[] = [];
        if (resolverUrl) {
            resolvers.push(createResolver(resolverUrl))
        }
        const castor = new SDK.Castor(apollo, resolvers);
        const agent = await SDK.Agent.initialize({
            apollo,
            castor,
            mediatorDID,
            pluto: pluto,
            seed,
        });
        await agent.start()
        const peerDID = await agent.createNewPeerDID([], true);
        setPeerDID(peerDID);
        setAgent(agent);
    }, [db, getSeed, getMediator, getResolverUrl, pluto]);

    const stop = useCallback(async () => {
        setState(SDK.Domain.Startable.State.STOPPING);
        try {
            await agent?.connections.stop();
            await agent?.jobs.stop();
        } catch (error) {
            console.log("Error stopping agent:", error);
        } finally {
            setAgent(null);
        }
    }, [agent, setState, setAgent]);

    const readMessage = useCallback(async (message: SDK.Domain.Message) => {
        if (!db) {
            throw new Error("No db found");
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const [found] = await db.collections.messages.find({ $or: [{ uuid: message.uuid }, { id: message.id }] });
        if (found) {
            await db.collections.messages.update({
                ...found,
                read: true
            } as any)
        }
        setMessages((prev) => prev.map((m) => m.message.id === message.id ? { ...m, read: true } : m));
    }, [db, setMessages]);

    useEffect(() => {
        setState(currentState);
    }, [currentState])

    const onMessage = useCallback(async (messages: SDK.Domain.Message[]) => {
        if (agent) {
            const CredentialRequests = messages.filter((message) => message.piuri === SDK.ProtocolType.DidcommRequestCredential);
            const IssueCredentials = messages.filter((message) => message.piuri === SDK.ProtocolType.DidcommIssueCredential);
            for (const request of CredentialRequests) {
                getIssuanceFlow(request.thid!).then(async (issuanceFlow) => {
                    if (issuanceFlow?.automaticIssuance) {
                        //Automatically issue Credentials
                        const requestCredentialMessage = SDK.RequestCredential.fromMessage(request);
                        const issueCredentialMessage = await processRequestCredentialMessage(requestCredentialMessage);
                        agent.send(issueCredentialMessage.makeMessage());
                    }
                });
            }
            for (const issue of IssueCredentials) {
                const issueCredentialMessage = SDK.IssueCredential.fromMessage(issue);
                const credential = await agent.processIssuedCredentialMessage(issueCredentialMessage);
                await pluto.storeCredential(credential)
            }
        }
        setMessages((prev) => {
            const newMessages = messages.filter(
                (message) => !prev.some((m) => m.message.id === message.id)
            );
            return [...prev, ...newMessages.map((message) => ({ message, read: false }))];
        });
    }, [setMessages, getIssuanceFlow, agent, processRequestCredentialMessage, pluto]);

    const onConnection = useCallback((connections: SDK.Domain.DIDPair) => {
        setConnections((prev) => {
            if (prev.some((c) =>
                c.host.toString() === connections.host.toString() &&
                c.receiver.toString() === connections.receiver.toString()
            )) {
                return prev;
            }
            return [...prev, connections];
        });
    }, [setConnections]);

    const onRevokeCredential = useCallback((credential: SDK.Domain.Credential) => {
        setCredentials((prev) => {
            if (prev.some((c) => c.id === credential.id)) {
                return prev;
            }
            return [...prev, credential];
        });
    }, [setCredentials]);

    useEffect(() => {
        if (agent) {
            agent.addListener(SDK.ListenerKey.MESSAGE, onMessage);
            agent.addListener(SDK.ListenerKey.CONNECTION, onConnection);
            agent.addListener(SDK.ListenerKey.REVOKE, onRevokeCredential);
            return () => {
                agent.removeListener(SDK.ListenerKey.MESSAGE, onMessage);
                agent.removeListener(SDK.ListenerKey.CONNECTION, onConnection);
                agent.removeListener(SDK.ListenerKey.REVOKE, onRevokeCredential);
            };
        }
    }, [agent, onMessage, onConnection, onRevokeCredential])


    const preloadData = useCallback(async () => {
        if (db && dbState === 'loaded') {
            const messages = await getMessages();
            const connections = await pluto.getAllDidPairs();
            const credentials = await pluto.getAllCredentials();
            setMessages((prev) => {
                const newMessages = messages.filter(
                    (message) => !prev.some((m) => m.message.id === message.message.id)
                );
                return [...prev, ...newMessages];
            });
            setConnections((prev) => {
                const newConnections = connections.filter(
                    (connection) => !prev.some((c) =>
                        c.host.toString() === connection.host.toString() &&
                        c.receiver.toString() === connection.receiver.toString()
                    )
                );
                return [...prev, ...newConnections];
            });
            setCredentials((prev) => {
                const newCredentials = credentials.filter(
                    (credential) => !prev.some((c) => c.id === credential.id)
                );
                return [...prev, ...newCredentials];
            });
        }
    }, [db, dbState, getMessages, pluto]);

    useEffect(() => {
        preloadData().catch(console.log);
    }, [dbState, db, preloadData])

    return <AgentContext.Provider value={{ agent, connections, credentials, setAgent, start, stop, deleteMessage, state, messages, readMessage, peerDID, processRequestCredentialMessage }}> {children} </AgentContext.Provider>
}
