[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / W3CVerifiableCredential

# Type Alias: W3CVerifiableCredential

> **W3CVerifiableCredential** = \{ `@context`: \[`"https://www.w3.org/2018/credentials/v1"`\]; `credentialSchema?`: \{ `id`: `string`; `type`: `string`; \}; `credentialStatus?`: `unknown`; `credentialSubject`: `Record`\<`string`, `any`\>; `evidence?`: \{ `id`: `string`; `type`: `string`; \}; `expirationDate?`: `string`; `issuanceDate`: `string`; `issued?`: `string`; `issuer`: `string`; `refreshService?`: \{ `id`: `string`; `type`: `string`; \}; `termsOfUse?`: \{ `id`: `string`; `type`: `string`; \}; `type`: \[`"VerifiableCredential"`\]; `validFrom?`: \{ `id`: `string`; `type`: `string`; \}; `validUntil?`: \{ `id`: `string`; `type`: `string`; \}; \}

Defined in: [src/domain/models/VerifiableCredential.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L26)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="context"></a> `@context` | \[`"https://www.w3.org/2018/credentials/v1"`\] | [src/domain/models/VerifiableCredential.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L27) |
| <a id="credentialschema"></a> `credentialSchema?` | \{ `id`: `string`; `type`: `string`; \} | [src/domain/models/VerifiableCredential.ts:54](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L54) |
| `credentialSchema.id` | `string` | [src/domain/models/VerifiableCredential.ts:55](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L55) |
| `credentialSchema.type` | `string` | [src/domain/models/VerifiableCredential.ts:56](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L56) |
| <a id="credentialstatus"></a> `credentialStatus?` | `unknown` | [src/domain/models/VerifiableCredential.ts:58](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L58) |
| <a id="credentialsubject"></a> `credentialSubject` | `Record`\<`string`, `any`\> | [src/domain/models/VerifiableCredential.ts:32](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L32) |
| <a id="evidence"></a> `evidence?` | \{ `id`: `string`; `type`: `string`; \} | [src/domain/models/VerifiableCredential.ts:34](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L34) |
| `evidence.id` | `string` | [src/domain/models/VerifiableCredential.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L35) |
| `evidence.type` | `string` | [src/domain/models/VerifiableCredential.ts:36](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L36) |
| <a id="expirationdate"></a> `expirationDate?` | `string` | [src/domain/models/VerifiableCredential.ts:33](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L33) |
| <a id="issuancedate"></a> `issuanceDate` | `string` | [src/domain/models/VerifiableCredential.ts:30](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L30) |
| <a id="issued"></a> `issued?` | `string` | [src/domain/models/VerifiableCredential.ts:31](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L31) |
| <a id="issuer"></a> `issuer` | `string` | [src/domain/models/VerifiableCredential.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L29) |
| <a id="refreshservice"></a> `refreshService?` | \{ `id`: `string`; `type`: `string`; \} | [src/domain/models/VerifiableCredential.ts:38](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L38) |
| `refreshService.id` | `string` | [src/domain/models/VerifiableCredential.ts:39](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L39) |
| `refreshService.type` | `string` | [src/domain/models/VerifiableCredential.ts:40](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L40) |
| <a id="termsofuse"></a> `termsOfUse?` | \{ `id`: `string`; `type`: `string`; \} | [src/domain/models/VerifiableCredential.ts:42](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L42) |
| `termsOfUse.id` | `string` | [src/domain/models/VerifiableCredential.ts:43](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L43) |
| `termsOfUse.type` | `string` | [src/domain/models/VerifiableCredential.ts:44](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L44) |
| <a id="type"></a> `type` | \[`"VerifiableCredential"`\] | [src/domain/models/VerifiableCredential.ts:28](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L28) |
| <a id="validfrom"></a> `validFrom?` | \{ `id`: `string`; `type`: `string`; \} | [src/domain/models/VerifiableCredential.ts:46](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L46) |
| `validFrom.id` | `string` | [src/domain/models/VerifiableCredential.ts:47](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L47) |
| `validFrom.type` | `string` | [src/domain/models/VerifiableCredential.ts:48](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L48) |
| <a id="validuntil"></a> `validUntil?` | \{ `id`: `string`; `type`: `string`; \} | [src/domain/models/VerifiableCredential.ts:50](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L50) |
| `validUntil.id` | `string` | [src/domain/models/VerifiableCredential.ts:51](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L51) |
| `validUntil.type` | `string` | [src/domain/models/VerifiableCredential.ts:52](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L52) |
