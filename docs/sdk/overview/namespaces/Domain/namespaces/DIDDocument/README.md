[**@hyperledger/identus-sdk**](../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../README.md) / [overview](../../../../README.md) / [Domain](../../README.md) / DIDDocument

# DIDDocument

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [VerificationMethod](namespaces/VerificationMethod.md) | - |

## Classes

### AlsoKnownAs

Defined in: [src/domain/models/DIDDocument.ts:291](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L291)

#### Constructors

##### Constructor

> **new AlsoKnownAs**(`values`: `string`[]): [`AlsoKnownAs`](#alsoknownas)

Defined in: [src/domain/models/DIDDocument.ts:292](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L292)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `values` | `string`[] |

###### Returns

[`AlsoKnownAs`](#alsoknownas)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="values"></a> `values` | `public` | `string`[] | [src/domain/models/DIDDocument.ts:292](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L292) |

***

### AssertionMethod

Defined in: [src/domain/models/DIDDocument.ts:364](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L364)

#### Extends

- `VerificationMethodGroup`

#### Constructors

##### Constructor

> **new AssertionMethod**(`urls`: `string`[], `verificationMethods`: [`VerificationMethod`](#verificationmethod)[]): [`AssertionMethod`](#assertionmethod)

Defined in: [src/domain/models/DIDDocument.ts:339](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L339)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `urls` | `string`[] | `[]` |
| `verificationMethods` | [`VerificationMethod`](#verificationmethod)[] | `[]` |

###### Returns

[`AssertionMethod`](#assertionmethod)

###### Inherited from

`VerificationMethodGroup.constructor`

#### Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="urls"></a> `urls` | `public` | `string`[] | `[]` | `VerificationMethodGroup.urls` | [src/domain/models/DIDDocument.ts:340](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L340) |
| <a id="verificationmethods"></a> `verificationMethods` | `public` | [`VerificationMethod`](#verificationmethod)[] | `[]` | `VerificationMethodGroup.verificationMethods` | [src/domain/models/DIDDocument.ts:341](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L341) |

#### Methods

##### add()

> **add**(`method`: [`VerificationMethod`](#verificationmethod)): `void`

Defined in: [src/domain/models/DIDDocument.ts:344](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L344)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | [`VerificationMethod`](#verificationmethod) |

###### Returns

`void`

###### Inherited from

`VerificationMethodGroup.add`

##### cloneWithNewDID()

> **cloneWithNewDID**(`did`: [`DID`](../../README.md#did)): [`Authentication`](#authentication)

Defined in: [src/domain/models/DIDDocument.ts:365](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L365)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../../README.md#did) |

###### Returns

[`Authentication`](#authentication)

###### Overrides

`VerificationMethodGroup.cloneWithNewDID`

***

### Authentication

Defined in: [src/domain/models/DIDDocument.ts:358](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L358)

#### Extends

- `VerificationMethodGroup`

#### Constructors

##### Constructor

> **new Authentication**(`urls`: `string`[], `verificationMethods`: [`VerificationMethod`](#verificationmethod)[]): [`Authentication`](#authentication)

Defined in: [src/domain/models/DIDDocument.ts:339](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L339)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `urls` | `string`[] | `[]` |
| `verificationMethods` | [`VerificationMethod`](#verificationmethod)[] | `[]` |

###### Returns

[`Authentication`](#authentication)

###### Inherited from

`VerificationMethodGroup.constructor`

#### Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="urls-1"></a> `urls` | `public` | `string`[] | `[]` | `VerificationMethodGroup.urls` | [src/domain/models/DIDDocument.ts:340](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L340) |
| <a id="verificationmethods-1"></a> `verificationMethods` | `public` | [`VerificationMethod`](#verificationmethod)[] | `[]` | `VerificationMethodGroup.verificationMethods` | [src/domain/models/DIDDocument.ts:341](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L341) |

#### Methods

##### add()

> **add**(`method`: [`VerificationMethod`](#verificationmethod)): `void`

Defined in: [src/domain/models/DIDDocument.ts:344](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L344)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | [`VerificationMethod`](#verificationmethod) |

###### Returns

`void`

###### Inherited from

`VerificationMethodGroup.add`

##### cloneWithNewDID()

> **cloneWithNewDID**(`did`: [`DID`](../../README.md#did)): [`Authentication`](#authentication)

Defined in: [src/domain/models/DIDDocument.ts:359](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L359)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../../README.md#did) |

###### Returns

[`Authentication`](#authentication)

###### Overrides

`VerificationMethodGroup.cloneWithNewDID`

***

### CapabilityDelegation

Defined in: [src/domain/models/DIDDocument.ts:382](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L382)

#### Extends

- `VerificationMethodGroup`

#### Constructors

##### Constructor

> **new CapabilityDelegation**(`urls`: `string`[], `verificationMethods`: [`VerificationMethod`](#verificationmethod)[]): [`CapabilityDelegation`](#capabilitydelegation)

Defined in: [src/domain/models/DIDDocument.ts:339](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L339)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `urls` | `string`[] | `[]` |
| `verificationMethods` | [`VerificationMethod`](#verificationmethod)[] | `[]` |

###### Returns

[`CapabilityDelegation`](#capabilitydelegation)

###### Inherited from

`VerificationMethodGroup.constructor`

#### Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="urls-2"></a> `urls` | `public` | `string`[] | `[]` | `VerificationMethodGroup.urls` | [src/domain/models/DIDDocument.ts:340](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L340) |
| <a id="verificationmethods-2"></a> `verificationMethods` | `public` | [`VerificationMethod`](#verificationmethod)[] | `[]` | `VerificationMethodGroup.verificationMethods` | [src/domain/models/DIDDocument.ts:341](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L341) |

#### Methods

##### add()

> **add**(`method`: [`VerificationMethod`](#verificationmethod)): `void`

Defined in: [src/domain/models/DIDDocument.ts:344](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L344)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | [`VerificationMethod`](#verificationmethod) |

###### Returns

`void`

###### Inherited from

`VerificationMethodGroup.add`

##### cloneWithNewDID()

> **cloneWithNewDID**(`did`: [`DID`](../../README.md#did)): [`Authentication`](#authentication)

Defined in: [src/domain/models/DIDDocument.ts:383](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L383)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../../README.md#did) |

###### Returns

[`Authentication`](#authentication)

###### Overrides

`VerificationMethodGroup.cloneWithNewDID`

***

### CapabilityInvocation

Defined in: [src/domain/models/DIDDocument.ts:376](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L376)

#### Extends

- `VerificationMethodGroup`

#### Constructors

##### Constructor

> **new CapabilityInvocation**(`urls`: `string`[], `verificationMethods`: [`VerificationMethod`](#verificationmethod)[]): [`CapabilityInvocation`](#capabilityinvocation)

Defined in: [src/domain/models/DIDDocument.ts:339](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L339)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `urls` | `string`[] | `[]` |
| `verificationMethods` | [`VerificationMethod`](#verificationmethod)[] | `[]` |

###### Returns

[`CapabilityInvocation`](#capabilityinvocation)

###### Inherited from

`VerificationMethodGroup.constructor`

#### Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="urls-3"></a> `urls` | `public` | `string`[] | `[]` | `VerificationMethodGroup.urls` | [src/domain/models/DIDDocument.ts:340](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L340) |
| <a id="verificationmethods-3"></a> `verificationMethods` | `public` | [`VerificationMethod`](#verificationmethod)[] | `[]` | `VerificationMethodGroup.verificationMethods` | [src/domain/models/DIDDocument.ts:341](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L341) |

#### Methods

##### add()

> **add**(`method`: [`VerificationMethod`](#verificationmethod)): `void`

Defined in: [src/domain/models/DIDDocument.ts:344](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L344)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | [`VerificationMethod`](#verificationmethod) |

###### Returns

`void`

###### Inherited from

`VerificationMethodGroup.add`

##### cloneWithNewDID()

> **cloneWithNewDID**(`did`: [`DID`](../../README.md#did)): [`Authentication`](#authentication)

Defined in: [src/domain/models/DIDDocument.ts:377](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L377)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../../README.md#did) |

###### Returns

[`Authentication`](#authentication)

###### Overrides

`VerificationMethodGroup.cloneWithNewDID`

***

### Controller

Defined in: [src/domain/models/DIDDocument.ts:295](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L295)

#### Constructors

##### Constructor

> **new Controller**(`values`: [`DID`](../../README.md#did)[]): [`Controller`](#controller)

Defined in: [src/domain/models/DIDDocument.ts:296](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L296)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `values` | [`DID`](../../README.md#did)[] |

###### Returns

[`Controller`](#controller)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="values-1"></a> `values` | `public` | [`DID`](../../README.md#did)[] | [src/domain/models/DIDDocument.ts:296](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L296) |

***

### KeyAgreement

Defined in: [src/domain/models/DIDDocument.ts:370](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L370)

#### Extends

- `VerificationMethodGroup`

#### Constructors

##### Constructor

> **new KeyAgreement**(`urls`: `string`[], `verificationMethods`: [`VerificationMethod`](#verificationmethod)[]): [`KeyAgreement`](#keyagreement)

Defined in: [src/domain/models/DIDDocument.ts:339](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L339)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `urls` | `string`[] | `[]` |
| `verificationMethods` | [`VerificationMethod`](#verificationmethod)[] | `[]` |

###### Returns

[`KeyAgreement`](#keyagreement)

###### Inherited from

`VerificationMethodGroup.constructor`

#### Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="urls-4"></a> `urls` | `public` | `string`[] | `[]` | `VerificationMethodGroup.urls` | [src/domain/models/DIDDocument.ts:340](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L340) |
| <a id="verificationmethods-4"></a> `verificationMethods` | `public` | [`VerificationMethod`](#verificationmethod)[] | `[]` | `VerificationMethodGroup.verificationMethods` | [src/domain/models/DIDDocument.ts:341](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L341) |

#### Methods

##### add()

> **add**(`method`: [`VerificationMethod`](#verificationmethod)): `void`

Defined in: [src/domain/models/DIDDocument.ts:344](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L344)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | [`VerificationMethod`](#verificationmethod) |

###### Returns

`void`

###### Inherited from

`VerificationMethodGroup.add`

##### cloneWithNewDID()

> **cloneWithNewDID**(`did`: [`DID`](../../README.md#did)): [`Authentication`](#authentication)

Defined in: [src/domain/models/DIDDocument.ts:371](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L371)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../../README.md#did) |

###### Returns

[`Authentication`](#authentication)

###### Overrides

`VerificationMethodGroup.cloneWithNewDID`

***

### Service

Defined in: [src/domain/models/DIDDocument.ts:309](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L309)

#### Constructors

##### Constructor

> **new Service**(`id`: `string`, `type`: `string`[], `endpoint`: `string` \| [`ServiceEndpoint`](#serviceendpoint-1)): [`Service`](#service)

Defined in: [src/domain/models/DIDDocument.ts:312](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L312)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `type` | `string`[] |
| `endpoint` | `string` \| [`ServiceEndpoint`](#serviceendpoint-1) |

###### Returns

[`Service`](#service)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="id"></a> `id` | `public` | `string` | [src/domain/models/DIDDocument.ts:313](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L313) |
| <a id="serviceendpoint"></a> `serviceEndpoint` | `public` | [`ServiceEndpoint`](#serviceendpoint-1) | [src/domain/models/DIDDocument.ts:310](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L310) |
| <a id="type"></a> `type` | `public` | `string`[] | [src/domain/models/DIDDocument.ts:314](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L314) |

#### Accessors

##### isDIDCommMessaging

###### Get Signature

> **get** **isDIDCommMessaging**(): `boolean`

Defined in: [src/domain/models/DIDDocument.ts:320](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L320)

###### Returns

`boolean`

***

### ServiceEndpoint

Defined in: [src/domain/models/DIDDocument.ts:325](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L325)

#### Constructors

##### Constructor

> **new ServiceEndpoint**(`uri`: `string`, `accept`: `string`[], `routingKeys`: `string`[]): [`ServiceEndpoint`](#serviceendpoint-1)

Defined in: [src/domain/models/DIDDocument.ts:326](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L326)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `uri` | `string` | `undefined` |
| `accept` | `string`[] | `[]` |
| `routingKeys` | `string`[] | `[]` |

###### Returns

[`ServiceEndpoint`](#serviceendpoint-1)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="accept"></a> `accept` | `public` | `string`[] | `[]` | [src/domain/models/DIDDocument.ts:328](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L328) |
| <a id="routingkeys"></a> `routingKeys` | `public` | `string`[] | `[]` | [src/domain/models/DIDDocument.ts:329](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L329) |
| <a id="uri"></a> `uri` | `public` | `string` | `undefined` | [src/domain/models/DIDDocument.ts:327](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L327) |

***

### Services

Defined in: [src/domain/models/DIDDocument.ts:333](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L333)

#### Constructors

##### Constructor

> **new Services**(`values`: [`Service`](#service)[]): [`Services`](#services)

Defined in: [src/domain/models/DIDDocument.ts:334](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L334)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `values` | [`Service`](#service)[] | `[]` |

###### Returns

[`Services`](#services)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="values-2"></a> `values` | `public` | [`Service`](#service)[] | `[]` | [src/domain/models/DIDDocument.ts:334](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L334) |

***

### VerificationMethod

Defined in: [src/domain/models/DIDDocument.ts:247](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L247)

#### Constructors

##### Constructor

> **new VerificationMethod**(`id`: `string`, `controller`: `string`, `type`: [`Type`](namespaces/VerificationMethod.md#type), `publicKeyJwk?`: [`JWK`](../../README.md#jwk), `publicKeyMultibase?`: `string`): [`VerificationMethod`](#verificationmethod)

Defined in: [src/domain/models/DIDDocument.ts:248](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L248)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `controller` | `string` |
| `type` | [`Type`](namespaces/VerificationMethod.md#type) |
| `publicKeyJwk?` | [`JWK`](../../README.md#jwk) |
| `publicKeyMultibase?` | `string` |

###### Returns

[`VerificationMethod`](#verificationmethod)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="controller-1"></a> `controller` | `public` | `string` | [src/domain/models/DIDDocument.ts:250](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L250) |
| <a id="id-1"></a> `id` | `public` | `string` | [src/domain/models/DIDDocument.ts:249](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L249) |
| <a id="publickeyjwk"></a> `publicKeyJwk?` | `public` | [`JWK`](../../README.md#jwk) | [src/domain/models/DIDDocument.ts:252](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L252) |
| <a id="publickeymultibase"></a> `publicKeyMultibase?` | `public` | `string` | [src/domain/models/DIDDocument.ts:253](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L253) |
| <a id="type-1"></a> `type` | `public` | [`Type`](namespaces/VerificationMethod.md#type) | [src/domain/models/DIDDocument.ts:251](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L251) |

#### Methods

##### cloneWithNewId()

> **cloneWithNewId**(`did`: [`DID`](../../README.md#did)): [`VerificationMethod`](#verificationmethod)

Defined in: [src/domain/models/DIDDocument.ts:256](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L256)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../../README.md#did) |

###### Returns

[`VerificationMethod`](#verificationmethod)

***

### VerificationMethods

Defined in: [src/domain/models/DIDDocument.ts:299](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L299)

#### Constructors

##### Constructor

> **new VerificationMethods**(`values`: [`VerificationMethod`](#verificationmethod)[]): [`VerificationMethods`](#verificationmethods-5)

Defined in: [src/domain/models/DIDDocument.ts:300](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L300)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `values` | [`VerificationMethod`](#verificationmethod)[] | `[]` |

###### Returns

[`VerificationMethods`](#verificationmethods-5)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="values-3"></a> `values` | `public` | [`VerificationMethod`](#verificationmethod)[] | `[]` | [src/domain/models/DIDDocument.ts:301](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L301) |

#### Methods

##### cloneWithNewDID()

> **cloneWithNewDID**(`did`: [`DID`](../../README.md#did)): [`VerificationMethods`](#verificationmethods-5)

Defined in: [src/domain/models/DIDDocument.ts:303](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L303)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../../README.md#did) |

###### Returns

[`VerificationMethods`](#verificationmethods-5)

## Type Aliases

### CoreProperty

> **CoreProperty** = [`Service`](#service) \| [`AlsoKnownAs`](#alsoknownas) \| [`Controller`](#controller) \| [`VerificationMethods`](#verificationmethods-5) \| [`Services`](#services) \| [`Authentication`](#authentication) \| [`AssertionMethod`](#assertionmethod) \| [`KeyAgreement`](#keyagreement) \| [`CapabilityInvocation`](#capabilityinvocation) \| [`CapabilityDelegation`](#capabilitydelegation)

Defined in: [src/domain/models/DIDDocument.ts:235](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L235)
