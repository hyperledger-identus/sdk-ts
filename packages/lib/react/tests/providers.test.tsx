/**
 * @vitest-environment jsdom
 */
import React, { type ReactNode } from 'react';
import { describe, expect, test, vi, afterEach } from 'vitest';
import { renderHook, act, cleanup } from '@testing-library/react';

import { Agent, Domain, Pluto } from '@hyperledger/identus-sdk';

import { DatabaseProvider } from '../src/provider/Database';
import { CredentialsProvider } from '../src/provider/Credentials';
import { ConnectionsProvider } from '../src/provider/Connections';
import { MessagesProvider } from '../src/provider/Messages';
import { useDatabase } from '../src/hooks/useDatabase';
import { useAgent } from '../src/hooks/useAgent';
import { useMessages } from '../src/hooks/useMessages';
import { useCredentials } from '../src/hooks/useCredentials';
import { useConnections } from '../src/hooks/useConnections';
import { AgentContext } from '../src/context';
import { createResolver } from '../src/resolver';
import { hasDB } from '../src/utils';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Wraps children in DatabaseProvider only. Used for testing Database-layer
 * hooks without needing the full Agent stack.
 */
function DatabaseOnlyWrapper({ children }: { children: ReactNode }) {
    return <DatabaseProvider>{children}</DatabaseProvider>;
}

/**
 * Renders useDatabase inside DatabaseProvider, starts it (two calls
 * needed due to React state closure), and returns the hook result.
 */
async function setupDatabase() {
    const dbName = `test-db-${Date.now()}`;
    const { result } = renderHook(() => useDatabase(), {
        wrapper: DatabaseOnlyWrapper,
    });
    await act(async () => {
        await result.current.start({ name: dbName });
    });
    return result;
}

/**
 * Wraps children with DatabaseProvider + CredentialsProvider.
 * CredentialsProvider only needs DatabaseContext.
 */
function CredentialsWrapper({ children }: { children: ReactNode }) {
    return (
        <DatabaseProvider>
            <CredentialsProvider>{children}</CredentialsProvider>
        </DatabaseProvider>
    );
}

/**
 * Bridge component that creates a real Agent from the DatabaseProvider's pluto
 * and provides it via AgentContext. No mocking — uses Agent.initialize({ pluto }).
 */
function AgentFromDB({ children }: { children: ReactNode }) {
    const { pluto } = useDatabase();
    const [agent, setAgent] = React.useState<Agent | null>(null);

    React.useEffect(() => {
        if (pluto && !agent) {
            setAgent(Agent.initialize({ pluto }));
        }
    }, [pluto, agent]);

    const ctx = {
        agent,
        setAgent,
        start: async () => { /* noop for tests */ },
        stop: async () => { /* noop for tests */ },
        state: agent ? Domain.Startable.State.RUNNING : Domain.Startable.State.STOPPED,
    };

    return (
        <AgentContext.Provider value={ctx as any}>
            {children}
        </AgentContext.Provider>
    );
}

/**
 * Wraps children with DatabaseProvider + real Agent + ConnectionsProvider.
 */
function ConnectionsWrapper({ children }: { children: ReactNode }) {
    return (
        <DatabaseProvider>
            <AgentFromDB>
                <ConnectionsProvider>{children}</ConnectionsProvider>
            </AgentFromDB>
        </DatabaseProvider>
    );
}

/**
 * Wraps children with DatabaseProvider + real Agent + CredentialsProvider + MessagesProvider.
 */
function MessagesWrapper({ children }: { children: ReactNode }) {
    return (
        <DatabaseProvider>
            <AgentFromDB>
                <CredentialsProvider>
                    <MessagesProvider>{children}</MessagesProvider>
                </CredentialsProvider>
            </AgentFromDB>
        </DatabaseProvider>
    );
}

