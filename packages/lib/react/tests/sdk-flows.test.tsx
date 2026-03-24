/**
 * @vitest-environment jsdom
 */
import React, { type ReactNode } from 'react';
import { describe, expect, test, vi, afterEach } from 'vitest';
import { renderHook, act, cleanup } from '@testing-library/react';

import { Agent, Domain, Pluto, ProtocolType } from '@hyperledger/identus-sdk';

import { DatabaseProvider } from '../src/provider/Database';
import { CredentialsProvider } from '../src/provider/Credentials';
import { ConnectionsProvider } from '../src/provider/Connections';
import { MessagesProvider } from '../src/provider/Messages';
import { IssuerProvider } from '../src/provider/Issuer';
import { HolderProvider } from '../src/provider/HolderProvider';
import { VerifierProvider } from '../src/provider/VerifierProvider';
import { PeerDIDProvider, PrismDIDProvider } from '../src/provider/DID';
import { AgentContext } from '../src/context';
import { useDatabase } from '../src/hooks/useDatabase';
import { useIssuer } from '../src/hooks/useIssuer';
import { useHolder } from '../src/hooks/useHolder';
import { useVerifier } from '../src/hooks/useVerifier';
import { usePeerDID } from '../src/hooks/usePeerDID';
import { usePrismDID } from '../src/hooks/usePrismDID';
import { useAgent } from '../src/hooks/useAgent';
import { useMessages } from '../src/hooks/useMessages';
import { useCredentials } from '../src/hooks/useCredentials';

// ---------------------------------------------------------------------------
// Shared test infrastructure
// ---------------------------------------------------------------------------

const TEST_PEER_DID = Domain.DID.fromString(
    'did:peer:2.Ez6LSbysY2xFMRpGMhb7tFTLMpeuPRaqaWM1yECx2AtzE3KCc'
);

/**
 * Bridge component that creates a real Agent.initialize({ pluto }) and provides
 * it via AgentContext. We spy on agent methods rather than mocking to keep as
 * much real behaviour as possible.
 */
function MockAgentBridge({ children }: { children: ReactNode }) {
    const { pluto } = useDatabase();
    const [agent, setAgent] = React.useState<Agent | null>(null);

    React.useEffect(() => {
        if (pluto && !agent) {
            const a = Agent.initialize({ pluto });
            // Spy on network-bound methods to prevent real network calls
            vi.spyOn(a, 'send').mockResolvedValue(undefined);
            vi.spyOn(a, 'sendMessage').mockResolvedValue(undefined);
            setAgent(a);
        }
    }, [pluto, agent]);

    const ctx = {
        agent,
        setAgent,
        start: async () => { /* noop */ },
        stop: async () => { /* noop */ },
        state: agent ? Domain.Startable.State.RUNNING : Domain.Startable.State.STOPPED,
    };

    return (
        <AgentContext.Provider value={ctx as any}>
            {children}
        </AgentContext.Provider>
    );
}

/**
 * Full provider tree matching the real AgentProvider nesting, with a
 * MockAgentBridge instead of the real agent start flow.
 */
function FullProviderWrapper({ children }: { children: ReactNode }) {
    return (
        <DatabaseProvider>
            <MockAgentBridge>
                <CredentialsProvider>
                    <MessagesProvider>
                        <ConnectionsProvider>
                            <PeerDIDProvider>
                                <PrismDIDProvider>
                                    <IssuerProvider>
                                        <HolderProvider>
                                            <VerifierProvider>
                                                {children}
                                            </VerifierProvider>
                                        </HolderProvider>
                                    </IssuerProvider>
                                </PrismDIDProvider>
                            </PeerDIDProvider>
                        </ConnectionsProvider>
                    </MessagesProvider>
                </CredentialsProvider>
            </MockAgentBridge>
        </DatabaseProvider>
    );
}

/**
 * Starts the database so provider tree reaches `loaded` state.
 * Returns the hook result for further manipulation.
 */
