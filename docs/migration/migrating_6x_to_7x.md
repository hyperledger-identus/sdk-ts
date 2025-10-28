# Migration guide from 6.X to 7.X
This migration guide applies to both @hyperledger/identus-edge-agent-sdk and @hyperledger/identus-sdk.

## Breaking Changes
If core internals where not in use, this breaking changes are likely to not affect you, except if you weren't relying on the Agent but using the internals directly for some things.

### feat: making didcomm plugin (#425)

**BREAKING CHANGE:** Revocation handling is no longer automatic

**What Changed:**
- DIDComm functionality has been refactored into a plugin architecture
- Credential revocation notifications are no longer handled automatically by the SDK
- Revocation messages must now be explicitly passed to the `agent.handle()` function for processing
- Major reorganization of DIDComm-related code into `src/plugins/internal/didcomm/` and `src/plugins/internal/oea/`
- Connection management protocols (MediateDeny, MediateGrant, PickupDelivery, etc.) moved to plugin structure
- Protocol types and invitation handlers restructured

**Migration Required:**
- Update code that expects automatic revocation handling to explicitly call `agent.handle()` with revocation messages
- Review any custom integrations with DIDComm protocols as file paths and module structures have changed
- If using Out-of-Band (OOB) invitations or presentation protocols, verify imports from new plugin locations

**Files Changed:** 89 files (630 insertions, 590 deletions)


### feat!: Anoncreds moving to plugin export (#420)

**BREAKING CHANGE:** Anoncreds is no longer included in the core SDK bundle

**What Changed:**
- Anoncreds functionality has been extracted from the core SDK bundle into a separate plugin
- Anoncreds is no longer exported by default from the main SDK
- A new plugin system entry point has been created at `src/plugins/internal/anoncreds/plugin.ts`
- Anoncreds must now be explicitly loaded as a plugin if needed
- This significantly reduces the core bundle size for applications that don't use Anoncreds

**Migration Required:**
- Import and register the Anoncreds plugin explicitly in your application:
  ```typescript
  import { AnoncredsPlugin } from '@atala/prism-wallet-sdk/plugins'
  // Register plugin with your agent configuration
  ```
- Update any imports that previously expected Anoncreds to be available by default
- E2E tests updated to show plugin registration pattern

### feat!: updating DIDComm connection protocols (#400)

**BREAKING CHANGE:** Removed `HandshakeRequest.safeParseBody` method

**What Changed:**
- The `HandshakeRequest.safeParseBody` static method has been completely removed
- Protocol parsing logic has been refactored and centralized
- Changes to how connection protocols handle message body parsing
- Updates to MediationKeysUpdateList, PickupReceived, PickupRequest, and RevocationNotification protocols
- Protocol types file has been cleaned up (removed 26 lines of unused types)

**Migration Required:**
- Replace any calls to `HandshakeRequest.safeParseBody()` with the new parsing mechanism
- Review connection establishment code for any dependencies on the removed method
- Update tests that relied on `safeParseBody` functionality