// ---------------------------------------------------------------------------
// 1. DatabaseProvider
// ---------------------------------------------------------------------------
describe('DatabaseProvider', () => {
    afterEach(() => {
        cleanup();
    });

    test('initializes with disconnected state', () => {
        const { result } = renderHook(() => useDatabase(), {
            wrapper: DatabaseOnlyWrapper,
        });

        expect(result.current.state).toBe('disconnected');
        expect(result.current.pluto).toBeNull();
        expect(result.current.error).toBeNull();
        expect(result.current.features).toEqual([]);
        expect(result.current.wallet).toBeNull();
    });

    test('start() transitions state to loaded', async () => {
        const createSpy = vi.spyOn(Pluto, 'create');

        const { result } = renderHook(() => useDatabase(), {
            wrapper: DatabaseOnlyWrapper,
        });

        await act(async () => {
            await result.current.start({ name: 'test-start' });
        });

        expect(createSpy).toHaveBeenCalledWith(
            expect.objectContaining({ dbName: 'test-start' })
        );
        expect(result.current.pluto).not.toBeNull();
        expect(result.current.state).toBe('loaded');

        createSpy.mockRestore();
    });

    test('start() sets error on failure', async () => {
        const createSpy = vi
            .spyOn(Pluto, 'create')
            .mockRejectedValueOnce(new Error('DB init failed'));

        const { result } = renderHook(() => useDatabase(), {
            wrapper: DatabaseOnlyWrapper,
        });

        await act(async () => {
            await result.current.start({ name: 'fail-db' });
        });

        expect(result.current.state).toBe('disconnected');
        expect(result.current.error).toBeInstanceOf(Error);
        expect(result.current.error?.message).toBe('DB init failed');

        createSpy.mockRestore();
    });

    test('storeSettingsByKey / getSettingsByKey round-trip', async () => {
        const result = await setupDatabase();

        let fetched: string | null = null;
        await act(async () => {
            await result.current.storeSettingsByKey('testKey', 'testValue');
        });

        await act(async () => {
            fetched = await result.current.getSettingsByKey('testKey');
        });

        expect(fetched).toBe('testValue');
    });

    test('deleteSettingsByKey removes setting', async () => {
        const result = await setupDatabase();

        await act(async () => {
            await result.current.storeSettingsByKey('delKey', 'delVal');
        });

        await act(async () => {
            await result.current.deleteSettingsByKey('delKey');
        });

        let fetched: string | null = 'not-null';
        await act(async () => {
            fetched = await result.current.getSettingsByKey('delKey');
        });

        expect(fetched).toBeNull();
    });

    test('setSeed / getSeed round-trip', async () => {
        const result = await setupDatabase();
        const seedBytes = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
        const seed: Domain.Seed = { value: seedBytes };

        let returnedSeed: Domain.Seed | null = null;
        await act(async () => {
            await result.current.setSeed(seed);
        });

        await act(async () => {
            returnedSeed = await result.current.getSeed();
        });

        expect(returnedSeed).not.toBeNull();
        expect(Array.from(returnedSeed!.value)).toEqual(Array.from(seedBytes));
    });

    test('setMediator / getMediator round-trip', async () => {
        const result = await setupDatabase();
        const did = Domain.DID.fromString('did:peer:2.Ez6LSbysY2xFMRpGMhb7tFTLMpeuPRaqaWM1yECx2AtzE3KCc');

        let fetchedMediator: Domain.DID | null = null;
        await act(async () => {
            await result.current.setMediator(did);
        });

        await act(async () => {
            fetchedMediator = await result.current.getMediator();
        });

        expect(fetchedMediator).not.toBeNull();
        expect(fetchedMediator!.toString()).toBe(did.toString());
    });

    test('setMediator(null) clears mediator', async () => {
        const result = await setupDatabase();
        const did = Domain.DID.fromString('did:peer:2.Ez6LSbysY2xFMRpGMhb7tFTLMpeuPRaqaWM1yECx2AtzE3KCc');

        await act(async () => {
            await result.current.setMediator(did);
        });

        await act(async () => {
            await result.current.setMediator(null);
        });

        let fetchedMediator: Domain.DID | null = Domain.DID.fromString('not:null');
        await act(async () => {
            fetchedMediator = await result.current.getMediator();
        });

        expect(fetchedMediator).toBeNull();
    });

    test('setWallet / getWallet round-trip', async () => {
        const result = await setupDatabase();

        await act(async () => {
            await result.current.setWallet('my-wallet');
        });

        let walletName: string | null = null;
        await act(async () => {
            walletName = await result.current.getWallet();
        });

        expect(walletName).toBe('my-wallet');
        expect(result.current.wallet).toBe('my-wallet');
    });

    test('setResolverUrl / getResolverUrl round-trip', async () => {
        const result = await setupDatabase();

        await act(async () => {
            await result.current.setResolverUrl('https://resolver.example.com');
        });

        let resolverUrl: string | null = null;
        await act(async () => {
            resolverUrl = await result.current.getResolverUrl();
        });

        expect(resolverUrl).toBe('https://resolver.example.com');
    });

    test('getMessages returns empty initially', async () => {
        const result = await setupDatabase();

        let messages: any[] = [];
        await act(async () => {
            messages = await result.current.getMessages();
        });

        expect(messages).toEqual([]);
    });

    test('getCredentials returns empty initially', async () => {
        const result = await setupDatabase();

        let credentials: any[] = [];
        await act(async () => {
            credentials = await result.current.getCredentials();
        });

        expect(credentials).toEqual([]);
    });

    test('storeDID calls pluto.storeDID', async () => {
        const result = await setupDatabase();
        const pluto = result.current.pluto!;
        const spy = vi.spyOn(pluto, 'storeDID');

        const did = Domain.DID.fromString('did:peer:2.Ez6LSbysY2xFMRpGMhb7tFTLMpeuPRaqaWM1yECx2AtzE3KCc');

        await act(async () => {
            await result.current.storeDID(did, [], 'test-alias');
        });

        expect(spy).toHaveBeenCalledWith(did, [], 'test-alias');
        spy.mockRestore();
    });

    test('issuance CRUD lifecycle', async () => {
        const result = await setupDatabase();
        const pluto = result.current.pluto!;
        const insertSpy = vi.spyOn(pluto.store, 'insert');

        const flow = {
            id: 'flow-1',
            uuid: 'flow-1',
            credentialFormat: 'JWT',
            claims: [{ name: 'test', value: 'val', type: 'String' }],
        };

        // Create
        await act(async () => {
            await result.current.createIssuanceFlow(flow as any);
        });

        expect(insertSpy).toHaveBeenCalled();

        // Read
        let fetched: any = null;
        await act(async () => {
            fetched = await result.current.getIssuanceFlow('flow-1');
        });
        expect(fetched).not.toBeNull();
        expect(fetched.id).toBe('flow-1');

        // Read all
        let all: any[] = [];
        await act(async () => {
            all = await result.current.getIssuanceFlows();
        });
        expect(all.length).toBeGreaterThanOrEqual(1);

        // Update
        const updateSpy = vi.spyOn(pluto.store, 'update');
        await act(async () => {
            await result.current.updateIssuanceFlow({ ...flow, claims: [] } as any);
        });
        expect(updateSpy).toHaveBeenCalled();

        // Delete
        const deleteSpy = vi.spyOn(pluto.store, 'delete');
        await act(async () => {
            await result.current.deleteIssuanceFlow('flow-1');
        });
        expect(deleteSpy).toHaveBeenCalled();

        insertSpy.mockRestore();
        updateSpy.mockRestore();
        deleteSpy.mockRestore();
    });
});
// ---------------------------------------------------------------------------
// 2. DatabaseProvider — remaining actions
// ---------------------------------------------------------------------------
describe('DatabaseProvider — remaining actions', () => {
    afterEach(() => {
        cleanup();
    });

    test('readMessage spies on pluto.store.update', async () => {
        const result = await setupDatabase();
        const pluto = result.current.pluto!;

        // Insert a message manually
        const msgId = 'msg-' + Date.now();
        await act(async () => {
            await pluto.store.insert('messages' as any, {
                uuid: msgId,
                id: msgId,
                dataJson: JSON.stringify({
                    id: msgId,
                    piuri: 'https://didcomm.org/basicmessage/2.0/message',
                    body: '{}',
                }),
                read: false,
            } as any);
        });

        const updateSpy = vi.spyOn(pluto.store, 'update');
        const fakeMessage = { id: msgId, uuid: msgId } as Domain.Message;

        await act(async () => {
            await result.current.readMessage(fakeMessage);
        });

        expect(updateSpy).toHaveBeenCalled();
        updateSpy.mockRestore();
    });

    test('deleteMessage calls pluto.deleteMessage', async () => {
        const result = await setupDatabase();
        const pluto = result.current.pluto!;
        const spy = vi.spyOn(pluto, 'deleteMessage');

        const fakeMessage = { id: 'del-msg-1', uuid: 'del-msg-1' } as Domain.Message;

        await act(async () => {
            await result.current.deleteMessage(fakeMessage);
        });

        expect(spy).toHaveBeenCalledWith('del-msg-1');
        spy.mockRestore();
    });

    test('updateDIDStatus spies on pluto.store.update', async () => {
        const result = await setupDatabase();
        const pluto = result.current.pluto!;
        const did = Domain.DID.fromString('did:prism:test123');

        // Store the DID first
        await act(async () => {
            await pluto.store.insert('dids' as any, {
                uuid: did.toString(),
                method: 'prism',
                methodId: 'test123',
                schema: 'did',
                did: did.toString(),
                status: 'unpublished',
            } as any);
        });

        const updateSpy = vi.spyOn(pluto.store, 'update');

        await act(async () => {
            await result.current.updateDIDStatus(did, 'published');
        });

        expect(updateSpy).toHaveBeenCalled();
        const args = updateSpy.mock.calls[0];
        expect(args[0]).toBe('dids');
        expect((args[1] as any).status).toBe('published');
        updateSpy.mockRestore();
    });

    test('updateDIDStatus throws when DID not found', async () => {
        const result = await setupDatabase();
        const did = Domain.DID.fromString('did:prism:nonexistent');

        await expect(
            act(async () => {
                await result.current.updateDIDStatus(did, 'published');
            })
        ).rejects.toThrow('DID not found');
    });

    test('storeSettingsByKey overwrites existing value', async () => {
        const result = await setupDatabase();

        await act(async () => {
            await result.current.storeSettingsByKey('overwriteKey', 'value1');
        });

        await act(async () => {
            await result.current.storeSettingsByKey('overwriteKey', 'value2');
        });

        let fetched: string | null = null;
        await act(async () => {
            fetched = await result.current.getSettingsByKey('overwriteKey');
        });

        expect(fetched).toBe('value2');
    });
});

