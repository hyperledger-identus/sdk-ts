

import React, { useCallback } from "react";
import { Domain, ProtocolType } from "@hyperledger/identus-sdk";
import { CreatePresentationRequest, type PresentationClaims } from "@hyperledger/identus-sdk/plugins/oea";
import { OutOfBandInvitation } from "@hyperledger/identus-sdk/plugins/didcomm";

import { VerifierContext } from "../context";
import { useAgent, usePeerDID } from "../hooks";

/**
 * Provides Verifier capabilities for requesting and verifying Presentation submissions.
 * 
 * Includes functionalities for Out-Of-Band (OOB) requests and verifying DIDComm presentations.
 * Consumed via the `useVerifier` hook.
 *
 * @example
 * ```tsx
 * import { useVerifier } from '@hyperledger/identus-react';
 * import { Domain } from '@hyperledger/identus-sdk';
 * 
 * function VerificationStation() {
 *   const { issueOOBPresentationRequest } = useVerifier();
 *   
 *   const requestProof = () => {
 *     issueOOBPresentationRequest(
 *       Domain.CredentialType.JWT,
 *       { claims: { 'Name': { type: 'string' } } }
 *     ).then((oob) => console.log('OOB URL payload: ', oob));
 *   };
 *   
 *   return <button onClick={requestProof}>Request Presentation</button>
 * }
 * ```
 */
export function VerifierProvider({ children }: { children: React.ReactNode }) {
    const { agent, start, stop, state } = useAgent();
    const { create: createPeerDID } = usePeerDID();

    const createRequestPresentationMessage = useCallback(async <T extends Domain.CredentialType>(
        type: T,
        claims: PresentationClaims<T>,
        toDID?: Domain.DID,
    ) => {
        if (!agent) {
            throw new Error("No agent found");
        }
        const peerDID = await createPeerDID();
        let task: CreatePresentationRequest;

        if ("issuer" in claims) {
            claims.claims.iss = {
                type: "string",
                pattern: claims.issuer
            }
            task = new CreatePresentationRequest({
                type,
                toDID: toDID ?? peerDID,
                claims: {
                    claims: claims.claims
                }
            })
        } else if ("claims" in claims) {
            task = new CreatePresentationRequest({
                type,
                toDID: toDID ?? peerDID,
                claims: {
                    claims: claims.claims
                }
            })
        } else {
            task = new CreatePresentationRequest({
                type,
                toDID: toDID ?? peerDID,
                claims: claims
            })
        }
        const requestPresentation = await agent.runTask(task);
        const requestPresentationMessage = requestPresentation.makeMessage();
        if (!toDID) {
            delete (requestPresentationMessage as any).to;
        }
        return requestPresentationMessage;
    }, [agent]);

    const issuePresentationRequest = useCallback(async <T extends Domain.CredentialType>(type: T, toDID: Domain.DID, claims: PresentationClaims<T>) => {
        if (!agent) {
            throw new Error("No agent found");
        }
        const requestPresentationMessage = await createRequestPresentationMessage(type, claims, toDID);
        requestPresentationMessage.direction = Domain.MessageDirection.SENT;
        await agent.send(requestPresentationMessage);
    }, [agent, createRequestPresentationMessage]);

    const issueOOBPresentationRequest = useCallback(async <T extends Domain.CredentialType>(type: T, claims: PresentationClaims<T>) => {
        if (!agent) {
            throw new Error("No agent found");
        }
        const peerDID = await createPeerDID();
        const requestPresentationMessage = await createRequestPresentationMessage(type, claims);
        requestPresentationMessage.direction = Domain.MessageDirection.SENT;
        await agent.pluto.storeMessage(requestPresentationMessage);
        const oob = new OutOfBandInvitation(
            {
                goal_code: "verify-vc",
                goal: "Verify Credential",
                accept: [
                    "didcomm/v2"
                ]
            },
            peerDID.toString(),
            requestPresentationMessage.thid,
            [
                new Domain.AttachmentDescriptor(
                    {
                        json: requestPresentationMessage
                    },
                    "application/json",
                )
            ]
        )
        return Buffer.from(JSON.stringify(oob)).toString("base64")
    }, [agent, createPeerDID, createRequestPresentationMessage]);

    const getOOBPresentationRequest = useCallback((fromPeerDID: Domain.DID, requestPresentationMessage: Domain.Message) => {
        if (!agent) {
            throw new Error("No agent found");
        }
        requestPresentationMessage.direction = Domain.MessageDirection.SENT;
        const oob = new OutOfBandInvitation(
            {
                goal_code: "verify-vc",
                goal: "Verify Credential",
                accept: [
                    "didcomm/v2"
                ]
            },
            fromPeerDID.toString(),
            requestPresentationMessage.thid,
            [
                new Domain.AttachmentDescriptor(
                    {
                        json: requestPresentationMessage
                    },
                    "application/json",
                )
            ]
        )
        return Buffer.from(JSON.stringify(oob)).toString("base64")
    }, [agent]);

    const verifyPresentation = useCallback(async (presentation: Domain.Message): Promise<boolean> => {
        if (!agent) {
            throw new Error("No agent found");
        }
        if (presentation.piuri !== ProtocolType.DidcommPresentation) {
            throw new Error("Invalid presentation type");
        }
        const response = await agent.handle(presentation)
        return response
    }, [agent]);

    return <VerifierContext.Provider value={{ agent, start, stop, state, getOOBPresentationRequest, issuePresentationRequest, verifyPresentation, issueOOBPresentationRequest }}>
        {children}
    </VerifierContext.Provider>
}
