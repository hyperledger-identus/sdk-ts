[**@hyperledger/identus-sdk v8.1.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / StartMediatorArgs

# Interface: StartMediatorArgs

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/StartMediator.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/internal/didcomm/tasks/StartMediator.ts#L18)

Handle existing mediator logic
either reconnects existing mediator
or tries to establish new connection

currently hard limits to a single mediator

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="property-mediatordid"></a> `mediatorDID` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/StartMediator.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/internal/didcomm/tasks/StartMediator.ts#L19) |
