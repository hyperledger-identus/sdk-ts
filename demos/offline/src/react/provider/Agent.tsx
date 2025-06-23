

import React, { useCallback, useMemo, useState } from "react";
import { RIDBDatabase } from '@trust0/ridb-react';
import SDK from "@hyperledger/identus-sdk";
import { v4 as uuidv4 } from 'uuid';
import { base64 } from 'multiformats/bases/base64';

import { useRIDB } from "@trust0/ridb-react";
import { StartOptions, StorageType } from "@trust0/ridb";
import { createStore } from "@trust0/identus-store";

import { AgentContext, HolderContext, IssuerContext, VerifierContext } from "../context";
import { ExtraResolver, useAgent, useApollo } from "../hooks";
import { createResolver } from "../resolver";
import { schemas, migrations } from "../db";
import { MessagesProvider } from "./Messages";


export function WithAgentProvider(options: { children: React.ReactNode, seed: SDK.Domain.Seed, resolverUrl: string, mediatorDID: SDK.Domain.DID, resolvers: ExtraResolver[] }) {
    const { children, seed, resolverUrl, mediatorDID, resolvers } = options;
    const Provider = createAgentProvider({ seed, resolverUrl, mediatorDID, resolvers });
    return <RIDBDatabase startOptions={{ dbName: "sample", storageType: StorageType.IndexDB }} schemas={schemas} migrations={migrations as any}>
        <Provider>
            <MessagesProvider>{children}</MessagesProvider>
        </Provider>
    </RIDBDatabase>
}

export function VerifierProvider({ children }: { children: React.ReactNode }) {
    const { agent, start, stop, state } = useAgent();
    const issuePresentationRequest = useCallback(async <T extends SDK.Domain.CredentialType>(type: T, toDID: SDK.Domain.DID, claims: SDK.Domain.PresentationClaims<T>) => {
        if (!agent) {
            throw new Error("No agent found");
        }
        const task = new SDK.Tasks.CreatePresentationRequest({ type, toDID, claims })
        const requestPresentation = await agent.runTask(task);
        const requestPresentationMessage = requestPresentation.makeMessage();
        await agent.send(requestPresentationMessage);
    }, [agent]);
    const verifyPresentation = useCallback(async (presentation: SDK.Domain.Message): Promise<boolean> => {
        if (!agent) {
            throw new Error("No agent found");
        }
        if (presentation.piuri !== SDK.ProtocolType.DidcommRequestPresentation) {
            throw new Error("Invalid presentation type");
        }
        return agent.handle(presentation)
    }, [agent]);
    return <VerifierContext.Provider value={{ agent, start, stop, state, issuePresentationRequest, verifyPresentation }}>
        {children}
    </VerifierContext.Provider>
}

export function HolderProvider({ children }: { children: React.ReactNode }) {
    const { agent, start, stop, state } = useAgent();
    const parseOOBOffer = useCallback(async (offer: string, selfPeerDID: SDK.Domain.DID) => {
        const message = SDK.Domain.Message.fromJson(offer);
        const attachment = message.attachments.at(0)?.payload;
        return SDK.Domain.Message.fromJson({
            ...attachment,
            from: message.from,
            to: selfPeerDID,
        })
    }, []);
    const handlePresentationRequest = useCallback(async (message: SDK.Domain.Message, credential: SDK.Domain.Credential) => {
        if (!agent) {
            throw new Error("No agent found");
        }
        const request = SDK.RequestPresentation.fromMessage(message);
        const task = new SDK.Tasks.CreatePresentation({ request, credential })
        const presentation = await agent.runTask(task);
        const presentationMessage = presentation.makeMessage();
        await agent.send(presentationMessage);
    }, [agent]);
    const acceptOOBOffer = useCallback(async (offer: SDK.Domain.Message) => {
        if (!agent) {
            throw new Error("No agent found");
        }
        const credentialOfferMessage = SDK.OfferCredential.fromMessage(offer);
        const requestCredential = await agent.handle(credentialOfferMessage.makeMessage());
        const requestMessage = requestCredential.makeMessage()
        await agent.send(requestMessage);
    }, [agent]);
    return <HolderContext.Provider value={{ agent, start, stop, state, parseOOBOffer, handlePresentationRequest, acceptOOBOffer }}>
        {children}
    </HolderContext.Provider>
}

