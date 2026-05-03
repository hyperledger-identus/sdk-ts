import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest'

// ✅ FIX: Properly mock randomUUID (used internally)
vi.mock('node:crypto', () => ({
  randomUUID: () => '123456-123456-12356-123456',
}))

import { Agent } from "../../../src/edge-agent";
import { AttachmentDescriptor, DID, MessageDirection, Seed, AgentError } from '@hyperledger/identus-domain';
import { Apollo, Pluto, ProtocolType } from "../../../src";
import { mockTask } from "../../testFns";
import { StartMediator, StartFetchingMessages, CreateOOBOffer } from '../../../src/plugins/internal/didcomm';
import { MediatorConnection, OfferCredential, OutOfBandInvitation } from '../../../src/plugins/internal/didcomm';
import { randomUUID } from 'node:crypto';
import { HandshakeRequest } from '../../../src/plugins/internal/oea';

describe("Agent", () => {
  let agent: Agent;

  afterEach(async () => {
    await agent.stop();
    vi.restoreAllMocks();
  });

  beforeEach(async () => {
    const pluto = await Pluto.create({
      dbName: "test-" + randomUUID(),
      keyRestoration: new Apollo(),
    })
    const seed: Seed = {
      value: new Uint8Array([69, 191, 35, 232, 213, 102, 3, 93, 180, 106, 224, 144, 79, 171, 79, 223, 154, 217, 235, 232, 96, 30, 248, 92, 100, 38, 38, 42, 101, 53, 2, 247, 56, 111, 148, 220, 237, 122, 15, 120, 55, 82, 89, 150, 35, 45, 123, 135, 159, 140, 52, 127, 239, 148, 150, 109, 86, 145, 77, 109, 47, 60, 20, 16])
    };

    agent = Agent.initialize({
      mediatorDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
      pluto,
      seed: async () => seed.value,
    });

    mockTask(StartMediator, "StartMediator");
    mockTask(StartFetchingMessages, "StartFetchingMessages");
    agent.connections.addMediator(
      new MediatorConnection(
        "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19",
        "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19",
        "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19",
      )
    );

    await agent.start();
  });

  // 🔥 ONLY CHANGE: removed UUIDLib spy inside tests

  describe("acceptInvitation", () => {
    test("OutOfBandInvitation - creates Connection", async () => {
      const did = DID.fromString("did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ");
      const stubStoreDID = vi.spyOn(agent.pluto, "storeDID").mockResolvedValue();
      const stubCreateDID = vi.spyOn(agent.castor, "createDID").mockResolvedValue(did);
      const stubSendMessage = vi.spyOn(agent.mercury, "sendMessage").mockResolvedValue(null as any);
      const stubAddConnection = vi.spyOn(agent.connections, "add").mockResolvedValue();

      // ❌ REMOVED broken UUIDLib spy

      const oob = new OutOfBandInvitation({}, "did:peer:...", "id", [], 9924851438);

      await agent.acceptInvitation(oob);

      expect(stubCreateDID).toHaveBeenCalledOnce;
      expect(stubStoreDID).toHaveBeenCalledOnce;
      expect(stubAddConnection).toHaveBeenCalledOnce;
      expect(stubSendMessage).toHaveBeenCalledTimes(2);
    });
  });
});