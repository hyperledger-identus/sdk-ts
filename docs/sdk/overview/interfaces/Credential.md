[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Credential

# Interface: Credential

Defined in: [src/pluto/models/Credential.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Credential.ts#L16)

Definition for Storable Credential model
Represents [Credential](../namespaces/Domain/classes/Credential.md)

## Extends

- [`Model`](../type-aliases/Model.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="credentialcreated"></a> `credentialCreated?` | `string` | - | - | [src/pluto/models/Credential.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Credential.ts#L29) |
| <a id="credentialschema"></a> `credentialSchema?` | `string` | - | - | [src/pluto/models/Credential.ts:31](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Credential.ts#L31) |
| <a id="credentialupdated"></a> `credentialUpdated?` | `string` | - | - | [src/pluto/models/Credential.ts:30](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Credential.ts#L30) |
| <a id="datajson"></a> `dataJson` | `string` | Stringified JSON values | - | [src/pluto/models/Credential.ts:24](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Credential.ts#L24) |
| <a id="id"></a> `id` | `string` | - | - | [src/pluto/models/Credential.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Credential.ts#L35) |
| <a id="issuer"></a> `issuer?` | `string` | - | - | [src/pluto/models/Credential.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Credential.ts#L27) |
| <a id="recoveryid"></a> `recoveryId` | `string` | Identifier for recovery | - | [src/pluto/models/Credential.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Credential.ts#L20) |
| <a id="revoked"></a> `revoked?` | `boolean` | - | - | [src/pluto/models/Credential.ts:33](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Credential.ts#L33) |
| <a id="subject"></a> `subject?` | `string` | - | - | [src/pluto/models/Credential.ts:28](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Credential.ts#L28) |
| <a id="uuid"></a> `uuid` | `string` | Universally Unique Identifier. should be unique across all items. | `Model.uuid` | [src/domain/buildingBlocks/Pluto.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L23) |
| <a id="validuntil"></a> `validUntil?` | `number` | - | - | [src/pluto/models/Credential.ts:32](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Credential.ts#L32) |