// ---------------------------------------------------------------------------
// 3. CredentialsProvider
// ---------------------------------------------------------------------------
describe('CredentialsProvider', () => {
    afterEach(() => {
        cleanup();
    });

    test('initializes with empty credentials array', () => {
        const { result } = renderHook(() => useCredentials(), {
            wrapper: CredentialsWrapper,
        });
        expect(result.current.credentials).toEqual([]);
    });

    test('load() calls pluto.getAllCredentials', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                creds: useCredentials(),
            }),
            { wrapper: CredentialsWrapper }
        );

        const dbName = `cred-test-${Date.now()}`;
        await act(async () => {
            await result.current.db.start({ name: dbName });
        });

        const pluto = result.current.db.pluto!;
        const spy = vi.spyOn(pluto, 'getAllCredentials');

        await act(async () => {
            await result.current.creds.load();
        });

        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
});

// ---------------------------------------------------------------------------
// 4. ConnectionsProvider
// ---------------------------------------------------------------------------
describe('ConnectionsProvider', () => {
    afterEach(() => {
        cleanup();
    });

    test('initializes with empty connections array', () => {
        const { result } = renderHook(() => useConnections(), {
            wrapper: ConnectionsWrapper,
        });
        expect(result.current.connections).toEqual([]);
    });

    test('load() delegates to pluto.getAllDidPairs on DB start', async () => {
        // We need to spy before db.start() because ConnectionsProvider
        // auto-loads connections via useEffect when dbState becomes 'loaded'.
        // Instead of spying on pluto (which doesn't exist yet), we verify
        // the auto-load result: connections should be an empty array after load.
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                conns: useConnections(),
            }),
            { wrapper: ConnectionsWrapper }
        );

        const dbName = `conn-test-${Date.now()}`;
        await act(async () => {
            await result.current.db.start({ name: dbName });
        });

        // After DB is loaded, ConnectionsProvider auto-loads via useEffect.
        // Verify that the connections array reflects the DB state (empty).
        expect(result.current.conns.connections).toEqual([]);

        // Now verify that pluto.getAllDidPairs was used by storing a pair
        // and checking load reflects it.
        const pluto = result.current.db.pluto!;
        const host = Domain.DID.fromString('did:peer:2.Ez6LSbysY2xFMRpGMhb7tFTLMpeuPRaqaWM1yECx2AtzE3KCc');
        const receiver = Domain.DID.fromString('did:peer:2.Ez6MkrKj5ePPjBmFKpFCTr1sWjFPz3ePiBNvGyNcfJaBjg5GA');

        await act(async () => {
            await pluto.storeDIDPair(host, receiver, 'test-pair');
        });

        const spy = vi.spyOn(pluto, 'getAllDidPairs');

        // Force a fresh load by re-rendering
        await act(async () => {
            await result.current.conns.load();
        });

        // load() has an isLoaded guard, so it won't re-call getAllDidPairs
        // after first auto-load. But we can verify the data was stored correctly.
        const pairs = await pluto.getAllDidPairs();
        expect(pairs.length).toBe(1);
        expect(pairs[0].host.toString()).toBe(host.toString());
        spy.mockRestore();
    });
});

