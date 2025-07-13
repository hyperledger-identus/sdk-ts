# Migration guide from 6.X to 7.X
This migration guide applies to both @hyperledger/identus-edge-agent-sdk and @hyperledger/identus-sdk.

## Breaking Changes
If core internals where not in use, this breaking changes are likely to not affect you, except if you weren't relying on the Agent but using the internals directly for some things.

### 1. Anoncreds, DIDComm, OEA and DIF no longer exported in core bundle.
For most cases all functionality is still available through plugins.

```typescript
import {OEA} from '@hyperledger/identus-sdk/plugins/oea';
import * as DIDComm from '@hyperledger/identus-sdk/plugins/didcomm'
import {DIF} from '@hyperledger/identus-sdk/plugins/dif'
import * as Anoncreds from '@hyperledger/identus-sdk/plugins/anoncreds'
```

If there's other functionality that you can no longer find in the plugins please let us now and open an issue.

### 2. Revocation no longer handled automatically, Revocation message now needs to be passed to agent.handle function.

On version 6.X If you would receive a Credential Revocation message we would automatically update the Credential for you, updating revoked to true. That is no longer like that.

```typescript
agent.addEventListener(ListenerKeys.Message, async (messages) => {
    const revokations = messages.filter(({piuri}) => piuri === SDK.ProtocolType.PrismRevocation);
    for (let revocation of revocations) {
        await agent.handle(revocation)
    }
})
```

