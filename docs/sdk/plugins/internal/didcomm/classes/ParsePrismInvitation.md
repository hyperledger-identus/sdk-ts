[**@hyperledger/identus-sdk v8.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / ParsePrismInvitation

# Class: ParsePrismInvitation

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParsePrismInvitation.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParsePrismInvitation.ts#L17)

## Extends

- `Task`\<[`PrismOnboardingInvitation`](PrismOnboardingInvitation.md), [`ParsePrismInvitationArgs`](../interfaces/ParsePrismInvitationArgs.md)\>

## Constructors

### Constructor

> **new ParsePrismInvitation**(...`args`: \[[`ParsePrismInvitationArgs`](../interfaces/ParsePrismInvitationArgs.md)\]): `ParsePrismInvitation`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/tasks.ts#L18)

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

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Task.log`

***

### run() {#run}

> **run**(`ctx`: [`AgentContext`](../../../../overview/classes/AgentContext.md)): `Promise`\<[`PrismOnboardingInvitation`](PrismOnboardingInvitation.md)\>

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParsePrismInvitation.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/didcomm/tasks/ParsePrismInvitation.ts#L18)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`AgentContext`](../../../../overview/classes/AgentContext.md) |

#### Returns

`Promise`\<[`PrismOnboardingInvitation`](PrismOnboardingInvitation.md)\>

#### Overrides

`Task.run`