async function startDB(result: any) {
    const dbName = `sdk-test-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    await act(async () => {
        await result.current.db.start({ name: dbName });
    });
}

/**
 * Waits for the agent to become available in the result.
 * After DB init, React needs a re-render for MockAgentBridge to create the agent.
 */
async function waitForAgent(result: any) {
    // Agent is created in a useEffect; force an extra render cycle.
    await act(async () => {
        await new Promise((r) => setTimeout(r, 50));
    });
    if (!result.current.db.pluto) {
        throw new Error('Pluto not initialised — call startDB first');
    }
}

// ---------------------------------------------------------------------------
// 1. IssuerProvider
// ---------------------------------------------------------------------------
describe('IssuerProvider', () => {
    afterEach(() => {
        cleanup();
        vi.restoreAllMocks();
    });

    test('createOOBOffer rejects non-JWT/SDJWT types', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                issuer: useIssuer(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        await expect(
            act(async () => {
                await result.current.issuer.createOOBOffer(
                    'W3C' as any,
                    'test-id',
                    [{ name: 'name', value: 'Alice', type: 'String' }]
                );
            })
        ).rejects.toThrow('Invalid credential type');
    });

    test('createOOBOffer calls agent.runTask for JWT type', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                issuer: useIssuer(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        const agent = result.current.issuer.agent!;
        const runTaskSpy = vi.spyOn(agent, 'runTask').mockResolvedValue(
            // runTask for CreateOOBOffer returns a base64 string
            Buffer.from(JSON.stringify({ type: 'oob', id: 'test' })).toString('base64')
        );

        let oobJson: string | undefined;
        await act(async () => {
            oobJson = await result.current.issuer.createOOBOffer(
                Domain.CredentialType.JWT,
                'offer-1',
                [{ name: 'name', value: 'Alice', type: 'String' }]
            );
        });

        expect(runTaskSpy).toHaveBeenCalled();
        expect(oobJson).toBeDefined();
        // The result should be a decoded JSON string
        const parsed = JSON.parse(oobJson!);
        expect(parsed).toHaveProperty('type', 'oob');

        runTaskSpy.mockRestore();
    });

    test('getIssuanceStatus returns "pending" when no messages match', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                issuer: useIssuer(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        const status = result.current.issuer.getIssuanceStatus({
            id: 'nonexistent-thid',
            uuid: 'nonexistent-thid',
            credentialFormat: Domain.CredentialType.JWT,
            claims: [],
        } as any);

        expect(status).toBe('pending');
    });
});

// ---------------------------------------------------------------------------
// 2. HolderProvider
// ---------------------------------------------------------------------------
describe('HolderProvider', () => {
    afterEach(() => {
        cleanup();
        vi.restoreAllMocks();
    });

    test('acceptOOBOffer rejects when agent is null', async () => {
        // Render without starting DB — agent stays null
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                holder: useHolder(),
            }),
            { wrapper: FullProviderWrapper }
        );

        const fakeOffer = new Domain.Message(
            '{}',
            'offer-1',
            ProtocolType.DidcommOfferCredential,
        );

        await expect(
            act(async () => {
                await result.current.holder.acceptOOBOffer(fakeOffer);
            })
        ).rejects.toThrow('Start the agent first');
    });

    test('acceptOOBOffer calls agent.handle and agent.send', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                holder: useHolder(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        const agent = result.current.holder.agent!;

        // agent.handle returns a protocol object with makeMessage()
        const mockRequestMsg = new Domain.Message(
            '{}',
            'req-1',
            ProtocolType.DidcommRequestCredential,
        );
        const handleSpy = vi.spyOn(agent, 'handle').mockResolvedValue({
            makeMessage: () => mockRequestMsg,
        } as any);
        const sendSpy = vi.spyOn(agent, 'send').mockResolvedValue(undefined);

        const fakeOffer = new Domain.Message(
            '{}',
            'offer-1',
            ProtocolType.DidcommOfferCredential,
        );

        await act(async () => {
            await result.current.holder.acceptOOBOffer(fakeOffer);
        });

        expect(handleSpy).toHaveBeenCalledWith(fakeOffer);
        expect(sendSpy).toHaveBeenCalled();

        handleSpy.mockRestore();
        sendSpy.mockRestore();
    });

    test('handlePresentationRequest rejects when agent is null', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                holder: useHolder(),
            }),
            { wrapper: FullProviderWrapper }
        );

        const fakeMsg = new Domain.Message(
            '{}',
            'req-1',
            ProtocolType.DidcommRequestPresentation,
        );
        const fakeCredential = {} as Domain.Credential;

        await expect(
            act(async () => {
                await result.current.holder.handlePresentationRequest(fakeMsg, fakeCredential);
            })
        ).rejects.toThrow('No agent found');
    });

    test('handlePresentationRequest calls agent.runTask and agent.send', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                holder: useHolder(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        const agent = result.current.holder.agent!;
        const presentationMsg = new Domain.Message(
            '{}',
            'pres-1',
            ProtocolType.DidcommPresentation,
            undefined,
            undefined,
            [],
            undefined,
            {},
            Math.floor(Date.now() / 1000),
            undefined,
            [],
            Domain.MessageDirection.SENT,
        );
        const runTaskSpy = vi.spyOn(agent, 'runTask').mockResolvedValue({
            makeMessage: () => presentationMsg,
        } as any);
        const sendSpy = vi.spyOn(agent, 'send').mockResolvedValue(undefined);

        // Build a valid-looking request message
        const requestMsg = new Domain.Message(
            '{"goal_code":"","will_confirm":false,"proof_types":[]}',
            'req-1',
            ProtocolType.DidcommRequestPresentation,
            TEST_PEER_DID,
            TEST_PEER_DID,
            [{
                id: 'attach-1',
                mediaType: 'application/json',
                data: {
                    json: {
                        options: { challenge: 'test', domain: 'test' },
                        presentation_definition: { id: 'pd-1', input_descriptors: [] },
                    },
                },
                format: Domain.CredentialType.JWT,
            } as any],
        );

        const fakeCredential = { id: 'cred-1' } as Domain.Credential;

        await act(async () => {
            await result.current.holder.handlePresentationRequest(requestMsg, fakeCredential);
        });

        expect(runTaskSpy).toHaveBeenCalled();
        expect(sendSpy).toHaveBeenCalled();

        runTaskSpy.mockRestore();
        sendSpy.mockRestore();
    });
});

// ---------------------------------------------------------------------------
// 3. VerifierProvider
// ---------------------------------------------------------------------------
describe('VerifierProvider', () => {
    afterEach(() => {
        cleanup();
        vi.restoreAllMocks();
    });

    test('verifyPresentation rejects when agent is null', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                verifier: useVerifier(),
            }),
            { wrapper: FullProviderWrapper }
        );

        const fakeMsg = new Domain.Message(
            '{}',
            'pres-1',
            ProtocolType.DidcommPresentation,
        );

        await expect(
            act(async () => {
                await result.current.verifier.verifyPresentation(fakeMsg);
            })
        ).rejects.toThrow('No agent found');
    });

    test('verifyPresentation rejects when piuri is not DidcommPresentation', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                verifier: useVerifier(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        const invalidMsg = new Domain.Message(
            '{}',
            'wrong-1',
            'https://wrong.protocol/type',
        );

        await expect(
            act(async () => {
                await result.current.verifier.verifyPresentation(invalidMsg);
            })
        ).rejects.toThrow('Invalid presentation type');
    });

    test('verifyPresentation calls agent.handle for valid presentation', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                verifier: useVerifier(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        const agent = result.current.verifier.agent!;
        const handleSpy = vi.spyOn(agent, 'handle').mockResolvedValue(true as any);

        const presentationMsg = new Domain.Message(
            '{}',
            'pres-1',
            ProtocolType.DidcommPresentation,
        );

        let verified: boolean | undefined;
        await act(async () => {
            verified = await result.current.verifier.verifyPresentation(presentationMsg);
        });

        expect(handleSpy).toHaveBeenCalledWith(presentationMsg);
        expect(verified).toBe(true);

        handleSpy.mockRestore();
    });
});

// ---------------------------------------------------------------------------
// 4. DID Providers
// ---------------------------------------------------------------------------
describe('PeerDIDProvider', () => {
    afterEach(() => {
        cleanup();
        vi.restoreAllMocks();
    });

    test('create() calls agent.createNewPeerDID and stores the DID', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                peer: usePeerDID(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        // We need to get the agent from the peer context — but the hook doesn't 
        // expose it directly. We need to spy via the underlying agent instance.
        // The PeerDIDProvider uses useAgent() → agent.createNewPeerDID().
        // We spy on the Agent prototype.
        // Since we need the actual agent ref, we'll render useAgent too.
        // For now, re-render with a hook that includes useAgent.
        cleanup();

        const { result: result2 } = renderHook(
            () => ({
                db: useDatabase(),
                peer: usePeerDID(),
                agentCtx: useAgent(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result2);
        await waitForAgent(result2);

        const agent = result2.current.agentCtx.agent!;
        const createSpy = vi.spyOn(agent, 'createNewPeerDID').mockResolvedValue(TEST_PEER_DID);

        let createdDID: Domain.DID | undefined;
        await act(async () => {
            createdDID = await result2.current.peer.create();
        });

        expect(createSpy).toHaveBeenCalled();
        expect(createdDID).toBeDefined();
        expect(createdDID!.toString()).toBe(TEST_PEER_DID.toString());
        // State should be updated
        expect(result2.current.peer.peerDID?.toString()).toBe(TEST_PEER_DID.toString());

        createSpy.mockRestore();
    });
});

describe('PrismDIDProvider', () => {
    afterEach(() => {
        cleanup();
        vi.restoreAllMocks();
    });

    test('create() calls agent.createNewPrismDID', async () => {
        const prismDID = Domain.DID.fromString('did:prism:test123');

        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                prism: usePrismDID(),
                agentCtx: useAgent(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        const agent = result.current.agentCtx.agent!;
        const createSpy = vi.spyOn(agent, 'createNewPrismDID').mockResolvedValue(prismDID);

        let createdDID: Domain.DID | undefined;
        await act(async () => {
            createdDID = await result.current.prism.create('test-alias');
        });

        expect(createSpy).toHaveBeenCalled();
        expect(createdDID).toBeDefined();
        expect(createdDID!.toString()).toBe(prismDID.toString());

        createSpy.mockRestore();
    });

    test('isPublished returns correct status from pluto store', async () => {
        const prismDID = Domain.DID.fromString('did:prism:published123');

        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                prism: usePrismDID(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        const pluto = result.current.db.pluto!;

        // Insert a DID with 'published' status
        await act(async () => {
            await pluto.store.insert('dids' as any, {
                uuid: prismDID.toString(),
                method: 'prism',
                methodId: 'published123',
                schema: 'did',
                did: prismDID.toString(),
                status: 'published',
            } as any);
        });

        let published: boolean | undefined;
        await act(async () => {
            published = await result.current.prism.isPublished(prismDID);
        });

        expect(published).toBe(true);
    });

    test('isPublished returns false for unpublished DID', async () => {
        const prismDID = Domain.DID.fromString('did:prism:unpublished456');

        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                prism: usePrismDID(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        const pluto = result.current.db.pluto!;

        await act(async () => {
            await pluto.store.insert('dids' as any, {
                uuid: prismDID.toString(),
                method: 'prism',
                methodId: 'unpublished456',
                schema: 'did',
                did: prismDID.toString(),
                status: 'unpublished',
            } as any);
        });

        let published: boolean | undefined;
        await act(async () => {
            published = await result.current.prism.isPublished(prismDID);
        });

        expect(published).toBe(false);
    });
});

// ---------------------------------------------------------------------------
// 5. DIDComm Message Lifecycle via MessagesProvider
// ---------------------------------------------------------------------------
describe('MessagesProvider — SDK message types', () => {
    afterEach(() => {
        cleanup();
        vi.restoreAllMocks();
    });

    test('messages with DIDComm protocol piuri are stored and retrievable', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                msgs: useMessages(),
            }),
            {
                wrapper: FullProviderWrapper,
            }
        );

        await startDB(result);
        await waitForAgent(result);

        const pluto = result.current.db.pluto!;

        // Store a basic DIDComm message
        const msg = new Domain.Message(
            '{"content":"hello"}',
            'didcomm-msg-1',
            ProtocolType.DidcommBasicMessage,
            undefined,
            undefined,
            [],
            undefined,
            {},
            Math.floor(Date.now() / 1000),
            undefined,
            [],
            Domain.MessageDirection.RECEIVED,
        );
        await act(async () => {
            await pluto.storeMessage(msg);
        });

        await act(async () => {
            await result.current.msgs.load();
        });

        const found = result.current.msgs.messages.find(
            (m) => m.message.id === 'didcomm-msg-1'
        );
        expect(found).toBeDefined();
        expect(found!.message.piuri).toBe(ProtocolType.DidcommBasicMessage);
        expect(found!.read).toBe(false);
    });

    test('credential offer messages are stored as received/unread', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                msgs: useMessages(),
            }),
            {
                wrapper: FullProviderWrapper,
            }
        );

        await startDB(result);
        await waitForAgent(result);

        const pluto = result.current.db.pluto!;

        const offerMsg = new Domain.Message(
            '{}',
            'offer-msg-1',
            ProtocolType.DidcommOfferCredential,
            TEST_PEER_DID,
            TEST_PEER_DID,
            [],
            'thread-1',
            {},
            Math.floor(Date.now() / 1000),
            undefined,
            [],
            Domain.MessageDirection.RECEIVED,
        );
        await act(async () => {
            await pluto.storeMessage(offerMsg);
        });

        await act(async () => {
            await result.current.msgs.load();
        });

        expect(result.current.msgs.receivedMessages.length).toBeGreaterThanOrEqual(1);
        const found = result.current.msgs.unreadMessages.find(
            (m) => m.id === 'offer-msg-1'
        );
        expect(found).toBeDefined();
        expect(found!.piuri).toBe(ProtocolType.DidcommOfferCredential);
    });

    test('pickup protocol messages are filtered out', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                msgs: useMessages(),
            }),
            {
                wrapper: FullProviderWrapper,
            }
        );

        await startDB(result);
        await waitForAgent(result);

        const pluto = result.current.db.pluto!;

        // Store a pickup message that should be filtered
        const pickupMsg = new Domain.Message(
            '{}',
            'pickup-msg-1',
            ProtocolType.PickupDelivery,
            undefined,
            undefined,
            [],
            undefined,
            {},
            Math.floor(Date.now() / 1000),
            undefined,
            [],
            Domain.MessageDirection.RECEIVED,
        );
        await act(async () => {
            await pluto.storeMessage(pickupMsg);
        });

        await act(async () => {
            await result.current.msgs.load();
        });

        // Pickup messages should be filtered out by MessagesProvider
        const found = result.current.msgs.messages.find(
            (m) => m.message.id === 'pickup-msg-1'
        );
        expect(found).toBeUndefined();
    });

    test('issue credential message (sent) is auto-read', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                msgs: useMessages(),
            }),
            {
                wrapper: FullProviderWrapper,
            }
        );

        await startDB(result);
        await waitForAgent(result);

        const pluto = result.current.db.pluto!;

        const issueMsg = new Domain.Message(
            '{}',
            'issue-msg-1',
            ProtocolType.DidcommIssueCredential,
            TEST_PEER_DID,
            TEST_PEER_DID,
            [],
            'thread-issue-1',
            {},
            Math.floor(Date.now() / 1000),
            undefined,
            [],
            Domain.MessageDirection.SENT,
        );
        await act(async () => {
            await pluto.storeMessage(issueMsg);
        });

        await act(async () => {
            await result.current.msgs.load();
        });

        const found = result.current.msgs.messages.find(
            (m) => m.message.id === 'issue-msg-1'
        );
        expect(found).toBeDefined();
        expect(found!.read).toBe(true); // Sent messages are auto-read
        // Should appear in sentMessages
        expect(result.current.msgs.sentMessages.find((m) => m.id === 'issue-msg-1')).toBeDefined();
        // Should NOT appear in unreadMessages
        expect(result.current.msgs.unreadMessages.find((m) => m.id === 'issue-msg-1')).toBeUndefined();
    });
});

// ---------------------------------------------------------------------------
// 6. CredentialsProvider — SDK integration
// ---------------------------------------------------------------------------
describe('CredentialsProvider — SDK credential operations', () => {
    afterEach(() => {
        cleanup();
        vi.restoreAllMocks();
    });

    test('load() populates credentials array from pluto', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                creds: useCredentials(),
            }),
            {
                wrapper: FullProviderWrapper,
            }
        );

        await startDB(result);
        await waitForAgent(result);

        const pluto = result.current.db.pluto!;
        const getAllCredsSpy = vi.spyOn(pluto, 'getAllCredentials');

        await act(async () => {
            await result.current.creds.load();
        });

        expect(getAllCredsSpy).toHaveBeenCalled();
        // Initially empty
        expect(result.current.creds.credentials).toEqual([]);

        getAllCredsSpy.mockRestore();
    });

    test('deleteCredential spies on pluto.store.delete', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                creds: useCredentials(),
            }),
            {
                wrapper: FullProviderWrapper,
            }
        );

        await startDB(result);
        await waitForAgent(result);

        const pluto = result.current.db.pluto!;
        // Spy and prevent the real store.delete from running to avoid primary key validation
        const deleteSpy = vi.spyOn(pluto.store, 'delete').mockResolvedValue();

        const fakeCred = {
            id: 'cred-to-delete',
            uuid: 'cred-to-delete',
        } as Domain.Credential;

        await act(async () => {
            await result.current.creds.deleteCredential(fakeCred);
        });

        expect(deleteSpy).toHaveBeenCalledWith('credentials', 'cred-to-delete');

        deleteSpy.mockRestore();
    });
});

// ---------------------------------------------------------------------------
// 7. Specific SDK flows with real fixtures
// ---------------------------------------------------------------------------

/**
 * Real fixture data from the SDK test suite.
 * Using inline values to avoid import-path issues with SDK internal modules.
 */
const FIXTURES = {
    // Real peer DIDs from sdk/tests/fixtures/dids.ts
    peerDID1: Domain.DID.fromString(
        'did:peer:2.Ez6LSfhufN8b8EufbxPNRh88YYvjpf7uuVfa3tMG4nKeFK2wX.Vz6Mkf2USnehnAgu263PfyTDsB7KhjuR64wMa3Y4XLHi3KuQS.SeyJ0IjoiZG0iLCJzIjoiaHR0cDovLzE5Mi4xNjguMS4xNjU6ODAwMC9kaWRjb21tIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfQ'
    ),
    peerDID2: Domain.DID.fromString(
        'did:peer:2.Ez6LSjNzhLeoBEL67PHWSq6X7A7YFuQpcqs13g3cYJTRFyhpu.Vz6MkemtLC5RN1bwBopgZVgXpRRXoigbZjKQt8NHEiJR1eAQ1.SeyJyIjpbXSwicyI6ImRpZDpwZWVyOjIuRXo2TFNnaHdTRTQzN3duREUxcHQzWDZoVkRVUXpTanNIemlucFgzWEZ2TWpSQW03eS5WejZNa2hoMWU1Q0VZWXE2SkJVY1RaNkNwMnJhbkNXUnJ2N1lheDNMZTRONTlSNmRkLlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW1oMGRIQnpPaTh2YzJsMExYQnlhWE50TFcxbFpHbGhkRzl5TG1GMFlXeGhjSEpwYzIwdWFXOGlMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDE5LlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW5kemN6b3ZMM05wZEMxd2NtbHpiUzF0WldScFlYUnZjaTVoZEdGc1lYQnlhWE50TG1sdkwzZHpJaXdpWVNJNld5SmthV1JqYjIxdEwzWXlJbDE5ZlEiLCJhIjpbXSwidCI6ImRtIn0'
    ),
    // Real prism DIDs from sdk/tests/fixtures/dids.ts
    prismDID: Domain.DID.fromString(
        'did:prism:baa54dfc49c09dab934109d7e3b8ac80cd070bdf8cfeb8d966b60eb1b1091c34:Cr0BCroBEjkKCG1hc3Rlci0wEAFKKwoHRWQyNTUxORIgdm5f2GdR5BaHpRxB8bTElvE_0gIC2p404Msx9swJ914SQQoQYXV0aGVudGljYXRpb24tMBAESisKB0VkMjU1MTkSIHZuX9hnUeQWh6UcQfG0xJbxP9ICAtqeNODLMfbMCfdeEjoKCWlzc3VpbmctMBACSisKB0VkMjU1MTkSIHZuX9hnUeQWh6UcQfG0xJbxP9ICAtqeNODLMfbMCfde'
    ),
    // Real JWT credential payload from sdk/tests/fixtures/credentials/jwt.ts
    jwtCredentialPayloadEncoded: 'eyJhbGciOiJFUzI1NksifQ.eyJpc3MiOiJkaWQ6cHJpc206MjU3MTlhOTZiMTUxMjA3MTY5ODFhODQzMGFkMGNiOTY4ZGQ1MzQwNzM1OTNjOGNkM2YxZDI3YTY4MDRlYzUwZTpDcG9DQ3BjQ0Vsb0tCV3RsZVMweEVBSkNUd29KYzJWamNESTFObXN4RWlBRW9TQ241dHlEYTZZNnItSW1TcXBKOFkxbWo3SkMzX29VekUwTnl5RWlDQm9nc2dOYWVSZGNDUkdQbGU4MlZ2OXRKZk53bDZyZzZWY2hSM09xaGlWYlRhOFNXd29HWVhWMGFDMHhFQVJDVHdvSmMyVmpjREkxTm1zeEVpRE1rQmQ2RnRpb0prM1hPRnUtX2N5NVhtUi00dFVRMk5MR2lXOGFJU29ta1JvZzZTZGU5UHduRzBRMFNCVG1GU1REYlNLQnZJVjZDVExYcmpJSnR0ZUdJbUFTWEFvSGJXRnpkR1Z5TUJBQlFrOEtDWE5sWTNBeU5UWnJNUklnTzcxMG10MVdfaXhEeVFNM3hJczdUcGpMQ05PRFF4Z1ZoeDVzaGZLTlgxb2FJSFdQcnc3SVVLbGZpYlF0eDZKazRUU2pnY1dOT2ZjT3RVOUQ5UHVaN1Q5dCIsInN1YiI6ImRpZDpwcmlzbTpiZWVhNTIzNGFmNDY4MDQ3MTRkOGVhOGVjNzdiNjZjYzdmM2U4MTVjNjhhYmI0NzVmMjU0Y2Y5YzMwNjI2NzYzOkNzY0JDc1FCRW1RS0QyRjFkR2hsYm5ScFkyRjBhVzl1TUJBRVFrOEtDWE5sWTNBeU5UWnJNUklnZVNnLTJPTzFKZG5welVPQml0eklpY1hkZnplQWNUZldBTi1ZQ2V1Q2J5SWFJSlE0R1RJMzB0YVZpd2NoVDNlMG5MWEJTNDNCNGo5amxzbEtvMlpsZFh6akVsd0tCMjFoYzNSbGNqQVFBVUpQQ2dselpXTndNalUyYXpFU0lIa29QdGpqdFNYWjZjMURnWXJjeUluRjNYODNnSEUzMWdEZm1BbnJnbThpR2lDVU9Ca3lOOUxXbFlzSElVOTN0Snkxd1V1TndlSV9ZNWJKU3FObVpYVjg0dyIsIm5iZiI6MTY4NTYzMTk5NSwiZXhwIjoxNjg1NjM1NTk1LCJ2YyI6eyJjcmVkZW50aWFsU3ViamVjdCI6eyJhZGRpdGlvbmFsUHJvcDIiOiJUZXN0MyIsImlkIjoiZGlkOnByaXNtOmJlZWE1MjM0YWY0NjgwNDcxNGQ4ZWE4ZWM3N2I2NmNjN2YzZTgxNWM2OGFiYjQ3NWYyNTRjZjljMzA2MjY3NjM6Q3NjQkNzUUJFbVFLRDJGMWRHaGxiblJwWTJGMGFXOXVNQkFFUWs0S0NYTmxZM0F5TlRack1SSWdlU2ctMk9PMUpkbnB6VU9CaXR6SWljWGRmemVBY1RmV0FOLVlDZXVDYnlJYUlKUTRHVEkzMHRhVml3Y2hUM2UwbkxYQlM0M0I0ajlqbHNsS28yWmxkWHpqRWx3S0IyMWhjM1JsY2pBUUFVSlBDZ2x6WldOd01qVTJhekVTSUhrb1B0amp0U1haNmMxRGdZcmN5SW5GM1g4M2dIRTMxZ0RmbUFucmdtOGlHaUNVT0JreU45TFdsWXNISVU5M3RKeTF3VXVOd2VJX1k1YkpTcU5tWlhWODR3In0sInR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiXSwiQGNvbnRleHQiOlsiaHR0cHM6XC9cL3d3dy53My5vcmdcLzIwMThcL2NyZWRlbnRpYWxzXC92MSJdfX0.x0SF17Y0VCDmt7HceOdTxfHlofsZmY18Rn6VQb0-r-k_Bm3hTi1-k2vkdjB25hdxyTCvxam-AkAP-Ag3Ahn5Ng',
    // Real SDJWT credential payload
    sdjwtCredentialPayloadEncoded: 'eyJ0eXAiOiJ2YytzZC1qd3QiLCJhbGciOiJFZERTQSJ9.eyJpc3MiOiJkaWQ6cHJpc206NzE2OGEwN2I5NGQxMzAyNjg5MDU2ZTkyN2I0ZGVmOTNjNDIzYjk1NTNmNzcxZTQ4NmM4ZDkxODg4M2UyNTZmMTpDcTBCQ3FvQkVsc0tIMkYxZEdobGJuUnBZMkYwYVc5dVlYVjBhR1Z1ZEdsallYUnBiMjVMWlhrUUJFSTJDZ2RGWkRJMU5URTVFaXRrYlRWbU1rZGtValZDWVVod1VuaENPR0pVUld4MlJWOHdaMGxETW5BME1EUk5jM2c1YzNkS09URTBFa3NLRDIxaGMzUmxjbTFoYzNSbGNrdGxlUkFCUWpZS0IwVmtNalUxTVRrU0syUnROV1l5UjJSU05VSmhTSEJTZUVJNFlsUkZiSFpGWHpCblNVTXljRFF3TkUxemVEbHpkMG81TVRRIiwiaWF0IjoxNzE3Nzc2MTY3NTg5LCJ2Y3QiOiJodHRwOi8vZXhhbXBsZS5jb20iLCJmaXJzdG5hbWUiOiJKb2huIiwibGFzdG5hbWUiOiJEb2UiLCJzc24iOiIxMjMtNDUtNjc4OSIsImlkIjoiMTIzNCIsIl9zZF9hbGciOiJzaGEtMjU2In0.RThFQjlENjJDN0Y5NjlCOEM0NERFNkU3RDg4MDg5RkRBQjg0RTUzNzUyNTZFRUI5NUQyQTUwQ0U1MTdDNzQ2NjU5REExOTM4Njc0RjhFMkQ2QjFCNzNFNEZCRDZBNkQ4NjIzNDFEQkFERjY0MTBERUJCRENDRkVBRjhCMkMwMDU~',
    // Real JWS from sdk/tests/fixtures/credentials/jwt.ts credentialData
    jws: 'eyJraWQiOiJkaWQ6cHJpc206ZGE2MWNmNjVmYmYwNGI2YjlmZTA2ZmEzYjU3N2ZjYTNlMDU4OTVhMTM5MDJkZWNhYWQ0MTk4NDVhMjBkMmQ3ODpDdDhCQ3R3QkVuUUtIMkYxZEdobGJuUnBZMkYwYVc5dVlYVjBhR1Z1ZEdsallYUnBiMjVMWlhrUUJFSlBDZ2x6WldOd01qVTJhekVTSVAwZ01oVEFWT2s3U2dXUmx1em1lSklqdG0yLVlNYzZBYnJEM2VQS0pRai1HaURabHNhNXBRdVhHekt2Z0sxMEQ4U3p1RHZoNzl1NW9NQjctWmVKTkFoLWl4SmtDZzl0WVhOMFpYSnRZWE4wWlhKTFpYa1FBVUpQQ2dselpXTndNalUyYXpFU0lQMGdNaFRBVk9rN1NnV1JsdXptZUpJanRtMi1ZTWM2QWJyRDNlUEtKUWotR2lEWmxzYTVwUXVYR3pLdmdLMTBEOFN6dUR2aDc5dTVvTUI3LVplSk5BaC1pdyNhdXRoZW50aWNhdGlvbmF1dGhlbnRpY2F0aW9uS2V5IiwiYWxnIjoiRVMyNTZLIiwidHlwIjoiSldUIn0.eyJpYXQiOjE3NzA4NDY0MDMsImV4cCI6MjEzNDU2NDMyMSwiaXNzIjoiZGlkOnByaXNtOmRhNjFjZjY1ZmJmMDRiNmI5ZmUwNmZhM2I1NzdmY2EzZTA1ODk1YTEzOTAyZGVjYWFkNDE5ODQ1YTIwZDJkNzg6Q3Q4QkN0d0JFblFLSDJGMWRHaGxiblJwWTJGMGFXOXVZWFYwYUdWdWRHbGpZWFJwYjI1TFpYa1FCRUpQQ2dselpXTndNalUyYXpFU0lQMGdNaFRBVk9rN1NnV1JsdXptZUpJanRtMi1ZTWM2QWJyRDNlUEtKUWotR2lEWmxzYTVwUXVYR3pLdmdLMTBEOFN6dUR2aDc5dTVvTUI3LVplSk5BaC1peEprQ2c5dFlYTjBaWEp0WVhOMFpYSkxaWGtRQVVKUENnbHpaV053TWpVMmF6RVNJUDBnTWhUQVZPazdTZ1dSbHV6bWVKSWp0bTItWU1jNkFickQzZVBLSlFqLUdpRFpsc2E1cFF1WEd6S3ZnSzEwRDhTenVEdmg3OXU1b01CNy1aZUpOQWgtaXciLCJzdWIiOiJkaWQ6cHJpc206ZGE2MWNmNjVmYmYwNGI2YjlmZTA2ZmEzYjU3N2ZjYTNlMDU4OTVhMTM5MDJkZWNhYWQ0MTk4NDVhMjBkMmQ3ODpDdDhCQ3R3QkVuUUtIMkYxZEdobGJuUnBZMkYwYVc5dVlYVjBhR1Z1ZEdsallYUnBiMjVMWlhrUUJFSlBDZ2x6WldOd01qVTJhekVTSVAwZ01oVEFWT2s3U2dXUmx1em1lSklqdG0yLVlNYzZBYnJEM2VQS0pRai1HaURabHNhNXBRdVhHekt2Z0sxMEQ4U3p1RHZoNzl1NW9NQjctWmVKTkFoLWl4SmtDZzl0WVhOMFpYSnRZWE4wWlhKTFpYa1FBVUpQQ2dselpXTndNalUyYXpFU0lQMGdNaFRBVk9rN1NnV1JsdXptZUpJanRtMi1ZTWM2QWJyRDNlUEtKUWotR2lEWmxzYTVwUXVYR3pLdmdLMTBEOFN6dUR2aDc5dTVvTUI3LVplSk5BaC1pdyIsIm5iZiI6MjM0NTY3NTQzMjEsInZjIjp7IkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIl0sInR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiXSwiY3JlZGVudGlhbFN1YmplY3QiOnsidGVzdCI6ImRpZDpwcmlzbSJ9fX0.iQEDhAWZ3nSM6Q8O4kH2yyoCR0bCNQ9WtBmqWZ-PR593WSZzEOdE_hOdwLu9twd8dRtjytPO0LM6ygC7pniWAw',
    // Presentation request attachment from sdk/tests/fixtures/presentationRequests.ts
    jwtPresentationAttachment: {
        id: 'e72a95df-137d-46f9-b8be-a1815a260f1a',
        format: 'prism/jwt',
        data: {
            data: {
                options: {
                    challenge: '11c91493-01b3-4c4d-ac36-b336bab5bddf',
                    domain: 'http://localhost:8000/prism-agent',
                },
                presentation_definition: {
                    format: null,
                    id: 'b2a49475-f8ba-4952-a719-a28e909858fa',
                    input_descriptors: [],
                    name: null,
                    purpose: null,
                },
            },
        },
    },
};

describe('Credential Issuance Flow — real fixtures', () => {
    afterEach(() => {
        cleanup();
        vi.restoreAllMocks();
    });

    test('store and retrieve a JWT credential offer message with real DIDComm piuri', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                msgs: useMessages(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        const pluto = result.current.db.pluto!;

        // Build a credential offer message using real fixture DIDs
        const offerMsg = new Domain.Message(
            JSON.stringify({
                credential_preview: {
                    body: {
                        attributes: [
                            { name: 'familyName', value: 'Demo' },
                            { name: 'emailAddress', value: 'demo@test.com' },
                        ],
                    },
                    type: 'https://didcomm.org/issue-credential/3.0/credential-credential',
                },
                goal_code: 'Offer Credential',
            }),
            'real-offer-1',
            ProtocolType.DidcommOfferCredential,
            FIXTURES.peerDID1,
            FIXTURES.peerDID2,
            [{
                id: 'attach-offer-1',
                mediaType: 'application/json',
                data: {
                    json: {
                        options: {
                            challenge: 'fedac0c2-3250-4fb1-bfcb-b5e904058e1f',
                            domain: 'domain',
                        },
                    },
                },
                format: Domain.CredentialType.JWT,
            } as any],
            'thread-real-offer',
            {},
            Math.floor(Date.now() / 1000),
            undefined,
            [],
            Domain.MessageDirection.RECEIVED,
        );

        await act(async () => {
            await pluto.storeMessage(offerMsg);
        });

        await act(async () => {
            await result.current.msgs.load();
        });

        // Verify the offer appears correctly
        const found = result.current.msgs.messages.find((m) => m.message.id === 'real-offer-1');
        expect(found).toBeDefined();
        expect(found!.message.piuri).toBe(ProtocolType.DidcommOfferCredential);
        expect(found!.message.from?.toString()).toBe(FIXTURES.peerDID1.toString());
        expect(found!.message.to?.toString()).toBe(FIXTURES.peerDID2.toString());
        expect(found!.read).toBe(false);

        // Should appear in receivedMessages and unreadMessages
        expect(result.current.msgs.receivedMessages.find((m) => m.id === 'real-offer-1')).toBeDefined();
        expect(result.current.msgs.unreadMessages.find((m) => m.id === 'real-offer-1')).toBeDefined();
    });

    test('store an issue credential message with real JWT attachment data', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                msgs: useMessages(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        const pluto = result.current.db.pluto!;

        // Build an issue credential message with a real JWT payload in the attachment
        const issueMsg = new Domain.Message(
            '{}',
            'real-issue-1',
            ProtocolType.DidcommIssueCredential,
            FIXTURES.peerDID1, // from issuer
            FIXTURES.peerDID2, // to holder
            [{
                id: 'attach-issue-1',
                mediaType: 'application/json',
                data: {
                    base64: Buffer.from(FIXTURES.jwtCredentialPayloadEncoded).toString('base64'),
                },
                format: Domain.CredentialType.JWT,
            } as any],
            'thread-real-issue',
            {},
            Math.floor(Date.now() / 1000),
            undefined,
            [],
            Domain.MessageDirection.RECEIVED,
        );

        await act(async () => {
            await pluto.storeMessage(issueMsg);
        });

        await act(async () => {
            await result.current.msgs.load();
        });

        const found = result.current.msgs.messages.find((m) => m.message.id === 'real-issue-1');
        expect(found).toBeDefined();
        expect(found!.message.piuri).toBe(ProtocolType.DidcommIssueCredential);
        expect(found!.message.attachments).toHaveLength(1);
        expect(found!.message.attachments[0].format).toBe(Domain.CredentialType.JWT);
    });

    test('store a presentation request message with real attachment format', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                msgs: useMessages(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        const pluto = result.current.db.pluto!;

        const requestMsg = new Domain.Message(
            JSON.stringify({
                goal_code: 'Request Proof Presentation',
                will_confirm: false,
                proof_types: [],
            }),
            'real-pres-req-1',
            ProtocolType.DidcommRequestPresentation,
            FIXTURES.peerDID1,
            FIXTURES.peerDID2,
            [{
                id: FIXTURES.jwtPresentationAttachment.id,
                format: FIXTURES.jwtPresentationAttachment.format,
                data: {
                    json: FIXTURES.jwtPresentationAttachment.data.data,
                },
            } as any],
            'thread-real-pres',
            {},
            Math.floor(Date.now() / 1000),
            undefined,
            [],
            Domain.MessageDirection.RECEIVED,
        );

        await act(async () => {
            await pluto.storeMessage(requestMsg);
        });

        await act(async () => {
            await result.current.msgs.load();
        });

        const found = result.current.msgs.messages.find((m) => m.message.id === 'real-pres-req-1');
        expect(found).toBeDefined();
        expect(found!.message.piuri).toBe(ProtocolType.DidcommRequestPresentation);
        expect(found!.message.attachments[0].format).toBe('prism/jwt');
        expect(found!.read).toBe(false);
    });
});

describe('IssuerProvider — issuance status with real protocol piuris', () => {
    afterEach(() => {
        cleanup();
        vi.restoreAllMocks();
    });

    test('getIssuanceStatus transitions: pending → accept-pending → completed', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                issuer: useIssuer(),
                msgs: useMessages(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        const pluto = result.current.db.pluto!;
        const issuanceId = 'issuance-status-thread';

        // Initially: pending (no messages with matching thid)
        expect(
            result.current.issuer.getIssuanceStatus({ id: issuanceId, claims: [] } as any)
        ).toBe('pending');

        // After receiving a RequestCredential → accept-pending
        const requestMsg = new Domain.Message(
            '{}',
            'request-cred-status-1',
            ProtocolType.DidcommRequestCredential,
            FIXTURES.peerDID2,
            FIXTURES.peerDID1,
            [],
            issuanceId,
            {},
            Math.floor(Date.now() / 1000),
            undefined,
            [],
            Domain.MessageDirection.RECEIVED,
        );
        await act(async () => {
            await pluto.storeMessage(requestMsg);
        });
        await act(async () => {
            await result.current.msgs.load();
        });

        expect(
            result.current.issuer.getIssuanceStatus({ id: issuanceId, claims: [] } as any)
        ).toBe('accept-pending');

        // After sending an IssueCredential → completed
        const issuedMsg = new Domain.Message(
            '{}',
            'issue-cred-status-1',
            ProtocolType.DidcommIssueCredential,
            FIXTURES.peerDID1,
            FIXTURES.peerDID2,
            [],
            issuanceId,
            {},
            Math.floor(Date.now() / 1000),
            undefined,
            [],
            Domain.MessageDirection.SENT,
        );
        await act(async () => {
            await pluto.storeMessage(issuedMsg);
        });
        await act(async () => {
            await result.current.msgs.load();
        });

        expect(
            result.current.issuer.getIssuanceStatus({ id: issuanceId, claims: [] } as any)
        ).toBe('completed');
    });
});

describe('HolderProvider — accept OOB with real fixture offer message', () => {
    afterEach(() => {
        cleanup();
        vi.restoreAllMocks();
    });

    test('acceptOOBOffer with real credential offer spies on agent.handle', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                holder: useHolder(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        const agent = result.current.holder.agent!;

        // Build a real-looking offer message with JWT attachment
        const realOffer = new Domain.Message(
            JSON.stringify({
                credential_preview: {
                    body: {
                        attributes: [
                            { name: 'familyName', value: 'Demo', media_type: null },
                        ],
                    },
                    type: 'https://didcomm.org/issue-credential/3.0/credential-credential',
                },
                goal_code: 'Offer Credential',
            }),
            'real-oob-offer-1',
            ProtocolType.DidcommOfferCredential,
            FIXTURES.peerDID1,
            FIXTURES.peerDID2,
            [{
                id: 'attach-oob-1',
                data: {
                    json: {
                        options: {
                            challenge: 'fedac0c2-3250-4fb1-bfcb-b5e904058e1f',
                            domain: 'domain',
                        },
                    },
                },
                format: Domain.CredentialType.JWT,
            } as any],
            'thread-oob-offer',
        );

        // Spy: agent.handle should return a request credential protocol object
        const mockReqMsg = new Domain.Message(
            '{}',
            'req-from-handle',
            ProtocolType.DidcommRequestCredential,
        );
        const handleSpy = vi.spyOn(agent, 'handle').mockResolvedValue({
            makeMessage: () => mockReqMsg,
        } as any);
        const sendSpy = vi.spyOn(agent, 'send').mockResolvedValue(undefined);

        await act(async () => {
            await result.current.holder.acceptOOBOffer(realOffer);
        });

        // Verify agent.handle was called with the real offer message
        expect(handleSpy).toHaveBeenCalledWith(realOffer);
        // Verify agent.send was called with the request credential message (direction set to SENT)
        const sentMsg = sendSpy.mock.calls[0]?.[0] as Domain.Message;
        expect(sentMsg).toBeDefined();
        expect(sentMsg.direction).toBe(Domain.MessageDirection.SENT);

        handleSpy.mockRestore();
        sendSpy.mockRestore();
    });
});

describe('VerifierProvider — with real presentation attachment', () => {
    afterEach(() => {
        cleanup();
        vi.restoreAllMocks();
    });

    test('verifyPresentation uses real DidcommPresentation piuri', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                verifier: useVerifier(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        const agent = result.current.verifier.agent!;
        const handleSpy = vi.spyOn(agent, 'handle').mockResolvedValue(true as any);

        // Build a real-looking presentation message
        const presentationMsg = new Domain.Message(
            JSON.stringify({ comment: null, goal_code: null }),
            'real-presentation-1',
            ProtocolType.DidcommPresentation,
            FIXTURES.peerDID2,
            FIXTURES.peerDID1,
            [{
                id: 'attach-pres-1',
                data: {
                    base64: Buffer.from(FIXTURES.jws).toString('base64'),
                },
                format: Domain.CredentialType.JWT,
            } as any],
            'thread-real-verify',
        );

        let isValid: boolean | undefined;
        await act(async () => {
            isValid = await result.current.verifier.verifyPresentation(presentationMsg);
        });

        expect(handleSpy).toHaveBeenCalledWith(presentationMsg);
        expect(isValid).toBe(true);

        handleSpy.mockRestore();
    });
});

describe('IssuerProvider — createOOBOffer with SDJWT', () => {
    afterEach(() => {
        cleanup();
        vi.restoreAllMocks();
    });

    test('createOOBOffer works with SDJWT credential type', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                issuer: useIssuer(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        const agent = result.current.issuer.agent!;
        const runTaskSpy = vi.spyOn(agent, 'runTask').mockResolvedValue(
            Buffer.from(JSON.stringify({
                type: 'oob-sdjwt',
                format: Domain.CredentialType.SDJWT,
            })).toString('base64')
        );

        let oobJson: string | undefined;
        await act(async () => {
            oobJson = await result.current.issuer.createOOBOffer(
                Domain.CredentialType.SDJWT,
                'sdjwt-offer-1',
                [
                    { name: 'firstname', value: 'John', type: 'String' },
                    { name: 'lastname', value: 'Doe', type: 'String' },
                    { name: 'ssn', value: '123-45-6789', type: 'String' },
                ]
            );
        });

        expect(runTaskSpy).toHaveBeenCalled();
        expect(oobJson).toBeDefined();
        const parsed = JSON.parse(oobJson!);
        expect(parsed.format).toBe(Domain.CredentialType.SDJWT);

        runTaskSpy.mockRestore();
    });
});

describe('Full message round-trip — offer → request → issue', () => {
    afterEach(() => {
        cleanup();
        vi.restoreAllMocks();
    });

    test('stores offer, request, and issue messages with correct thread relationships', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                msgs: useMessages(),
            }),
            { wrapper: FullProviderWrapper }
        );

        await startDB(result);
        await waitForAgent(result);

        const pluto = result.current.db.pluto!;
        const threadId = 'full-round-trip-thread';

        // 1. Offer (received)
        const offer = new Domain.Message(
            JSON.stringify({
                credential_preview: {
                    body: { attributes: [{ name: 'familyName', value: 'Demo' }] },
                    type: 'https://didcomm.org/issue-credential/3.0/credential-credential',
                },
            }),
            'roundtrip-offer',
            ProtocolType.DidcommOfferCredential,
            FIXTURES.peerDID1,
            FIXTURES.peerDID2,
            [{
                id: 'attach-rt-offer',
                data: {
                    json: { options: { challenge: 'c1', domain: 'd1' } },
                },
                format: Domain.CredentialType.JWT,
            } as any],
            threadId,
            {},
            Math.floor(Date.now() / 1000),
            undefined,
            [],
            Domain.MessageDirection.RECEIVED,
        );

        // 2. Request (sent)
        const request = new Domain.Message(
            '{}',
            'roundtrip-request',
            ProtocolType.DidcommRequestCredential,
            FIXTURES.peerDID2,
            FIXTURES.peerDID1,
            [{
                id: 'attach-rt-request',
                data: {
                    base64: Buffer.from(FIXTURES.jwtCredentialPayloadEncoded).toString('base64'),
                },
                format: Domain.CredentialType.JWT,
            } as any],
            threadId,
            {},
            Math.floor(Date.now() / 1000),
            undefined,
            [],
            Domain.MessageDirection.SENT,
        );

        // 3. Issue (received)
        const issue = new Domain.Message(
            '{}',
            'roundtrip-issue',
            ProtocolType.DidcommIssueCredential,
            FIXTURES.peerDID1,
            FIXTURES.peerDID2,
            [{
                id: 'attach-rt-issue',
                data: {
                    base64: Buffer.from(FIXTURES.jwtCredentialPayloadEncoded).toString('base64'),
                },
                format: Domain.CredentialType.JWT,
            } as any],
            threadId,
            {},
            Math.floor(Date.now() / 1000),
            undefined,
            [],
            Domain.MessageDirection.RECEIVED,
        );

        await act(async () => {
            await pluto.storeMessage(offer);
            await pluto.storeMessage(request);
            await pluto.storeMessage(issue);
        });

        await act(async () => {
            await result.current.msgs.load();
        });

        // All 3 messages should share the same thread
        const msgs = result.current.msgs.messages;
        const threadMsgs = msgs.filter((m) => m.message.thid === threadId);
        expect(threadMsgs).toHaveLength(3);

        // Offer and Issue are received → unread; Request is sent → auto-read
        const offerFound = threadMsgs.find((m) => m.message.id === 'roundtrip-offer');
        const requestFound = threadMsgs.find((m) => m.message.id === 'roundtrip-request');
        const issueFound = threadMsgs.find((m) => m.message.id === 'roundtrip-issue');

        expect(offerFound!.read).toBe(false);
        expect(requestFound!.read).toBe(true); // sent → auto-read
        expect(issueFound!.read).toBe(false);

        // Check directions
        expect(offerFound!.message.direction).toBe(Domain.MessageDirection.RECEIVED);
        expect(requestFound!.message.direction).toBe(Domain.MessageDirection.SENT);
        expect(issueFound!.message.direction).toBe(Domain.MessageDirection.RECEIVED);

        // receivedMessages should have offer + issue
        const received = result.current.msgs.receivedMessages;
        expect(received.filter((m) => m.thid === threadId)).toHaveLength(2);

        // sentMessages should have request
        const sent = result.current.msgs.sentMessages;
        expect(sent.filter((m) => m.thid === threadId)).toHaveLength(1);
    });
});
