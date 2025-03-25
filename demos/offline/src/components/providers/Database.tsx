import { useState } from "react";
import SDK from "@hyperledger/identus-sdk";
import { DatabaseContext, DatabaseState } from "@/context";
import { PlutoExtended } from "@/utils/db";
import { MEDIATOR_DID, PRISM_RESOLVER_URL_KEY, WALLET_NAME } from "@/config";


const hasDB = (db: PlutoExtended | null): db is PlutoExtended => db !== null;

export function DatabaseProvider({ children }: { children: React.ReactNode }) {
    const [db, setDb] = useState<PlutoExtended | null>(null);
    const [state, setState] = useState<DatabaseState>('disconnected');
    const [error, setError] = useState<Error | null>(null);

    async function getMediator() {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        const mediatorStr = await db.getSettingsByKey(MEDIATOR_DID);
        if (mediatorStr) {
            return SDK.Domain.DID.fromString(mediatorStr)
        } else if (process.env.NEXT_PUBLIC_MEDIATOR_DID !== undefined) {
            return SDK.Domain.DID.fromString(process.env.NEXT_PUBLIC_MEDIATOR_DID);
        }
        return null;
    }

    async function getSeed() {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        return await db.decryptSeed();
    }

    async function getResolverUrl() {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        return await db.getSettingsByKey(PRISM_RESOLVER_URL_KEY);
    }

    async function getWallet() {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        return await db.getSettingsByKey(WALLET_NAME);
    }

    async function setMediator(mediator: SDK.Domain.DID | null) {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        if (mediator) {
            await db.storeSettingsByKey(MEDIATOR_DID, mediator.toString());
        } else {
            await db.deleteSettingsByKey(MEDIATOR_DID);
        }
    }

    async function setSeed(seed: SDK.Domain.Seed | null) {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        if (seed) {
            await db.storeSeed(seed);
        } else {
            await db.deleteSettingsByKey(WALLET_NAME);
        }
    }

    async function setWallet(wallet: string | null) {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        if (wallet) {
            await db.storeSettingsByKey(WALLET_NAME, wallet);
        } else {
            await db.deleteSettingsByKey(WALLET_NAME);
        }
    }

    async function setResolverUrl(resolverUrl: string | null) {
        if (!hasDB(db)) {
            throw new Error("Database not connected");
        }
        if (resolverUrl) {
            await db.storeSettingsByKey(PRISM_RESOLVER_URL_KEY, resolverUrl);
        } else {
            await db.deleteSettingsByKey(PRISM_RESOLVER_URL_KEY);
        }
    }

    async function start() {
        try {
            setState("loading");
            if (!hasDB(db)) {
                throw new Error("Database not connected");
            }
            await db.start();
            setState("loaded");
        } catch (error) {
            setError(error as Error);
        }
    }

    return <DatabaseContext.Provider value={{ db, state, error, setDb, start, getMediator, getSeed, getWallet, getResolverUrl, setMediator, setSeed, setWallet, setResolverUrl }}>
        {children}
    </DatabaseContext.Provider>
}
