import { useCallback } from "react";
import { base64 } from "multiformats/bases/base64";
import React from "react";
import { Domain } from "@hyperledger/identus-sdk";
import { RequestPresentation, CreatePresentation } from "@hyperledger/identus-sdk/plugins/oea";

import { HolderContext } from "../context";
import { useAgent, useMessages, usePeerDID } from "../hooks";

/**
 * Exposes methods and state for the Holder role in the Verifiable Credentials flow.
 * 
 * Allows a Holder to handle credential offers (OOB), accept offers, and respond
 * to presentation requests. Use the `useHolder` hook to consume the context.
 *
 * @example
 * ```tsx
 * import { useHolder } from '@hyperledger/identus-react';
 * 
 * function OutOfBandReceiver() {
 *   const { parseOOB, acceptOOBOffer } = useHolder();
 *   
 *   const handleScan = async (scannedUrl: string) => {
 *     const offerMessage = await parseOOB(scannedUrl);
 *     await acceptOOBOffer(offerMessage);
 *   };
 *   
 *   return <button onClick={() => handleScan('https://...')}>Simulate Scan</button>
 * }
 * ```
 */
export function HolderProvider({ children }: { children: React.ReactNode }) {
    const { agent, start, stop, state } = useAgent();
    const { load: reloadMessages } = useMessages();
    const { peerDID, create: createPeerDID } = usePeerDID();

    const parseOOBOffer = useCallback(async (url: string) => {
        let parsedUrl: URL;
        try {
            parsedUrl = new URL(url);
        } catch {
            parsedUrl = new URL(window.location.origin);
        }
        const oob = parsedUrl.searchParams.get('oob');
        const selfPeerDID = peerDID ? peerDID : await createPeerDID();
        const decoded = base64.baseDecode(oob as string);
        const offer = Buffer.from(decoded).toString()
        const message = Domain.Message.fromJson(offer);
        const attachment = message.attachments.at(0)?.payload;
        return Domain.Message.fromJson({
            ...attachment,
            from: message.from,
            to: selfPeerDID
        })
    }, [peerDID, createPeerDID]);

    const handlePresentationRequest = useCallback(async (message: Domain.Message, credential: Domain.Credential) => {
        if (!agent) {
            throw new Error("No agent found");
        }
        const request = RequestPresentation.fromMessage(message);
        const task = new CreatePresentation({ request, credential })
        const presentation = await agent.runTask(task);
        const presentationMessage = presentation.makeMessage();
        presentationMessage.direction = Domain.MessageDirection.SENT;
        await agent.send(presentationMessage);
        await reloadMessages();
    }, [agent, reloadMessages]);

    const acceptOOBOffer = useCallback(async (offer: Domain.Message) => {
        if (!agent) {
            throw new Error("Start the agent first");
        }
        const requestCredential = await agent.handle(offer);
        try {
            const requestMessage = requestCredential.makeMessage()
            requestMessage.direction = Domain.MessageDirection.SENT;
            await agent.send(requestMessage);
            await reloadMessages();
        } catch (err) {
            console.log("continue after err", err);
        }
    }, [agent, reloadMessages]);

    return <HolderContext.Provider value={{ agent, start, stop, state, parseOOBOffer, parseOOB: parseOOBOffer, handlePresentationRequest, acceptOOBOffer }}>
        {children}
    </HolderContext.Provider>
}