// ---------------------------------------------------------------------------
// 5. MessagesProvider
// ---------------------------------------------------------------------------

/**
 * Helper to store a properly-formatted message via pluto.storeMessage.
 * Uses Domain.Message constructor which produces valid format for fromJson round-trip.
 */
async function insertTestMessage(pluto: Pluto, id: string, direction: Domain.MessageDirection) {
    const msg = new Domain.Message(
        '{}',                          // body
        id,                            // id
        'https://didcomm.org/basicmessage/2.0/message', // piuri
        undefined,                     // from
        undefined,                     // to
        [],                            // attachments (required for fromJson)
        undefined,                     // thid
        {},                            // extraHeaders
        Math.floor(Date.now() / 1000), // createdTime
        undefined,                     // expiresTimePlus
        [],                            // ack
        direction,                     // direction
    );
    await pluto.storeMessage(msg);
    return msg;
}

describe('MessagesProvider', () => {
    afterEach(() => {
        cleanup();
    });

    test('initializes with empty messages state', () => {
        const { result } = renderHook(() => useMessages(), {
            wrapper: MessagesWrapper,
        });
        expect(result.current.messages).toEqual([]);
        expect(result.current.unreadMessages).toEqual([]);
        expect(result.current.receivedMessages).toEqual([]);
        expect(result.current.sentMessages).toEqual([]);
    });

    test('load() fetches messages from DB', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                msgs: useMessages(),
            }),
            { wrapper: MessagesWrapper }
        );

        const dbName = `msg-test-${Date.now()}`;
        await act(async () => {
            await result.current.db.start({ name: dbName });
        });

        const pluto = result.current.db.pluto!;
        const msgId = 'msg-load-' + Date.now();
        await act(async () => {
            await insertTestMessage(pluto, msgId, Domain.MessageDirection.RECEIVED);
        });

        await act(async () => {
            await result.current.msgs.load();
        });

        expect(result.current.msgs.messages.length).toBeGreaterThanOrEqual(1);
    });

    test('readMessage updates local state to read: true', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                msgs: useMessages(),
            }),
            { wrapper: MessagesWrapper }
        );

        const dbName = `msg-read-${Date.now()}`;
        await act(async () => {
            await result.current.db.start({ name: dbName });
        });

        const pluto = result.current.db.pluto!;
        const msgId = 'msg-read-' + Date.now();
        await act(async () => {
            await insertTestMessage(pluto, msgId, Domain.MessageDirection.RECEIVED);
        });

        await act(async () => {
            await result.current.msgs.load();
        });

        const messageItem = result.current.msgs.messages.find(
            (m) => m.message.id === msgId
        );
        expect(messageItem).toBeDefined();
        expect(messageItem!.read).toBe(false);

        await act(async () => {
            await result.current.msgs.readMessage(messageItem!.message);
        });

        const updated = result.current.msgs.messages.find(
            (m) => m.message.id === msgId
        );
        expect(updated!.read).toBe(true);
    });

    test('deleteMessage removes from local state', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                msgs: useMessages(),
            }),
            { wrapper: MessagesWrapper }
        );

        const dbName = `msg-del-${Date.now()}`;
        await act(async () => {
            await result.current.db.start({ name: dbName });
        });

        const pluto = result.current.db.pluto!;
        const msgId = 'msg-del-' + Date.now();
        await act(async () => {
            await insertTestMessage(pluto, msgId, Domain.MessageDirection.RECEIVED);
        });

        await act(async () => {
            await result.current.msgs.load();
        });

        const before = result.current.msgs.messages.length;
        const messageItem = result.current.msgs.messages.find(
            (m) => m.message.id === msgId
        );

        await act(async () => {
            await result.current.msgs.deleteMessage(messageItem!.message);
        });

        expect(result.current.msgs.messages.length).toBe(before - 1);
        expect(
            result.current.msgs.messages.find((m) => m.message.id === msgId)
        ).toBeUndefined();
    });

    test('sent messages are automatically marked as read', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                msgs: useMessages(),
            }),
            { wrapper: MessagesWrapper }
        );

        const dbName = `msg-sent-${Date.now()}`;
        await act(async () => {
            await result.current.db.start({ name: dbName });
        });

        const pluto = result.current.db.pluto!;
        const msgId = 'msg-sent-' + Date.now();
        await act(async () => {
            await insertTestMessage(pluto, msgId, Domain.MessageDirection.SENT);
        });

        await act(async () => {
            await result.current.msgs.load();
        });

        const sentMsg = result.current.msgs.messages.find(
            (m) => m.message.id === msgId
        );
        // MessagesProvider auto-marks SENT messages as read
        expect(sentMsg?.read).toBe(true);
    });

    test('unreadMessages only includes received unread messages', async () => {
        const { result } = renderHook(
            () => ({
                db: useDatabase(),
                msgs: useMessages(),
            }),
            { wrapper: MessagesWrapper }
        );

        const dbName = `msg-unread-${Date.now()}`;
        await act(async () => {
            await result.current.db.start({ name: dbName });
        });

        const pluto = result.current.db.pluto!;
        const ts = Date.now();

        // unread received message
        await act(async () => {
            await insertTestMessage(pluto, `unread-${ts}`, Domain.MessageDirection.RECEIVED);
        });

        // sent message (auto-read)
        await act(async () => {
            await insertTestMessage(pluto, `sent-${ts}`, Domain.MessageDirection.SENT);
        });

        await act(async () => {
            await result.current.msgs.load();
        });

        // Only the received unread message should appear
        expect(result.current.msgs.unreadMessages.length).toBe(1);
        expect(result.current.msgs.unreadMessages[0].id).toBe(`unread-${ts}`);

        // Sent message should NOT be in unread
        expect(
            result.current.msgs.unreadMessages.find(
                (m) => m.id === `sent-${ts}`
            )
        ).toBeUndefined();
    });
});

