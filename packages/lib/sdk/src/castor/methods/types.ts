import { type DIDResolver, type DID, type PrivateKey, type RequiredPrismDIDKeys } from "@hyperledger/identus-domain";
/**
 * Generic wrapper for the return value of lifecycle operations
 * (`publish`, `update`, `deactivate`).
 * By default it resolves to `TMetadata` itself, but the second type
 * parameter can override the concrete result type.
 */
export type DIDMethodOperation<TMetadata = unknown, TRes = TMetadata> = TRes

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
 * Extract the literal `method` name from a DID method instance type.
 * Falls back to `string` when the method field is not a string literal.
 */
export type MethodNameOf<T> = T extends { method: infer N }
  ? N extends string ? N : never
  : never;

/**
 * Extract the `create` payload type from a DID method instance type.
 */
export type CreatePayloadOf<T> = T extends { create: (opts: infer O) => unknown } ? O : never;

/**
 * Extract the `publish` payload type from a DID method instance type.
 * Resolves to `never` when the method does not support publishing.
 */
export type PublishPayloadOf<T> = T extends { publish: (opts: infer O) => unknown } ? O : never;

/**
 * Extract the `update` payload type from a DID method instance type.
 * Resolves to `never` when the method does not support updating.
 */
export type UpdatePayloadOf<T> = T extends { update: (opts: infer O) => unknown } ? O : never;

/**
 * Extract the `deactivate` payload type from a DID method instance type.
 * Resolves to `never` when the method does not support deactivating.
 */
export type DeactivatePayloadOf<T> = T extends { deactivate: (opts: infer O) => unknown } ? O : never;

/**
 * Extract the metadata type returned by the lifecycle operations of a
 * DID method instance type. Uses `publish` as the canonical source.
 */
export type MetadataOf<T> =
  T extends { publish: (arg: never) => Promise<infer M> } ? M :
  T extends { update: (arg: never) => Promise<infer M> } ? M :
  T extends { deactivate: (arg: never) => Promise<infer M> } ? M :
  never;

/**
 * Build a `{ methodName: MethodInstance }` map from a tuple of DID method
 * instances. When multiple entries share the same `method` name, later
 * entries override earlier ones (so user-supplied extras can replace the
 * built-in `prism` / `peer` implementations at the type level).
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type MethodMapOf<Methods extends readonly unknown[]> =
  Methods extends readonly [infer Head, ...infer Tail]
    ? Tail extends readonly unknown[]
      ? MethodNameOf<Head> extends infer N
        ? N extends string
          ? Omit<{ [K in N]: Head }, keyof MethodMapOf<Tail>> & MethodMapOf<Tail>
          : MethodMapOf<Tail>
        : MethodMapOf<Tail>
      : never
    : {};
