import React, { useCallback, useEffect, useState } from "react";
import { type Domain } from "@hyperledger/identus-sdk";

import { CredentialsContext } from "../context";
import { useDatabase } from "../hooks";
import { hasDB } from "../utils";


/**
 * Manages Verifiable Credentials stored in the Pluto database.
 * 
 * This provider automatically loads credentials when the database is ready,
 * and exposes them alongside a `deleteCredential` function via the `useCredentials` hook.
 *
 * @example
 * ```tsx
 * import { useCredentials } from '@hyperledger/identus-react';
 * 
 * function CredentialList() {
 *   const { credentials, deleteCredential } = useCredentials();
 *   
 *   return (
 *     <ul>
 *       {credentials.map((cred) => (
 *         <li key={cred.id}>
 *           {cred.id}
 *           <button onClick={() => deleteCredential(cred)}>Delete</button>
 *         </li>
 *       ))}
 *     </ul>
 *   );
 * }
 * ```
 */
export function CredentialsProvider({ children }: { children: React.ReactNode }) {
    const { state: dbState, deleteCredential: deleteCredentialDB, getCredentials: getCredentialsDB, pluto } = useDatabase();
    const [credentials, setCredentials] = useState<Domain.Credential[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const load = useCallback(async () => {
        if (dbState === "loaded") {
            const credentials = await getCredentialsDB();
            setCredentials(prev => [...prev, ...credentials.filter((credential) => !prev.some((c) => c.id === credential.id || c.uuid === credential.uuid))]);
            setIsLoaded(true);
        }
    }, [dbState, getCredentialsDB, setCredentials]);

    useEffect(() => {
        if (dbState === "loaded" && !isLoaded) {
            load().catch(() => setIsLoaded(false));
        }
    }, [load, dbState, isLoaded]);

    const deleteCredential = useCallback(async (credential: Domain.Credential) => {
        if (!hasDB(pluto) || dbState !== "loaded") {
            throw new Error("Database not connected");
        }
        await deleteCredentialDB(credential);
        setCredentials(prev => prev.filter(c => c.id !== credential.id && c.uuid !== credential.uuid));
    }, [pluto, dbState, deleteCredentialDB, setCredentials]);

    return <CredentialsContext.Provider value={{ credentials, deleteCredential, load }}>
        {children}
    </CredentialsContext.Provider>
}