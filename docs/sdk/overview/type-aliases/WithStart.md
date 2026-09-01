[**@hyperledger/identus-sdk v8.1.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / WithStart

# Type Alias: WithStart

> **WithStart** = \{ `start`: () => `Promise`\<`void`\>; \}

Defined in: [packages/lib/sdk/src/pluto/types.ts:107](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/pluto/types.ts#L107)

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
| <a id="property-start"></a> `start` | () => `Promise`\<`void`\> | [packages/lib/sdk/src/pluto/types.ts:107](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/pluto/types.ts#L107) |
