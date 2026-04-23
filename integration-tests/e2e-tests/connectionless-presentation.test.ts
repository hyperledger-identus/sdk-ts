import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Agent } from "../../packages/lib/sdk/src/edge-agent";
import { Apollo } from "../../packages/lib/sdk/src/apollo/Apollo";
import { Castor } from "../../packages/lib/sdk/src/castor";
import { Pluto } from "../../packages/lib/sdk/src/pluto/Pluto";
import { Mercury } from "../../packages/lib/sdk/src/mercury";
import { DIDCommProtocol } from "../../packages/lib/sdk/src/mercury/DIDCommProtocol";
import { Message, DID, ApiResponse, CredentialType } from '@hyperledger/identus-domain';
import { randomUUID } from 'node:crypto';
import * as Fixtures from "../../packages/lib/sdk/tests/fixtures";
import { RequestPresentation } from '../../packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation';
import { OutOfBandInvitation } from '../../packages/lib/sdk/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation';
import { StartMediator, StartFetchingMessages } from '../../packages/lib/sdk/src/plugins/internal/didcomm';
import { mockTask } from '../../packages/lib/sdk/tests/testFns';

describe("Connectionless Presentation E2E", () => {
    let verifier: Agent;
    let holder: Agent;

    async function createAgent() {
        const apollo = new Apollo();
        const castor = new Castor(apollo);
        const api = {
            request: async () => new ApiResponse<any>(new Uint8Array(), 200),
        } as any;
        
        // Minimal protocol mock to bypass network but keep task logic intact
        const didProtocol: DIDCommProtocol = {
            packEncrypted: async () => "",
            unpack: async () => new Message("{}", undefined, "TypeofMessage"),
        };
        
        const pluto = await Pluto.create({
            dbName: "test-" + randomUUID(),
            keyRestoration: new Apollo(),
        });
        
        const mercury = new Mercury(castor, didProtocol, api);
        const seed = async () => new Uint8Array(32).fill(1);

        const agent = Agent.initialize({
            apollo,
            castor,
            pluto,
            mercury,
            seed,
        });
        
        // Essential mocks for background jobs that require external connections
        mockTask(StartMediator);
        mockTask(StartFetchingMessages);
        
        return agent;
    }

    beforeEach(async () => {
        verifier = await createAgent();
        holder = await createAgent();
        await verifier.start();
        await holder.start();
    });

    afterEach(async () => {
        await verifier.stop();
        await holder.stop();
        vi.restoreAllMocks();
    });

    it("Case 1: Successful connectionless presentation", async () => {
        // 1. Verifier creates a presentation request
        // We use a placeholder DID because the verifier doesn't know the holder yet (QR code scan scenario)
        const presentationRequest = await verifier.initiatePresentationRequest(
            CredentialType.JWT,
            DID.fromString("did:peer:123"), 
            { claims: {} }
        );

        // 2. Wrap in OOB invitation (Simulate sharing via URL/Deep Link)
        const oobInvitation = new OutOfBandInvitation(
            presentationRequest.body,
            presentationRequest.from,
            [presentationRequest.makeMessage()]
        );

        // 3. Holder receives request and processes via EventsManager
        const messageReceived = new Promise<Message>((resolve) => {
            holder.events.addListener("MESSAGE" as any, (messages: Message[]) => resolve(messages[0]));
        });

        // The Real flow uses acceptInvitation which triggers the HandleOOBInvitation task
        await holder.acceptInvitation(oobInvitation);
        
        const receivedRequest = await messageReceived;
        expect(receivedRequest.piuri).toContain("request-presentation");

        // ASSERT: Verification of connectionless state (No DIDPair should be created)
        const didPairs = await holder.pluto.getAllDidPairs();
        expect(didPairs.length).toBe(0, "No DID connection should be established for connectionless presentation");

        // ASSERT: Message must be stored in Pluto for later resolution
        const storedMessages = await holder.pluto.getAllMessages();
        expect(storedMessages.some(m => m.id === receivedRequest.id)).toBe(true);

        // 4. Holder generates presentation
        const credential = Fixtures.Credentials.JWT.credential;
        const presentation = await holder.createPresentationForRequestProof(
            presentationRequest,
            credential
        );

        // 5. Verifier verifies presentation successfully
        const isValid = await verifier.handlePresentation(presentation);
        expect(isValid).toBe(true);
    });

    it("Case 2: Invalid / tampered request (Integrity Failure)", async () => {
        const presentationRequest = await verifier.initiatePresentationRequest(
            CredentialType.JWT,
            DID.fromString("did:peer:123"),
            { claims: {} }
        );

        // TAMPER: Modify thread ID and goal_code to break deterministic verification
        const tamperedRequest = new RequestPresentation(
            { ...presentationRequest.body, goal_code: "TAMPERED" },
            presentationRequest.attachments,
            presentationRequest.from,
            presentationRequest.to,
            randomUUID() // Corrupted thread ID
        );

        const credential = Fixtures.Credentials.JWT.credential;
        
        // Holder creates presentation for the tampered request
        const presentation = await holder.createPresentationForRequestProof(
            tamperedRequest,
            credential
        );

        // Verifier should reject the presentation as it won't match its internal state/THID
        const isValid = await verifier.handlePresentation(presentation);
        expect(isValid).toBe(false, "Verifier must detect tampering in request metadata or thread ID");
    });

    it("Case 3: Missing credentials (Incompatible Type)", async () => {
        // Verifier requests AnonCreds but Holder fixture only provides JWT
        const presentationRequest = await verifier.initiatePresentationRequest(
            CredentialType.AnonCreds, 
            DID.fromString("did:peer:123"),
            { claims: {} }
        );

        const credential = Fixtures.Credentials.JWT.credential;

        // ASSERT: Fail deterministically with an error when requested format cannot be fulfilled
        await expect(holder.createPresentationForRequestProof(
            presentationRequest,
            credential
        )).rejects.toThrow();
    });
});
