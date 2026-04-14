/* eslint-disable @typescript-eslint/no-unused-vars */
import { DID, DIDDocument, Castor } from '@hyperledger/identus-domain';
import {
  type DIDMethodTypeMap,
  type InferCreatePayload,
  type InferPublishPayload,
  type InferUpdatePayload,
  type InferDeactivatePayload,
  type DIDMethodOperation,
  type InferMetadata,
} from '../../../src/castor/methods/types';

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

  async createDID<M extends keyof DIDMethodTypeMap>(
    _method: M,
    _opts: InferCreatePayload<M>
  ): Promise<DID> {
    return castorVars._prismDID;
  },

  async publishDID<M extends keyof DIDMethodTypeMap>(
    _method: M,
    _opts: InferPublishPayload<M>
  ): Promise<DIDMethodOperation<InferMetadata<M>>> {
    throw new Error("Method not implemented.");
  },

  async updateDID<M extends keyof DIDMethodTypeMap>(
    _method: M,
    _opts: InferUpdatePayload<M>
  ): Promise<DIDMethodOperation<InferMetadata<M>>> {
    throw new Error("Method not implemented.");
  },

  async deactivateDID<M extends keyof DIDMethodTypeMap>(
    _method: M,
    _opts: InferDeactivatePayload<M>
  ): Promise<DIDMethodOperation<InferMetadata<M>>> {
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
