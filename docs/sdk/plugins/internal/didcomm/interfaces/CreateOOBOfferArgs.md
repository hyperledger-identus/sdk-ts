[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / CreateOOBOfferArgs

# Interface: CreateOOBOfferArgs

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts#L11)

Arguments for creating an out-of-band (OOB) offer invitation

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-accept"></a> `accept?` | `string`[] | Optional array of accepted protocols (defaults to ["didcomm/v2"]) | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts#L21) |
| <a id="property-baseurl"></a> `baseUrl?` | `string` | Optional base URL for the invitation (deprecated, not used in current implementation) | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts#L13) |
| <a id="property-from"></a> `from` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | The DID of the issuer creating the offer | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts#L15) |
| <a id="property-goal"></a> `goal?` | `string` | Optional human-readable goal description (defaults to "Issue Credential") | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts#L19) |
| <a id="property-goalcode"></a> `goalCode?` | `string` | Optional goal code for the invitation (defaults to "issue-vc") | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts#L17) |
| <a id="property-offer"></a> `offer` | [`OfferCredential`](../classes/OfferCredential.md) | The credential offer to include in the invitation | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBOffer.ts#L23) |
