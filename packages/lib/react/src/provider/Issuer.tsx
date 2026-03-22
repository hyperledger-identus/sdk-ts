// @ts-ignore
import { base64 } from 'multiformats/bases/base64';
import React, { useCallback } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Domain, type Issuance, JWTCredential, ProtocolType, RunProtocol } from "@hyperledger/identus-sdk";
import { CreateOOBOffer, OfferCredential, type IssueCredential } from "@hyperledger/identus-sdk/plugins/didcomm";
import { IssuerContext } from "../context";
import { useAgent, useMessages, usePeerDID } from "../hooks";

type IssuanceFlow = Issuance;
type Request = IssuanceFlow extends infer T ? T extends null ? never : T : never;


export function IssuerProvider({ children }: { children: React.ReactNode }) {
    const { agent, start, stop, state } = useAgent();
    const { load: reloadMessages, receivedMessages, sentMessages } = useMessages();
    const { create: createPeerDID } = usePeerDID();

    const getIssuanceStatus = useCallback((request: Request) => {
        const received = receivedMessages.filter((message) => message.thid === request.id);
        const sent = sentMessages.filter((message) => message.thid === request.id);
        if (sent.find(({ piuri }) => piuri === ProtocolType.DidcommIssueCredential)) {
            return 'completed'
        }
        if (received.find(({ piuri }) => piuri === ProtocolType.DidcommRequestCredential)) {
            return 'accept-pending'
        }
        return 'pending'
    }, [receivedMessages, sentMessages]);

    const getOOBURL = useCallback(async (request: Request) => {
        if (!agent) return null;
        const peerDID = await createPeerDID();
        const { claims } = request;
        const attributes = claims.map((claim) => ({ name: claim.name, value: claim.value }));
        const oobTask = new CreateOOBOffer({
            from: peerDID,
            offer: new OfferCredential(
                {
                    goal_code: "Offer Credential",
                    credential_preview: {
                        type: ProtocolType.DidcommCredentialPreview,
                        body: { attributes },
                    },
                },
                [
                    new Domain.AttachmentDescriptor(
                        {
                            json: {
                                id: crypto.randomUUID(),
                                media_type: "application/json",
                                options: {
                                    challenge: crypto.randomUUID(),
                                    domain: window.location.origin || "domain",
                                },
                                thid: request.id,
                                presentation_definition: {
                                    id: crypto.randomUUID(),
                                    input_descriptors: [],
                                    format: {
                                        jwt: {
                                            alg: [
                                                Domain.JWT_ALG.EdDSA
                                            ],
                                            proof_type: [],
                                        },
                                    },
                                },
                                format: request.credentialFormat,
                            },
                        },
                        "application/json",
                        request.id,
                        undefined,
                        request.credentialFormat
                    )
                ],
                undefined,
                undefined,
                request.id
            )
        });
        const oob = await agent.runTask(oobTask);
        return `${window.location.origin}/?oob=${oob}`;
    }, [agent, createPeerDID]);

    const createOOBOffer = useCallback(async <T extends Domain.CredentialType>(type: T, id: string, claims: { name: string, value: string, type: string }[]) => {
        if (!agent) {
            throw new Error("No agent found");
        }
        if (type !== Domain.CredentialType.JWT && type !== Domain.CredentialType.SDJWT) {
            throw new Error("Invalid credential type");
        }
        const peerDID = await agent.createNewPeerDID();
        const oobTask = new CreateOOBOffer({
            from: peerDID,
            offer: new OfferCredential(
                {
                    goal_code: "Offer Credential",
                    credential_preview: {
                        type: ProtocolType.DidcommCredentialPreview,
                        body: {
                            attributes: claims,
                        },
                    },
                },
                [
                    new Domain.AttachmentDescriptor(
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
                                piuri: ProtocolType.DidcommOfferCredential,
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
    const issueCredential = useCallback(async <T extends Domain.CredentialType>(
        type: T,
        message: Domain.Message,
        claims: { name: string, value: string, type: string }[],
        issuerDID: Domain.DID
    ) => {
        if (!agent) {
            throw new Error("No agent found");
        }
        if (type !== Domain.CredentialType.JWT && type !== Domain.CredentialType.SDJWT) {
            throw new Error("Invalid credential type");
        }
        if (message.piuri !== ProtocolType.DidcommRequestCredential) {
            throw new Error("Invalid message type");
        }
        const requestPresentation = JWTCredential.fromJWS(message.attachments[0].payload);
        const protocol = new RunProtocol({
            type: 'credential-request',
            pid: ProtocolType.DidcommRequestCredential,
            data: {
                issuerDID,
                holderDID: Domain.DID.fromString(requestPresentation.issuer),
                message,
                format: type,
                claims: claims
            }
        })
        const issued: IssueCredential = await agent.runTask(protocol);
        issued.thid = message.thid;
        const issuedMessage = issued.makeMessage();
        issuedMessage.direction = Domain.MessageDirection.SENT;
        await agent.send(issuedMessage);
        await reloadMessages()
    }, [agent]);
    return <IssuerContext.Provider value={{ agent, start, stop, state, createOOBOffer, issueCredential, getOOBURL, getIssuanceStatus }}>
        {children}
    </IssuerContext.Provider>
}
