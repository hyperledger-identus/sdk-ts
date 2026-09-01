[**@hyperledger/identus-sdk v8.1.1**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / WithStart

# Type Alias: WithStart

> **WithStart** = \{ `start`: () => `Promise`\<`void`\>; \}

Defined in: [packages/lib/sdk/src/pluto/types.ts:107](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/pluto/types.ts#L107)

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
| <a id="property-start"></a> `start` | () => `Promise`\<`void`\> | [packages/lib/sdk/src/pluto/types.ts:107](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/pluto/types.ts#L107) |
