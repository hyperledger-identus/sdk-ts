[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / WithStart

# Type Alias: WithStart

> **WithStart** = \{ `start`: () => `Promise`\<`void`\>; \}

Defined in: [packages/lib/sdk/src/pluto/types.ts:107](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/pluto/types.ts#L107)

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
| <a id="property-start"></a> `start` | () => `Promise`\<`void`\> | [packages/lib/sdk/src/pluto/types.ts:107](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/pluto/types.ts#L107) |
