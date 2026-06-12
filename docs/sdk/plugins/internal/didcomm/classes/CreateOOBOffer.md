[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / CreateOOBOffer

# Class: CreateOOBOffer

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts#L33)

Task class for creating out-of-band (OOB) credential offer invitations.

This class generates a base64-encoded JSON string representing an OOB invitation
that includes a credential offer attachment. The invitation can be shared with
potential credential holders to initiate the credential issuance flow.

## Extends

- `Task`\<`string`, [`CreateOOBOfferArgs`](../interfaces/CreateOOBOfferArgs.md)\>

## Constructors

### Constructor

> **new CreateOOBOffer**(...`args`: \[[`CreateOOBOfferArgs`](../interfaces/CreateOOBOfferArgs.md)\]): `CreateOOBOffer`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`CreateOOBOfferArgs`](../interfaces/CreateOOBOfferArgs.md)\] | - |

#### Returns

`CreateOOBOffer`

#### Inherited from

`Task<string, Args>.constructor`

## Accessors

### attachments {#attachments}

#### Get Signature

> **get** **attachments**(): [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[]

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts:52](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts#L52)

Gets the attachments for the out-of-band invitation.

##### Returns

[`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[]

Array containing the credential offer as an attachment descriptor

***

### oobBody {#oobbody}

#### Get Signature

> **get** **oobBody**(): \{ `accept`: `string`[]; `goal`: `string`; `goal_code`: `string`; \}

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts:39](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts#L39)

Gets the body configuration for the out-of-band invitation.

##### Returns

\{ `accept`: `string`[]; `goal`: `string`; `goal_code`: `string`; \}

The OOB invitation body with goal code, goal description, and accepted protocols

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `accept` | `string`[] | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts#L43) |
| `goal` | `string` | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts#L42) |
| `goal_code` | `string` | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts#L41) |

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

> **run**(`_ctx`: [`AgentContext`](../../../../overview/classes/AgentContext.md)): `Promise`\<`string`\>

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts:73](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts#L73)

Executes the task to create an out-of-band credential offer invitation.

This method validates the provided offer, generates a unique invitation ID,
creates the OOB invitation structure, and returns it as a base64-encoded string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `_ctx` | [`AgentContext`](../../../../overview/classes/AgentContext.md) | The agent context (not used in current implementation) |

#### Returns

`Promise`\<`string`\>

A Promise that resolves to a base64-encoded OOB invitation string

#### Throws

When the provided offer is invalid or not an instance of OfferCredential

#### Overrides

`Task.run`