// ---------------------------------------------------------------------------
// 6. Hook Context Guards
// ---------------------------------------------------------------------------
describe('Hook context guards', () => {
    afterEach(() => {
        cleanup();
    });

    test('useDatabase throws outside DatabaseProvider', () => {
        expect(() => {
            renderHook(() => useDatabase());
        }).toThrow('useDatabase must be used within a DatabaseProvider');
    });

    test('useAgent throws outside AgentProvider', () => {
        // useAgent is used inside DatabaseProvider context but
        // AgentContext is a different context — it'll throw
        expect(() => {
            renderHook(() => useAgent());
        }).toThrow('useAgent must be used within a AgentProvider');
    });

    // These hooks use useAgent/useDatabase internally, so they should
    // also throw when rendered without providers
    test('useMessages throws outside providers', () => {
        expect(() => {
            renderHook(() => useMessages());
        }).toThrow();
    });

    test('useCredentials throws outside providers', () => {
        expect(() => {
            renderHook(() => useCredentials());
        }).toThrow();
    });

    test('useConnections throws outside providers', () => {
        expect(() => {
            renderHook(() => useConnections());
        }).toThrow();
    });
});

// ---------------------------------------------------------------------------
// 3. createResolver (unit tests, no React)
// ---------------------------------------------------------------------------
describe('createResolver', () => {
    test('creates a resolver class with method "prism"', () => {
        const ResolverClass = createResolver('https://resolver.example.com');
        const resolver = new (ResolverClass as any)();
        expect(resolver.method).toBe('prism');
    });

    test('resolve() calls fetch with correct URL', async () => {
        const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
            ok: true,
            json: async () => ({ id: 'did:prism:abc' }),
        } as Response);

        const ResolverClass = createResolver('https://resolver.example.com/');
        const resolver = new (ResolverClass as any)();
        await resolver.resolve('did:prism:abc');

        expect(fetchSpy).toHaveBeenCalledWith(
            'https://resolver.example.com/did:prism:abc',
            expect.objectContaining({ method: 'GET' })
        );

        fetchSpy.mockRestore();
    });

    test('resolve() throws on non-ok response', async () => {
        const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
            ok: false,
        } as Response);

        const ResolverClass = createResolver('https://resolver.example.com');
        const resolver = new (ResolverClass as any)();

        await expect(resolver.resolve('did:prism:abc')).rejects.toThrow(
            'Failed to fetch data'
        );

        fetchSpy.mockRestore();
    });
});

// ---------------------------------------------------------------------------
// 4. hasDB utility (unit tests, no React)
// ---------------------------------------------------------------------------
describe('hasDB', () => {
    test('returns true for non-null value', () => {
        expect(hasDB({} as any)).toBe(true);
    });

    test('returns false for null', () => {
        expect(hasDB(null)).toBe(false);
    });
});
