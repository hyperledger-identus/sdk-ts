[**@hyperledger/identus-sdk v8.1.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Args\_RequestCredentialSDJWT

# Interface: Args\_RequestCredentialSDJWT

Defined in: [packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts#L31)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="property-claims"></a> `claims` | \{ `name`: `string`; `type`: `string`; `value`: `string`; \}[] | [packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts:36](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts#L36) |
| <a id="property-disclosureframe"></a> `disclosureFrame?` | `NonNever`\<\{\[`key`: `string`\]: `undefined`; `cnf?`: `undefined`; `exp?`: `undefined`; `iat?`: `undefined`; `iss?`: `undefined`; `nbf?`: `undefined`; `status?`: `undefined`; `sub?`: `undefined`; `vct?`: `undefined`; \} & `SD`\<`SdJwtVcPayload`\> & `DECOY`\> | [packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts#L37) |
| <a id="property-format"></a> `format` | [`SDJWT`](../../plugins/internal/oea/enumerations/CredentialType.md#enumeration-member-sdjwt) | [packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts#L35) |
| <a id="property-holderdid"></a> `holderDID` | [`DID`](../namespaces/Domain/classes/DID.md) | [packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts#L33) |
| <a id="property-issuerdid"></a> `issuerDID` | [`DID`](../namespaces/Domain/classes/DID.md) | [packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts#L32) |
| <a id="property-message"></a> `message` | [`Message`](../namespaces/Domain/classes/Message.md) | [packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts#L34) |
