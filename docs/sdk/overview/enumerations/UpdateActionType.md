[**@hyperledger/identus-sdk v8.1.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / UpdateActionType

# Enumeration: UpdateActionType

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/prism/index.ts#L45)

The kind of mutation an [UpdateAction](../type-aliases/UpdateAction.md) performs on a Prism DID.

The literal value is used as the `actionType` discriminant, which in turn
determines exactly which payload field is present on the action.

## Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="enumeration-member-addkey"></a> `addKey` | `"addKey"` | [packages/lib/sdk/src/castor/methods/prism/index.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/prism/index.ts#L46) |
| <a id="enumeration-member-addservice"></a> `addService` | `"addService"` | [packages/lib/sdk/src/castor/methods/prism/index.ts:48](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/prism/index.ts#L48) |
| <a id="enumeration-member-removekey"></a> `removeKey` | `"removeKey"` | [packages/lib/sdk/src/castor/methods/prism/index.ts:47](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/prism/index.ts#L47) |
| <a id="enumeration-member-removeservice"></a> `removeService` | `"removeService"` | [packages/lib/sdk/src/castor/methods/prism/index.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/prism/index.ts#L49) |
| <a id="enumeration-member-updateservice"></a> `updateService` | `"updateService"` | [packages/lib/sdk/src/castor/methods/prism/index.ts:50](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/prism/index.ts#L50) |
