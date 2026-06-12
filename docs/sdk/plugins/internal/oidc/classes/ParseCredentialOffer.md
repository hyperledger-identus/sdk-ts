[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / ParseCredentialOffer

# Class: ParseCredentialOffer

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/tasks/ParseCredentialOffer.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/tasks/ParseCredentialOffer.ts#L25)

validates the offer is correctly formed OIDC Credential Offer
returns the offer Typed as such

## Param

json object

## Extends

- `Task`\<[`CredentialOffer`](../type-aliases/CredentialOffer.md), [`ParseCredentialOfferArgs`](../interfaces/ParseCredentialOfferArgs.md)\>

## Constructors

### Constructor

> **new ParseCredentialOffer**(...`args`: \[[`ParseCredentialOfferArgs`](../interfaces/ParseCredentialOfferArgs.md)\]): `ParseCredentialOffer`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ParseCredentialOfferArgs`](../interfaces/ParseCredentialOfferArgs.md)\] | - |

#### Returns

`ParseCredentialOffer`

#### Inherited from

`Task<CredentialOffer, ParseCredentialOfferArgs>.constructor`

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Task.log`

***

### run() {#run}

> **run**(`ctx`: [`Context`](../type-aliases/Context.md)): `Promise`\<\{ `credential_configuration_ids`: `string`[]; `credential_issuer`: `string`; `grants?`: \{ `authorization_code?`: \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \}; `urn:ietf:params:oauth:grant-type:pre-authorized_code?`: \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \}; \}; \}\>

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/tasks/ParseCredentialOffer.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/tasks/ParseCredentialOffer.ts#L26)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Promise`\<\{ `credential_configuration_ids`: `string`[]; `credential_issuer`: `string`; `grants?`: \{ `authorization_code?`: \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \}; `urn:ietf:params:oauth:grant-type:pre-authorized_code?`: \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \}; \}; \}\>

#### Overrides

`Task.run`
