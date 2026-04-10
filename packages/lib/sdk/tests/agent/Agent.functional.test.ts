import { vi, describe, expect, test, beforeEach } from 'vitest';
import { Agent } from "../../src/edge-agent/Agent";
import { DID } from '@hyperledger/identus-domain';
import { Apollo, Pluto } from "../../src";
import { randomUUID } from 'node:crypto';

const SEED_BYTES = new Uint8Array([69, 191, 35, 232, 213, 102, 3, 93, 180, 106, 224, 144, 79, 171, 79, 223, 154, 217, 235, 232, 96, 30, 248, 92, 100, 38, 38, 42, 101, 53, 2, 247, 56, 111, 148, 220, 237, 122, 15, 120, 55, 82, 89, 150, 35, 45, 123, 135, 159, 140, 52, 127, 239, 148, 150, 109, 86, 145, 77, 109, 47, 60, 20, 16]);

describe("Agent", () => {
  let agent: Agent;
  let pluto: Pluto;

  describe("Seed initialization", () => {
    beforeEach(async () => {
      pluto = await Pluto.create({
        dbName: "test-" + randomUUID(),
        keyRestoration: new Apollo(),
      });
    });

    test("accepts an async seed function", async () => {
      const seed = async () => SEED_BYTES;
      agent = Agent.initialize({ pluto, seed });

      const resolved = await (agent as any).runtimeContext.Seed();

      expect(resolved).toEqual(SEED_BYTES);
    });

    test("accepts a deferred seed function", async () => {
      const seed = async () => SEED_BYTES;
      agent = Agent.initialize({ pluto, seed });

      const resolved = await (agent as any).runtimeContext.Seed();

      expect(resolved).toEqual(SEED_BYTES);
    });
  });

  describe("Functional Tests", () => {
    beforeEach(async () => {
      const apollo = new Apollo();
      pluto = await Pluto.create({
        dbName: "test-" + randomUUID(),
        keyRestoration: apollo,
      })
      const mediatorDID = DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19");
      agent = Agent.initialize({ pluto, mediatorDID });

      vi.spyOn(agent.pluto, "getAllMediators").mockResolvedValue([{
        hostDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
        mediatorDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
        routingDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
      }]);
    });

    describe("Persistence", () => {
      test("start() called for Startable dependencies", async () => {
        const spyPluto = vi.spyOn(agent.pluto, "start");
        const spyMessages = vi.spyOn(agent, "startFetchingMessages").mockResolvedValue();

        await agent.start();

        expect(spyPluto).toHaveBeenCalledOnce();
        expect(spyMessages).toHaveBeenCalledOnce();
      });

      test("calling start() twice should not throw", async () => {
        const spyPluto = vi.spyOn(agent.pluto, "start");
        const spyMessages = vi.spyOn(agent, "startFetchingMessages").mockResolvedValue();

        await agent.start();
        await agent.start();

        expect(spyPluto).toHaveBeenCalledOnce();
        expect(spyMessages).toHaveBeenCalledOnce();
      });

      test("stop() called for Startable dependencies", async () => {
        vi.spyOn(agent, "startFetchingMessages").mockResolvedValue();
        const spyPluto = vi.spyOn(agent.pluto, "stop");
        const spyConnections = vi.spyOn(agent.connections, "stop");
        const spyJobs = vi.spyOn(agent.jobs, "stop");

        await agent.start();
        await agent.stop();

        expect(spyPluto).toHaveBeenCalledOnce();
        expect(spyJobs).toHaveBeenCalledOnce();
        expect(spyConnections).toHaveBeenCalledOnce();
      });

      test("Start > Stop > Start - should run without errors", async () => {
        vi.spyOn(agent, "startFetchingMessages").mockResolvedValue();

        await agent.start();
        await agent.stop();
        await agent.start();

        expect(agent.state).toBe("running");
      });
    });
  });
});
