[**@hyperledger/identus-sdk**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Connection

# Connection

## Enumerations

### State

Defined in: [src/edge-agent/connections/Connection.ts:36](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/edge-agent/connections/Connection.ts#L36)

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="broken"></a> `BROKEN` | `6` | [src/edge-agent/connections/Connection.ts:50](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/edge-agent/connections/Connection.ts#L50) |
| <a id="closed"></a> `CLOSED` | `5` | [src/edge-agent/connections/Connection.ts:48](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/edge-agent/connections/Connection.ts#L48) |
| <a id="denied"></a> `DENIED` | `3` | [src/edge-agent/connections/Connection.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/edge-agent/connections/Connection.ts#L44) |
| <a id="granted"></a> `GRANTED` | `4` | [src/edge-agent/connections/Connection.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/edge-agent/connections/Connection.ts#L46) |
| <a id="new"></a> `NEW` | `1` | [src/edge-agent/connections/Connection.ts:40](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/edge-agent/connections/Connection.ts#L40) |
| <a id="requested"></a> `REQUESTED` | `2` | [src/edge-agent/connections/Connection.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/edge-agent/connections/Connection.ts#L42) |
| <a id="unknown"></a> `UNKNOWN` | `0` | [src/edge-agent/connections/Connection.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/edge-agent/connections/Connection.ts#L38) |

## Type Aliases

### Protocol

> **Protocol** = [`Message`](Domain/README.md#message) \| [`ApiRequest`](Domain/README.md#apirequest) \| `any`

Defined in: [src/edge-agent/connections/Connection.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/edge-agent/connections/Connection.ts#L34)
