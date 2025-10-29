[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CreateOOBOfferArgs

# Interface: CreateOOBOfferArgs

Defined in: [src/edge-agent/didcomm/CreateOOBOffer.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/didcomm/CreateOOBOffer.ts#L11)

Arguments for creating an out-of-band (OOB) offer invitation

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="accept"></a> `accept?` | `string`[] | Optional array of accepted protocols (defaults to ["didcomm/v2"]) | [src/edge-agent/didcomm/CreateOOBOffer.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/didcomm/CreateOOBOffer.ts#L21) |
| <a id="baseurl"></a> `baseUrl?` | `string` | Optional base URL for the invitation (deprecated, not used in current implementation) | [src/edge-agent/didcomm/CreateOOBOffer.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/didcomm/CreateOOBOffer.ts#L13) |
| <a id="from"></a> `from` | [`DID`](../namespaces/Domain/classes/DID.md) | The DID of the issuer creating the offer | [src/edge-agent/didcomm/CreateOOBOffer.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/didcomm/CreateOOBOffer.ts#L15) |
| <a id="goal"></a> `goal?` | `string` | Optional human-readable goal description (defaults to "Issue Credential") | [src/edge-agent/didcomm/CreateOOBOffer.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/didcomm/CreateOOBOffer.ts#L19) |
| <a id="goalcode"></a> `goalCode?` | `string` | Optional goal code for the invitation (defaults to "issue-vc") | [src/edge-agent/didcomm/CreateOOBOffer.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/didcomm/CreateOOBOffer.ts#L17) |
| <a id="offer"></a> `offer` | [`OfferCredential`](../../plugins/internal/didcomm/classes/OfferCredential.md) | The credential offer to include in the invitation | [src/edge-agent/didcomm/CreateOOBOffer.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/didcomm/CreateOOBOffer.ts#L23) |
