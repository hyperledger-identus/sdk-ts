[**@hyperledger/identus-sdk v8.1.1**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / ParseOOBInvitation

# Class: ParseOOBInvitation

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParseOOBInvitation.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParseOOBInvitation.ts#L16)

## Extends

- `Task`\<[`OutOfBandInvitation`](OutOfBandInvitation.md), [`ParseOOBInvitationArgs`](../interfaces/ParseOOBInvitationArgs.md)\>

## Constructors

### Constructor

> **new ParseOOBInvitation**(...`args`: \[[`ParseOOBInvitationArgs`](../interfaces/ParseOOBInvitationArgs.md)\]): `ParseOOBInvitation`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ParseOOBInvitationArgs`](../interfaces/ParseOOBInvitationArgs.md)\] | - |

#### Returns

`ParseOOBInvitation`

#### Inherited from

`Task<OutOfBandInvitation, Args>.constructor`

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Task.log`

***

### run() {#run}

> **run**(): `Promise`\<[`OutOfBandInvitation`](OutOfBandInvitation.md)\>

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParseOOBInvitation.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParseOOBInvitation.ts#L17)

#### Returns

`Promise`\<[`OutOfBandInvitation`](OutOfBandInvitation.md)\>

#### Overrides

`Task.run`
