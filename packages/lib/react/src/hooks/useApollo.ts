import * as SDK from "@hyperledger/identus-sdk";
import {  useMemo } from "react";

/**
 * Creates and returns a memoized instance of Apollo DID resolver.
 * 
 * Apollo is the DID resolver component of the Identus SDK that handles resolving
 * Decentralized Identifiers (DIDs) to their corresponding DID Documents.
 * 
 * @returns Apollo context
 * 
 */
export function useApollo() {
    const apollo = useMemo(() => new SDK.Apollo(), []);
    return apollo;
}