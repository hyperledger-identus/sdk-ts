[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / WithStart

# Type Alias: WithStart

> **WithStart** = \{ `start`: () => `Promise`\<`void`\>; \}

Defined in: [packages/lib/sdk/src/pluto/types.ts:107](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/types.ts#L107)

Start option that delegates database initialisation to a custom function.

## Example

```ts
const opts: WithStart = {
  start: async () => { await myCustomDbInit(); }
};
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="property-start"></a> `start` | () => `Promise`\<`void`\> | [packages/lib/sdk/src/pluto/types.ts:107](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/types.ts#L107) |
