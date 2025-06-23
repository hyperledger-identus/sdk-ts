import React, { useCallback, useEffect, useState } from "react";
import SDK from "@hyperledger/identus-sdk";

import { useRIDB } from "@trust0/ridb-react";
import { CredentialsContext } from "../context";
import { useAgent } from "../hooks";
import { schemas } from "../db";
import { hasDB } from "../utils";



export function CredentialsProvider({ children }: { children: React.ReactNode }) {
    const { agent } = useAgent();   
    const { db, state: dbState } = useRIDB<typeof schemas>();
    const [credentials, setCredentials] = useState<SDK.Domain.Credential[]>([]);
    useEffect(() => {
        agent?.pluto.getAllCredentials().then(setCredentials)
    }, [agent]);
    const deleteCredential = useCallback(async (credential: SDK.Domain.Credential) => {
        if (!hasDB(db) || dbState !== "loaded") {
            throw new Error("Database not connected");
        }
        await db.collections.credentials.delete(credential.uuid);
    }, [db, dbState]);
    return <CredentialsContext.Provider value={{ credentials, deleteCredential }}>
        {children}
    </CredentialsContext.Provider>
}