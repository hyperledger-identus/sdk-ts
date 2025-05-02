## Agent

The Agent is the central module of the SDK, coordinating the other modules and providing the primary means of interacting with the SDK.

It has several important submodules:

### Connections
Manages connections with other Agents and Mediators.

This generally happens as a side effect of the existing flows, but can also be done manually.

```TS
import { DIDCommConnection } from "@hyperledger/identus-sdk/plugins/didcomm";
const connection = new DIDCommConnection(remoteDID, hostDID)
agent.connections.add(connection);
```


### Events
A simple event register and listener.

```TS
import { ListenerKey } from "@hyperledger/identus-sdk";
agent.events.addListener(ListenerKey.MESSAGE, callbackFn);
```


### Plugins
Allows the registering of plugins to extend functionality.

By default the SDK uses the DIDComm, DIF, and OEA plugins.

```TS
import { plugin } from "@hyperledger/identus-sdk/plugins/anoncreds";
agent.plugins.register(plugin);
```


### Dependencies
 - [Apollo](../apollo/README.md)
 - [Castor](../castor/README.md)
 - [Mercury](../mercury/README.md)
 - [Plugins](../plugins/README.md)
 - [Pluto](../pluto/README.md)
