[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / OutOfBandInvitation

# Class: OutOfBandInvitation

Defined in: [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L12)

## Constructors

### Constructor

> **new OutOfBandInvitation**(`body`: [`OutOfBandInvitationBody`](../interfaces/OutOfBandInvitationBody.md), `from`: `string`, `id`: `string`, `attachments`: [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[], `expiration`: `number` \| `null`): `OutOfBandInvitation`

Defined in: [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L17)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `body` | [`OutOfBandInvitationBody`](../interfaces/OutOfBandInvitationBody.md) | `undefined` |
| `from` | `string` | `undefined` |
| `id` | `string` | `...` |
| `attachments` | [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[] | `[]` |
| `expiration` | `number` \| `null` | `null` |

#### Returns

`OutOfBandInvitation`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="attachments"></a> `attachments` | `public` | [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[] | `[]` | [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L21) |
| <a id="body"></a> `body` | `public` | [`OutOfBandInvitationBody`](../interfaces/OutOfBandInvitationBody.md) | `undefined` | [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L18) |
| <a id="expiration"></a> `expiration` | `public` | `number` \| `null` | `null` | [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L22) |
| <a id="from"></a> `from` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L19) |
| <a id="id"></a> `id` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L20) |
| <a id="piuri"></a> `piuri` | `public` | `"https://didcomm.org/out-of-band/2.0/invitation"` | `ProtocolIds.OOBInvitation` | [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L15) |
| <a id="type"></a> `type` | `public` | `"https://didcomm.org/out-of-band/2.0/invitation"` | `ProtocolIds.OOBInvitation` | [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L13) |

## Accessors

### isExpired {#isexpired}

#### Get Signature

> **get** **isExpired**(): `boolean`

Defined in: [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L25)

##### Returns

`boolean`

## Methods

### ~~parsePrismOnboardingInvitationFromJson()~~ {#parseprismonboardinginvitationfromjson}

> `static` **parsePrismOnboardingInvitationFromJson**(`json`: `string`): [`PrismOnboardingInvitation`](PrismOnboardingInvitation.md)

Defined in: [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:39](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L39)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `json` | `string` |  |

#### Returns

[`PrismOnboardingInvitation`](PrismOnboardingInvitation.md)

#### Deprecated
