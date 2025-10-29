[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Args\_RequestCredentialSDJWT

# Interface: Args\_RequestCredentialSDJWT

Defined in: [src/edge-agent/helpers/RunProtocol.ts:30](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/RunProtocol.ts#L30)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="claims"></a> `claims` | \{ `name`: `string`; `type`: `string`; `value`: `string`; \}[] | [src/edge-agent/helpers/RunProtocol.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/RunProtocol.ts#L35) |
| <a id="disclosureframe"></a> `disclosureFrame?` | `NonNever`\<\{\[`key`: `string`\]: `undefined`; `cnf?`: `undefined`; `exp?`: `undefined`; `iat?`: `undefined`; `iss?`: `undefined`; `nbf?`: `undefined`; `status?`: `undefined`; `sub?`: `undefined`; `vct?`: `undefined`; \} & `SD`\<`SdJwtVcPayload`\> & `DECOY`\> | [src/edge-agent/helpers/RunProtocol.ts:36](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/RunProtocol.ts#L36) |
| <a id="format"></a> `format` | [`SDJWT`](../namespaces/Domain/enumerations/CredentialType.md#sdjwt) | [src/edge-agent/helpers/RunProtocol.ts:34](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/RunProtocol.ts#L34) |
| <a id="holderdid"></a> `holderDID` | [`DID`](../namespaces/Domain/classes/DID.md) | [src/edge-agent/helpers/RunProtocol.ts:32](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/RunProtocol.ts#L32) |
| <a id="issuerdid"></a> `issuerDID` | [`DID`](../namespaces/Domain/classes/DID.md) | [src/edge-agent/helpers/RunProtocol.ts:31](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/RunProtocol.ts#L31) |
| <a id="message"></a> `message` | [`Message`](../namespaces/Domain/classes/Message.md) | [src/edge-agent/helpers/RunProtocol.ts:33](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/RunProtocol.ts#L33) |
