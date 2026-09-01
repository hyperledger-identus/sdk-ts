[**@hyperledger/identus-sdk v8.1.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / UpdateAction

# Type Alias: UpdateAction\<T\>

> **UpdateAction**\<`T`\> = `{ [K in T]: { actionType: K } & { [F in K]: UpdateActionDataMap[K] } }`\[`T`\]

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:131](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/prism/index.ts#L131)

A single, type-safe DID update action.

`actionType` is the discriminant: narrowing on it (e.g.
`if (action.actionType === UpdateActionType.addService)`) makes only the
matching payload field available. Supplying any other field, or omitting the
matching one, is a compile-time error — `addService` is only available when
`actionType` is `"addService"`, and so on.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`UpdateActionType`](../enumerations/UpdateActionType.md) | [`UpdateActionType`](../enumerations/UpdateActionType.md) |
