[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / ParseCredentialOffer

# Class: ParseCredentialOffer

Defined in: [src/plugins/internal/oidc/tasks/ParseCredentialOffer.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/tasks/ParseCredentialOffer.ts#L23)

validates the offer is correctly formed OIDC Credential Offer
returns the offer Typed as such

## Param

json object

## Extends

- [`Task`](../../../../overview/namespaces/Utils/classes/Task.md)\<[`CredentialOffer`](../type-aliases/CredentialOffer.md), [`ParseCredentialOfferArgs`](../interfaces/ParseCredentialOfferArgs.md)\>

## Constructors

### Constructor

> **new ParseCredentialOffer**(...`args`: \[[`ParseCredentialOfferArgs`](../interfaces/ParseCredentialOfferArgs.md)\]): `ParseCredentialOffer`

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ParseCredentialOfferArgs`](../interfaces/ParseCredentialOfferArgs.md)\] |  |

#### Returns

`ParseCredentialOffer`

#### Inherited from

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`constructor`](../../../../overview/namespaces/Utils/classes/Task.md#constructor)

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L26)

#### Returns

`unknown`

#### Inherited from

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`log`](../../../../overview/namespaces/Utils/classes/Task.md#log)

***

### run() {#run}

> **run**(`ctx`: [`Context`](../type-aliases/Context.md)): `Promise`\<\{ `credential_configuration_ids`: `string`[]; `credential_issuer`: `string`; `grants?`: \{ `authorization_code?`: \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \}; `urn:ietf:params:oauth:grant-type:pre-authorized_code?`: \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \}; \}; \}\>

Defined in: [src/plugins/internal/oidc/tasks/ParseCredentialOffer.ts:24](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/tasks/ParseCredentialOffer.ts#L24)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Promise`\<\{ `credential_configuration_ids`: `string`[]; `credential_issuer`: `string`; `grants?`: \{ `authorization_code?`: \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \}; `urn:ietf:params:oauth:grant-type:pre-authorized_code?`: \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \}; \}; \}\>

#### Overrides

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`run`](../../../../overview/namespaces/Utils/classes/Task.md#run)
