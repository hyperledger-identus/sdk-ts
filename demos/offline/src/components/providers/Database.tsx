import { useCallback, useEffect, useState } from "react";
import SDK from "@hyperledger/identus-sdk";
import { useRouter } from "next/router";

import { DatabaseContext } from "@/context";
import { FEATURES, MEDIATOR_DID, PRISM_RESOLVER_URL_KEY, WALLET_NAME } from "@/config";
import { DatabaseState } from "@/utils/types";
import { useWallet } from "@meshsdk/react";
import { useRIDB } from "@trust0/ridb-react";
import { RIDB, StartOptions, StorageType } from "@trust0/ridb";
import { schemas } from "@/utils/db/schemas";
import { uuid } from "@stablelib/uuid";
import { useApollo } from "@/hooks";
import { GroupedDIDs } from "@/utils/types";
import { Doc } from "@trust0/ridb-core";
import { createStore } from "@trust0/identus-store";

const hasDB = (db: RIDB<typeof schemas> | null):
    db is RIDB<typeof schemas> => db !== null;


export type DIDStatus = 'unpublished' | 'published' | 'deactivated';



export function DatabaseProvider({ children }: { children: React.ReactNode }) {
    const { connect } = useWallet();
    const apollo = useApollo();
    const db = useRIDB<typeof schemas>();
    const router = useRouter();
    const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
    const [state, setState] = useState<DatabaseState>('disconnected');
    const [error, setError] = useState<Error | null>(null);
    const [features, setFeatures] = useState<string[]>([]);
    const [currentWallet, setCurrentWallet] = useState<string | null>(null);

    const currentRoute = router.pathname;

    const store = createStore({ db, storageType: StorageType.IndexDB });
    const pluto = new SDK.Pluto(store, apollo);

    const getMessages = useCallback(async () => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        const messages = await db.collections.messages.find({});
        return messages.map((message) => ({
            message: SDK.Domain.Message.fromJson(message.dataJson),
            read: message.read ?? false
        }))
    }, [db]);

    const getExtendedDIDs = useCallback(async () => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        const dids = await db.collections.dids.find({});
        return Promise.all(dids.filter((did) => did.method === 'prism').map(async (did) => {
            const keysIds = await db.collections['didkey-link'].find({ didId: did.uuid });
            const keys = await Promise.all(keysIds.map(({ keyId }) => db.collections.keys.findById(keyId)))
            return {
                did: SDK.Domain.DID.fromString(did.uuid),
                status: (did as any)?.status as DIDStatus ?? 'unpublished',
                alias: did.alias,
                keys: keys.map((key) => apollo.restorePrivateKey({
                    recoveryId: key.recoveryId,
                    raw: Buffer.from(key.rawHex, 'hex'),
                    index: key.index ?? 0
                }))
            }
        }))
    }, [db, apollo]);

    const getSettingsByKey = useCallback(async (key: string) => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        const keys = await db.collections.settings.find({ key });
        if (keys.length) {
            return keys[0].value;
        }
        return null;
    }, [db]);

    const getFeatures = useCallback(async () => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        const features = (await getSettingsByKey(FEATURES)) || '';
        setFeatures(features.split(','));
    }, [getSettingsByKey, db]);

    const getSeed = useCallback(async () => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        const seeds = await db.collections.settings.find({ key: 'seed' });
        if (seeds.length) {
            return {
                value: Uint8Array.from(
                    Buffer.from(seeds[0].value, 'hex')
                )
            }
        }
        return null
    }, [db]);

    const storeSettingsByKey = useCallback(async (key: string, value: string) => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        for (const row of await db.collections.settings.find({ key })) {
            await db.collections.settings.delete(row.id);
        }
        await db.collections.settings.create({
            key,
            value,
            id: uuid()
        });
    }, [db]);

    const deleteSettingsByKey = useCallback(async (key: string) => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        for (const row of await db.collections.settings.find({ key })) {
            await db.collections.settings.delete(row.id);
        }
    }, [db]);

    const getResolverUrl = useCallback(async () => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        return await getSettingsByKey(PRISM_RESOLVER_URL_KEY);
    }, [getSettingsByKey, db]);

    const setMediator = useCallback(async (mediator: SDK.Domain.DID | null) => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        if (mediator) {
            await storeSettingsByKey(MEDIATOR_DID, mediator.toString());
        } else {
            await deleteSettingsByKey(MEDIATOR_DID);
        }
    }, [db, deleteSettingsByKey, storeSettingsByKey]);

    const setSeed = useCallback(async (seed: SDK.Domain.Seed) => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        for (const row of await db.collections.settings.find({ key: 'seed' })) {
            await db.collections.settings.delete(row.id);
        }
        await db.collections.settings.create({
            key: 'seed',
            value: Buffer.from(seed.value).toString('hex'),
            id: uuid()
        });
        return seed;
    }, [db]);

    const setWallet = useCallback(async (wallet: string | null) => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        if (wallet) {
            await storeSettingsByKey(WALLET_NAME, wallet);
            setCurrentWallet(wallet);

        } else {
            await deleteSettingsByKey(WALLET_NAME);
            setCurrentWallet(null);
        }
    }, [db, setCurrentWallet, deleteSettingsByKey, storeSettingsByKey]);

    const setResolverUrl = useCallback(async (resolverUrl: string | null) => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        if (resolverUrl) {
            await storeSettingsByKey(PRISM_RESOLVER_URL_KEY, resolverUrl);
        } else {
            await deleteSettingsByKey(PRISM_RESOLVER_URL_KEY);
        }
    }, [db, deleteSettingsByKey, storeSettingsByKey]);

    const readMessage = useCallback(async (message: SDK.Domain.Message) => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        const [found] = await db.collections.messages.find({ $or: [{ read: true }, { id: message.id }] });
        if (found) {
            await db.collections.messages.update({
                ...found,
                read: true
            } as any)
        }
    }, [db]);

    const deleteMessage = useCallback(async (message: SDK.Domain.Message) => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        const query = { $or: [{ uuid: message.uuid }, { id: message.id }] }
        const [found] = await db.collections.messages.find(query);
        if (found) {
            await db.collections.messages.delete(found.uuid);
        }
    }, [db]);

    const getIssuanceFlows = useCallback(async () => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        return db.collections.issuance.find({});
    }, [db]);

    const getIssuanceFlow = useCallback(async (id: string) => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        return db.collections.issuance.findById(id);
    }, [db]);

    const createIssuanceFlow = useCallback(async (flow: Doc<typeof schemas["issuance"]>) => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        await db.collections.issuance.create(flow);
    }, [db]);

    const updateIssuanceFlow = useCallback(async (flow: Doc<typeof schemas["issuance"]>) => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        await db.collections.issuance.update(flow);
    }, [db]);

    const deleteIssuanceFlow = useCallback(async (id: string) => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        await db.collections.issuance.delete(id);
    }, [db]);

    const updateDIDStatus = useCallback(async (did: SDK.Domain.DID, status: string) => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        const found = await db.collections.dids.findById(did.toString());
        if (!found) {
            throw new Error("DID not found");
        }
        await db.collections.dids.update({
            ...found,
            status
        } as any);
    }, [db])

    const storeDID = useCallback(async (did: SDK.Domain.DID, keys: SDK.Domain.PrivateKey[], alias: string = "DID") => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        if (alias.trim().length === 0) alias = "DID";

        await db.collections.dids.create({
            uuid: did.toString(),
            status: 'unpublished' as any,
            alias,
            schema: did.schema,
            method: did.method,
        } as any);

        const keyArray = Array.isArray(keys) ? keys : [keys];

        for (const key of keyArray) {
            if (key.isStorable()) {
                await db.collections.keys.create({
                    recoveryId: key.recoveryId,
                    rawHex: Buffer.from(key.raw).toString('hex'),
                    uuid: key.uuid,
                    alias: alias,
                    index: key.index ?? 0,
                });
                await db.collections['didkey-link'].create({
                    alias,
                    didId: did.uuid,
                    keyId: key.uuid,
                    uuid: uuid()
                });
            }
        }
    }, [db]);

    const getGroupedDIDs = useCallback(async () => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        const dids = await getExtendedDIDs();
        const grouped = dids.reduce<GroupedDIDs>((acc, { did: currentDID, alias: currentAlias, status, keys }) => {
            const method = currentDID.method;
            if (!acc[method]) acc[method] = [];

            if (!acc[method].some(({ did }) => did.toString() === currentDID.toString())) {
                acc[method].push({ alias: currentAlias, did: currentDID, status, keys });
            }
            return acc;
        }, {});
        return grouped;
    }, [db, getExtendedDIDs]);

    const getMediator = useCallback(async () => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        const mediatorStr = await getSettingsByKey(MEDIATOR_DID);
        if (mediatorStr) {
            return SDK.Domain.DID.fromString(mediatorStr)
        } else if (process.env.NEXT_PUBLIC_MEDIATOR_DID !== undefined) {
            return SDK.Domain.DID.fromString(process.env.NEXT_PUBLIC_MEDIATOR_DID);
        }
        return null;
    }, [getSettingsByKey, db]);

    const getWallet = useCallback(async () => {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        const walletName = await getSettingsByKey(WALLET_NAME);
        setWallet(walletName);
        return walletName;
    }, [getSettingsByKey, db, setWallet]);

    const authRedirect = useCallback(() => {
        if (db && db.started && currentRoute !== redirectUrl || "/app") {
            router.replace(redirectUrl || "/app");
        }
    }, [redirectUrl, router, db, currentRoute]);

    const start = useCallback(async (options: StartOptions<typeof schemas>) => {
        try {
            if (!hasDB(db)) {
                throw new Error("Database not connected");
            }
            setState('loading');
            await db.start(options);
            await getFeatures();
            await getWallet();
            setState('loaded');
            authRedirect();
        } catch (error) {
            setError(error as Error);
            setState('disconnected');
        }
    }, [db, getFeatures, getWallet, authRedirect]);


    useEffect(() => {
        if (!currentRoute.includes("/app")) {
            return
        }
        if (state === "disconnected") {
            if (currentRoute !== "/app/auth") {
                const fullUrl = router.asPath;
                setRedirectUrl(fullUrl);
            }
            if (currentRoute !== "/app/auth") {
                router.replace("/app/auth");
            }
        }
    }, [currentRoute, state, router, router.asPath])

    useEffect(() => {
        if (currentWallet) {
            connect(currentWallet);
        }
    }, [currentWallet, connect])

    return <DatabaseContext.Provider value={{
        db,
        state,
        error,
        features,
        wallet: currentWallet,
        pluto,
        authRedirect,
        start,
        getMessages,
        readMessage,
        deleteMessage,
        getExtendedDIDs,
        storeDID,
        updateDIDStatus,
        getIssuanceFlows,
        getIssuanceFlow,
        createIssuanceFlow,
        updateIssuanceFlow,
        deleteIssuanceFlow,
        getSettingsByKey,
        storeSettingsByKey,
        deleteSettingsByKey,
        getGroupedDIDs,
        getFeatures,
        getMediator,
        getSeed,
        getWallet,
        getResolverUrl,
        setMediator,
        setSeed,
        setWallet,
        setResolverUrl
    }}>
        {children}
    </DatabaseContext.Provider>
}