feat(Pluto)!: updating Pluto to extend Startable (#399)

**BREAKING CHANGE:** `Pluto.stop()` is now a required method

**What Changed:**
- The `Pluto` interface now extends the `Startable` interface
- All Pluto implementations must now provide a `stop()` method for proper cleanup
- The `stop()` method was previously optional but is now mandatory
- This ensures consistent lifecycle management across all storage implementations
- RxDB Store implementation updated to properly implement the `stop()` method

**Migration Required:**
- If you have a custom Pluto implementation, you must implement the `stop()` method
- The `stop()` method should handle cleanup of database connections, event listeners, and any other resources
- Update initialization code to call `pluto.stop()` during application shutdown or cleanup
- Example implementation:
  ```typescript
  async stop(): Promise<void> {
    // Clean up database connections
    // Remove event listeners
    // Close any open resources
  }
  ```

### feat!: updating DIDComm other protocols (#397)

**BREAKING CHANGE:** Protocol helper methods removed and message handling refactored

**What Changed:**
- Removed 51 lines of protocol helper functions from `ProtocolHelpers.ts`
- `BasicMessage` protocol simplified (reduced from more complex implementation)
- `ProblemReport` protocol significantly refactored (84 lines changed)
- `OutOfBandInvitation` and `PrismOnboardingInvitation` protocol handling updated
- Removed 24 lines of type definitions from protocol types file
- Overall simplification and cleanup of protocol handling code

**Migration Required:**
- Review any code using BasicMessage or ProblemReport protocols
- Update OutOfBand invitation handling if you have custom implementations
- Check for any dependencies on removed helper functions from ProtocolHelpers

fix!: refactor JWK implementation into a pollux task (#386)

**BREAKING CHANGE:** Removed `KeyProperties.type` field from Apollo key management

**What Changed:**
- The `KeyProperties.type` field has been completely removed
- This field previously stored curve type information (e.g., "Curve25519", "EC")
- Curve type information is now determined automatically from other key properties
- New JWK (JSON Web Key) utilities added to Pollux at `src/pollux/utils/jwt/FromJWK.ts` (145 new lines)
- Apollo key creation simplified - no longer needs or accepts the `type` parameter
- Extensive new test coverage added for JWK functionality (253 lines of tests)

**Migration Required:**
- Remove any code that sets `KeyProperties.type` when creating keys with Apollo
- The `type` field will be silently ignored if provided, but should be removed from your code
- If you have custom key creation logic, verify it works without the `type` parameter
- Example migration:
  ```typescript
  // Before:
  apollo.createPrivateKey({ type: "EC", curve: "secp256k1", ... })
  
  // After:
  apollo.createPrivateKey({ curve: "secp256k1", ... })
  ```

### feat!: refactor ConnectionManager (#394)

**BREAKING CHANGE:** Major Agent API changes - removed connection management from constructor

**What Changed:**
- Removed `connectionManager` parameter from Agent constructor
- Removed `mediationHandler` parameter from Agent constructor  
- Removed `PlutoMediatorStore` from public exports
- Deleted entire `ConnectionsManager` class (304 lines removed)
- Deleted `BasicMediatorHandler` class (263 lines removed)
- Deleted `PlutoMediatorStore` class (43 lines removed)
- Connection management now handled internally through new architecture:
  - New `ConnectionsManager` implementation (86 lines)
  - New `Connection` and `JobManager` classes
  - DIDComm connection handling moved to dedicated modules
- New standalone functions: `StartFetchingMessages` and `StartMediator`
- Removed `MediationGrant` and `PickupRunner` protocols (replaced with new implementations)

**Migration Required:**
- **Agent Initialization:** Remove `connectionManager` and `mediationHandler` from Agent constructor
  ```typescript
  // Before:
  const agent = Agent.initialize({ 
    connectionManager: myConnectionManager,
    mediationHandler: myMediationHandler,
    // ... other options
  })
  
  // After:
  const agent = Agent.initialize({ 
    // ... other options (connection management is now internal)
  })
  ```
- The Agent now manages connections internally - no need to provide external connection management
- If you extended or customized `BasicMediatorHandler` or `PlutoMediatorStore`, you'll need to refactor to use the new internal APIs
- Review any code that imported `ConnectionsManager`, `MediatorHandler`, or `PlutoMediatorStore` types

### feat!: updating DIDComm presentation protocols (#383)

**BREAKING CHANGE:** Removed static factory methods from presentation protocol classes

**What Changed:**
- **Removed Methods:**
  - `Presentation.makePresentationFromRequest()` - removed
  - `ProposePresentation.makeProposalFromRequest()` - removed
  - `RequestPresentation.makeRequestFromProposal()` - removed
  - `ProofTypes` interface - removed entirely
- Removed 93 lines of helper functions from `ProtocolHelpers.ts`
- Presentation, ProposePresentation, and RequestPresentation classes refactored to remove convenience factory methods
- Protocol construction now requires explicit instantiation with all required parameters
- Test files significantly updated to reflect new construction patterns

**Migration Required:**
- Replace factory method calls with direct class construction:
  ```typescript
  // Before:
  const presentation = Presentation.makePresentationFromRequest(request, credentials)
  const proposal = ProposePresentation.makeProposalFromRequest(request)
  const request = RequestPresentation.makeRequestFromProposal(proposal)
  
  // After:
  const presentation = new Presentation({
    // explicitly provide all required fields
  })
  ```
- Update any code using the `ProofTypes` interface
- Review presentation protocol flows to ensure all required fields are provided during construction

### feat: update DIDComm json message types (#375)

**BREAKING CHANGE:** `AttachmentDescriptor` now only accepts bodies with `json` property

**What Changed:**
- Tightened type safety for `AttachmentDescriptor.body`
- The body of an `AttachmentDescriptor` must now explicitly include a `json` property
- Removed support for other body formats in `AttachmentDescriptor`
- Message attachment handling simplified in Mercury wrapper (36 lines reduced)
- Added comprehensive test coverage for message attachments (47 new test lines)
- This aligns with DIDComm v2 specification requirements

**Migration Required:**
- Ensure all message attachments use the `json` property in their body:
  ```typescript
  // Before (may have worked):
  const attachment = {
    data: {
      base64: encodedData
    }
  }
  
  // After (required):
  const attachment = {
    data: {
      json: jsonData  // Must use json property
    }
  }
  ```
- Review any custom message creation code that uses attachments
- Update tests that create AttachmentDescriptor instances

### feat!: updating DIDComm protocols closer to specification (#373)

**BREAKING CHANGE:** Removed static factory methods from credential issuance protocols

**What Changed:**
- **Removed Methods:**
  - `IssueCredential.build()` - removed
  - `IssueCredential.makeIssueFromRequestCredential()` - removed
  - `OfferCredential.build()` - removed
  - `OfferCredential.makeOfferFromProposedCredential()` - removed
- Protocol construction now requires explicit parameter specification
- Extensive test updates to reflect new construction patterns

**Migration Required:**
- Replace factory method calls with direct class construction:
  ```typescript
  // Before:
  const offer = OfferCredential.build()
  const issue = IssueCredential.makeIssueFromRequestCredential(request)
  
  // After:
  const offer = new OfferCredential({
    // explicitly provide all required fields
    from: did,
    to: recipientDid,
    body: credentialBody,
    // ... other required fields
  })
  ```
- Update credential issuance flows to explicitly construct protocol messages
- Review test files for examples of the new construction patterns


### feat(Pollux)!: plugins (#349)

**BREAKING CHANGE:** Complete architectural overhaul - Pollux class removed, plugin system introduced

**What Changed:**
This is the **largest breaking change** in this release, fundamentally restructuring how credential operations work:

- **Pollux Class Removed:** The entire `Pollux` class (1,355 lines) has been removed
- **Plugin System Introduced:** All credential functionality moved to plugin-based architecture
- **Three Main Plugin Categories:**
  1. **Anoncreds Plugin** (`src/plugins/internal/anoncreds/`)
     - CredentialIssue, CredentialOffer, PresentationRequest, PresentationVerify
     - AnoncredsLoader module (220 lines)
     - Must be explicitly loaded if Anoncreds support is needed
  
  2. **DIF (Decentralized Identity Foundation) Plugin** (`src/plugins/internal/dif/`)
     - IsCredentialRevoked, PresentationRequest, PresentationVerify
     - CreatePresentationDefinition module
     - Handles DIF Presentation Exchange protocol
  
  3. **OEA (OpenID for Verifiable Credentials) Plugin** (`src/plugins/internal/oea/`)
     - JWT and SD-JWT credential support
     - CredentialIssue, CredentialOffer, PresentationRequest for both formats

- **Agent Constructor Changes:**
  - Removed `mediationHandler` parameter (no longer required)
  - Removed `connectionManager` parameter (no longer required)
  - Agent initialization significantly simplified

- **New Core Infrastructure:**
  - Plugin system with `Plugin` interface and `PluginManager` (36 + 30 lines)
  - Task-based architecture for credential operations (`src/utils/tasks.ts`)
  - Protocol payload handling improved (`src/domain/protocols/Payload.ts`)

- **Credential Model Changes:**
  - `VerifiableCredential` class streamlined (466 lines reduced)
  - JWT and SD-JWT credential models refactored
  - New utility modules in `src/pollux/utils/jwt/`

- **Removed Utilities:**
  - `src/domain/utils/hash.ts` (26 lines removed)
  - `src/domain/utils/randomBytes.ts` (8 lines removed)
  - Various Pollux utils consolidated into plugin-specific implementations

**Migration Required:**

1. **Remove Pollux Initialization:**
   ```typescript
   // Before:
   const pollux = new Pollux(...)
   const agent = Agent.initialize({
     pollux,
     mediationHandler: handler,
     connectionManager: manager,
     // ...
   })
   
   // After:
   const agent = Agent.initialize({
     // pollux, mediationHandler, connectionManager no longer needed
     // ...
   })
   ```

2. **Load Required Plugins:**
   This is just an example on how the SDK can be extended with new DIDComm protocols, allowing you to customize your own flows but is not require for most implementations that are using the Agent export.

   ```typescript
   import { AnoncredsPlugin } from '@atala/prism-wallet-sdk/plugins/anoncreds'
   import { DIFPlugin } from '@atala/prism-wallet-sdk/plugins/dif'
   import { OEAPlugin } from '@atala/prism-wallet-sdk/plugins/oea'
   
   agent.registerPlugin(AnoncredsPlugin)
   agent.registerPlugin(DIFPlugin)  
   agent.registerPlugin(OEAPlugin)
   ```

3. **Update Credential Operations:**
   - Credential issuance, verification, and presentation operations now go through the plugin system
   - The Agent will automatically route operations to the appropriate plugin based on credential type
   - No need to call Pollux methods directly anymore

4. **Update Imports:**
   - Many internal types are no longer exported
   - Import credential types from the main SDK export
   - Plugin-specific types available from plugin modules

5. **Review Custom Integrations:**
   - Any custom code extending or wrapping Pollux must be completely rewritten
   - Use the plugin interface to add custom credential format support
   - Review backup/restore functionality as it has changed
