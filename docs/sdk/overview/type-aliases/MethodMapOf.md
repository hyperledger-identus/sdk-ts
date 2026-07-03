[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / MethodMapOf

# Type Alias: MethodMapOf\<Methods\>

> **MethodMapOf**\<`Methods`\> = `Methods` *extends* readonly \[infer Head, `...(infer Tail)`\] ? `Tail` *extends* readonly `unknown`[] ? [`MethodNameOf`](MethodNameOf.md)\<`Head`\> *extends* infer N ? `N` *extends* `string` ? `Omit`\<`{ [K in N]: Head }`, keyof `MethodMapOf`\<`Tail`\>\> & `MethodMapOf`\<`Tail`\> : `MethodMapOf`\<`Tail`\> : `MethodMapOf`\<`Tail`\> : `never` : \{ \}

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:118](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/types.ts#L118)

Build a `{ methodName: MethodInstance }` map from a tuple of DID method
instances. When multiple entries share the same `method` name, later
entries override earlier ones (so user-supplied extras can replace the
built-in `prism` / `peer` implementations at the type level).

## Type Parameters

| Type Parameter |
| ------ |
| `Methods` *extends* readonly `unknown`[] |
