import { type DIDResolver, type DID, type PrivateKey, type RequiredPrismDIDKeys } from "@hyperledger/identus-domain";
/**
 * Generic wrapper for the return value of lifecycle operations
 * (`publish`, `update`, `deactivate`).
 * By default it resolves to `TMetadata` itself, but the second type
 * parameter can override the concrete result type.
 */
export type DIDMethodOperation<TMetadata = unknown, TRes = TMetadata> = TRes

type MapGet<T, K extends string> = K extends keyof T ? T[K] : never;

/**
 * Augmentable type map that registers DID methods at the type level.
 *
 * Built-in methods (`prism`, `peer`) are defined directly here so their
 * entries survive `.d.ts` bundling (rollup-plugin-dts drops `declare
 * module` blocks).  External consumers extend this interface via module
 * augmentation targeting `"@hyperledger/identus-sdk"`.
 *
 * @example
 * ```ts
 * declare module "@hyperledger/identus-sdk" {
 *   interface DIDMethodTypeMap {
 *     mymethod: {
 *       createPayload: { keys: MyKeys };
 *       metadata: MyMeta;
 *     };
 *   }
 * }
 * ```
 */
export interface DIDMethodTypeMap { }

/** Extracts the `createPayload` type for DID method `M`. */
export type InferCreatePayload<M extends keyof DIDMethodTypeMap> =
  MapGet<DIDMethodTypeMap[M], "createPayload">;

/** Extracts the `publishPayload` type for DID method `M`. */
export type InferPublishPayload<M extends keyof DIDMethodTypeMap> =
  MapGet<DIDMethodTypeMap[M], "publishPayload">;

/** Extracts the `updatePayload` type for DID method `M`. */
export type InferUpdatePayload<M extends keyof DIDMethodTypeMap> =
  MapGet<DIDMethodTypeMap[M], "updatePayload">;

/** Extracts the `deactivatePayload` type for DID method `M`. */
export type InferDeactivatePayload<M extends keyof DIDMethodTypeMap> =
  MapGet<DIDMethodTypeMap[M], "deactivatePayload">;

/** Extracts the `metadata` type for DID method `M`. */
export type InferMetadata<M extends keyof DIDMethodTypeMap> =
  MapGet<DIDMethodTypeMap[M], "metadata">;

type OptionalMethod<Name extends string, T, Y> =
  [T] extends [never] ? { [K in Name]?: undefined } : { [K in Name]: (opts: T) => Promise<Y> };

/**
 * Optional private-key map for DID creation, keyed by usage name.
 * Every usage except `MASTER_KEY` is optional and holds an array of
 * {@link PrivateKey} instances.
 */
export type DIDKeys = {
  [key in Exclude<keyof RequiredPrismDIDKeys, 'MASTER_KEY'>]?: PrivateKey[]
}

/**
 * Key map that **requires** a `MASTER_KEY` entry.
 * Used as the payload for Prism DID creation where a master signing key
 * is mandatory.
 */
export type RequiredPrismDIDSecretKeys = DIDKeys & {
  MASTER_KEY: PrivateKey
}

/**
 * Core abstraction for a pluggable DID method.
 *
 * Implementations must provide `create`, `verifySignature` and a `resolver`.
 * Lifecycle operations (`publish`, `update`, `deactivate`) are optional --
 * they only appear when the corresponding payload type parameter is not `never`.
 *
 * @typeParam TMetadata - method-specific metadata returned by lifecycle ops
 * @typeParam CreatePayload - options accepted by {@link DIDMethod.create | create}
 * @typeParam PublishPayload - options accepted by `publish` (omit to disable)
 * @typeParam UpdatePayload - options accepted by `update` (omit to disable)
 * @typeParam DeactivatePayload - options accepted by `deactivate` (omit to disable)
 *
 * @example
 * ```ts
 * class MyMethod implements DIDMethod<void, MyCreateOpts> {
 *   method = "my";
 *   resolver = new MyResolver();
 *   async create(opts: MyCreateOpts) { ... }
 *   async verifySignature(did, challenge, sig) { ... }
 * }
 * ```
 */
export type DIDMethod<
  TMetadata = never,
  CreatePayload = never,
  PublishPayload = never,
  UpdatePayload = never,
  DeactivatePayload = never,
> = {
  resolver: DIDResolver;
  method: string;
  create: (opts: CreatePayload) => Promise<DID>;
  verifySignature: (did: DID, challenge: Uint8Array, signature: Uint8Array) => Promise<boolean>;
}
  & OptionalMethod<'publish', PublishPayload, DIDMethodOperation<TMetadata>>
  & OptionalMethod<'update', UpdatePayload, DIDMethodOperation<TMetadata>>
  & OptionalMethod<'deactivate', DeactivatePayload, DIDMethodOperation<TMetadata>>;

/**
 * Mapped type that derives a concrete `DIDMethod` for every entry in
 * {@link DIDMethodTypeMap}.
 *
 * SDK consumers should not need to reference this directly -- it is used
 * internally by {@link Castor} to look up method implementations.
 */
export type DIDMethods = {
  [K in keyof DIDMethodTypeMap]: DIDMethod<
    MapGet<DIDMethodTypeMap[K], "metadata">,
    MapGet<DIDMethodTypeMap[K], "createPayload">,
    MapGet<DIDMethodTypeMap[K], "publishPayload">,
    MapGet<DIDMethodTypeMap[K], "updatePayload">,
    MapGet<DIDMethodTypeMap[K], "deactivatePayload">
  >;
};
