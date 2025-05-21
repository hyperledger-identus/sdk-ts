import { vi, describe, it, expect, test, beforeEach, afterEach, MockInstance } from 'vitest';
import * as UUIDLib from "@stablelib/uuid";

import Agent from "../../src/edge-agent/Agent";
import Mercury from "../../src/mercury/Mercury";
import Apollo from "../../src/apollo/Apollo";
import * as Fixtures from "../fixtures";
import {
  Api,
  AttachmentDescriptor,
  Credential,
  CredentialMetadata,
  CredentialType,
  DID,
  DIDDocument,
  Message,
  MessageDirection,
  Seed,
  StorableCredential,
} from "../../src/domain/models";
import { DIDCommProtocol } from "../../src/mercury/DIDCommProtocol";
import { Castor as CastorType } from "../../src/domain/buildingBlocks/Castor";
import { AgentError } from "../../src/domain/models/Errors";
import { base64url } from "multiformats/bases/base64";
import { JWTCredential } from "../../src/pollux/models/JWTVerifiableCredential";
import { AnonCredsCredential } from "../../src/pollux/models/AnonCredsVerifiableCredential";
import InMemoryStore from "../fixtures/inmemory";
import { ApiResponse, Pluto as IPluto, JWT } from "../../src/domain";
import { Pluto } from "../../src/pluto/Pluto";
import { Castor, HandshakeRequest, Presentation, ProtocolType, RequestPresentation, SDJWTCredential } from "../../src";
import { randomUUID } from "crypto";
import { DIF } from '../../src/plugins/internal/dif/types';
// import { JWT } from "../../src/pollux/utils/JWT";
import { StartMediator } from '../../src/edge-agent/didcomm/StartMediator';
import { StartFetchingMessages } from '../../src/edge-agent/didcomm/StartFetchingMessages';
import { mockTask } from '../testFns';
import { CredentialPreview, IssueCredential, MediatorConnection, OfferCredential, RequestCredential } from '../../src/plugins/internal/didcomm';
import { RevocationNotification } from '../../src/plugins/internal/oea/protocols/RevocationNotfiication';
import { RxdbStore } from "@trust0/identus-store-rxdb";

let agent: Agent;
let apollo: Apollo;
let pluto: IPluto;
let castor: CastorType;
let store: Pluto.Store;
let api: Api;


