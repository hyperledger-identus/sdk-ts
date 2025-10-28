[**@hyperledger/identus-sdk**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / AgentError

# AgentError

## Classes

### BackupVersionError

Defined in: [src/domain/models/errors/Agent.ts:239](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L239)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new BackupVersionError**(): [`BackupVersionError`](#backupversionerror)

Defined in: [src/domain/models/errors/Agent.ts:240](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L240)

###### Returns

[`BackupVersionError`](#backupversionerror)

###### Overrides

`Error.constructor`

***

### CannotFindDIDKeyPairIndex

Defined in: [src/domain/models/errors/Agent.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L13)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new CannotFindDIDKeyPairIndex**(`message`: `string`): [`CannotFindDIDKeyPairIndex`](#cannotfinddidkeypairindex)

Defined in: [src/domain/models/errors/Agent.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L14)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `"Can't find DID keypair index"` |

###### Returns

[`CannotFindDIDKeyPairIndex`](#cannotfinddidkeypairindex)

###### Overrides

`Error.constructor`

***

### CannotFindDIDPrivateKey

Defined in: [src/domain/models/errors/Agent.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L19)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new CannotFindDIDPrivateKey**(`message`: `string`): [`CannotFindDIDPrivateKey`](#cannotfinddidprivatekey)

Defined in: [src/domain/models/errors/Agent.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L20)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `"Can't find Private key"` |

###### Returns

[`CannotFindDIDPrivateKey`](#cannotfinddidprivatekey)

###### Overrides

`Error.constructor`

***

### CannotFindLinkSecret

Defined in: [src/domain/models/errors/Agent.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L25)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new CannotFindLinkSecret**(`message`: `string`): [`CannotFindLinkSecret`](#cannotfindlinksecret)

Defined in: [src/domain/models/errors/Agent.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L26)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `"Cannot find link secret"` |

###### Returns

[`CannotFindLinkSecret`](#cannotfindlinksecret)

###### Overrides

`Error.constructor`

***

### FailedToOnboardError

Defined in: [src/domain/models/errors/Agent.ts:72](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L72)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new FailedToOnboardError**(`message?`: `string`): [`FailedToOnboardError`](#failedtoonboarderror)

Defined in: [src/domain/models/errors/Agent.ts:73](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L73)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`FailedToOnboardError`](#failedtoonboarderror)

###### Overrides

`Error.constructor`

***

### InvalidBasicMessageBodyError

Defined in: [src/domain/models/errors/Agent.ts:154](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L154)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidBasicMessageBodyError**(`message?`: `string`): [`InvalidBasicMessageBodyError`](#invalidbasicmessagebodyerror)

Defined in: [src/domain/models/errors/Agent.ts:155](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L155)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidBasicMessageBodyError`](#invalidbasicmessagebodyerror)

###### Overrides

`Error.constructor`

***

### InvalidCredentialBodyError

Defined in: [src/domain/models/errors/Agent.ts:129](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L129)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidCredentialBodyError**(`message?`: `string`): [`InvalidCredentialBodyError`](#invalidcredentialbodyerror)

Defined in: [src/domain/models/errors/Agent.ts:130](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L130)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidCredentialBodyError`](#invalidcredentialbodyerror)

###### Overrides

`Error.constructor`

***

### InvalidCredentialFormats

Defined in: [src/domain/models/errors/Agent.ts:192](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L192)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidCredentialFormats**(): [`InvalidCredentialFormats`](#invalidcredentialformats)

Defined in: [src/domain/models/errors/Agent.ts:193](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L193)

###### Returns

[`InvalidCredentialFormats`](#invalidcredentialformats)

###### Overrides

`Error.constructor`

***

### InvalidIssueCredentialBodyError

Defined in: [src/domain/models/errors/Agent.ts:134](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L134)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidIssueCredentialBodyError**(`message?`: `string`): [`InvalidIssueCredentialBodyError`](#invalidissuecredentialbodyerror)

Defined in: [src/domain/models/errors/Agent.ts:135](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L135)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidIssueCredentialBodyError`](#invalidissuecredentialbodyerror)

###### Overrides

`Error.constructor`

***

### InvalidIssueCredentialMessageError

Defined in: [src/domain/models/errors/Agent.ts:98](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L98)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidIssueCredentialMessageError**(`message?`: `string`): [`InvalidIssueCredentialMessageError`](#invalidissuecredentialmessageerror)

Defined in: [src/domain/models/errors/Agent.ts:99](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L99)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidIssueCredentialMessageError`](#invalidissuecredentialmessageerror)

###### Overrides

`Error.constructor`

***

### InvalidMediationGrantBodyError

Defined in: [src/domain/models/errors/Agent.ts:180](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L180)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidMediationGrantBodyError**(`message?`: `string`): [`InvalidMediationGrantBodyError`](#invalidmediationgrantbodyerror)

Defined in: [src/domain/models/errors/Agent.ts:181](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L181)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidMediationGrantBodyError`](#invalidmediationgrantbodyerror)

###### Overrides

`Error.constructor`

***

### InvalidMediationGrantMessageError

Defined in: [src/domain/models/errors/Agent.ts:123](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L123)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidMediationGrantMessageError**(`message?`: `string`): [`InvalidMediationGrantMessageError`](#invalidmediationgrantmessageerror)

Defined in: [src/domain/models/errors/Agent.ts:124](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L124)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidMediationGrantMessageError`](#invalidmediationgrantmessageerror)

###### Overrides

`Error.constructor`

***

### InvalidMessageError

Defined in: [src/domain/models/errors/Agent.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L7)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidMessageError**(`message`: `string`): [`InvalidMessageError`](#invalidmessageerror)

Defined in: [src/domain/models/errors/Agent.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L8)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `"Invalid Message"` |

###### Returns

[`InvalidMessageError`](#invalidmessageerror)

###### Overrides

`Error.constructor`

***

### InvalidOfferCredentialBodyError

Defined in: [src/domain/models/errors/Agent.ts:174](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L174)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidOfferCredentialBodyError**(`message?`: `string`): [`InvalidOfferCredentialBodyError`](#invalidoffercredentialbodyerror)

Defined in: [src/domain/models/errors/Agent.ts:175](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L175)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidOfferCredentialBodyError`](#invalidoffercredentialbodyerror)

###### Overrides

`Error.constructor`

***

### InvalidOfferCredentialMessageError

Defined in: [src/domain/models/errors/Agent.ts:87](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L87)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidOfferCredentialMessageError**(`message?`: `string`): [`InvalidOfferCredentialMessageError`](#invalidoffercredentialmessageerror)

Defined in: [src/domain/models/errors/Agent.ts:88](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L88)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidOfferCredentialMessageError`](#invalidoffercredentialmessageerror)

###### Overrides

`Error.constructor`

***

### InvalidPickupDeliveryMessageError

Defined in: [src/domain/models/errors/Agent.ts:77](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L77)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidPickupDeliveryMessageError**(): [`InvalidPickupDeliveryMessageError`](#invalidpickupdeliverymessageerror)

Defined in: [src/domain/models/errors/Agent.ts:78](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L78)

###### Returns

[`InvalidPickupDeliveryMessageError`](#invalidpickupdeliverymessageerror)

###### Overrides

`Error.constructor`

***

### InvalidPresentationBodyError

Defined in: [src/domain/models/errors/Agent.ts:159](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L159)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidPresentationBodyError**(`message?`: `string`): [`InvalidPresentationBodyError`](#invalidpresentationbodyerror)

Defined in: [src/domain/models/errors/Agent.ts:160](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L160)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidPresentationBodyError`](#invalidpresentationbodyerror)

###### Overrides

`Error.constructor`

***

### InvalidPresentationMessageError

Defined in: [src/domain/models/errors/Agent.ts:108](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L108)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidPresentationMessageError**(`message?`: `string`): [`InvalidPresentationMessageError`](#invalidpresentationmessageerror)

Defined in: [src/domain/models/errors/Agent.ts:109](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L109)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidPresentationMessageError`](#invalidpresentationmessageerror)

###### Overrides

`Error.constructor`

***

### InvalidProblemReportBodyError

Defined in: [src/domain/models/errors/Agent.ts:164](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L164)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidProblemReportBodyError**(`message?`: `string`): [`InvalidProblemReportBodyError`](#invalidproblemreportbodyerror)

Defined in: [src/domain/models/errors/Agent.ts:165](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L165)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidProblemReportBodyError`](#invalidproblemreportbodyerror)

###### Overrides

`Error.constructor`

***

### InvalidProposeCredentialBodyError

Defined in: [src/domain/models/errors/Agent.ts:169](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L169)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidProposeCredentialBodyError**(`message?`: `string`): [`InvalidProposeCredentialBodyError`](#invalidproposecredentialbodyerror)

Defined in: [src/domain/models/errors/Agent.ts:170](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L170)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidProposeCredentialBodyError`](#invalidproposecredentialbodyerror)

###### Overrides

`Error.constructor`

***

### InvalidProposedCredentialMessageError

Defined in: [src/domain/models/errors/Agent.ts:93](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L93)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidProposedCredentialMessageError**(`message?`: `string`): [`InvalidProposedCredentialMessageError`](#invalidproposedcredentialmessageerror)

Defined in: [src/domain/models/errors/Agent.ts:94](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L94)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidProposedCredentialMessageError`](#invalidproposedcredentialmessageerror)

###### Overrides

`Error.constructor`

***

### InvalidProposePresentationBodyError

Defined in: [src/domain/models/errors/Agent.ts:149](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L149)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidProposePresentationBodyError**(`message?`: `string`): [`InvalidProposePresentationBodyError`](#invalidproposepresentationbodyerror)

Defined in: [src/domain/models/errors/Agent.ts:150](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L150)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidProposePresentationBodyError`](#invalidproposepresentationbodyerror)

###### Overrides

`Error.constructor`

***

### InvalidProposePresentationMessageError

Defined in: [src/domain/models/errors/Agent.ts:118](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L118)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidProposePresentationMessageError**(`message?`: `string`): [`InvalidProposePresentationMessageError`](#invalidproposepresentationmessageerror)

Defined in: [src/domain/models/errors/Agent.ts:119](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L119)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidProposePresentationMessageError`](#invalidproposepresentationmessageerror)

###### Overrides

`Error.constructor`

***

### InvalidRequestCredentialBodyError

Defined in: [src/domain/models/errors/Agent.ts:139](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L139)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidRequestCredentialBodyError**(`message?`: `string`): [`InvalidRequestCredentialBodyError`](#invalidrequestcredentialbodyerror)

Defined in: [src/domain/models/errors/Agent.ts:140](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L140)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidRequestCredentialBodyError`](#invalidrequestcredentialbodyerror)

###### Overrides

`Error.constructor`

***

### InvalidRequestCredentialMessageError

Defined in: [src/domain/models/errors/Agent.ts:103](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L103)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidRequestCredentialMessageError**(`message?`: `string`): [`InvalidRequestCredentialMessageError`](#invalidrequestcredentialmessageerror)

Defined in: [src/domain/models/errors/Agent.ts:104](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L104)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidRequestCredentialMessageError`](#invalidrequestcredentialmessageerror)

###### Overrides

`Error.constructor`

***

### InvalidRequestPresentationBodyError

Defined in: [src/domain/models/errors/Agent.ts:144](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L144)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidRequestPresentationBodyError**(`message?`: `string`): [`InvalidRequestPresentationBodyError`](#invalidrequestpresentationbodyerror)

Defined in: [src/domain/models/errors/Agent.ts:145](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L145)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidRequestPresentationBodyError`](#invalidrequestpresentationbodyerror)

###### Overrides

`Error.constructor`

***

### InvalidRequestPresentationMessageError

Defined in: [src/domain/models/errors/Agent.ts:113](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L113)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidRequestPresentationMessageError**(`message?`: `string`): [`InvalidRequestPresentationMessageError`](#invalidrequestpresentationmessageerror)

Defined in: [src/domain/models/errors/Agent.ts:114](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L114)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidRequestPresentationMessageError`](#invalidrequestpresentationmessageerror)

###### Overrides

`Error.constructor`

***

### InvalidStepError

Defined in: [src/domain/models/errors/Agent.ts:208](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L208)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidStepError**(`message?`: `string`): [`InvalidStepError`](#invalidsteperror)

Defined in: [src/domain/models/errors/Agent.ts:209](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L209)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidStepError`](#invalidsteperror)

###### Overrides

`Error.constructor`

***

### InvalidURLError

Defined in: [src/domain/models/errors/Agent.ts:1](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L1)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidURLError**(`message`: `string`): [`InvalidURLError`](#invalidurlerror)

Defined in: [src/domain/models/errors/Agent.ts:2](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L2)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `"Invalid URL"` |

###### Returns

[`InvalidURLError`](#invalidurlerror)

###### Overrides

`Error.constructor`

***

### InvitationHasNoFromDIDError

Defined in: [src/domain/models/errors/Agent.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L31)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvitationHasNoFromDIDError**(`message`: `string`): [`InvitationHasNoFromDIDError`](#invitationhasnofromdiderror)

Defined in: [src/domain/models/errors/Agent.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L32)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `"Invalid Invitation fromDID"` |

###### Returns

[`InvitationHasNoFromDIDError`](#invitationhasnofromdiderror)

###### Overrides

`Error.constructor`

***

### InvitationIsInvalidError

Defined in: [src/domain/models/errors/Agent.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L43)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvitationIsInvalidError**(`message`: `string`): [`InvitationIsInvalidError`](#invitationisinvaliderror)

Defined in: [src/domain/models/errors/Agent.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L44)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `"Invalid invitation"` |

###### Returns

[`InvitationIsInvalidError`](#invitationisinvaliderror)

###### Overrides

`Error.constructor`

***

### KeyNotExportableError

Defined in: [src/domain/models/errors/Agent.ts:233](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L233)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new KeyNotExportableError**(): [`KeyNotExportableError`](#keynotexportableerror)

Defined in: [src/domain/models/errors/Agent.ts:234](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L234)

###### Returns

[`KeyNotExportableError`](#keynotexportableerror)

###### Overrides

`Error.constructor`

***

### MediationRequestFailedError

Defined in: [src/domain/models/errors/Agent.ts:203](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L203)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new MediationRequestFailedError**(`message?`: `string`): [`MediationRequestFailedError`](#mediationrequestfailederror)

Defined in: [src/domain/models/errors/Agent.ts:204](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L204)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`MediationRequestFailedError`](#mediationrequestfailederror)

###### Overrides

`Error.constructor`

***

### NoConnectionOpenError

Defined in: [src/domain/models/errors/Agent.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L49)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new NoConnectionOpenError**(`message`: `string`): [`NoConnectionOpenError`](#noconnectionopenerror)

Defined in: [src/domain/models/errors/Agent.ts:50](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L50)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `"No Connection Open"` |

###### Returns

[`NoConnectionOpenError`](#noconnectionopenerror)

###### Overrides

`Error.constructor`

***

### NoHandshakeResponseError

Defined in: [src/domain/models/errors/Agent.ts:55](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L55)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new NoHandshakeResponseError**(`message`: `string`): [`NoHandshakeResponseError`](#nohandshakeresponseerror)

Defined in: [src/domain/models/errors/Agent.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L56)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `"No Handshake Response"` |

###### Returns

[`NoHandshakeResponseError`](#nohandshakeresponseerror)

###### Overrides

`Error.constructor`

***

### NoMediatorAvailableError

Defined in: [src/domain/models/errors/Agent.ts:197](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L197)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new NoMediatorAvailableError**(`message?`: `string`): [`NoMediatorAvailableError`](#nomediatoravailableerror)

Defined in: [src/domain/models/errors/Agent.ts:198](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L198)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`NoMediatorAvailableError`](#nomediatoravailableerror)

###### Overrides

`Error.constructor`

***

### NoValidServiceEndpointError

Defined in: [src/domain/models/errors/Agent.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L37)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new NoValidServiceEndpointError**(`message`: `string`): [`NoValidServiceEndpointError`](#novalidserviceendpointerror)

Defined in: [src/domain/models/errors/Agent.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L38)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `"No Valid Service Endpoint"` |

###### Returns

[`NoValidServiceEndpointError`](#novalidserviceendpointerror)

###### Overrides

`Error.constructor`

***

### OfferDoesntProvideEnoughInformation

Defined in: [src/domain/models/errors/Agent.ts:82](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L82)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new OfferDoesntProvideEnoughInformation**(): [`OfferDoesntProvideEnoughInformation`](#offerdoesntprovideenoughinformation)

Defined in: [src/domain/models/errors/Agent.ts:83](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L83)

###### Returns

[`OfferDoesntProvideEnoughInformation`](#offerdoesntprovideenoughinformation)

###### Overrides

`Error.constructor`

***

### UnhandledCredential

Defined in: [src/domain/models/errors/Agent.ts:221](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L221)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new UnhandledCredential**(`message?`: `string`): [`UnhandledCredential`](#unhandledcredential)

Defined in: [src/domain/models/errors/Agent.ts:222](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L222)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`UnhandledCredential`](#unhandledcredential)

###### Overrides

`Error.constructor`

***

### UnhandledPresentationRequest

Defined in: [src/domain/models/errors/Agent.ts:227](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L227)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new UnhandledPresentationRequest**(`message?`: `string`): [`UnhandledPresentationRequest`](#unhandledpresentationrequest)

Defined in: [src/domain/models/errors/Agent.ts:228](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L228)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`UnhandledPresentationRequest`](#unhandledpresentationrequest)

###### Overrides

`Error.constructor`

***

### UnknownCredentialBodyError

Defined in: [src/domain/models/errors/Agent.ts:186](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L186)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new UnknownCredentialBodyError**(): [`UnknownCredentialBodyError`](#unknowncredentialbodyerror)

Defined in: [src/domain/models/errors/Agent.ts:187](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L187)

###### Returns

[`UnknownCredentialBodyError`](#unknowncredentialbodyerror)

###### Overrides

`Error.constructor`

***

### UnknownInvitationTypeError

Defined in: [src/domain/models/errors/Agent.ts:61](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L61)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new UnknownInvitationTypeError**(`message`: `string`): [`UnknownInvitationTypeError`](#unknowninvitationtypeerror)

Defined in: [src/domain/models/errors/Agent.ts:62](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L62)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `"Unknown Invitation Type"` |

###### Returns

[`UnknownInvitationTypeError`](#unknowninvitationtypeerror)

###### Overrides

`Error.constructor`

***

### UnknownPrismOnboardingTypeError

Defined in: [src/domain/models/errors/Agent.ts:67](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L67)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new UnknownPrismOnboardingTypeError**(): [`UnknownPrismOnboardingTypeError`](#unknownprismonboardingtypeerror)

Defined in: [src/domain/models/errors/Agent.ts:68](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L68)

###### Returns

[`UnknownPrismOnboardingTypeError`](#unknownprismonboardingtypeerror)

###### Overrides

`Error.constructor`

***

### UnsupportedAttachmentType

Defined in: [src/domain/models/errors/Agent.ts:215](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L215)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new UnsupportedAttachmentType**(`message?`: `string`): [`UnsupportedAttachmentType`](#unsupportedattachmenttype)

Defined in: [src/domain/models/errors/Agent.ts:216](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Agent.ts#L216)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`UnsupportedAttachmentType`](#unsupportedattachmenttype)

###### Overrides

`Error.constructor`
