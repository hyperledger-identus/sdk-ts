[**@hyperledger/identus-sdk v7.0.0**](../../../README.md)

***

[@hyperledger/identus-sdk](../../../README.md) / [overview](../../README.md) / Domain

# Domain

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [AgentError](namespaces/AgentError/README.md) | - |
| [ApolloError](namespaces/ApolloError/README.md) | - |
| [Backup](namespaces/Backup/README.md) | - |
| [CastorError](namespaces/CastorError/README.md) | - |
| [CommonError](namespaces/CommonError/README.md) | - |
| [DIDDocument](namespaces/DIDDocument/README.md) | - |
| [ECConfig](namespaces/ECConfig/README.md) | - |
| [ExportableKey](namespaces/ExportableKey/README.md) | Declaration merge to contain key conversion functions |
| [ImportableKey](namespaces/ImportableKey/README.md) | - |
| [JWK](namespaces/JWK/README.md) | JWK definitions based on https://www.iana.org/assignments/jose/jose.xhtml |
| [JWT](namespaces/JWT/README.md) | - |
| [MercuryError](namespaces/MercuryError/README.md) | - |
| [Payload](namespaces/Payload/README.md) | - |
| [PEM](namespaces/PEM/README.md) | - |
| [Pluto](namespaces/Pluto/README.md) | - |
| [PlutoError](namespaces/PlutoError/README.md) | - |
| [PolluxError](namespaces/PolluxError/README.md) | - |
| [Protocols](namespaces/Protocols/README.md) | - |
| [Schema](namespaces/Schema/README.md) | - |
| [Startable](namespaces/Startable/README.md) | Define controls for managing entity lifecycle. |
| [StorableKey](namespaces/StorableKey/README.md) | - |

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [Curve](enumerations/Curve.md) | - |
| [JWT\_ALG](enumerations/JWT_ALG.md) | - |
| [KeyProperties](enumerations/KeyProperties.md) | - |
| [KeyTypes](enumerations/KeyTypes.md) | - |
| [MessageDirection](enumerations/MessageDirection.md) | - |
| [Numalgo2Prefix](enumerations/Numalgo2Prefix.md) | - |
| [VerificationMaterialFormatDID](enumerations/VerificationMaterialFormatDID.md) | - |

## Classes