export function IssuerProvider({ children }: { children: React.ReactNode }) {
    const { agent, start, stop, state } = useAgent();
    const createOOBOffer = useCallback(async <T extends SDK.Domain.CredentialType>(type: T, id: string, claims: any) => {
        if (!agent) {
            throw new Error("No agent found");
        }
        if (type !== SDK.Domain.CredentialType.JWT && type !== SDK.Domain.CredentialType.SDJWT) {
            throw new Error("Invalid credential type");
        }
        const peerDID = await agent.createNewPeerDID();
        const oobTask = new SDK.Tasks.CreateOOBOffer({
            from: peerDID,
            offer: new SDK.OfferCredential(
                {
                    goal_code: "Offer Credential",
                    credential_preview: {
                        type: SDK.ProtocolType.DidcommCredentialPreview,
                        body: {
                            attributes: claims as any,
                        },
                    },
                },
                [
                    new SDK.Domain.AttachmentDescriptor(
                        {
                            json: {
                                id: uuidv4(),
                                media_type: "application/json",
                                options: {
                                    challenge: uuidv4(),
                                    domain: 'localhost',
                                },
                                thid: id,
                                presentation_definition: {
                                    id: uuidv4(),
                                    input_descriptors: [],
                                    format: {
                                        jwt: {
                                            alg: ["ES256K"],
                                            proof_type: [],
                                        },
                                    },
                                },
                                format: type,
                                piuri: SDK.ProtocolType.DidcommOfferCredential,
                            },
                        },
                        "application/json",
                        id,
                        undefined,
                        type
                    )
                ],
                undefined,
                undefined,
                id
            )
        });
        const oob = await agent.runTask(oobTask);
        const oobDecoded = base64.baseDecode(oob);
        const oobJson = Buffer.from(oobDecoded).toString();
        return oobJson;
    }, [agent]);
    const issueCredential = useCallback(async <T extends SDK.Domain.CredentialType>(type: T, message: SDK.Domain.Message, claims: SDK.Domain.PresentationClaims<T>, issuerDID: SDK.Domain.DID, holderDID: SDK.Domain.DID) => {
        if (!agent) {
            throw new Error("No agent found");
        }
        if (type !== SDK.Domain.CredentialType.JWT && type !== SDK.Domain.CredentialType.SDJWT) {
            throw new Error("Invalid credential type");
        }
        const protocol = new SDK.Tasks.RunProtocol({
            type: 'credential-request',
            pid: SDK.ProtocolType.DidcommRequestCredential,
            data: {
                issuerDID,
                holderDID,
                message,
                format: type,
                claims: claims as any,
            }
        })
        const issued = await agent.runTask(protocol);
        await agent.send(issued.makeMessage());
    }, [agent]);
    return <IssuerContext.Provider value={{ agent, start, stop, state, createOOBOffer, issueCredential }}>
        {children}
    </IssuerContext.Provider>
}

export function createAgentProvider<T extends ExtraResolver>(options: { seed: SDK.Domain.Seed, resolverUrl: string, mediatorDID: SDK.Domain.DID, resolvers: T[] }) {
    const { seed, resolverUrl, mediatorDID, resolvers } = options;
    return function AgentProvider({ children }: { children: React.ReactNode }) {
        const apollo = useApollo();
        const { db } = useRIDB<typeof schemas>();
        const store = createStore({ db, storageType: StorageType.IndexDB });
        const pluto = useMemo(() => new SDK.Pluto(store, apollo), [store, apollo]);
        const [agent, setAgent] = useState<SDK.Agent | null>(null);
        const [state, setState] = useState<SDK.Domain.Startable.State>(SDK.Domain.Startable.State.STOPPED);
        const stop = useCallback(async () => {
            setState(SDK.Domain.Startable.State.STOPPING);
            try {
                await agent?.connections.stop();
                await agent?.jobs.stop();
                setState(SDK.Domain.Startable.State.STOPPED);
            } catch (error) {
                console.log("Error stopping agent:", error);
            } finally {
                setAgent(null);
            }
        }, [agent, setState, setAgent]);
        const start = useCallback(async (startOptions: StartOptions<typeof schemas>) => {
            if (!db) {
                throw new Error("No db found");
            }
            await db.start(startOptions);
            setState(SDK.Domain.Startable.State.STARTING);
            const apollo = new SDK.Apollo();
            if (resolverUrl) {
                resolvers.push(createResolver(resolverUrl) as any)
            }
            const castor = new SDK.Castor(apollo, resolvers);
            const agent = await SDK.Agent.initialize({
                apollo,
                castor,
                mediatorDID,
                pluto: pluto,
                seed
            });
            await agent.start()
            setState(SDK.Domain.Startable.State.RUNNING);
            setAgent(agent);
        }, [db, pluto]);
        return <AgentContext.Provider value={{ agent, setAgent, start, stop, state }}>
            {children}
        </AgentContext.Provider>
    }
}
