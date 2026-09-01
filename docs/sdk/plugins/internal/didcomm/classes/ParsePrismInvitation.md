[**@hyperledger/identus-sdk v8.1.1**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / ParsePrismInvitation

# Class: ParsePrismInvitation

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParsePrismInvitation.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParsePrismInvitation.ts#L17)

## Extends

- `Task`\<[`PrismOnboardingInvitation`](PrismOnboardingInvitation.md), [`ParsePrismInvitationArgs`](../interfaces/ParsePrismInvitationArgs.md)\>

## Constructors

### Constructor

> **new ParsePrismInvitation**(...`args`: \[[`ParsePrismInvitationArgs`](../interfaces/ParsePrismInvitationArgs.md)\]): `ParsePrismInvitation`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ParsePrismInvitationArgs`](../interfaces/ParsePrismInvitationArgs.md)\] | - |

#### Returns

`ParsePrismInvitation`

#### Inherited from

`Task<PrismOnboardingInvitation, Args>.constructor`

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

> **run**(`ctx`: [`AgentContext`](../../../../overview/classes/AgentContext.md)): `Promise`\<[`PrismOnboardingInvitation`](PrismOnboardingInvitation.md)\>

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParsePrismInvitation.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParsePrismInvitation.ts#L18)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`AgentContext`](../../../../overview/classes/AgentContext.md) |

#### Returns

`Promise`\<[`PrismOnboardingInvitation`](PrismOnboardingInvitation.md)\>

#### Overrides

`Task.run`
