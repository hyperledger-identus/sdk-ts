[**@hyperledger/identus-sdk v8.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / ProblemReport

# Class: ProblemReport

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L20)

## Constructors

### Constructor

> **new ProblemReport**(`body`: [`ProblemReportBody`](../interfaces/ProblemReportBody.md), `from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `thid?`: `string`): `ProblemReport`

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L23)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`ProblemReportBody`](../interfaces/ProblemReportBody.md) |
| `from` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `to` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `thid?` | `string` |

#### Returns

`ProblemReport`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-body"></a> `body` | `public` | [`ProblemReportBody`](../interfaces/ProblemReportBody.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L24) |
| <a id="property-from"></a> `from` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L25) |
| <a id="property-thid"></a> `thid?` | `public` | `string` | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L27) |
| <a id="property-to"></a> `to` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L26) |
| <a id="property-type"></a> `type` | `static` | `"https://didcomm.org/report-problem/2.0/problem-report"` | `ProtocolIds.ProblemReporting` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L21) |

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L30)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)
