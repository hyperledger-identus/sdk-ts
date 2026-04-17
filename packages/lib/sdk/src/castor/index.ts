import * as Domain from '@hyperledger/identus-domain';
import { type DIDDocument } from "@hyperledger/identus-domain";

import {
  type CreatePayloadOf,
  type PublishPayloadOf,
  type UpdatePayloadOf,
  type DeactivatePayloadOf,
  type MetadataOf,
  type MethodMapOf,
} from "./methods/types";
import { type PrismDIDMethod, type PeerDIDMethod } from "./methods";

import { type DIDMethodInput } from "./types";
import { parseParams } from "./utils";

export type * from "./methods";

/**
 * All DID methods available on a Castor instance -- the built-in
 * `PrismDIDMethod` / `PeerDIDMethod` followed by any user-supplied extras.
 * When extras share a `method` name with a built-in, the extra wins.
 */
type AllMethods<Extras extends readonly DIDMethodInput[]> =
  readonly [PrismDIDMethod, PeerDIDMethod, ...Extras];

/** Map from registered DID method name to the registered instance type. */
type MethodMap<Extras extends readonly DIDMethodInput[]> =
  MethodMapOf<AllMethods<Extras>>;

/** Registered DID method names for a Castor instance. */
type RegisteredName<Extras extends readonly DIDMethodInput[]> =
  keyof MethodMap<Extras> & string;

/**
 * Castor is a powerful and flexible library for working with DIDs. Whether you are building a decentralised application
 * or a more traditional system requiring secure and private identity management, Castor provides the tools and features
 * you need to easily create, manage, and resolve DIDs.
 *
 * The optional tuple type parameter `Extras` carries the concrete types of
 * any extra DID methods passed to the constructor, so that `createDID`,
 * `publishDID`, `updateDID` and `deactivateDID` only accept method names
 * that are actually registered (defaults `"prism" | "peer"` plus any extras)
 * and infer their payload types directly from each DID method instance.
 *
 * @class Castor
 * @typedef {Castor}
 */
export class Castor<
  Extras extends readonly DIDMethodInput[] = readonly []
> implements Domain.Castor {
  #methods: Record<string, DIDMethodInput>;

  get #resolvers(): Domain.DIDResolver[] {
    return Object.values(this.#methods).map((m) => m.resolver);
  }

  #getDIDMethod(method: string): DIDMethodInput {
    const m = this.#methods[method];
    if (!m) {
      throw new Error(`DID method '${method}' is not registered`);
    }
    return m;
  }

  /**
   * Creates an instance of Castor as soon as a valid cryptographic interface is provided (Apollo).
   * Registers `prism` and `peer` DID methods by default.
   * Pass additional DIDMethod instances to extend or override defaults.
   *
   * @param {Apollo} apollo
   * @param {Extras} extraMethods - tuple of custom DID methods to register
   */
  constructor(apollo: Domain.Apollo, extraMethods?: Extras) {
    const { didMethods } = parseParams(apollo, extraMethods ?? []);
    this.#methods = didMethods;
  }

  createDID<M extends RegisteredName<Extras>>(
    method: M,
    opts: CreatePayloadOf<MethodMap<Extras>[M]>,
  ): Promise<Domain.DID> {
    return this.#getDIDMethod(method).create(opts);
  }

  verifySignature(
    did: Domain.DID,
    challenge: Uint8Array,
    signature: Uint8Array
  ): Promise<boolean> {
    return this.#getDIDMethod(did.method).verifySignature(did, challenge, signature);
  }

  publishDID<M extends RegisteredName<Extras>>(
    method: M,
    opts: PublishPayloadOf<MethodMap<Extras>[M]>,
  ): Promise<MetadataOf<MethodMap<Extras>[M]>> {
    const didMethod = this.#getDIDMethod(method);
    if (!didMethod.publish) {
      throw new Error(`DID method '${method}' does not support publish operation`);
    }
    return didMethod.publish(opts);
  }

  updateDID<M extends RegisteredName<Extras>>(
    method: M,
    opts: UpdatePayloadOf<MethodMap<Extras>[M]>,
  ): Promise<MetadataOf<MethodMap<Extras>[M]>> {
    const didMethod = this.#getDIDMethod(method);
    if (!didMethod.update) {
      throw new Error(`DID method '${method}' does not support update operation`);
    }
    return didMethod.update(opts);
  }

  deactivateDID<M extends RegisteredName<Extras>>(
    method: M,
    opts: DeactivatePayloadOf<MethodMap<Extras>[M]>,
  ): Promise<MetadataOf<MethodMap<Extras>[M]>> {
    const didMethod = this.#getDIDMethod(method);
    if (!didMethod.deactivate) {
      throw new Error(`DID method '${method}' does not support deactivate operation`);
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
