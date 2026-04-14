# Migration guide from 7.X to 8.X

## Breaking Changes

If core internals where not in use, this breaking changes are likely to not affect you, except if you weren't relying on the Agent but using the internals directly for some things.

### Future deprecation notice

The following items have been marked as deprecated and will be removed in a future version of the SDK, but are still available.

- The Apollo key property, seed was sent as a hexString but is not UInt8Array. If you are creating private keys manually, please change seed from hexString to UInt8Array.

- Agent.initialize now accepts an async function that returns a seed (UInt8Array) vs previous hexString, if no seed function is provided, will start with random seed

- CreatePrismDID and CreatePrismDIDArgs from @hyperledger/identus-sdk, can still be used but is deprecated. We are introducing a new simplified function CreatePrismDIDWithKeys and type CreatePrismDIDWithKeysArgs from @hyperledger/identus-sdk

### Deprecated exports

- No more default export in @hyperledger/identus-sdk.

```typescript
// 7.x
import SDK from "@hyperledger/identus-sdk";

// 8.x
import * as SDK from "@hyperledger/identus-sdk";
```

- CreateOOBOffer and CreateOOBOfferArgs from @hyperledger/identus-sdk.

```typescript
// 7.x
import { CreateOOBOffer, type CreateOOBOfferArgs } from "@hyperledger/identus-sdk";

// 8.x
import { CreateOOBOffer, type CreateOOBOfferArgs } from "@hyperledger/identus-sdk/plugins/didcomm";
```

- RunProtocol and RunProtocolArgs from @hyperledger/identus-sdk

The RunProtocol becomes internal as its only managed by the SDK internals, the functionality is exposed through the Agent class.

Internally ```agent.handle``` uses the RunProtocol task to run the protocol, message is of type ```Domain.Message```.

```typescript
agent.handle(message)
```

- CreateOOBPresentationRequest and CreateOOBPresentationRequestArgs from @hyperledger/identus-sdk.

```typescript
// 7.x
import { CreateOOBPresentationRequest, type CreateOOBPresentationRequestArgs } from "@hyperledger/identus-sdk";

// 8.x
import { CreateOOBPresentationRequest, type CreateOOBPresentationRequestArgs } from "@hyperledger/identus-sdk/plugins/didcomm";
```

- DIDCommConnection from @hyperledger/identus-sdk

```typescript
// 7.x
import { DIDCommConnection } from "@hyperledger/identus-sdk";

// 8.x
import { DIDCommConnection } from "@hyperledger/identus-sdk/plugins/didcomm";
```

- HandshakeRequest and HandshakeRequestBody from @hyperledger/identus-sdk

```typescript
// 7.x
import { HandshakeRequest, type HandshakeRequestBody } from "@hyperledger/identus-sdk";

// 8.x
import { HandshakeRequest, type HandshakeRequestBody } from "@hyperledger/identus-sdk/plugins/oea";
```

- CredentialFormat from @hyperledger/identus-sdk

```typescript
// 7.x
import { type CredentialFormat } from "@hyperledger/identus-sdk";

// 8.x
import { type CredentialFormat } from "@hyperledger/identus-sdk/plugins/didcomm";
```

- RequestCredential from @hyperledger/identus-sdk

```typescript
// 7.x
import { RequestCredential } from "@hyperledger/identus-sdk";

// 8.x
import { RequestCredential } from "@hyperledger/identus-sdk/plugins/didcomm";
```

- IssueCredential and IssueCredentialBody from @hyperledger/identus-sdk

```typescript
// 7.x
import { IssueCredential, type IssueCredentialBody } from "@hyperledger/identus-sdk";

// 8.x
import { IssueCredential, type IssueCredentialBody } from "@hyperledger/identus-sdk/plugins/didcomm";
```

- OfferCredential and OfferCredentialBody from @hyperledger/identus-sdk

```typescript
// 7.x
import { OfferCredential, type OfferCredentialBody } from "@hyperledger/identus-sdk";

// 8.x
import { OfferCredential, type OfferCredentialBody } from "@hyperledger/identus-sdk/plugins/didcomm";
```

- OutOfBandInvitation and OutOfBandInvitationBody from @hyperledger/identus-sdk

```typescript
// 7.x
import { OutOfBandInvitation, type OutOfBandInvitationBody } from "@hyperledger/identus-sdk";

// 8.x
import { OutOfBandInvitation, type OutOfBandInvitationBody } from "@hyperledger/identus-sdk/plugins/didcomm";
```

- BasicMessage and BasicMessageBody from @hyperledger/identus-sdk

```typescript
// 7.x
import { BasicMessage, type BasicMessageBody } from "@hyperledger/identus-sdk";

// 8.x
import { BasicMessage, type BasicMessageBody } from "@hyperledger/identus-sdk/plugins/didcomm";
```

- Presentation and PresentationBody from @hyperledger/identus-sdk

```typescript
// 7.x
import { Presentation, type PresentationBody } from "@hyperledger/identus-sdk";

// 8.x
import { Presentation, type PresentationBody } from "@hyperledger/identus-sdk/plugins/oea";
```

- ProposePresentation and ProposePresentationBody from @hyperledger/identus-sdk

```typescript
// 7.x
import { ProposePresentation, type ProposePresentationBody } from "@hyperledger/identus-sdk";

// 8.x
import { ProposePresentation, type ProposePresentationBody } from "@hyperledger/identus-sdk/plugins/oea";
```

- RequestPresentation and RequestPresentationBody from @hyperledger/identus-sdk

```typescript
// 7.x
import { RequestPresentation, type RequestPresentationBody } from "@hyperledger/identus-sdk";

// 8.x
import { RequestPresentation, type RequestPresentationBody } from "@hyperledger/identus-sdk/plugins/oea";
```

- CreatePresentationRequest and CreatePresentationRequestArgs from @hyperledger/identus-sdk

```typescript
// 7.x
import { CreatePresentationRequest, type CreatePresentationRequestArgs } from "@hyperledger/identus-sdk";

// 8.x
import { CreatePresentationRequest, type CreatePresentationRequestArgs } from "@hyperledger/identus-sdk/plugins/oea";
```

- TaskContext from @hyperledger/identus-sdk

```typescript
// 7.x
import { type TaskContext } from "@hyperledger/identus-sdk";

// 8.x
import { type CreatePresentationRequestTaskContext } from "@hyperledger/identus-sdk/plugins/oea";
```

- CreatePresentation and CreatePresentationArgs from @hyperledger/identus-sdk

```typescript
// 7.x
import { CreatePresentation, type CreatePresentationArgs } from "@hyperledger/identus-sdk";

// 8.x
import { CreatePresentation, type CreatePresentationArgs } from "@hyperledger/identus-sdk/plugins/oea";
```

- Tasks from @hyperledger/identus-sdk

This object is no longer available but the corresponding imports are available in the plugin modules.

@hyperledger/identus-sdk/plugins/didcomm
@hyperledger/identus-sdk/plugins/dif
@hyperledger/identus-sdk/plugins/anoncreds
@hyperledger/identus-sdk/plugins/oea
@hyperledger/identus-sdk/plugins/oidc
