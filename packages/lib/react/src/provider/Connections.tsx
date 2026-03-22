import React, { useCallback, useEffect, useState } from "react";
import { DIDLink, type Domain, ListenerKey } from "@hyperledger/identus-sdk";
import { ConnectionsContext } from "../context";
import { useAgent, useDatabase } from "../hooks";
import { hasDB } from "../utils";



export function ConnectionsProvider({ children }: { children: React.ReactNode }) {
    const { agent } = useAgent();
    const { state: dbState, pluto } = useDatabase();
    const [connections, setConnections] = useState<Domain.DIDPair[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const load = useCallback(async () => {
        if (hasDB(pluto) && dbState === 'loaded' && !isLoaded) {
            const connections = await pluto.getAllDidPairs();
            setConnections(connections);
            setIsLoaded(true);
        }
    }, [dbState, isLoaded, pluto, setConnections, setIsLoaded]);

    useEffect(() => {
        if (dbState === 'loaded' && !isLoaded) {
            load().catch(() => setIsLoaded(false));
        }
    }, [dbState, isLoaded, load]);

    const deleteConnection = useCallback(async (connection: Domain.DIDPair) => {
        if (!hasDB(pluto) || dbState !== "loaded") {
            throw new Error("Database not connected");
        }
        const connectionsRes = await pluto.store.query("did-link", {
            selector: {
                $or: [
                    { role: DIDLink.role.pair, hostId: connection.host.toString() },
                    { role: DIDLink.role.pair, targetId: connection.receiver.toString() }
                ]
            }
        })
        for (const conn of connectionsRes) {
            await pluto.store.delete("did-link", (conn as any).uuid);
        }
    }, [pluto, dbState]);

    const onConnection = useCallback(async (newConnection: Domain.DIDPair) => {
        setConnections((prev) => {
            const exists = prev.some((connection) =>
                connection.host.toString() === newConnection.host.toString() &&
                connection.receiver.toString() === newConnection.receiver.toString()
            );
            if (!exists) {
                return [...prev, newConnection];
            }
            return prev;
        });
    }, []);

    useEffect(() => {
        if (agent) {
            agent.addListener(ListenerKey.CONNECTION, onConnection);
            return () => {
                agent.removeListener(ListenerKey.CONNECTION, onConnection);
            };
        }
        return () => { };
    }, [agent, onConnection])

    return <ConnectionsContext.Provider value={{ connections, deleteConnection, load }}>
        {children}
    </ConnectionsContext.Provider>
}
