import Head from "next/head";
import { useState, useEffect } from "react";
import SDK from "@hyperledger/identus-sdk";
import { StorageType } from "@trust0/ridb";

import { WithAgentProvider, IssuerProvider, HolderProvider, VerifierProvider, createAgentProvider, MessagesProvider } from "@/react";
import { useIssuer, useHolder, useVerifier, useMessages } from "@/react/hooks";
import { Message } from "@/react/messages";
import { RIDBDatabase } from "@trust0/ridb-react";
import { issuerSchemas, migrations } from "@/react/db";

// Issuer Agent Component
function IssuerColumn({ dbName }: { dbName: string }) {
  const { agent, start, stop, state, createOOBOffer, issueCredential } = useIssuer();
  const { messages } = useMessages();
  const [oobOffer, setOobOffer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-start agent when component mounts
  useEffect(() => {
    const startAgent = async () => {
      try {
        setLoading(true);
        setError(null);
        await start({ dbName: dbName, storageType: StorageType.IndexDB });
      } catch (err) {
        setError(`Error starting agent: ${err}`);
      } finally {
        setLoading(false);
      }
    };

    if (state === SDK.Domain.Startable.State.STOPPED) {
      startAgent();
    }
  }, [start, state, dbName]);

  const handleCreateOOBOffer = async () => {
    if (!agent) return;

    try {
      setLoading(true);
      setError(null);
      const claims: any = [
        { name: 'name', value: 'John Doe' },
        { name: 'age', value: '30' }
      ];
      const offer = await createOOBOffer(SDK.Domain.CredentialType.JWT, '12345', claims);
      setOobOffer(offer);
    } catch (err) {
      setError(`Error creating OOB offer: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const getStateColor = () => {
    switch (state) {
      case SDK.Domain.Startable.State.RUNNING:
        return "text-green-600";
      case SDK.Domain.Startable.State.STARTING:
      case SDK.Domain.Startable.State.STOPPING:
        return "text-yellow-600";
      case SDK.Domain.Startable.State.STOPPED:
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
        🏛️ Issuer Agent
      </h2>

      {/* Agent Status */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Agent Status</h3>
        <p className={`font-medium ${getStateColor()}`}>
          Status: {state}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Database: {dbName}
        </p>
      </div>

      {/* Issuer Actions */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Issuer Actions</h3>
        <button
          onClick={handleCreateOOBOffer}
          disabled={!agent || loading || state !== SDK.Domain.Startable.State.RUNNING}
          className="px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed w-full mb-3"
        >
          {loading ? "Creating..." : "Create Credential Offer"}
        </button>

        {oobOffer && (
          <div className="mt-2 p-3 bg-green-50 rounded-md">
            <p className="text-xs font-medium text-green-800">OOB Offer Created:</p>
            <textarea
              value={oobOffer}
              readOnly
              className="w-full text-xs text-green-600 font-mono max-h-32 min-h-20 resize-none border rounded p-2 mt-2"
              placeholder="OOB offer will appear here..."
            />
            <button
              onClick={() => navigator.clipboard.writeText(oobOffer)}
              className="mt-2 px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700"
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </div>

      {/* Messages Section */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Messages ({messages.length})</h3>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div key={index} className="bg-white p-3 rounded border">
                <Message message={msg.message} />
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-600">No messages yet</p>
          )}
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800 font-medium text-sm">Error:</p>
          <p className="text-red-600 text-xs mt-1">{error}</p>
        </div>
      )}
    </div>
  );
}

// Holder Agent Component
function HolderColumn({ dbName }: { dbName: string }) {
  const { agent, start, stop, state, parseOOBOffer, acceptOOBOffer, handlePresentationRequest } = useHolder();
  const { messages } = useMessages();
  const [credentials, setCredentials] = useState<SDK.Domain.Credential[]>([]);
  const [oobInput, setOobInput] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-start agent when component mounts
  useEffect(() => {
    const startAgent = async () => {
      try {
        setLoading(true);
        setError(null);
        await start({ dbName: dbName, storageType: StorageType.IndexDB });
      } catch (err) {
        setError(`Error starting agent: ${err}`);
      } finally {
        setLoading(false);
      }
    };

    if (state === SDK.Domain.Startable.State.STOPPED) {
      startAgent();
    }
  }, [start, state, dbName]);

  const handleAcceptOffer = async () => {
    if (!agent || !oobInput.trim()) return;

    try {
      setLoading(true);
      setError(null);
      const peerDID = await agent.createNewPeerDID();
      const offer = await parseOOBOffer(oobInput, peerDID);
      await acceptOOBOffer(offer);
      setOobInput('');
    } catch (err) {
      setError(`Error accepting offer: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const getStateColor = () => {
    switch (state) {
      case SDK.Domain.Startable.State.RUNNING:
        return "text-green-600";
      case SDK.Domain.Startable.State.STARTING:
      case SDK.Domain.Startable.State.STOPPING:
        return "text-yellow-600";
      case SDK.Domain.Startable.State.STOPPED:
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full">
      <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">
        👤 Holder Agent
      </h2>

      {/* Agent Status */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Agent Status</h3>
        <p className={`font-medium ${getStateColor()}`}>
          Status: {state}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Database: {dbName}
        </p>
      </div>

      {/* Holder Actions */}
      <div className="mb-6 p-4 bg-green-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Holder Actions</h3>
        <div className="space-y-2">
          <textarea
            value={oobInput}
            onChange={(e) => setOobInput(e.target.value)}
            placeholder="Paste OOB Offer JSON here..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm min-h-20"
            disabled={!agent || state !== SDK.Domain.Startable.State.RUNNING}
          />
          <button
            onClick={handleAcceptOffer}
            disabled={!agent || loading || !oobInput.trim() || state !== SDK.Domain.Startable.State.RUNNING}
            className="px-3 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed w-full"
          >
            {loading ? "Accepting..." : "Accept Credential Offer"}
          </button>
        </div>

        {credentials.length > 0 && (
          <div className="mt-4">
            <p className="text-sm font-medium text-green-800 mb-2">Credentials ({credentials.length}):</p>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {credentials.map((cred, index) => (
                <div key={index} className="p-2 bg-green-100 rounded text-xs">
                  <p className="font-mono">{cred.id}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Messages Section */}
      <div className="mb-6 p-4 bg-green-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Messages ({messages.length})</h3>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div key={index} className="bg-white p-3 rounded border">
                <Message message={msg.message} />
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-600">No messages yet</p>
          )}
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800 font-medium text-sm">Error:</p>
          <p className="text-red-600 text-xs mt-1">{error}</p>
        </div>
      )}
    </div>
  );
}

// Verifier Agent Component
function VerifierColumn({ dbName }: { dbName: string }) {
  const { agent, start, stop, state, issuePresentationRequest, verifyPresentation } = useVerifier();
  const { messages } = useMessages();
  const [targetDID, setTargetDID] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [verificationResults, setVerificationResults] = useState<Array<{ id: string, result: boolean }>>([]);

  // Auto-start agent when component mounts
  useEffect(() => {
    const startAgent = async () => {
      try {
        setLoading(true);
        setError(null);
        await start({ dbName: dbName, storageType: StorageType.IndexDB });
      } catch (err) {
        setError(`Error starting agent: ${err}`);
      } finally {
        setLoading(false);
      }
    };

    if (state === SDK.Domain.Startable.State.STOPPED) {
      startAgent();
    }
  }, [start, state, dbName]);

  const handleRequestPresentation = async () => {
    if (!agent || !targetDID.trim()) return;

    try {
      setLoading(true);
      setError(null);
      const toDID = SDK.Domain.DID.fromString(targetDID);
      await issuePresentationRequest(
        SDK.Domain.CredentialType.JWT,
        toDID,
        {
          issuerDID: '',
          holderDID: targetDID,
          claims: {
            name: {
              type: 'string',
              pattern: 'John Doe'
            }
          }
        } as any
      );
    } catch (err) {
      setError(`Error requesting presentation: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const getStateColor = () => {
    switch (state) {
      case SDK.Domain.Startable.State.RUNNING:
        return "text-green-600";
      case SDK.Domain.Startable.State.STARTING:
      case SDK.Domain.Startable.State.STOPPING:
        return "text-yellow-600";
      case SDK.Domain.Startable.State.STOPPED:
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full">
      <h2 className="text-2xl font-bold text-purple-900 mb-6 text-center">
        🔍 Verifier Agent
      </h2>

      {/* Agent Status */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Agent Status</h3>
        <p className={`font-medium ${getStateColor()}`}>
          Status: {state}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Database: {dbName}
        </p>
      </div>

      {/* Verifier Actions */}
      <div className="mb-6 p-4 bg-purple-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Verifier Actions</h3>
        <div className="space-y-2">
          <input
            type="text"
            value={targetDID}
            onChange={(e) => setTargetDID(e.target.value)}
            placeholder="Target DID for presentation request..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            disabled={!agent || state !== SDK.Domain.Startable.State.RUNNING}
          />
          <button
            onClick={handleRequestPresentation}
            disabled={!agent || loading || !targetDID.trim() || state !== SDK.Domain.Startable.State.RUNNING}
            className="px-3 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed w-full"
          >
            {loading ? "Requesting..." : "Request Presentation"}
          </button>
        </div>

        {verificationResults.length > 0 && (
          <div className="mt-4">
            <p className="text-sm font-medium text-purple-800 mb-2">Verification Results:</p>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {verificationResults.map((result, index) => (
                <div key={index} className={`p-2 rounded text-xs ${result.result ? 'bg-green-100' : 'bg-red-100'}`}>
                  <p className="font-mono">{result.id}: {result.result ? '✅ Valid' : '❌ Invalid'}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Error Display */}
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800 font-medium text-sm">Error:</p>
          <p className="text-red-600 text-xs mt-1">{error}</p>
        </div>
      )}
    </div>
  );
}

// Wrapper components for each agent with their specific providers
function IssuerColumnWithProvider({ dbName, seed, resolverUrl, mediatorDID }: {
  dbName: string,
  seed: any,
  resolverUrl: string,
  mediatorDID: SDK.Domain.DID
}) {
  const Provider = createAgentProvider({ seed, resolverUrl, mediatorDID, resolvers: [] });
  return (
    <RIDBDatabase startOptions={{ dbName, storageType: StorageType.IndexDB }} schemas={issuerSchemas} migrations={migrations as any}>
      <Provider>
        <MessagesProvider>
          <IssuerProvider>
            <IssuerColumn dbName={dbName} />
          </IssuerProvider>
        </MessagesProvider>
      </Provider>
    </RIDBDatabase>
  );
}

function HolderColumnWithProvider({ dbName, seed, resolverUrl, mediatorDID }: {
  dbName: string,
  seed: any,
  resolverUrl: string,
  mediatorDID: SDK.Domain.DID
}) {
  return (
    <WithAgentProvider
      seed={seed}
      resolverUrl={resolverUrl}
      mediatorDID={mediatorDID}
      resolvers={[]}
    >
      <HolderProvider>
        <HolderColumn dbName={dbName} />
      </HolderProvider>
    </WithAgentProvider>
  );
}

function VerifierColumnWithProvider({ dbName, seed, resolverUrl, mediatorDID }: {
  dbName: string,
  seed: any,
  resolverUrl: string,
  mediatorDID: SDK.Domain.DID
}) {
  return (
    <WithAgentProvider
      seed={seed}
      resolverUrl={resolverUrl}
      mediatorDID={mediatorDID}
      resolvers={[]}
    >
      <VerifierProvider>
        <VerifierColumn dbName={dbName} />
      </VerifierProvider>
    </WithAgentProvider>
  );
}

// Main Demo Component
function IdentityDemo({ seed, resolverUrl, mediatorDID }: {
  seed: any,
  resolverUrl: string,
  mediatorDID: SDK.Domain.DID
}) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hyperledger Identus React Demo
        </h1>
        <p className="text-lg text-gray-600">
          Complete Credential Lifecycle: Issue → Hold → Verify
        </p>
        <p className="text-sm text-gray-500 mt-2">
          All agents start automatically when the page loads
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <IssuerColumnWithProvider
          dbName="agent-issuer"
          seed={seed}
          resolverUrl={resolverUrl}
          mediatorDID={mediatorDID}
        />
        <HolderColumnWithProvider
          dbName="agent-holder"
          seed={seed}
          resolverUrl={resolverUrl}
          mediatorDID={mediatorDID}
        />
        <VerifierColumnWithProvider
          dbName="agent-verifier"
          seed={seed}
          resolverUrl={resolverUrl}
          mediatorDID={mediatorDID}
        />
      </div>
    </div>
  );
}

export default function Home() {
  const seed = undefined as any
  const mediatorDID = SDK.Domain.DID.fromString("did:peer:2.Ez6LSr75gLoSwaVHS7MTzcKLXjt9onJMXY9aVEBGWY8ahWPdn.Vz6Mkw5SdxCCxRTfHx1LaGvh2e5JWPWJs7Ek6mjiPXRxqnYHT.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHBzOi8vbWVkaWF0b3IudHJ1c3QwLmlkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vbWVkaWF0b3IudHJ1c3QwLmlkL3dzIiwiYSI6WyJkaWRjb21tL3YyIl19fQ");
  const resolverUrl = "https://resolver.jribo.kiwi/1.0/identifiers/";
  return (
    <>
      <Head>
        <title>Identus React Demo - Credential Lifecycle</title>
        <meta name="description" content="Demo of the complete verifiable credential lifecycle with Issuer, Holder, and Verifier agents" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <IdentityDemo
          seed={seed}
          resolverUrl={resolverUrl}
          mediatorDID={mediatorDID}
        />
      </div>
    </>
  );
} 