[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / ProblemReport

# Class: ProblemReport

Defined in: [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L20)

## Constructors

### Constructor

> **new ProblemReport**(`body`: [`ProblemReportBody`](../interfaces/ProblemReportBody.md), `from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `thid?`: `string`): `ProblemReport`

Defined in: [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L23)

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
| <a id="body"></a> `body` | `public` | [`ProblemReportBody`](../interfaces/ProblemReportBody.md) | `undefined` | [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:24](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L24) |
| <a id="from"></a> `from` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L25) |
| <a id="thid"></a> `thid?` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L27) |
| <a id="to"></a> `to` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L26) |
| <a id="type"></a> `type` | `static` | `"https://didcomm.org/report-problem/2.0/problem-report"` | `ProtocolIds.ProblemReporting` | [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L21) |

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:30](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L30)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)
