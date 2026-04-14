import * as Domain from '@hyperledger/identus-domain';
import { type DIDDocument } from "@hyperledger/identus-domain";

import {
  type DIDMethod,
  type DIDMethods,
  type DIDMethodTypeMap,
  type InferCreatePayload,
  type InferPublishPayload,
  type InferUpdatePayload,
  type InferDeactivatePayload,
} from "./methods/types";

import { type DIDMethodInput } from "./types";
import { parseParams } from "./utils";

export type * from "./methods";

/**
 * Castor is a powerful and flexible library for working with DIDs. Whether you are building a decentralised application
 * or a more traditional system requiring secure and private identity management, Castor provides the tools and features
 * you need to easily create, manage, and resolve DIDs.
 *
 * @class Castor
 * @typedef {Castor}
 */
export class Castor implements Domain.Castor {
  #methods: Partial<DIDMethods> = {};

  get #resolvers(): Domain.DIDResolver[] {
    return Object.values(this.#methods).map((m) => (m as DIDMethod).resolver);
  }

  #getDIDMethod<M extends keyof DIDMethodTypeMap>(method: M): DIDMethods[M] {
    const m = this.#methods[method];
    if (!m) {
      throw new Error(`DID method '${String(method)}' is not registered`);
    }
    return m;
  }


  /**
   * Creates an instance of Castor as soon as a valid cryptographic interface is provided (Apollo).
   * Registers `prism` and `peer` DID methods by default.
   * Pass additional DIDMethod instances to extend or override defaults.
   *
   * @param {Apollo} apollo
   * @param {DIDMethod[]} extraMethods
   */
  constructor(apollo: Domain.Apollo, extraMethods: DIDMethodInput[] = []) {
    const { didMethods } = parseParams(apollo, extraMethods);
    this.#methods = didMethods;
  }

  createDID<M extends keyof DIDMethodTypeMap>(
    method: M,
    opts: InferCreatePayload<M>,
  ) {
    return this.#getDIDMethod(method).create(opts);
  }

  async verifySignature(
    did: Domain.DID,
    challenge: Uint8Array,
    signature: Uint8Array
  ): Promise<boolean> {
    const method = did.method as keyof DIDMethodTypeMap;
    const didMethod = this.#getDIDMethod(method) as DIDMethod;
    return didMethod.verifySignature(did, challenge, signature);
  }

  publishDID<M extends keyof DIDMethodTypeMap>(
    method: M,
    opts: InferPublishPayload<M>,
  ) {
    const didMethod = this.#getDIDMethod(method);
    if (!didMethod.publish) {
      throw new Error(`DID method '${String(method)}' does not support publish operation`);
    }
    return didMethod.publish(opts);
  }

  updateDID<M extends keyof DIDMethodTypeMap>(
    method: M,
    opts: InferUpdatePayload<M>,
  ) {
    const didMethod = this.#getDIDMethod(method);
    if (!didMethod.update) {
      throw new Error(`DID method '${String(method)}' does not support update operation`);
    }
    return didMethod.update(opts);
  }

  deactivateDID<M extends keyof DIDMethodTypeMap>(
    method: M,
    opts: InferDeactivatePayload<M>,
  ) {
    const didMethod = this.#getDIDMethod(method);
    if (!didMethod.deactivate) {
      throw new Error(`DID method '${String(method)}' does not support deactivate operation`);
    }
    return didMethod.deactivate(opts);
  }

  /**
   * Asynchronously resolves a DID to its corresponding DID Document. This function may throw an error if
   * the DID is invalid or the document cannot be retrieved.
   * **Note:** only `prism` and `peer` DID methods are currently supported!
   *
   * @example
   * This function asynchronously resolves a DID to its corresponding DID Document. It may throw an error if the DID is invalid or the document is unretrievable.
   *
   * ```ts
   * const didDocument = await castor.resolveDID("did:prism:123456")
   * ```
   *
   * 
   * @param {DID | string} didstr
   * @returns {Promise<DIDDocument>}
   */
  async resolveDID(didstr: Domain.DID | string): Promise<DIDDocument> {
    const did = Domain.DID.from(didstr);
    const resolvers = this.#resolvers.filter(x => x.method === did.method);
    for (const resolver of resolvers) {
      try {
        return await resolver.resolve(did.toString());
      } catch {
        console.log(`Failed resolving did ${did.toString()}`);
      }
    }
    throw new Error(`Non of the available Castor resolvers could resolve the DID '${didstr.toString()}'`);
  }





}
