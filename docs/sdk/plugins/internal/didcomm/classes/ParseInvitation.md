[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / ParseInvitation

# Class: ParseInvitation

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParseInvitation.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParseInvitation.ts#L34)

Task class for parsing different types of invitations.

This class attempts to parse a given invitation based on its type and handles
different encodings including URLs with query parameters, base64-encoded strings,
and plain JSON objects. It supports Prism onboarding invitations and out-of-band
(OOB) invitations.

## Extends

- `Task`\<[`InvitationType`](../type-aliases/InvitationType.md), [`ParseInvitationArgs`](../interfaces/ParseInvitationArgs.md)\>

## Constructors

### Constructor

> **new ParseInvitation**(...`args`: \[[`ParseInvitationArgs`](../interfaces/ParseInvitationArgs.md)\]): `ParseInvitation`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ParseInvitationArgs`](../interfaces/ParseInvitationArgs.md)\] | - |

#### Returns

`ParseInvitation`

#### Inherited from

`Task<InvitationType, Args>.constructor`

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

> **run**(`ctx`: [`AgentContext`](../../../../overview/classes/AgentContext.md)): `Promise`\<[`PrismOnboardingInvitation`](PrismOnboardingInvitation.md) \| [`OutOfBandInvitation`](OutOfBandInvitation.md)\>

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParseInvitation.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParseInvitation.ts#L45)

Executes the invitation parsing task.

This method decodes the invitation value, determines its type based on the
`type` or `piuri` field, and delegates to the appropriate specialized parser.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ctx` | [`AgentContext`](../../../../overview/classes/AgentContext.md) | The agent context for running sub-tasks |

#### Returns

`Promise`\<[`PrismOnboardingInvitation`](PrismOnboardingInvitation.md) \| [`OutOfBandInvitation`](OutOfBandInvitation.md)\>

A Promise that resolves to the parsed invitation of the appropriate type

#### Throws

When the invitation type is not supported

#### Overrides

`Task.run`
