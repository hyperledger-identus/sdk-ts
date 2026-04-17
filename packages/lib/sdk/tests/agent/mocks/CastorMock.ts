/* eslint-disable @typescript-eslint/no-unused-vars */
import { DID, DIDDocument, Castor } from '@hyperledger/identus-domain';

const castorVars = {
  _prismDID: new DID("did", "peer", "test"),
  _peerDID: new DID(
    "did",
    "peer",
    "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
  ),
}

export const CastorMock: Castor & typeof castorVars = {
  ...castorVars,

  async createDID(_method: string, _opts: unknown): Promise<DID> {
    return castorVars._prismDID;
  },

  async publishDID(_method: string, _opts: unknown): Promise<unknown> {
    throw new Error("Method not implemented.");
  },

  async updateDID(_method: string, _opts: unknown): Promise<unknown> {
    throw new Error("Method not implemented.");
  },

  async deactivateDID(_method: string, _opts: unknown): Promise<unknown> {
    throw new Error("Method not implemented.");
  },

  resolveDID(_did: string): Promise<DIDDocument> {
    throw new Error("Method not implemented.");
  },

  verifySignature(
    _did: DID,
    _challenge: Uint8Array,
    _signature: Uint8Array
  ): Promise<boolean> {
    throw new Error("Method not implemented.");
  },
};
