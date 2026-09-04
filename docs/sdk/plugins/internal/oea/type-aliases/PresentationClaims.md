[**@hyperledger/identus-sdk v8.1.2**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oea](../README.md) / PresentationClaims

# Type Alias: PresentationClaims\<T\>

> **PresentationClaims**\<`T`\> = `T` *extends* [`JWT`](../enumerations/CredentialType.md#enumeration-member-jwt) ? [`JWTPresentationClaims`](../namespaces/OEA/type-aliases/JWTPresentationClaims.md) : `T` *extends* [`SDJWT`](../enumerations/CredentialType.md#enumeration-member-sdjwt) ? [`SDJWTPresentationClaims`](../namespaces/OEA/type-aliases/SDJWTPresentationClaims.md) : `T` *extends* [`AnonCreds`](../enumerations/CredentialType.md#enumeration-member-anoncreds) ? [`Claims`](../../anoncreds/interfaces/Claims.md) : `never`

Defined in: [packages/lib/sdk/src/plugins/internal/oea/types.ts:146](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/plugins/internal/oea/types.ts#L146)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`CredentialType`](../enumerations/CredentialType.md) | [`JWT`](../enumerations/CredentialType.md#enumeration-member-jwt) |
