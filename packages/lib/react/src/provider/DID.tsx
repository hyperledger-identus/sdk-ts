import React, { useCallback, useState } from "react";
import { Domain, type Agent } from "@hyperledger/identus-sdk";
import { PeerDIDContext, PrismDIDContext } from "../context";
import { useAgent, useDatabase } from "../hooks";
import { hasDB } from "../utils";

// Custom hook to handle common DID creation logic
function useDIDCreation<T>(
    createDIDFn: (agent: Agent) => Promise<T>
) {
    const { agent, state } = useAgent();
    const [did, setDid] = useState<T | null>(null);
    const create = useCallback(async () => {
        if (!agent || state !== Domain.Startable.State.RUNNING) {
            throw new Error('Agent not found or not running');
        }
        const newDID = await createDIDFn(agent);
        setDid(newDID);
        return newDID;
    }, [agent, state, createDIDFn]);
    return { did, create };
}

export function PrismDIDProvider({ children }: { children: React.ReactNode }) {
    const { agent, state } = useAgent();
    const { state: dbState, getGroupedDIDs, pluto } = useDatabase();
    const { did, create } = useDIDCreation(
        async (agent) => {
            const { prism = [] } = await getGroupedDIDs();
            const keyPathIndex = prism.length + 1;
            return agent.createNewPrismDID('did', [], keyPathIndex)
        }
    );

    const isPublished = useCallback(async (did: Domain.DID) => {
        if (!hasDB(pluto) || dbState !== 'loaded') {
            throw new Error('Database not found or not loaded');
        }
        const dbDIDRes = await pluto.store.query("dids", { selector: { uuid: did.uuid } });
        const dbDID = dbDIDRes[0] as any;
        return dbDID?.status === "published"
    }, [agent, state, pluto, dbState]);

    return (
        <PrismDIDContext.Provider value={{ prismDID: did, create, isPublished }}>
            {children}
        </PrismDIDContext.Provider>
    );
}

export function PeerDIDProvider({ children }: { children: React.ReactNode }) {
    const { did, create } = useDIDCreation(
        (agent) => agent.createNewPeerDID([], true)
    );

    return (
        <PeerDIDContext.Provider value={{ peerDID: did, create }}>
            {children}
        </PeerDIDContext.Provider>
    );
}