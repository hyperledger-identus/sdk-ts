# Migration guide from 7.X to 8.X

## Breaking Changes

If core internals where not in use, this breaking changes are likely to not affect you, except if you weren't relying on the Agent but using the internals directly for some things.

### Future deprecation notice

The following items have been marked as deprecated and will be removed in a future version of the SDK, but are still available.

# Apollo breaking changes

1. The Apollo key property, seed was sent as a hexString but is not UInt8Array. If you are creating private keys manually, please change seed from hexString to UInt8Array.

# Castor breaking changes
1. The `parseDID` method has been removed from the `Castor` interface. Use the static `DID.fromString()` method instead.

```typescript
// Before
const did = castor.parseDID("did:prism:123456");

// After
import { DID } from "@hyperledger/identus-domain";
const did = DID.fromString("did:prism:123456");
```

2. The `createPrismDID` method is replaced by `createDID('prism', opts)`. Keys are now provided as **private keys** (not public keys), and the master key is part of the `keys` object.

```typescript
// Before
const did = await castor.createPrismDID(
  masterPublicKey,
  [service],
  { ISSUING_KEY: [issuingPublicKey] }
);

// After
const did = await castor.createDID('prism', {
  keys: {
    MASTER_KEY: masterPrivateKey,
    ISSUING_KEY: [issuingPrivateKey],
  },
  services: [service],
});
```

3. The `createPeerDID` method is replaced by `createDID('peer', opts)`. Keys are now provided as private keys in a structured object.

```typescript
// Before
const did = await castor.createPeerDID(
  [authPublicKey, agreementPublicKey],
  services
);

// After
const did = await castor.createDID('peer', {
  keys: {
    AUTHENTICATION_KEY: [authPrivateKey],
    KEY_AGREEMENT_KEY: [agreementPrivateKey],
  },
  services,
});
```

4. The `createPrismDIDAtalaObject` method is replaced by `publishDID`.

```typescript
// Before
const buffer = await castor.createPrismDIDAtalaObject(privateKey, did);

// After
const buffer = await castor.publishDID('prism', {
  key: privateKey,
  did,
});
```

# Agent breaking changes
1. Castor constructor
Castor becomes DID agnostic and easy to extend with additional did methods with all the generic operations, create, update, deactivate, resolve.

The `ExtraResolver` type is removed. Pass `DIDMethodInput[]` instances instead.

```typescript
// Before
const castor = new Castor(apollo, extraResolvers, prismResolverEndpoint);

// After
const castor = new Castor(apollo, extraMethods);
```

1.1. Customize prism-did resolver
```typescript
import { PrismDIDMethod } from "@hyperledger/identus-sdk";

const castor = new Castor(apollo, [
  new PrismDIDMethod("https://my-vdr.example.com/"),
]);
```

1.2 Adding a custom did method
By using module augmentation we can implement a did agnostic type-safe wrapper for current did methods (prism, peer) and future ones.

```typescript
export type CreatePayload = {
  services?: DIDDocument.Service[];
  keys: DIDKeys; // You customize the type with your own payloads
};
```

Module augmentation
declare module "@hyperledger/identus-sdk" {
  interface DIDMethodTypeMap {
    peer: {
      createPayload: CreatePayload;
    };
  }
}

2. Agent.initialize now accepts an async function that returns a seed (UInt8Array) vs previous hexString, if no seed function is provided, will start with random seed

3. CreatePrismDID and CreatePrismDIDArgs from @hyperledger/identus-sdk, can still be used but is deprecated. We are introducing a new simplified function CreatePrismDIDWithKeys and type CreatePrismDIDWithKeysArgs from @hyperledger/identus-sdk

4. `agent.createNewPrismDID()` and `agent.createNewPeerDID()` are not replaced by `agent.createDID`.

```typescript
// Create a Prism DID through the Agent
const prismDID = await agent.createDID('prism', {
  keys: { MASTER_KEY: masterSK },
  alias: 'my-issuer',
});

// Create a Peer DID through the Agent
const peerDID = await agent.createDID('peer', {
  keys: {
    AUTHENTICATION_KEY: [authSK],
    KEY_AGREEMENT_KEY: [agreementSK],
  },
});
```

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
