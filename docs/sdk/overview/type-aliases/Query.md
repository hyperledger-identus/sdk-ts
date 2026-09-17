[**@hyperledger/identus-sdk v8.1.3**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Query

# Type Alias: Query\<S\>

> **Query**\<`S`\> = \{ `selector?`: [`QueryType`](QueryType.md)\<`S`\>; \} & [`QueryOptions`](QueryOptions.md)

Defined in: [packages/lib/sdk/src/pluto/types.ts:48](https://github.com/hyperledger-identus/sdk-ts/blob/4ce15c3080f44e7e00a0b9a53e696f0a8ec66794/packages/lib/sdk/src/pluto/types.ts#L48)

Query type used by Pluto repositories.

Wraps `@trust0/ridb-core` `QueryType` inside a `selector` field
and extends it with [QueryOptions](QueryOptions.md) (e.g. `limit`, `skip`).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `selector?` | [`QueryType`](QueryType.md)\<`S`\> | [packages/lib/sdk/src/pluto/types.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/4ce15c3080f44e7e00a0b9a53e696f0a8ec66794/packages/lib/sdk/src/pluto/types.ts#L49) |

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `S` *extends* `SchemaType` | The SchemaType of the target collection. |

## Example

```ts
const q: Query<typeof CredentialSchema> = {
  selector: { issuer: "did:example:123" },
  limit: 10
};
```
