[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / PresentationClaims

# Type Alias: PresentationClaims\<T\>

> **PresentationClaims**\<`T`\> = `T` *extends* [`JWT`](../enumerations/CredentialType.md#jwt) ? [`JWTPresentationClaims`](../../../../plugins/internal/oea/namespaces/OEA/type-aliases/JWTPresentationClaims.md) : `T` *extends* [`SDJWT`](../enumerations/CredentialType.md#sdjwt) ? [`SDJWTPresentationClaims`](../../../../plugins/internal/oea/namespaces/OEA/type-aliases/SDJWTPresentationClaims.md) : `T` *extends* [`AnonCreds`](../enumerations/CredentialType.md#anoncreds) ? [`Claims`](../../../../plugins/internal/anoncreds/interfaces/Claims.md) : `never`

Defined in: [src/domain/models/VerifiableCredential.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/VerifiableCredential.ts#L5)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`CredentialType`](../enumerations/CredentialType.md) | [`JWT`](../enumerations/CredentialType.md#jwt) |
