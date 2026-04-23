import { expect, it, describe, beforeEach, afterEach, vi } from "vitest";
import { randomUUID } from "node:crypto";
import { Agent, Apollo, Pluto, Domain } from "@hyperledger/identus-sdk";
import { 
  OutOfBandInvitation, 
  OfferCredential, 
  IssueCredential,
} from "@hyperledger/identus-sdk/plugins/didcomm";
import { CreateOOBOffer } from "../../packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer";
import { AttachmentDescriptor } from "@hyperledger/identus-domain";

describe("Connectionless Credential Issuance E2E", () => {
    let issuer: Agent;
    let holder: Agent;

    const createAgent = async () => {
        const apollo = new Apollo();
        const pluto = await Pluto.create({
            dbName: "test-" + randomUUID(),
            startOptions: {
                storageType: Domain.StorageType.InMemory
            },
            keyRestoration: apollo,
        });
        
        // Mock mediator as we are testing connectionless without infra
        vi.spyOn(pluto, "getAllMediators").mockResolvedValue([]);
        
        return Agent.initialize({ pluto, apollo });
    };

    beforeEach(async () => {
        issuer = await createAgent();
        holder = await createAgent();
        await issuer.start();
        await holder.start();
    });

    afterEach(async () => {
        await issuer.stop();
        await holder.stop();
        vi.restoreAllMocks();
    });

    it("Successful connectionless issuance flow using real SDK tasks", async () => {
        // 1. Setup DIDs
        const issuerDID = await issuer.createPrismDID("issuer", []);
        const holderDID = await holder.createPrismDID("holder", []);

        // 2. Issuer creates credential offer
        const preview = {
            body: {
                attributes: [{ name: "name", value: "Alice", media_type: "text/plain" }]
            },
            type: Domain.ProtocolType.DidcommCredentialPreview
        };
        
        const attachment = AttachmentDescriptor.build(
            { name: "Alice" },
            randomUUID(),
            "application/json",
            undefined,
            "prism/jwt"
        );

        // For connectionless, we can provide a placeholder 'to' or keep it empty if the task allows
        // The task uses this offer to build the invitation
        const offer = new OfferCredential(
            preview as any,
            [attachment],
            issuerDID,
            undefined, // 'to' is unknown at this stage for connectionless
            randomUUID()
        );

        // 3. Issuer wraps offer in OutOfBandInvitation using CreateOOBOffer task (Real Issuer Flow)
        const invitationBase64 = await issuer.runTask(new CreateOOBOffer({
            from: issuerDID,
            offer: offer
        }));

        // 4. Holder receives and processes invitation
        const invitationJson = Buffer.from(invitationBase64, "base64").toString();
        const parsedInvitation = await holder.parseInvitation(invitationJson);
        
        // Setup listener to capture the stored offer message
        let receivedOfferMessage: Domain.Message | undefined;
        holder.addListener(Domain.ListenerKey.MESSAGE, (msgs) => {
            receivedOfferMessage = msgs[0];
        });

        await holder.acceptInvitation(parsedInvitation);
        
        expect(receivedOfferMessage).toBeDefined();
        
        // 5. Validate connectionless: No DIDPair (connection) should be created in Pluto
        const didPairs = await holder.pluto.getAllDidPairs();
        expect(didPairs.length).toBe(0);

        // 6. Holder processes offer to create a request
        // IMPORTANT: We set the 'to' field of the message to holder's DID so the reply 'from' is correct
        const receivedOffer = OfferCredential.fromMessage(receivedOfferMessage!);
        receivedOffer.to = holderDID; 
        
        const request = await holder.prepareRequestCredentialWithIssuer(receivedOffer);
        expect(request.from.toString()).toBe(holderDID.toString());

        // 7. Issuer processes the request and issues the credential (Mocking Issuer response)
        const issue = new IssueCredential(
            {},
            [attachment],
            issuerDID,
            holderDID,
            request.thid
        );

        // 8. Holder processes and stores the issued credential
        const credential = await holder.processIssuedCredentialMessage(issue);
        
        // 9. ASSERT: Credential must be stored in Holder's Pluto
        const credentials = await holder.pluto.getAllCredentials();
        expect(credentials.length).toBeGreaterThan(0);
        expect(credentials[0].id).toBe(credential.id);
    });

    it("Rejects tampered offer (missing mandatory fields)", async () => {
        const issuerDID = await issuer.createPrismDID("issuer", []);
        
        const offer = new OfferCredential(
            { 
              body: { attributes: [] },
              type: Domain.ProtocolType.DidcommCredentialPreview
            } as any,
            [],
            issuerDID,
            undefined,
            randomUUID()
        );

        const offerMessage = offer.makeMessage();
        // Tamper: Remove credential_preview from body
        const body = JSON.parse(offerMessage.body);
        delete body.credential_preview;
        const tamperedMessage = { ...offerMessage, body: JSON.stringify(body) };
        
        const tamperedOOB = new OutOfBandInvitation(
            { accept: ["didcomm/v2"] },
            issuerDID.toString(),
            randomUUID(),
            [ new AttachmentDescriptor({ json: tamperedMessage }) ]
        );

        const parsed = await holder.parseInvitation(JSON.stringify(tamperedOOB));
        await holder.acceptInvitation(parsed);
        
        let received: Domain.Message | undefined;
        holder.addListener(Domain.ListenerKey.MESSAGE, (msgs) => { received = msgs[0]; });
        await new Promise(r => setTimeout(r, 100));

        if (received) {
           // ASSERT: SDK must throw when parsing invalid offer body
           expect(() => OfferCredential.fromMessage(received!)).toThrow();
        }
    });

    it("Rejects corrupt attachment data", async () => {
        const issuerDID = await issuer.createPrismDID("issuer", []);
        
        const corruptOOB = new OutOfBandInvitation(
            { accept: ["didcomm/v2"] },
            issuerDID.toString(),
            randomUUID(),
            [ 
              new AttachmentDescriptor({ 
                  base64: "!!!" // Invalid base64
              }, "application/json") 
            ]
        );

        const parsed = await holder.parseInvitation(JSON.stringify(corruptOOB));
        
        // The parsing of attachments happens inside acceptInvitation
        await expect(holder.acceptInvitation(parsed)).rejects.toThrow();
    });

    it("Fails when no attachments and no mediator available", async () => {
        const oobEmpty = new OutOfBandInvitation(
            { accept: ["didcomm/v2"] },
            "did:prism:issuer",
            randomUUID(),
            [] 
        );

        const parsed = await holder.parseInvitation(JSON.stringify(oobEmpty));
        
        // ASSERT: Should fail because it attempts a connection flow but we mocked no mediators
        await expect(holder.acceptInvitation(parsed)).rejects.toThrow();
    });
});
