[**@hyperledger/identus-sdk**](../../../README.md)

***

[@hyperledger/identus-sdk](../../../README.md) / plugins/internal/oea

# plugins/internal/oea

This export contains the OEA plugin for the Identus SDK
Please use the following export

## How to use
Typescript / esmodules

```typescript
import * as OEA from "@hyperledger/identus-sdk/plugins/oea";
```

Or with cjs modules

```typescript
const OEA = require("@hyperledger/identus-sdk/plugins/oea");
```

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [OEA](namespaces/OEA.md) | - |

## Classes

### HandlePresentation

Defined in: [src/plugins/internal/oea/tasks/HandlePresentation.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/tasks/HandlePresentation.ts#L11)

A Task encapsulates a unit of work

args constructor parameter is mandatory if Args type given
args constructor parameter is optional if no Args type given

#### Extends

- [`Task`](../../../overview/namespaces/Utils/README.md#task)\<`boolean`, [`HandlePresentationArgs`](#handlepresentationargs)\>

#### Constructors

##### Constructor

> **new HandlePresentation**(...`args`: \[[`HandlePresentationArgs`](#handlepresentationargs)\]): [`HandlePresentation`](#handlepresentation)

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L18)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`HandlePresentationArgs`](#handlepresentationargs)\] |  |

###### Returns

[`HandlePresentation`](#handlepresentation)

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`constructor`](../../../overview/namespaces/Utils/README.md#task#constructor-1)

#### Methods

##### log()

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L26)

###### Returns

`unknown`

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`log`](../../../overview/namespaces/Utils/README.md#task#log)

##### run()

> **run**(`ctx`: [`Context`](../../../overview/namespaces/Plugins.md#context)): `Promise`\<`any`\>

Defined in: [src/plugins/internal/oea/tasks/HandlePresentation.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/tasks/HandlePresentation.ts#L12)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../../../overview/namespaces/Plugins.md#context) |

###### Returns

`Promise`\<`any`\>

###### Overrides

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`run`](../../../overview/namespaces/Utils/README.md#task#run)

***

### HandleRevocation

Defined in: [src/plugins/internal/oea/tasks/HandleRevocation.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/tasks/HandleRevocation.ts#L19)

A Task encapsulates a unit of work

args constructor parameter is mandatory if Args type given
args constructor parameter is optional if no Args type given

#### Extends

- [`Task`](../../../overview/namespaces/Utils/README.md#task)\<`void`, [`HandleRevocationArgs`](#handlerevocationargs)\>

#### Constructors

##### Constructor

> **new HandleRevocation**(...`args`: \[[`HandleRevocationArgs`](#handlerevocationargs)\]): [`HandleRevocation`](#handlerevocation)

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L18)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`HandleRevocationArgs`](#handlerevocationargs)\] |  |

###### Returns

[`HandleRevocation`](#handlerevocation)

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`constructor`](../../../overview/namespaces/Utils/README.md#task#constructor-1)

#### Methods

##### log()

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L26)

###### Returns

`unknown`

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`log`](../../../overview/namespaces/Utils/README.md#task#log)

##### run()

> **run**(`ctx`: [`Context`](../didcomm.md#context)): `Promise`\<`void`\>

Defined in: [src/plugins/internal/oea/tasks/HandleRevocation.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/tasks/HandleRevocation.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../didcomm.md#context) |

###### Returns

`Promise`\<`void`\>

###### Overrides

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`run`](../../../overview/namespaces/Utils/README.md#task#run)

***

### HandshakeRequest

Defined in: [src/plugins/internal/oea/protocols/HandshakeRequest.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L17)

#### Constructors

##### Constructor

> **new HandshakeRequest**(`body`: [`HandshakeRequestBody`](#handshakerequestbody-1), `from`: [`DID`](../../../overview/namespaces/Domain/README.md#did), `to`: [`DID`](../../../overview/namespaces/Domain/README.md#did), `thid?`: `string`, `id?`: `string`): [`HandshakeRequest`](#handshakerequest)

Defined in: [src/plugins/internal/oea/protocols/HandshakeRequest.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L20)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`HandshakeRequestBody`](#handshakerequestbody-1) |
| `from` | [`DID`](../../../overview/namespaces/Domain/README.md#did) |
| `to` | [`DID`](../../../overview/namespaces/Domain/README.md#did) |
| `thid?` | `string` |
| `id?` | `string` |

###### Returns

[`HandshakeRequest`](#handshakerequest)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="body"></a> `body` | `public` | [`HandshakeRequestBody`](#handshakerequestbody-1) | `undefined` | [src/plugins/internal/oea/protocols/HandshakeRequest.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L21) |
| <a id="from"></a> `from` | `public` | [`DID`](../../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/oea/protocols/HandshakeRequest.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L22) |
| <a id="id"></a> `id` | `public` | `string` | `undefined` | [src/plugins/internal/oea/protocols/HandshakeRequest.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L25) |
| <a id="thid"></a> `thid?` | `public` | `string` | `undefined` | [src/plugins/internal/oea/protocols/HandshakeRequest.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L24) |
| <a id="to"></a> `to` | `public` | [`DID`](../../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/oea/protocols/HandshakeRequest.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L23) |
| <a id="type"></a> `type` | `static` | `"https://atalaprism.io/mercury/connections/1.0/request"` | `OEA.ProtocolIds.ConnectionRequest` | [src/plugins/internal/oea/protocols/HandshakeRequest.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L18) |

#### Methods

##### makeMessage()

> **makeMessage**(): [`Message`](../../../overview/namespaces/Domain/README.md#message)

Defined in: [src/plugins/internal/oea/protocols/HandshakeRequest.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L28)

###### Returns

[`Message`](../../../overview/namespaces/Domain/README.md#message)

##### fromMessage()

> `static` **fromMessage**(`msg`: [`Message`](../../../overview/namespaces/Domain/README.md#message), `from`: [`DID`](../../../overview/namespaces/Domain/README.md#did)): [`HandshakeRequest`](#handshakerequest)

Defined in: [src/plugins/internal/oea/protocols/HandshakeRequest.ts:40](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | [`Message`](../../../overview/namespaces/Domain/README.md#message) |
| `from` | [`DID`](../../../overview/namespaces/Domain/README.md#did) |

###### Returns

[`HandshakeRequest`](#handshakerequest)

##### fromOutOfBand()

> `static` **fromOutOfBand**(`inviteMessage`: [`OutOfBandInvitation`](../didcomm.md#outofbandinvitation), `from`: [`DID`](../../../overview/namespaces/Domain/README.md#did)): [`HandshakeRequest`](#handshakerequest)

Defined in: [src/plugins/internal/oea/protocols/HandshakeRequest.ts:67](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L67)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `inviteMessage` | [`OutOfBandInvitation`](../didcomm.md#outofbandinvitation) |
| `from` | [`DID`](../../../overview/namespaces/Domain/README.md#did) |

###### Returns

[`HandshakeRequest`](#handshakerequest)

***

### Presentation

Defined in: [src/plugins/internal/oea/protocols/Presentation.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/Presentation.ts#L18)

#### Constructors

##### Constructor

> **new Presentation**(`body`: [`PresentationBody`](#presentationbody-1), `attachments`: [`AttachmentDescriptor`](../../../overview/namespaces/Domain/README.md#attachmentdescriptor)[], `from`: [`DID`](../../../overview/namespaces/Domain/README.md#did), `to`: [`DID`](../../../overview/namespaces/Domain/README.md#did), `thid?`: `string`, `id?`: `string`): [`Presentation`](#presentation)

Defined in: [src/plugins/internal/oea/protocols/Presentation.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/Presentation.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`PresentationBody`](#presentationbody-1) |
| `attachments` | [`AttachmentDescriptor`](../../../overview/namespaces/Domain/README.md#attachmentdescriptor)[] |
| `from` | [`DID`](../../../overview/namespaces/Domain/README.md#did) |
| `to` | [`DID`](../../../overview/namespaces/Domain/README.md#did) |
| `thid?` | `string` |
| `id?` | `string` |

###### Returns

[`Presentation`](#presentation)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="attachments"></a> `attachments` | `public` | [`AttachmentDescriptor`](../../../overview/namespaces/Domain/README.md#attachmentdescriptor)[] | `undefined` | [src/plugins/internal/oea/protocols/Presentation.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/Presentation.ts#L23) |
| <a id="body-1"></a> `body` | `public` | [`PresentationBody`](#presentationbody-1) | `undefined` | [src/plugins/internal/oea/protocols/Presentation.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/Presentation.ts#L22) |
| <a id="from-1"></a> `from` | `public` | [`DID`](../../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/oea/protocols/Presentation.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/Presentation.ts#L24) |
| <a id="id-1"></a> `id` | `public` | `string` | `undefined` | [src/plugins/internal/oea/protocols/Presentation.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/Presentation.ts#L27) |
| <a id="thid-1"></a> `thid?` | `public` | `string` | `undefined` | [src/plugins/internal/oea/protocols/Presentation.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/Presentation.ts#L26) |
| <a id="to-1"></a> `to` | `public` | [`DID`](../../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/oea/protocols/Presentation.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/Presentation.ts#L25) |
| <a id="type-1"></a> `type` | `static` | `"https://didcomm.atalaprism.io/present-proof/3.0/presentation"` | `OEA.ProtocolIds.Presentation` | [src/plugins/internal/oea/protocols/Presentation.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/Presentation.ts#L19) |

#### Methods

##### makeMessage()

> **makeMessage**(): [`Message`](../../../overview/namespaces/Domain/README.md#message)

Defined in: [src/plugins/internal/oea/protocols/Presentation.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/Presentation.ts#L42)

###### Returns

[`Message`](../../../overview/namespaces/Domain/README.md#message)

##### fromMessage()

> `static` **fromMessage**(`fromMessage`: [`Message`](../../../overview/namespaces/Domain/README.md#message)): [`Presentation`](#presentation)

Defined in: [src/plugins/internal/oea/protocols/Presentation.ts:55](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/Presentation.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `fromMessage` | [`Message`](../../../overview/namespaces/Domain/README.md#message) |

###### Returns

[`Presentation`](#presentation)

***

### ProposePresentation

Defined in: [src/plugins/internal/oea/protocols/ProposePresentation.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/ProposePresentation.ts#L18)

#### Constructors

##### Constructor

> **new ProposePresentation**(`body`: [`ProposePresentationBody`](#proposepresentationbody-1), `attachments`: [`AttachmentDescriptor`](../../../overview/namespaces/Domain/README.md#attachmentdescriptor)[], `from`: [`DID`](../../../overview/namespaces/Domain/README.md#did), `to`: [`DID`](../../../overview/namespaces/Domain/README.md#did), `thid?`: `string`, `id?`: `string`): [`ProposePresentation`](#proposepresentation)

Defined in: [src/plugins/internal/oea/protocols/ProposePresentation.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/ProposePresentation.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`ProposePresentationBody`](#proposepresentationbody-1) |
| `attachments` | [`AttachmentDescriptor`](../../../overview/namespaces/Domain/README.md#attachmentdescriptor)[] |
| `from` | [`DID`](../../../overview/namespaces/Domain/README.md#did) |
| `to` | [`DID`](../../../overview/namespaces/Domain/README.md#did) |
| `thid?` | `string` |
| `id?` | `string` |

###### Returns

[`ProposePresentation`](#proposepresentation)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="attachments-1"></a> `attachments` | `public` | [`AttachmentDescriptor`](../../../overview/namespaces/Domain/README.md#attachmentdescriptor)[] | `undefined` | [src/plugins/internal/oea/protocols/ProposePresentation.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/ProposePresentation.ts#L23) |
| <a id="body-2"></a> `body` | `public` | [`ProposePresentationBody`](#proposepresentationbody-1) | `undefined` | [src/plugins/internal/oea/protocols/ProposePresentation.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/ProposePresentation.ts#L22) |
| <a id="from-2"></a> `from` | `public` | [`DID`](../../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/oea/protocols/ProposePresentation.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/ProposePresentation.ts#L24) |
| <a id="id-2"></a> `id` | `public` | `string` | `undefined` | [src/plugins/internal/oea/protocols/ProposePresentation.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/ProposePresentation.ts#L27) |
| <a id="thid-2"></a> `thid?` | `public` | `string` | `undefined` | [src/plugins/internal/oea/protocols/ProposePresentation.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/ProposePresentation.ts#L26) |
| <a id="to-2"></a> `to` | `public` | [`DID`](../../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/oea/protocols/ProposePresentation.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/ProposePresentation.ts#L25) |
| <a id="type-2"></a> `type` | `static` | `"https://didcomm.atalaprism.io/present-proof/3.0/propose-presentation"` | `OEA.ProtocolIds.ProposePresentation` | [src/plugins/internal/oea/protocols/ProposePresentation.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/ProposePresentation.ts#L19) |

#### Methods

##### makeMessage()

> **makeMessage**(): [`Message`](../../../overview/namespaces/Domain/README.md#message)

Defined in: [src/plugins/internal/oea/protocols/ProposePresentation.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/ProposePresentation.ts#L42)

###### Returns

[`Message`](../../../overview/namespaces/Domain/README.md#message)

##### fromMessage()

> `static` **fromMessage**(`fromMessage`: [`Message`](../../../overview/namespaces/Domain/README.md#message)): [`ProposePresentation`](#proposepresentation)

Defined in: [src/plugins/internal/oea/protocols/ProposePresentation.ts:55](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/ProposePresentation.ts#L55)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `fromMessage` | [`Message`](../../../overview/namespaces/Domain/README.md#message) |

###### Returns

[`ProposePresentation`](#proposepresentation)

***

### RequestPresentation

Defined in: [src/plugins/internal/oea/protocols/RequestPresentation.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RequestPresentation.ts#L20)

#### Constructors

##### Constructor

> **new RequestPresentation**(`body`: [`RequestPresentationBody`](#requestpresentationbody-1), `attachments`: [`AttachmentDescriptor`](../../../overview/namespaces/Domain/README.md#attachmentdescriptor)[], `from`: [`DID`](../../../overview/namespaces/Domain/README.md#did), `to`: [`DID`](../../../overview/namespaces/Domain/README.md#did), `thid?`: `string`, `id?`: `string`): [`RequestPresentation`](#requestpresentation)

Defined in: [src/plugins/internal/oea/protocols/RequestPresentation.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RequestPresentation.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`RequestPresentationBody`](#requestpresentationbody-1) |
| `attachments` | [`AttachmentDescriptor`](../../../overview/namespaces/Domain/README.md#attachmentdescriptor)[] |
| `from` | [`DID`](../../../overview/namespaces/Domain/README.md#did) |
| `to` | [`DID`](../../../overview/namespaces/Domain/README.md#did) |
| `thid?` | `string` |
| `id?` | `string` |

###### Returns

[`RequestPresentation`](#requestpresentation)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="attachments-2"></a> `attachments` | `public` | [`AttachmentDescriptor`](../../../overview/namespaces/Domain/README.md#attachmentdescriptor)[] | `undefined` | [src/plugins/internal/oea/protocols/RequestPresentation.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RequestPresentation.ts#L25) |
| <a id="body-3"></a> `body` | `public` | [`RequestPresentationBody`](#requestpresentationbody-1) | `undefined` | [src/plugins/internal/oea/protocols/RequestPresentation.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RequestPresentation.ts#L24) |
| <a id="from-3"></a> `from` | `public` | [`DID`](../../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/oea/protocols/RequestPresentation.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RequestPresentation.ts#L26) |
| <a id="id-3"></a> `id` | `public` | `string` | `undefined` | [src/plugins/internal/oea/protocols/RequestPresentation.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RequestPresentation.ts#L29) |
| <a id="thid-3"></a> `thid?` | `public` | `string` | `undefined` | [src/plugins/internal/oea/protocols/RequestPresentation.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RequestPresentation.ts#L28) |
| <a id="to-3"></a> `to` | `public` | [`DID`](../../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/oea/protocols/RequestPresentation.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RequestPresentation.ts#L27) |
| <a id="type-3"></a> `type` | `static` | `"https://didcomm.atalaprism.io/present-proof/3.0/request-presentation"` | `OEA.ProtocolIds.RequestPresentation` | [src/plugins/internal/oea/protocols/RequestPresentation.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RequestPresentation.ts#L21) |

#### Accessors

##### decodedAttachments

###### Get Signature

> **get** **decodedAttachments**(): `any`[]

Defined in: [src/plugins/internal/oea/protocols/RequestPresentation.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RequestPresentation.ts#L34)

###### Returns

`any`[]

#### Methods

##### makeMessage()

> **makeMessage**(): [`Message`](../../../overview/namespaces/Domain/README.md#message)

Defined in: [src/plugins/internal/oea/protocols/RequestPresentation.ts:52](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RequestPresentation.ts#L52)

###### Returns

[`Message`](../../../overview/namespaces/Domain/README.md#message)

##### fromMessage()

> `static` **fromMessage**(`fromMessage`: [`Message`](../../../overview/namespaces/Domain/README.md#message)): [`RequestPresentation`](#requestpresentation)

Defined in: [src/plugins/internal/oea/protocols/RequestPresentation.ts:65](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RequestPresentation.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `fromMessage` | [`Message`](../../../overview/namespaces/Domain/README.md#message) |

###### Returns

[`RequestPresentation`](#requestpresentation)

***

### RevocationNotification

Defined in: [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L14)

#### Constructors

##### Constructor

> **new RevocationNotification**(`body`: [`PrismRevocationBody`](#prismrevocationbody), `from`: [`DID`](../../../overview/namespaces/Domain/README.md#did), `to`: [`DID`](../../../overview/namespaces/Domain/README.md#did)): [`RevocationNotification`](#revocationnotification)

Defined in: [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L17)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`PrismRevocationBody`](#prismrevocationbody) |
| `from` | [`DID`](../../../overview/namespaces/Domain/README.md#did) |
| `to` | [`DID`](../../../overview/namespaces/Domain/README.md#did) |

###### Returns

[`RevocationNotification`](#revocationnotification)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="body-4"></a> `body` | `public` | [`PrismRevocationBody`](#prismrevocationbody) | `undefined` | [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L18) |
| <a id="from-4"></a> `from` | `public` | [`DID`](../../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L19) |
| <a id="to-4"></a> `to` | `public` | [`DID`](../../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L20) |
| <a id="type-4"></a> `type` | `static` | `"https://atalaprism.io/revocation_notification/1.0/revoke"` | `OEA.ProtocolIds.PrismRevocation` | [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L15) |

#### Methods

##### makeMessage()

> **makeMessage**(): [`Message`](../../../overview/namespaces/Domain/README.md#message)

Defined in: [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L23)

###### Returns

[`Message`](../../../overview/namespaces/Domain/README.md#message)

##### fromMessage()

> `static` **fromMessage**(`message`: [`Message`](../../../overview/namespaces/Domain/README.md#message)): [`RevocationNotification`](#revocationnotification)

Defined in: [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L35)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](../../../overview/namespaces/Domain/README.md#message) |

###### Returns

[`RevocationNotification`](#revocationnotification)

## Interfaces

### HandlePresentationArgs

Defined in: [src/plugins/internal/oea/tasks/HandlePresentation.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/tasks/HandlePresentation.ts#L7)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="message"></a> `message` | [`Message`](../../../overview/namespaces/Domain/README.md#message) | [src/plugins/internal/oea/tasks/HandlePresentation.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/tasks/HandlePresentation.ts#L8) |

***

### HandleRevocationArgs

Defined in: [src/plugins/internal/oea/tasks/HandleRevocation.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/tasks/HandleRevocation.ts#L15)

Asyncronously prepare a request credential message from a valid offerCredential
for now supporting w3c verifiable credentials offers.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="message-1"></a> `message` | [`Message`](../../../overview/namespaces/Domain/README.md#message) | [src/plugins/internal/oea/tasks/HandleRevocation.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/tasks/HandleRevocation.ts#L16) |

***

### HandshakeRequestBody

Defined in: [src/plugins/internal/oea/protocols/HandshakeRequest.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L11)

No specification available

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="accept"></a> `accept?` | `string`[] | [src/plugins/internal/oea/protocols/HandshakeRequest.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L14) |
| <a id="goal"></a> `goal?` | `string` | [src/plugins/internal/oea/protocols/HandshakeRequest.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L13) |
| <a id="goal_code"></a> `goal_code?` | `string` | [src/plugins/internal/oea/protocols/HandshakeRequest.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L12) |

***

### PresentationBody

Defined in: [src/plugins/internal/oea/protocols/Presentation.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/Presentation.ts#L11)

Specification:
https://github.com/decentralized-identity/waci-didcomm/blob/main/present_proof/present-proof-v3.md#presentation

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="comment"></a> `comment?` | `string` | [src/plugins/internal/oea/protocols/Presentation.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/Presentation.ts#L15) |
| <a id="goal_code-1"></a> `goal_code?` | `string` | [src/plugins/internal/oea/protocols/Presentation.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/Presentation.ts#L13) |

***

### PrismRevocationBody

Defined in: [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L9)

No specification available

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="comment-1"></a> `comment?` | `string` | [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L11) |
| <a id="issuecredentialprotocolthreadid"></a> `issueCredentialProtocolThreadId` | `string` | [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L10) |

***

### ProposePresentationBody

Defined in: [src/plugins/internal/oea/protocols/ProposePresentation.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/ProposePresentation.ts#L11)

Specification:
https://github.com/decentralized-identity/waci-didcomm/blob/main/present_proof/present-proof-v3.md#propose-presentation

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="comment-2"></a> `comment?` | `string` | [src/plugins/internal/oea/protocols/ProposePresentation.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/ProposePresentation.ts#L15) |
| <a id="goal_code-2"></a> `goal_code?` | `string` | [src/plugins/internal/oea/protocols/ProposePresentation.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/ProposePresentation.ts#L13) |

***

### RequestPresentationBody

Defined in: [src/plugins/internal/oea/protocols/RequestPresentation.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RequestPresentation.ts#L11)

Specification:
https://github.com/decentralized-identity/waci-didcomm/blob/main/present_proof/present-proof-v3.md#request-presentation

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="comment-3"></a> `comment?` | `string` | [src/plugins/internal/oea/protocols/RequestPresentation.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RequestPresentation.ts#L15) |
| <a id="goal_code-3"></a> `goal_code?` | `string` | [src/plugins/internal/oea/protocols/RequestPresentation.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RequestPresentation.ts#L13) |
| <a id="will_confirm"></a> `will_confirm?` | `boolean` | [src/plugins/internal/oea/protocols/RequestPresentation.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/protocols/RequestPresentation.ts#L17) |

## Variables

### plugin

> `const` **plugin**: [`Plugin`](../../../overview/README.md#plugin)

Defined in: [src/plugins/internal/oea/index.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/index.ts#L27)

## References

### CreatePresentation

Re-exports [CreatePresentation](../../../overview/README.md#createpresentation)

***

### CreatePresentationArgs

Re-exports [CreatePresentationArgs](../../../overview/README.md#createpresentationargs)

***

### CreatePresentationRequest

Re-exports [CreatePresentationRequest](../../../overview/README.md#createpresentationrequest)

***

### CreatePresentationRequestArgs

Re-exports [CreatePresentationRequestArgs](../../../overview/README.md#createpresentationrequestargs)
