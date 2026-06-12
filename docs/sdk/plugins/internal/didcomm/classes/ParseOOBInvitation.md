[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / ParseOOBInvitation

# Class: ParseOOBInvitation

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParseOOBInvitation.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParseOOBInvitation.ts#L16)

## Extends

- `Task`\<[`OutOfBandInvitation`](OutOfBandInvitation.md), [`ParseOOBInvitationArgs`](../interfaces/ParseOOBInvitationArgs.md)\>

## Constructors

### Constructor

> **new ParseOOBInvitation**(...`args`: \[[`ParseOOBInvitationArgs`](../interfaces/ParseOOBInvitationArgs.md)\]): `ParseOOBInvitation`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

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

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Task.log`

***

### run() {#run}

> **run**(): `Promise`\<[`OutOfBandInvitation`](OutOfBandInvitation.md)\>

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParseOOBInvitation.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParseOOBInvitation.ts#L17)

#### Returns

`Promise`\<[`OutOfBandInvitation`](OutOfBandInvitation.md)\>

#### Overrides

`Task.run`