| Class | Description |
| ------ | ------ |
| [ApiError](classes/ApiError.md) | - |
| [ApiRequest](classes/ApiRequest.md) | - |
| [ApiResponse](classes/ApiResponse.md) | - |
| [AttachmentDescriptor](classes/AttachmentDescriptor.md) | - |
| [AxesArray](classes/AxesArray.md) | - |
| [BaseVerificationMethod](classes/BaseVerificationMethod.md) | - |
| [Credential](classes/Credential.md) | Storable define properties a Domain object must implement to be compatible with Pluto |
| [CredentialMetadata](classes/CredentialMetadata.md) | Storable define properties a Domain object must implement to be compatible with Pluto |
| [DeprecatedDerivationPath](classes/DeprecatedDerivationPath.md) | - |
| [DerivableKey](classes/DerivableKey.md) | - |
| [DerivationAxis](classes/DerivationAxis.md) | - |
| [DerivationPathBase](classes/DerivationPathBase.md) | - |
| [DID](classes/DID.md) | Storable define properties a Domain object must implement to be compatible with Pluto |
| [DIDDocument](classes/DIDDocument.md) | - |
| [DIDPair](classes/DIDPair.md) | - |
| [DIDResolver](classes/DIDResolver.md) | - |
| [DIDUrl](classes/DIDUrl.md) | - |
| [InvitationIsInvalidError](classes/InvitationIsInvalidError.md) | - |
| [Key](classes/Key.md) | - |
| [KeyPair](classes/KeyPair.md) | - |
| [LinkSecret](classes/LinkSecret.md) | Storable define properties a Domain object must implement to be compatible with Pluto |
| [Message](classes/Message.md) | Storable define properties a Domain object must implement to be compatible with Pluto |
| [PrismDerivationPath](classes/PrismDerivationPath.md) | - |
| [PrismDID](classes/PrismDID.md) | - |
| [PrivateKey](classes/PrivateKey.md) | Storable define properties a Domain object must implement to be compatible with Pluto |
| [PublicKey](classes/PublicKey.md) | - |
| [SignableKey](classes/SignableKey.md) | - |
| [ValidationError](classes/ValidationError.md) | - |
| [VerifiableKey](classes/VerifiableKey.md) | - |
| [VerificationMaterialAgreement](classes/VerificationMaterialAgreement.md) | - |
| [VerificationMaterialAuthentication](classes/VerificationMaterialAuthentication.md) | - |
| [VerificationMaterialPeerDIDWithAgreement](classes/VerificationMaterialPeerDIDWithAgreement.md) | - |
| [VerificationMaterialPeerDIDWithAuthentication](classes/VerificationMaterialPeerDIDWithAuthentication.md) | - |
| [VerificationMethodTypeAgreement](classes/VerificationMethodTypeAgreement.md) | - |
| [VerificationMethodTypeAuthentication](classes/VerificationMethodTypeAuthentication.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [Api](interfaces/Api.md) | Api Dependency |
| [Apollo](interfaces/Apollo.md) | - |
| [AttachmentBase64](interfaces/AttachmentBase64.md) | - |
| [AttachmentHeader](interfaces/AttachmentHeader.md) | - |
| [AttachmentJws](interfaces/AttachmentJws.md) | - |
| [AttachmentJwsData](interfaces/AttachmentJwsData.md) | - |
| [AttachmentLinkData](interfaces/AttachmentLinkData.md) | - |
| [BaseSchema](interfaces/BaseSchema.md) | - |
| [Castor](interfaces/Castor.md) | Building block for creating, resolving, and managing Decentralized Identifiers across multiple DID methods. |
| [Ctor](interfaces/Ctor.md) | Constructor for T |
| [KeyCurve](interfaces/KeyCurve.md) | - |
| [KeyRestoration](interfaces/KeyRestoration.md) | KeyRestoration protocol defines methods for verifying and restoring cryptographic keys from raw data. |
| [Mediator](interfaces/Mediator.md) | - |
| [Mercury](interfaces/Mercury.md) | - |
| [Options](interfaces/Options.md) | Factory options to customise export / import functions |
| [Payload](interfaces/Payload.md) | General purpose struct to pass data around |
| [Pluto](interfaces/Pluto.md) | Pluto is a storage interface describing storage requirements of the edge agents which will be implemented using this SDK. Implement this interface using your preferred underlying storage technology, most appropriate for your use case. |
| [ProvableCredential](interfaces/ProvableCredential.md) | - |
| [Seed](interfaces/Seed.md) | - |
| [SeedWords](interfaces/SeedWords.md) | - |
| [Signature](interfaces/Signature.md) | - |
| [StorableCredential](interfaces/StorableCredential.md) | - |
| [StorableKey](interfaces/StorableKey.md) | - |
| [VerificationMaterialPeerDID](interfaces/VerificationMaterialPeerDID.md) | - |
| [VerificationMethodTypeDID](interfaces/VerificationMethodTypeDID.md) | - |
| [VerificationMethodTypePeerDIDWithAgreement](interfaces/VerificationMethodTypePeerDIDWithAgreement.md) | - |
| [VerificationMethodTypePeerDIDWithAuthentication](interfaces/VerificationMethodTypePeerDIDWithAuthentication.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [Arrayable](type-aliases/Arrayable.md) | T is either an Array or a single item |
| [AttachmentData](type-aliases/AttachmentData.md) | - |
| [AttachmentJsonData](type-aliases/AttachmentJsonData.md) | - |
| [Claim](type-aliases/Claim.md) | - |
| [DerivationClass](type-aliases/DerivationClass.md) | - |
| [DerivationSchema](type-aliases/DerivationSchema.md) | - |
| [ExportableKey](type-aliases/ExportableKey.md) | ExportableKey defines the formats a crypographic key can be converted to Default is all |
| [HttpMethod](type-aliases/HttpMethod.md) | - |
| [JsonObj](type-aliases/JsonObj.md) | Construct a Type with a set of string Keys of type T | undefined To be used in place of Record for arbitrary data structs where the key does not definitely result in a T |
| [JsonString](type-aliases/JsonString.md) | - |
| [JWK](type-aliases/JWK.md) | JWK |
| [KeyOptions](type-aliases/KeyOptions.md) | - |
| [MnemonicWordList](type-aliases/MnemonicWordList.md) | - |
| [Nil](type-aliases/Nil.md) | no value shorthand |
| [Normalize](type-aliases/Normalize.md) | Flatten intersect to show single interface |
| [OctetPublicKey](type-aliases/OctetPublicKey.md) | - |
| [PrismDIDKeys](type-aliases/PrismDIDKeys.md) | Maps PrismDIDKeyUsage member names to arrays of public keys. Used to assign keys to the correct verification relationships when creating a Prism DID. |
| [PrismDIDKeyUsageType](type-aliases/PrismDIDKeyUsageType.md) | - |
| [RequiredKeys](type-aliases/RequiredKeys.md) | - |
| [RequiredPrismDIDKeys](type-aliases/RequiredPrismDIDKeys.md) | - |
| [Schema](type-aliases/Schema.md) | - |
| [VerificationMaterial](type-aliases/VerificationMaterial.md) | - |
| [VerificationMaterialPeerDIDType](type-aliases/VerificationMaterialPeerDIDType.md) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [AnonCredsRecoveryId](variables/AnonCredsRecoveryId.md) | - |
| [asJsonObj](variables/asJsonObj.md) | - |
| [credential](variables/credential.md) | Schema definition for Backup V0.0.1 |
| [DeprecatedDerivationPathSchema](variables/DeprecatedDerivationPathSchema.md) | - |
| [did](variables/did.md) | - |
| [didpair](variables/didpair.md) | - |
| [isArray](variables/isArray.md) | isArray Typeguard - check a value is an Array |
| [isEmpty](variables/isEmpty.md) | isEmpty Logic - check a given value is considered empty empty depends on typeof value: - null - undefined - array: length = 0 - string: length = 0 |
| [isNil](variables/isNil.md) | isNullish Typeguard - check a value is undefined or null |
| [isObject](variables/isObject.md) | isObject Typeguard - check a value is an object in the conceptual sense not the JS sense excluding JS overlap with: null Arrays Functions |
| [isString](variables/isString.md) | isString TypeGuard to check a value is a string |
| [JWTVerifiableCredentialRecoveryId](variables/JWTVerifiableCredentialRecoveryId.md) | - |
| [key](variables/key.md) | - |
| [linksecret](variables/linksecret.md) | - |
| [mediator](variables/mediator.md) | - |
| [message](variables/message.md) | - |
| [notEmptyString](variables/notEmptyString.md) | notEmptyString Typeguard + Logic - check a value is a string with contents |
| [notNil](variables/notNil.md) | notNil Typeguard - check a value is neither undefined or null |
| [PRISM\_DID\_METHOD](variables/PRISM_DID_METHOD.md) | - |
| [PRISM\_IDENTIFIER](variables/PRISM_IDENTIFIER.md) | - |
| [PRISM\_WALLET\_PURPOSE](variables/PRISM_WALLET_PURPOSE.md) | - |
| [PrismDerivationPathSchema](variables/PrismDerivationPathSchema.md) | - |
| [PrismDIDKeyUsage](variables/PrismDIDKeyUsage.md) | Mirrors `io.iohk.atala.prism.protos.KeyUsage` from the auto-generated protobuf code. Defined locally to keep the proto namespace (which contains ES `#private` fields) out of the DTS rollup graph — rollup-plugin-dts cannot handle `#private` inside namespace class declarations. |
| [revocationJsonldDocuments](variables/revocationJsonldDocuments.md) | - |
| [Schema](variables/Schema.md) | - |
| [SDJWTVerifiableCredentialRecoveryId](variables/SDJWTVerifiableCredentialRecoveryId.md) | - |
| [validateSafe](variables/validateSafe.md) | validateSafe Typeguard - check a value matches a schema |

## Functions

| Function | Description |
| ------ | ------ |
| [asArray](functions/asArray.md) | asArray convert a value to an array |
| [expect](functions/expect.md) | expect assert a value is notNil and return the value typed as such panic otherwise |
| [validate](functions/validate.md) | validate Type assertion - assert a value matches a schema |

## References

### CredentialType {#credentialtype}

Re-exports [CredentialType](../../../plugins/internal/oea/enumerations/CredentialType.md)

***

### PeerDID {#peerdid}

Re-exports [PeerDID](../../classes/PeerDID.md)

***

### PeerDIDEncoded {#peerdidencoded}

Re-exports [PeerDIDEncoded](../../interfaces/PeerDIDEncoded.md)
