[**@hyperledger/identus-sdk v8.1.1**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oea](../README.md) / PresentationClaims

# Type Alias: PresentationClaims\<T\>

> **PresentationClaims**\<`T`\> = `T` *extends* [`JWT`](../enumerations/CredentialType.md#enumeration-member-jwt) ? [`JWTPresentationClaims`](../namespaces/OEA/type-aliases/JWTPresentationClaims.md) : `T` *extends* [`SDJWT`](../enumerations/CredentialType.md#enumeration-member-sdjwt) ? [`SDJWTPresentationClaims`](../namespaces/OEA/type-aliases/SDJWTPresentationClaims.md) : `T` *extends* [`AnonCreds`](../enumerations/CredentialType.md#enumeration-member-anoncreds) ? [`Claims`](../../anoncreds/interfaces/Claims.md) : `never`

Defined in: [packages/lib/sdk/src/plugins/internal/oea/types.ts:146](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/plugins/internal/oea/types.ts#L146)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`CredentialType`](../enumerations/CredentialType.md) | [`JWT`](../enumerations/CredentialType.md#enumeration-member-jwt) |
