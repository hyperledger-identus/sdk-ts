import React from "react";
import { useCallback, useState } from "react";
import { Domain, Pluto, type StartOptions } from "@hyperledger/identus-sdk";
import { uuid } from "@stablelib/uuid";
import { type GroupedDIDs, DatabaseContext } from "../context";
import { useApollo } from "../hooks";
import { FEATURES, PRISM_RESOLVER_URL_KEY, MEDIATOR_DID, WALLET_NAME } from "../config";
import { hasDB } from "../utils";


export type DIDStatus = 'unpublished' | 'published' | 'deactivated';

export function DatabaseProvider({ children }: { children: React.ReactNode }) {
    const apollo = useApollo();
    const [state, setState] = useState<any>('disconnected');
    const [error, setError] = useState<Error | null>(null);
    const [features, setFeatures] = useState<string[]>([]);
    const [currentWallet, setCurrentWallet] = useState<string | null>(null);
    const [pluto, setPluto] = useState<Pluto | null>(null);

    const getMessages = useCallback(async () => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        const allMessages = await pluto.store.query("messages");
        return allMessages.map((message) => ({
            message: Domain.Message.fromJson(message.dataJson),
            read: message.read ?? false
        }))
    }, [pluto]);

    const getExtendedDIDs = useCallback(async () => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        const dids = await pluto.store.query("dids");
        return Promise.all(dids.filter((did: any) => did.method === 'prism').map(async (did: any) => {
            const keysIds = await pluto.store.query("didkey-link", { selector: { didId: did.uuid } });
            const allKeys = await pluto.store.query("keys");
            const keys = keysIds.map((link: any) => allKeys.find((k: any) => k.uuid === link.keyId)).filter(Boolean);

            return {
                did: Domain.DID.fromString(did.uuid),
                status: (did)?.status as DIDStatus ?? 'unpublished',
                alias: did.alias,
                keys: keys.map((key: any) => apollo.restorePrivateKey({
                    recoveryId: key.recoveryId,
                    raw: Buffer.from(key.rawHex, 'hex'),
                    index: key.index ?? 0
                }))
            }
        }))
    }, [pluto, apollo]);

    const getSettingsByKey = useCallback(async (key: string) => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        const keys = await pluto.store.query("settings", { selector: { key } });
        if (keys.length) {
            return keys[0].value;
        }
        return null;
    }, [pluto]);

    const getFeatures = useCallback(async () => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        const features = (await getSettingsByKey(FEATURES)) || '';
        setFeatures(features.split(','));
    }, [getSettingsByKey, pluto]);

    const getSeed = useCallback(async () => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        const seeds = await pluto.store.query("settings", { selector: { key: 'seed' } });
        if (seeds.length) {
            return {
                value: Uint8Array.from(
                    Buffer.from(seeds[0].value, 'hex')
                )
            }
        }
        return null
    }, [pluto]);

    const storeSettingsByKey = useCallback(async (key: string, value: string) => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        const existing = await pluto.store.query("settings", { selector: { key } });
        for (const row of existing) {
            await pluto.store.delete("settings", row.uuid);
        }
        const id = uuid();
        await pluto.store.insert("settings", {
            id,
            key,
            value,
            uuid: id
        });
    }, [pluto]);

    const deleteSettingsByKey = useCallback(async (key: string) => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        const existing = await pluto.store.query("settings", { selector: { key } });
        for (const row of existing) {
            await pluto.store.delete("settings", row.uuid);
        }
    }, [pluto]);

    const getResolverUrl = useCallback(async () => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        return await getSettingsByKey(PRISM_RESOLVER_URL_KEY);
    }, [getSettingsByKey, pluto]);

    const setMediator = useCallback(async (mediator: Domain.DID | null) => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        if (mediator) {
            await storeSettingsByKey(MEDIATOR_DID, mediator.toString());
        } else {
            await deleteSettingsByKey(MEDIATOR_DID);
        }
    }, [pluto, deleteSettingsByKey, storeSettingsByKey]);

    const setSeed = useCallback(async (seed: Domain.Seed) => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        const existing = await pluto.store.query("settings", { selector: { key: 'seed' } });
        for (const row of existing) {
            await pluto.store.delete("settings", row.uuid);
        }
        const id = uuid();
        await pluto.store.insert("settings", {
            id,
            key: 'seed',
            value: Buffer.from(seed.value).toString('hex'),
            uuid: id
        });
        return seed;
    }, [pluto]);

    const setWallet = useCallback(async (wallet: string | null) => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        if (wallet) {
            await storeSettingsByKey(WALLET_NAME, wallet);
            setCurrentWallet(wallet);

        } else {
            await deleteSettingsByKey(WALLET_NAME);
            setCurrentWallet(null);
        }
    }, [pluto, setCurrentWallet, deleteSettingsByKey, storeSettingsByKey]);

    const setResolverUrl = useCallback(async (resolverUrl: string | null) => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        if (resolverUrl) {
            await storeSettingsByKey(PRISM_RESOLVER_URL_KEY, resolverUrl);
        } else {
            await deleteSettingsByKey(PRISM_RESOLVER_URL_KEY);
        }
    }, [pluto, deleteSettingsByKey, storeSettingsByKey]);

    const readMessage = useCallback(async (message: Domain.Message) => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        const found = await pluto.store.query("messages", {
            selector: {
                id: message.id,
                read: false
            }
        });
        if (found.length > 0) {
            await pluto.store.update("messages", {
                ...found[0],
                read: true
            } as any)
        }
    }, [pluto]);

    const deleteMessage = useCallback(async (message: Domain.Message) => {
        if (!pluto) {
            throw new Error("Database not connected");
        }
        await pluto.deleteMessage(message.id);
    }, [pluto]);

    const getIssuanceFlows = useCallback(async () => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        return pluto.store.query("issuance");
    }, [pluto]);

    const getIssuanceFlow = useCallback(async (id: string) => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        const res = await pluto.store.query("issuance", { selector: { id } });
        return res[0] || null;
    }, [pluto]);

    const createIssuanceFlow = useCallback(async (flow: any) => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        await pluto.store.insert("issuance", flow);
    }, [pluto]);

    const updateIssuanceFlow = useCallback(async (flow: any) => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        await pluto.store.update("issuance", flow);
    }, [pluto]);

    const deleteIssuanceFlow = useCallback(async (id: string) => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        await pluto.store.delete("issuance", id);
    }, [pluto]);

    const updateDIDStatus = useCallback(async (did: Domain.DID, status: string) => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        const found = await pluto.store.query("dids", { selector: { uuid: did.toString() } });
        if (!found.length) {
            throw new Error("DID not found");
        }
        await pluto.store.update("dids", {
            ...found[0],
            status
        } as any);
    }, [pluto])

    const storeDID = useCallback(async (did: Domain.DID, keys: Domain.PrivateKey[], alias: string = "DID") => {
        if (!pluto) {
            throw new Error("Database not connected");
        }
        if (alias.trim().length === 0) alias = "DID";
        await pluto.storeDID(did, keys, alias);
    }, [pluto]);

    const getGroupedDIDs = useCallback(async () => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        const dids = await getExtendedDIDs();
        const grouped = dids.reduce<GroupedDIDs>((acc: any, { did: currentDID, alias: currentAlias, status, keys }: any) => {
            const method = currentDID.method;
            if (!acc[method]) acc[method] = [];

            if (!acc[method].some(({ did }: any) => did.toString() === currentDID.toString())) {
                acc[method].push({ alias: currentAlias, did: currentDID, status, keys });
            }
            return acc;
        }, {});
        return grouped;
    }, [pluto, getExtendedDIDs]);

    const getMediator = useCallback(async () => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        const mediatorStr = await getSettingsByKey(MEDIATOR_DID);
        if (mediatorStr) {
            return Domain.DID.fromString(mediatorStr)
        } else if (process.env.NEXT_PUBLIC_MEDIATOR_DID !== undefined) {
            return Domain.DID.fromString(process.env.NEXT_PUBLIC_MEDIATOR_DID);
        }
        return null;
    }, [getSettingsByKey, pluto]);

    const getWallet = useCallback(async () => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        const walletName = await getSettingsByKey(WALLET_NAME);
        return setWallet(walletName).then(() => walletName);
    }, [getSettingsByKey, pluto, setWallet]);

    const start = useCallback(async (options?: StartOptions & { name?: string }) => {
        try {
            setState('loading');

            if (!pluto) {
                const newPluto = await Pluto.create({
                    dbName: options?.name || "identus",
                    startOptions: options,
                    keyRestoration: apollo
                });
                setPluto(newPluto);
            }

            await getFeatures();
            await getWallet();
            setState('loaded');
        } catch (error) {
            setError(error as Error);
            setState('disconnected');
        }
    }, [pluto, apollo, getFeatures, getWallet]);

    const getCredentials = useCallback(async () => {
        if (state === "loaded" && pluto) {
            const credentials = await pluto.getAllCredentials();
            return credentials ?? [];
        }
        return []
    }, [pluto, state]);

    const deleteCredential = useCallback(async (credential: Domain.Credential) => {
        if (!hasDB(pluto) || state !== "loaded") {
            throw new Error("Database not connected");
        }
        await pluto.store.delete("credentials", credential.uuid);
    }, [pluto, state]);

    return <DatabaseContext.Provider value={{
        pluto,
        state,
        error,
        features,
        wallet: currentWallet,
        start,
        getCredentials,
        deleteCredential,
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