describe("Agent Tests", () => {
  afterEach(async () => {
    vi.useRealTimers();

    await agent.stop();
    vi.restoreAllMocks();
  });

  beforeEach(async () => {
    vi.useFakeTimers();
    vi.mock('isows', () => ({
      WebSocket: vi.fn(() => ({
        addEventListener: vi.fn(),
        send: vi.fn(),
        close: vi.fn(),
      })),
    }));
    apollo = new Apollo();
    castor = new Castor(apollo);
    api = {
      request: async () => new ApiResponse<any>(new Uint8Array(), 200),
    };
    const didProtocol: DIDCommProtocol = {
      packEncrypted: async () => "",
      unpack: async () => new Message("{}", undefined, "TypeofMessage"),
    };
    store = new RxdbStore({
      name: 'test' + randomUUID(),
      storage: InMemoryStore,
      password: Buffer.from("demoapp").toString("hex")
    });

    pluto = new Pluto(store, apollo);
    const mercury = new Mercury(castor, didProtocol, api);
    const seed: Seed = {
      value: new Uint8Array([69, 191, 35, 232, 213, 102, 3, 93, 180, 106, 224, 144, 79, 171, 79, 223, 154, 217, 235, 232, 96, 30, 248, 92, 100, 38, 38, 42, 101, 53, 2, 247, 56, 111, 148, 220, 237, 122, 15, 120, 55, 82, 89, 150, 35, 45, 123, 135, 159, 140, 52, 127, 239, 148, 150, 109, 86, 145, 77, 109, 47, 60, 20, 16])
    };

    agent = Agent.initialize({
      mediatorDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
      apollo,
      castor,
      pluto,
      mercury,
      seed,
    });

    mockTask(StartMediator);
    mockTask(StartFetchingMessages);
    agent.connections.addMediator(
      new MediatorConnection(
        "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19",
        "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19",
        "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19",
      )
    );

    // hostDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
    // mediatorDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
    // routingDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),


    // await polluxInstance.start();
    // pollux = agent.pollux;
  });

  describe("Integration Tests", () => {
    beforeEach(async () => {
      await agent.start();
    });

    it("As a developer when a peerDID is created and we have specified to updateKeyList the services are correctly added and updateKeyList is called correctly.", async () => {
      const storePeerDID = vi.spyOn(pluto, "storeDID").mockResolvedValue();
      const createPeerDID = vi.spyOn(castor, "createPeerDID");
      const stubSendMessage = vi.spyOn(agent.mercury, "sendMessage").mockResolvedValue(Uint8Array.from([]));

      const peerDID = await agent.createNewPeerDID([], true);

      expect(createPeerDID).toHaveBeenCalledOnce();
      expect(storePeerDID).toHaveBeenCalledOnce();

      expect(agent.currentMediatorDID).not.equals(null);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const mediatorDID = agent.currentMediatorDID!;

      const expectedService = new DIDDocument.Service(
        "#didcomm-1",
        ["DIDCommMessaging"],
        new DIDDocument.ServiceEndpoint(mediatorDID.toString())
      );

      expect(createPeerDID).toHaveBeenLastCalledWith(expect.arrayContaining([]), [expectedService]);
      expect(stubSendMessage).toHaveBeenCalledOnce();
      const msg = stubSendMessage.mock.calls.at(0)?.at(0);
      expect(msg).to.be.instanceOf(Message);
      expect(msg?.body).to.deep.eq({
        updates: [{
          action: "add",
          recipient_did: peerDID.toString(),
        }]
      });
    });

    it("As a developer I can only use a valid invitationMessage as out of band invitation, anything else will throw an exception as the piuri is invalid.", async () => {
      /**
       * The following is an invalid oob connection string, decode it in base64 to see the original body
       */
      const oob =
        "https://my.domain.com/path?_oob=eyJpZCI6Ijg5NWYzMWZhLTIyNWUtNDRlNi1hNzkyLWFhN2E0OGY1MjgzYiIsInR5cGUiOiJodHRwczovL2RpZGNvbW0ub3JnL291dC1vZi1iYW5kLzIuMC93cm9uZ1R5cGUiLCJmcm9tIjoiZGlkOnBlZXI6Mi5FejZMU2V6eWtjQmpNS2dHUEVEaDQ0cEM4UWZ1N2NDekpvc1Z1VjRqcDZ4NVk1QkhMLlZ6Nk1rd1JKdDFTbVpwM2FERGhMVW40ZkszM204TExaWFc5MlhUOHZyVUh1NHVwQTYuU2V5SjBJam9pWkcwaUxDSnpJam9pYUhSMGNITTZMeTlyT0hNdFpHVjJMbUYwWVd4aGNISnBjMjB1YVc4dmNISnBjMjB0WVdkbGJuUXZaR2xrWTI5dGJTSXNJbklpT2x0ZExDSmhJanBiSW1ScFpHTnZiVzB2ZGpJaVhYMCIsImJvZHkiOnsiZ29hbF9jb2RlIjoiaW8uYXRhbGFwcmlzbS5jb25uZWN0IiwiZ29hbCI6IkVzdGFibGlzaCBhIHRydXN0IGNvbm5lY3Rpb24gYmV0d2VlbiB0d28gcGVlcnMgdXNpbmcgdGhlIHByb3RvY29sICdodHRwczovL2F0YWxhcHJpc20uaW8vbWVyY3VyeS9jb25uZWN0aW9ucy8xLjAvd3JvbmcnIiwiYWNjZXB0IjpbXX19";

      await expect(agent.parseOOBInvitation(new URL(oob))).rejects.toThrowError(AgentError.UnknownInvitationTypeError);
    });

    it("As a developer with a valid invitationMessage I will be sending a Handshake request with the correct information and store the didPair in pluto right after.", async () => {
      const did = DID.fromString("did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ");
      const validOOB = "https://my.domain.com/path?_oob=eyJpZCI6Ijg5NWYzMWZhLTIyNWUtNDRlNi1hNzkyLWFhN2E0OGY1MjgzYiIsInR5cGUiOiJodHRwczovL2RpZGNvbW0ub3JnL291dC1vZi1iYW5kLzIuMC9pbnZpdGF0aW9uIiwiZnJvbSI6ImRpZDpwZWVyOjIuRXo2TFNlenlrY0JqTUtnR1BFRGg0NHBDOFFmdTdjQ3pKb3NWdVY0anA2eDVZNUJITC5WejZNa3dSSnQxU21acDNhRERoTFVuNGZLMzNtOExMWlhXOTJYVDh2clVIdTR1cEE2LlNleUowSWpvaVpHMGlMQ0p6SWpvaWFIUjBjSE02THk5ck9ITXRaR1YyTG1GMFlXeGhjSEpwYzIwdWFXOHZjSEpwYzIwdFlXZGxiblF2Wkdsa1kyOXRiU0lzSW5JaU9sdGRMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDAiLCJib2R5Ijp7ImdvYWxfY29kZSI6ImlvLmF0YWxhcHJpc20uY29ubmVjdCIsImdvYWwiOiJFc3RhYmxpc2ggYSB0cnVzdCBjb25uZWN0aW9uIGJldHdlZW4gdHdvIHBlZXJzIHVzaW5nIHRoZSBwcm90b2NvbCAnaHR0cHM6Ly9hdGFsYXByaXNtLmlvL21lcmN1cnkvY29ubmVjdGlvbnMvMS4wL3JlcXVlc3QnIiwiYWNjZXB0IjpbXX19";

      vi.spyOn(UUIDLib, "uuid").mockReturnValue("123456-123456-12356-123456");
      const stubStoreDID = vi.spyOn(agent.pluto, "storeDID").mockResolvedValue();
      const stubStoreDIDPair = vi.spyOn(agent.pluto, "storeDIDPair").mockResolvedValue();
      const stubCreateDID = vi.spyOn(agent.castor, "createPeerDID").mockResolvedValue(did);
      const stubSendMessage = vi.spyOn(agent.mercury, "sendMessage").mockResolvedValue(Uint8Array.from([]));

      const oobInvitation = await agent.parseOOBInvitation(new URL(validOOB));
      await agent.acceptInvitation(oobInvitation);

      expect(stubStoreDID).toHaveBeenCalledOnce();
      expect(stubStoreDIDPair).toHaveBeenCalledOnce();
      expect(stubCreateDID).toHaveBeenCalledOnce();
      expect(stubSendMessage).toHaveBeenCalledTimes(2);
      const expectedMsg = {
        ...HandshakeRequest.fromOutOfBand(oobInvitation, did).makeMessage(),
        direction: MessageDirection.SENT
      };
      expect(stubSendMessage.mock.calls[1][0]).to.deep.eq(expectedMsg);
    });

    it("As a developer with a valid invitationMessage I will be sending a presentation with the correct information, but will fail as it is expired.", async () => {
      const did = DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
      );
      const validOOB =
        "https://my.domain.com/path?_oob=eyJpZCI6IjViMjUwMjIzLWExNDItNDRmYi1hOWJkLWU1MjBlNGI0ZjQzMiIsInR5cGUiOiJodHRwczovL2RpZGNvbW0ub3JnL291dC1vZi1iYW5kLzIuMC9pbnZpdGF0aW9uIiwiZnJvbSI6ImRpZDpwZWVyOjIuRXo2TFNkV0hWQ1BFOHc0NWZETjM4aUh0ZFJ6WGkyTFNqQmRSUjRGTmNOUm12VkNKcy5WejZNa2Z2aUI5S1F1OGlnNVZpeG1HZHM3dmdMNmoyUXNOUGFybkZaanBNQ0E5aHpQLlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW1oMGRIQTZMeTh4T1RJdU1UWTRMakV1TXpjNk9EQTNNQzlrYVdSamIyMXRJaXdpY2lJNlcxMHNJbUVpT2xzaVpHbGtZMjl0YlM5Mk1pSmRmWDAiLCJib2R5Ijp7ImdvYWxfY29kZSI6InByZXNlbnQtdnAiLCJnb2FsIjoiUmVxdWVzdCBwcm9vZiBvZiB2YWNjaW5hdGlvbiBpbmZvcm1hdGlvbiIsImFjY2VwdCI6W119LCJhdHRhY2htZW50cyI6W3siaWQiOiIyYTZmOGM4NS05ZGE3LTRkMjQtOGRhNS0wYzliZDY5ZTBiMDEiLCJtZWRpYV90eXBlIjoiYXBwbGljYXRpb24vanNvbiIsImRhdGEiOnsianNvbiI6eyJpZCI6IjI1NTI5MTBiLWI0NmMtNDM3Yy1hNDdhLTlmODQ5OWI5ZTg0ZiIsInR5cGUiOiJodHRwczovL2RpZGNvbW0uYXRhbGFwcmlzbS5pby9wcmVzZW50LXByb29mLzMuMC9yZXF1ZXN0LXByZXNlbnRhdGlvbiIsImJvZHkiOnsiZ29hbF9jb2RlIjoiUmVxdWVzdCBQcm9vZiBQcmVzZW50YXRpb24iLCJ3aWxsX2NvbmZpcm0iOmZhbHNlLCJwcm9vZl90eXBlcyI6W119LCJhdHRhY2htZW50cyI6W3siaWQiOiJiYWJiNTJmMS05NDUyLTQzOGYtYjk3MC0yZDJjOTFmZTAyNGYiLCJtZWRpYV90eXBlIjoiYXBwbGljYXRpb24vanNvbiIsImRhdGEiOnsianNvbiI6eyJvcHRpb25zIjp7ImNoYWxsZW5nZSI6IjExYzkxNDkzLTAxYjMtNGM0ZC1hYzM2LWIzMzZiYWI1YmRkZiIsImRvbWFpbiI6Imh0dHBzOi8vcHJpc20tdmVyaWZpZXIuY29tIn0sInByZXNlbnRhdGlvbl9kZWZpbml0aW9uIjp7ImlkIjoiMGNmMzQ2ZDItYWY1Ny00Y2E1LTg2Y2EtYTA1NTE1NjZlYzZmIiwiaW5wdXRfZGVzY3JpcHRvcnMiOltdfX19LCJmb3JtYXQiOiJwcmlzbS9qd3QifV0sInRoaWQiOiI1YjI1MDIyMy1hMTQyLTQ0ZmItYTliZC1lNTIwZTRiNGY0MzIiLCJmcm9tIjoiZGlkOnBlZXI6Mi5FejZMU2RXSFZDUEU4dzQ1ZkROMzhpSHRkUnpYaTJMU2pCZFJSNEZOY05SbXZWQ0pzLlZ6Nk1rZnZpQjlLUXU4aWc1Vml4bUdkczd2Z0w2ajJRc05QYXJuRlpqcE1DQTloelAuU2V5SjBJam9pWkcwaUxDSnpJanA3SW5WeWFTSTZJbWgwZEhBNkx5OHhPVEl1TVRZNExqRXVNemM2T0RBM01DOWthV1JqYjIxdElpd2ljaUk2VzEwc0ltRWlPbHNpWkdsa1kyOXRiUzkyTWlKZGZYMCJ9fX1dLCJjcmVhdGVkX3RpbWUiOjE3MjQzMzkxNDQsImV4cGlyZXNfdGltZSI6MTcyNDMzOTQ0NH0";

      const createPeerDID = vi.spyOn(agent, "createNewPeerDID");
      const sendMessage = vi.spyOn(agent.mercury, "sendMessage");

      vi.spyOn(UUIDLib, "uuid").mockReturnValue("123456-123456-12356-123456");

      createPeerDID.mockResolvedValue(did);
      sendMessage.mockResolvedValue(Uint8Array.from([]));
      // addConnection.resolves();

      await expect(agent.parseOOBInvitation(new URL(validOOB))).rejects.toThrowError(AgentError.InvitationIsInvalidError);
    });
  });

  describe("functions", () => {
    beforeEach(async () => {
      await agent.start();
    });
    /* Iterate through backup scenarios and fixtures to validate backup and restore functionality.
       Each fixture tests the following:
      - `backup`: Ensures a valid JWE is created from backup data.
      - `restore`: Verifies the restoration of backup data into the store.
      - `round trip integration`: Confirms data integrity during backup and restore cycle.
    */
    Fixtures.Backup.backups.forEach(backupFixture => {
      describe(`Backup/Restore :: ${backupFixture.title}`, () => {
        test("backup", async () => {
          vi.spyOn(pluto, "backup").mockResolvedValue(backupFixture.json);

          const jwe = await agent.backup.createJWE(backupFixture.options);
          expect(jwe).to.be.a("string");
          expect(jwe.split(".")).to.have.length(5);
        });

        test("restore", async () => {
          const stubRestore = vi.spyOn(pluto, "restore");
          await agent.backup.restore(backupFixture.jwe, backupFixture.options);
          let backupSchema = backupFixture.json;
          const excludes = backupFixture.options?.excludes;
          if (excludes) {
            backupSchema.mediators = excludes.includes('mediators') ? [] : backupSchema.mediators;
            backupSchema.messages = excludes.includes('messages') ? [] : backupSchema.messages;
            backupSchema.link_secret = excludes.includes('link_secret') ? undefined : backupSchema.link_secret;
          }
          const expected = JSON.parse(JSON.stringify(backupSchema));
          expect(stubRestore).toHaveBeenCalledWith(expected);
        });

        test("round trip integration", async () => {
          // empty db of linksecret
          (store as any).cleanup();
          vi.spyOn(pluto, "backup").mockResolvedValue(backupFixture.json);
          const spyRestore = vi.spyOn(pluto, "restore");

          const jwe = await agent.backup.createJWE(backupFixture.options);
          await agent.backup.restore(jwe, backupFixture.options);

          expect(jwe).to.be.a("string");

          let backupSchema = backupFixture.json;
          const excludes = backupFixture.options?.excludes;
          if (excludes) {
            backupSchema.mediators = excludes.includes('mediators') ? [] : backupSchema.mediators;
            backupSchema.messages = excludes.includes('messages') ? [] : backupSchema.messages;
            backupSchema.link_secret = excludes.includes('link_secret') ? undefined : backupSchema.link_secret;
          }
          // running SERDE to remove nil values, which will happen during backup/restore
          let expected = JSON.parse(JSON.stringify(backupSchema));
          expect(spyRestore).toHaveBeenCalledWith(expected);
        });

      });
    });

    describe("prepareRequestCredentialWithIssuer", () => {
      const credential_preview: CredentialPreview = {
        type: ProtocolType.DidcommCredentialPreview,
        body: {
          attributes: [
            {
              name: "name",
              value: "javi",
              media_type: "text",
            },
          ],
        }
      };
      const mypeerDID = new DID(
        "did",
        "peer",
        "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
      );
      const validPeerDID = DID.fromString(
        `did:peer:2.Ez6LSoHkfN1Y4nK9RCjx7vopWsLrMGNFNgTNZgoCNQrTzmb1n.Vz6MknRZmapV7uYZQuZez9n9N3tQotjRN18UGS68Vcfo6gR4h.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHBzOi8vZXhhbXBsZS5jb20vZW5kcG9pbnQiLCJyIjpbImRpZDpleGFtcGxlOnNvbWVtZWRpYXRvciNzb21la2V5Il0sImEiOltdfX0`
      );

      const createOffer = (credType: CredentialType) => {
        let attach;
        if (credType === CredentialType.JWT) {
          attach = AttachmentDescriptor.build(Fixtures.Credentials.JWT.credentialPayload);
        } else if (credType === CredentialType.AnonCreds) {
          attach = AttachmentDescriptor.build(Fixtures.Credentials.Anoncreds.credentialOffer);
        } else if (credType === CredentialType.SDJWT) {
          attach = AttachmentDescriptor.build(Fixtures.Credentials.SDJWT.credentialPayloadEncoded);
        }

        return new OfferCredential(
          { credential_preview },
          [attach],
          mypeerDID,
          validPeerDID,
          "threadID123456",
        );
      };

      describe("Should create a credential request from a valid didcomm CredentialOffer Message", () => {
        /*
        // TODO
        it(`CredentialType [${CredentialType.AnonCreds}]`, async () => {
          const linkSecret = Fixtures.Credentials.Anoncreds.linkSecret;

          sandbox
            .stub(pluto, "getLinkSecret")
            .resolves(linkSecret);

          sandbox
            .stub(api, "fetchCredentialDefinition")
            .resolves(Fixtures.Credentials.Anoncreds.credentialDefinition);

          const offer = Fixtures.Credentials.Anoncreds.credentialOfferMessage;

          const requestCredential =
            await agent.prepareRequestCredentialWithIssuer(offer);

          expect(requestCredential).to.be.instanceOf(RequestCredential);
          expect(requestCredential.to?.toString()).to.equal(
            offer.from?.toString()
          );
          expect(requestCredential.from.toString()).to.equal(
            offer.to?.toString()
          );

          expect(requestCredential.body.formats).to.be.an("array");
          expect(requestCredential.body.formats).to.have.length(1);
          // expect(requestCredential.body.formats[0].format).to.equal(credType);

          const foundAttachment = requestCredential.attachments.find(
            ({ id }) => id === requestCredential.body.formats[0].attach_id
          );

          expect(foundAttachment).to.not.be.undefined;
          expect(foundAttachment?.format).to.equal("anoncreds/credential-request@v1.0");
        });
        //*/
        it.only(`CredentialType [${CredentialType.JWT}]`, async () => {

          // const offer = createOffer(CredentialType.JWT);
          const offer = Fixtures.Credentials.JWT.credentialOfferMessage;

          const requestCredential = await agent.prepareRequestCredentialWithIssuer(offer);

          expect(requestCredential).to.be.instanceOf(RequestCredential);
          expect(requestCredential.to?.toString()).to.equal(
            offer.from?.toString()
          );
          expect(requestCredential.from.toString()).to.equal(
            offer.to?.toString()
          );

          expect(requestCredential.body.formats).to.be.an("array");
          expect(requestCredential.body.formats).to.have.length(1);
          // expect(requestCredential.body.formats[0].format).to.equal(credType);

          const foundAttachment = requestCredential.attachments.find(
            ({ id }) => id === requestCredential.body.formats[0].attach_id
          );

          expect(foundAttachment).to.not.be.undefined;
          expect(foundAttachment?.format).to.equal(CredentialType.JWT);
        });

        it(`CredentialType [${CredentialType.SDJWT}]`, async () => {
          const offer = Fixtures.Credentials.SDJWT.credentialOfferMessage;

          const requestCredential = await agent.prepareRequestCredentialWithIssuer(offer);

          expect(requestCredential).to.be.instanceOf(RequestCredential);
          expect(requestCredential.to?.toString()).to.equal(
            offer.from?.toString()
          );
          expect(requestCredential.from.toString()).to.equal(
            offer.to?.toString()
          );

          expect(requestCredential.body.formats).to.be.an("array");
          expect(requestCredential.body.formats).to.have.length(1);
          // expect(requestCredential.body.formats[0].format).to.equal(credType);

          const foundAttachment = requestCredential.attachments.find(
            ({ id }) => id === requestCredential.body.formats[0].attach_id
          );

          expect(foundAttachment).to.not.be.undefined;
          expect(foundAttachment?.format).to.equal(CredentialType.SDJWT);
        });
      });
      //*/
      for (let credType of [CredentialType.W3C, CredentialType.Unknown]) {
        it(`CredentialType [${credType}] - not implemented - should throw`, async () => {
          const offer = createOffer(credType);

          await expect(agent.prepareRequestCredentialWithIssuer(offer)).rejects.toThrow();
        });
      }
    });

    describe("processIssuedCredentialMessage", () => {
      it("no attachment - throws", () => {
        const issueCredential = new IssueCredential(
          {},
          [],
          new DID("did", "prism", "from"),
          new DID("did", "prism", "to")
        );

        const result = agent.processIssuedCredentialMessage(issueCredential);

        expect(result).rejects.toThrow();
      });

      describe("JWTCredential", () => {
        const base64Data = base64url.baseEncode(Buffer.from(Fixtures.Credentials.JWT.credentialPayloadEncoded));

        it("Should be able to parse a credential and convert it into a storable object from a valid didcomm CredentialIssue Message", async () => {
          vi.spyOn(pluto, "storeCredential").mockResolvedValue();

          const jwtAttachment = AttachmentDescriptor.build(
            Fixtures.Credentials.JWT.credentialPayloadEncoded,
            "attach_1",
            undefined,
            undefined,
            CredentialType.JWT
          );
          const issueCredential = new IssueCredential(
            {},
            [jwtAttachment],
            new DID("did", "prism", "from"),
            new DID("did", "prism", "to"),
            "test-revocation-thid"
          );

          const result = await agent.processIssuedCredentialMessage(issueCredential);

          expect(result).to.be.an.instanceOf(Credential);
          expect(result.isStorable()).to.be.true;

          const storable = (result as any as StorableCredential).toStorable();
          expect(storable).not.to.be.undefined;
        });

        it("Should revoke a JWT Credential", async () => {
          const revocationIssueMessage = new IssueCredential(
            {
              // formats: [{ attach_id: "attach_1", format: CredentialType.JWT }]
            },
            [new AttachmentDescriptor({ base64: base64Data }, "attach_1", undefined, undefined, CredentialType.JWT)],
            new DID("did", "prism", "from"),
            new DID("did", "prism", "to"),
            "12345"
          );
          const thid = revocationIssueMessage.thid!;

          const revocationMessage = new RevocationNotification(
            {
              issueCredentialProtocolThreadId: thid
            },
            new DID("did", "prism", "from"),
            new DID("did", "prism", "to")
          );

          // await agent.pluto.storeMessage(revocationIssueMessage.makeMessage());

          // const [revokedCredential] = await agent.pluto.getAllCredentials();

          // expect(revokedCredential).to.not.equal(undefined);
          // expect(revokedCredential!.isRevoked()).to.equal(true);
        });
      });

      describe("SD+JWTCredential", () => {
        it("Should be able to parse a credential and convert it into a storable object from a valid didcomm CredentialIssue Message", async () => {
          vi.spyOn(pluto, "storeCredential").mockResolvedValue();

          const attachment = AttachmentDescriptor.build(
            Fixtures.Credentials.SDJWT.credentialPayloadEncoded,
            "attach_1",
            undefined,
            undefined,
            CredentialType.SDJWT
          );
          const issueCredential = new IssueCredential(
            {},
            [attachment],
            new DID("did", "prism", "from"),
            new DID("did", "prism", "to"),
            "test-revocation-thid"
          );

          const result = await agent.processIssuedCredentialMessage(issueCredential);

          expect(result).to.be.an.instanceOf(Credential);
          expect(result.isStorable()).to.be.true;

          const storable = (result as any as StorableCredential).toStorable();
          expect(storable).not.to.be.undefined;
        });
      });

      describe("AnonCreds", () => {
        it("module not registered by default - throws", async () => {
          vi.spyOn(pluto, "storeCredential").mockResolvedValue();
          vi.spyOn(pluto, "getLinkSecret").mockResolvedValue(Fixtures.Credentials.Anoncreds.linkSecret);
          vi.spyOn(api, "request").mockResolvedValue(new ApiResponse(Fixtures.Credentials.Anoncreds.credentialDefinition, 200));
          vi.spyOn(pluto, "getCredentialMetadata").mockResolvedValue(
            new CredentialMetadata(CredentialType.AnonCreds, "mock", Fixtures.Credentials.Anoncreds.credentialRequestMeta)
          );

          const payload = Fixtures.Credentials.Anoncreds.credentialIssued;
          const encoded = Buffer.from(JSON.stringify(payload));
          const base64Data = base64url.baseEncode(encoded);

          const issueCredential = new IssueCredential(
            {},
            [new AttachmentDescriptor({ base64: base64Data }, "attach_1", undefined, undefined, "anoncreds/credential@v1.0")],
            new DID("did", "prism", "from"),
            new DID("did", "prism", "to"),
            "thid"
          );

          const sut = agent.processIssuedCredentialMessage(issueCredential);
          expect(sut).rejects.toThrow();
        });
      });
    });


    describe("createPresentationForRequestProof", () => {
      const didFrom = DID.from("did:peer:2.Ez6LSfhufN8b8EufbxPNRh88YYvjpf7uuVfa3tMG4nKeFK2wX.Vz6Mkf2USnehnAgu263PfyTDsB7KhjuR64wMa3Y4XLHi3KuQS.SeyJ0IjoiZG0iLCJzIjoiaHR0cDovLzE5Mi4xNjguMS4xNjU6ODAwMC9kaWRjb21tIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfQ");
      const didTo = DID.from("did:peer:2.Ez6LSjNzhLeoBEL67PHWSq6X7A7YFuQpcqs13g3cYJTRFyhpu.Vz6MkemtLC5RN1bwBopgZVgXpRRXoigbZjKQt8NHEiJR1eAQ1.SeyJyIjpbXSwicyI6ImRpZDpwZWVyOjIuRXo2TFNnaHdTRTQzN3duREUxcHQzWDZoVkRVUXpTanNIemlucFgzWEZ2TWpSQW03eS5WejZNa2hoMWU1Q0VZWXE2SkJVY1RaNkNwMnJhbkNXUnJ2N1lheDNMZTRONTlSNmRkLlNleUowSWpvaVpHMGlMQ0p6SWpvaWFIUjBjSE02THk5emFYUXRjSEpwYzIwdGJXVmthV0YwYjNJdVlYUmhiR0Z3Y21semJTNXBieUlzSW5JaU9sdGRMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDAiLCJhIjpbXSwidCI6ImRtIn0");


      describe("Anoncreds", () => {
        test("module not registered by default - throws", async () => {
          vi.spyOn(pluto, "getLinkSecret").mockResolvedValue(Fixtures.Credentials.Anoncreds.linkSecret);
          vi.spyOn(api, "request")
            .mockResolvedValueOnce(new ApiResponse(Fixtures.Credentials.Anoncreds.schema, 200))
            .mockResolvedValueOnce(new ApiResponse(Fixtures.Credentials.Anoncreds.credentialDefinition, 200));

          const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);
          const attachment = new AttachmentDescriptor(Fixtures.PresentationRequests.AnoncredsAttachment.data, "attach_1", undefined, undefined, "anoncreds/proof-request@v1.0");
          const request = new RequestPresentation(
            {},
            [attachment],
            didFrom,
            didTo
          );

          const sut = agent.createPresentationForRequestProof(request, credential);
          expect(sut).rejects.toThrow();
        });
      });

      describe("JWT", () => {
        let stubGetDIDPrivateKeysByDID;

        beforeEach(() => {
          stubGetDIDPrivateKeysByDID = vi.spyOn(pluto, "getDIDPrivateKeysByDID").mockResolvedValue([Fixtures.Keys.secp256K1.privateKey as any]);
        });

        test("JWTCredential + JWTPresentationRequest - returns Presentation", async () => {
          const credential = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialData.jws);
          const attach = AttachmentDescriptor.build(Fixtures.PresentationRequests.JWTAttachment.data, undefined, undefined, undefined, CredentialType.JWT);
          const request = new RequestPresentation(
            {},
            [attach],
            didFrom,
            didTo
          );

          const result = await agent.createPresentationForRequestProof(request, credential);

          expect(result).to.be.instanceOf(Presentation);
          expect(result).to.have.property("attachments")
            .to.be.an("array")
            .to.have.length(1);
          const attached = result.attachments[0];
          // expect(attached).to.have.property("mediaType", CredentialType.JWT);
          expect(attached).to.have.property("data");
          expect(attached.data).to.have.property("base64").to.be.a("string");

          expect(result).to.have.property("body");
          expect(result.body).to.have.property("comment", request.body.comment);
          expect(result.body).to.have.property("goal_code", request.body.goal_code);

          expect(result).to.have.property("from", request.to);
          expect(result).to.have.property("to", request.from);
          expect(result).to.have.property("thid", request.thid || request.id);
        });

        test("Attachment format - not JWT - throws", async () => {
          const credential = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
          const request = new RequestPresentation(
            {},
            [{ ...Fixtures.PresentationRequests.JWTAttachment, format: "wrong" }],
            didFrom,
            didTo
          );

          const result = agent.createPresentationForRequestProof(request, credential);

          expect(result).rejects.toThrow();
        });

        test("Credential.subjectDID - invalid - throws", async () => {
          const credential = new JWTCredential({
            iss: "did:test:123",
            sub: undefined,
            nbf: 23456754321,
            exp: 2134564321,
            vc: {}
          } as any);

          const request = new RequestPresentation(
            {},
            [Fixtures.PresentationRequests.JWTAttachment],
            didFrom,
            didTo
          );

          const sut = agent.createPresentationForRequestProof(request, credential);

          expect(sut).rejects.toThrow();
        });

        test("Credential.subjectDID - doesn't match PrivateKey - throws", async () => {
          stubGetDIDPrivateKeysByDID.mockResolvedValue([]);

          const credential = new JWTCredential({
            iss: "did:test:123",
            sub: undefined,
            nbf: 23456754321,
            exp: 2134564321,
            vc: {}
          } as any);

          const request = new RequestPresentation(
            {},
            [Fixtures.PresentationRequests.JWTAttachment],
            didFrom,
            didTo
          );

          const sut = agent.createPresentationForRequestProof(request, credential);

          expect(sut).rejects.toThrow();
        });
      });

      describe("Fail cases", () => {
        test("RequestPresentation.attachments - empty - throws", async () => {
          const credential = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
          const request = new RequestPresentation(
            {},
            [],
            didFrom,
            didTo
          );

          const result = agent.createPresentationForRequestProof(request, credential);

          expect(result).rejects.toThrow();
        });

        test("Credential - not matched - throws", async () => {
          const request = new RequestPresentation(
            {},
            [Fixtures.PresentationRequests.JWTAttachment],
            didFrom,
            didTo
          );

          const credential = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
          const result = agent.createPresentationForRequestProof(request, credential);
          expect(result).rejects.toThrow();
        });
      });
    });

    describe("initiatePresentationRequest", () => {
      const expectedBody = {
        presentation_definition: {
          id: expect.stringMatching(""),
          input_descriptors: [
            {
              id: expect.stringMatching(""),
              name: "Presentation",
              purpose: "Verifying Credentials",
              constraints: {
                fields: [],
                limit_disclosure: "required",
              },
              format: {
                jwt: {
                  alg: ["ES256K"],
                },
                sdjwt: {
                  alg: ["ES256K"],
                },
              },
            },
          ],
          format: {
            jwt: {
              alg: ["ES256K"],
            },
            sdjwt: {
              alg: ["ES256K"],
            },
          },
        },
        options: {
          challenge: expect.stringContaining("Sign this text"),
          domain: "N/A",
        },
      };

      test("JWT", async () => {
        const result = await agent.initiatePresentationRequest(CredentialType.JWT, Fixtures.DIDs.peerDID1, { claims: {} });

        expect(result).toBeInstanceOf(RequestPresentation);
        expect(result.attachments).toHaveLength(1);
        const attached = result.attachments[0];
        expect(attached.id).to.be.a("string");
        expect(attached.format).toBe(DIF.PRESENTATION_REQUEST);
        expect(attached.mediaType).toBe("application/json");

        // TODO fix types
        expect((attached.data as any).json).toEqual(expectedBody);
        expect(attached.payload).toEqual(expectedBody);
      });

      test("SDJWT", async () => {
        const result = await agent.initiatePresentationRequest(CredentialType.SDJWT, Fixtures.DIDs.peerDID1, { claims: {} });

        expect(result).toBeInstanceOf(RequestPresentation);
        expect(result.attachments).toHaveLength(1);
        const attached = result.attachments[0];
        expect(attached.id).to.be.a("string");
        expect(attached.format).toBe(DIF.PRESENTATION_REQUEST);
        expect(attached.mediaType).toBe("application/json");

        // TODO fix types
        expect((attached.data as any).json).toEqual(expectedBody);
        expect(attached.payload).toEqual(expectedBody);
      });
    });

    describe("handlePresentation", () => {
      beforeEach(() => {
        vi.spyOn(pluto, "getDIDPrivateKeysByDID").mockResolvedValue([Fixtures.Keys.secp256K1.privateKey]);
      });

      test("JWT", async () => {
        const presentationReq = await agent.initiatePresentationRequest(CredentialType.JWT, Fixtures.DIDs.peerDID1, {
          claims: {
            test: {
              type: "string",
              pattern: "did:prism"
            }
          }
        });

        const credential = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialData.jws);
        const presentation = await agent.createPresentationForRequestProof(presentationReq, credential);
        const result = await agent.handlePresentation(presentation);

        expect(result).toBe(true);
      });

      test("SDJWT", async () => {
        const presentationReq = await agent.initiatePresentationRequest(CredentialType.SDJWT, Fixtures.DIDs.peerDID1, {
          claims: {
            test: {
              type: "string",
              pattern: "did:prism"
            }
          }
        });

        const credential = SDJWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialData.jws);
        const presentation = await agent.createPresentationForRequestProof(presentationReq, credential);
        const result = await agent.handlePresentation(presentation);

        expect(result).toBe(true);
      });

      // test("Anoncreds", async () => {
      //   vi.spyOn(pluto, "getLinkSecret").resolves(Fixtures.Credentials.Anoncreds.linkSecret);

      //   vi.spyOn(pollux as any, "fetchSchema")
      //     .resolves(Fixtures.Credentials.Anoncreds.schema);

      //   vi.spyOn(pollux as any, "fetchCredentialDefinition")
      //     .resolves(Fixtures.Credentials.Anoncreds.credentialDefinition);

      //   const presentationReq = await agent.initiatePresentationRequest(CredentialType.AnonCreds, Fixtures.DIDs.peerDID1, {
      //     attributes: {
      //       attr1_referent: {
      //         name: "name",
      //         restrictions: {
      //           cred_def_id: "did:web:xyz/resource/definition",
      //         },
      //       },
      //     }
      //   });

      //   const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);
      //   const presentation = await agent.createPresentationForRequestProof(presentationReq, credential);
      //   const result = await agent.handlePresentation(presentation);

      //   expect(result).toBe(true);
      // });
    });
  });
});
