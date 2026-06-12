[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / CreateOOBPresentationRequest

# Class: CreateOOBPresentationRequest

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts#L34)

Task class for creating out-of-band (OOB) presentation request invitations.

This class generates a base64-encoded JSON string representing an OOB invitation
that includes a presentation request attachment. The invitation can be shared with
potential credential holders to initiate the presentation verification flow.

## Extends

- `Task`\<`string`, [`CreateOOBPresentationRequestArgs`](../interfaces/CreateOOBPresentationRequestArgs.md)\>

## Constructors

### Constructor

> **new CreateOOBPresentationRequest**(...`args`: \[[`CreateOOBPresentationRequestArgs`](../interfaces/CreateOOBPresentationRequestArgs.md)\]): `CreateOOBPresentationRequest`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`CreateOOBPresentationRequestArgs`](../interfaces/CreateOOBPresentationRequestArgs.md)\] | - |

#### Returns

`CreateOOBPresentationRequest`

#### Inherited from

`Task<string, Args>.constructor`

## Accessors

### attachments {#attachments}

#### Get Signature

> **get** **attachments**(): [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[]

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts:53](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts#L53)

Gets the attachments for the out-of-band invitation.

##### Returns

[`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[]

Array containing the presentation request as an attachment descriptor

***

### oobBody {#oobbody}

#### Get Signature

> **get** **oobBody**(): \{ `accept`: `string`[]; `goal`: `string`; `goal_code`: `string`; \}

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts:40](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts#L40)

Gets the body configuration for the out-of-band invitation.

##### Returns

\{ `accept`: `string`[]; `goal`: `string`; `goal_code`: `string`; \}

The OOB invitation body with goal code, goal description, and accepted protocols

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `accept` | `string`[] | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts#L44) |
| `goal` | `string` | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts#L43) |
| `goal_code` | `string` | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts#L42) |

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

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts:74](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts#L74)

Executes the task to create an out-of-band presentation request invitation.

This method validates the provided presentation request, generates a unique invitation ID,
creates the OOB invitation structure, and returns it as a base64-encoded string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `_ctx` | [`AgentContext`](../../../../overview/classes/AgentContext.md) | The agent context (not used in current implementation) |

#### Returns

`Promise`\<`string`\>

A Promise that resolves to a base64-encoded OOB invitation string

#### Throws

When the provided presentation request is invalid or not an instance of RequestPresentation

#### Overrides

`Task.run`
