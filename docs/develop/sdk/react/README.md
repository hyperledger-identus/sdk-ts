# React

The `@hyperledger/identus-react` package provides a suite of React context providers and hooks designed to seamlessly integrate the `@hyperledger/identus-sdk` into your React applications. By abstracting the complexities of agent lifecycle management, database connections, and asynchronous operations, this package allows you to focus on building your wallet or decentralized identity (DID) application.

## Installation

Install the React SDK package along with its peer dependencies:

```bash
npm install @hyperledger/identus-react @hyperledger/identus-sdk react react-dom
# or
yarn add @hyperledger/identus-react @hyperledger/identus-sdk react react-dom
```

## Architecture Concepts

The package uses a robust Provider pattern to manage state and connections across your application:
- **Providers**: Wrap your component tree to manage long-lived connections (e.g., `DatabaseProvider`, `AgentProvider`).
- **Contexts**: Maintain shared state for underlying SDK entities.
- **Hooks**: Provide clean, typed access to contexts (e.g., `useAgent`, `usePrismDID`) to execute identity operations directly within your components.

## Setup & Providers

To use the hooks, you first need to wrap your application in the appropriate providers. Providers handle the initialization and lifecycle of underlying SDK services.

### Core Providers

Here is an example setup initializing the core database and agent providers:

```tsx
import React, { useEffect } from 'react';
import { DatabaseProvider, AgentProvider, useDatabase, useAgent } from '@hyperledger/identus-react';
import { StorageType } from '@hyperledger/identus-sdk';

// A child component utilizing the providers
const AppContent = () => {
    const { start: startDb, state: dbState } = useDatabase();
    const { start: startAgent, state: agentState } = useAgent();

    useEffect(() => {
        // Initialize the local database
        startDb({
            name: 'my-identus-database',
            storageType: StorageType.IndexDB
        }).then(() => {
            // Once the DB is ready, start the agent
            startAgent();
        });
    }, [startDb, startAgent]);

    return (
        <div>
            <p>Database State: {dbState}</p>
            <p>Agent State: {agentState}</p>
        </div>
    );
};

// Application Root
const App = () => {
    return (
        <DatabaseProvider>
            <AgentProvider>
                {/* Other specialized providers like CredentialsProvider, ConnectionsProvider can be nested here */}
                <AppContent />
            </AgentProvider>
        </DatabaseProvider>
    );
};

export default App;
```

## Available Hooks

The SDK exposes specific hooks to manage DIDs, credentials, messaging, and connections. Each hook requires its corresponding provider (or a higher-level provider like `AgentProvider` or `DatabaseProvider`) to be present in the component tree.

### Connection & Agent Management
- **`useDatabase()`**: Access local database operations (Pluto), initialize storage, and manage global settings.
- **`useAgent()`**: Manage the active DIDComm agent's lifecycle (`start`, `stop`) and access its instance.
- **`useConnections()`**: Access and manage established peer-to-peer (DIDComm) connections.
- **`useMessages()`**: Access the message inbox, fetch unread messages, and mark messages as read.

### DID Management
- **`usePrismDID()`**: Create and manage long-lived, blockchain-anchored Prism DIDs.
- **`usePeerDID()`**: Quickly generate ephemeral Peer DIDs for direct, off-ledger communication.
- **`useCastor()`**: Access the underlying Castor service for advanced DID operations and resolution.

### Credential Issuance & Verification
- **`useCredentials()`**: Retrieve, organize, and delete stored Verifiable Credentials from the local wallet.
- **`useIssuer()`**: Expose operations for issuing credentials. Create Out-of-Band (OOB) offers and issue credentials directly to holders.
- **`useHolder()`**: Manage incoming credential offers and requests. Parse OOB messages, accept credential offers, and automatically handle presentation requests.
- **`useVerifier()`**: Issue presentation requests and verify incoming credential presentations.

## Configuration & Resolvers

The package provides utility configurations to simplify connecting to external services.
For example, you can create a custom DID resolver to interact with your specific node infrastructure:

```ts
import { createResolver } from '@hyperledger/identus-react/resolver';

// Produce a custom Prism DID resolver compatible with Castor
const MyCustomResolver = createResolver('https://my-node.example.com/prism-agent/dids');
```