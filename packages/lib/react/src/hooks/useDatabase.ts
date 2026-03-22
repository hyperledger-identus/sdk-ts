import { useContext } from "react";
import { DatabaseContext } from "../context";

/**
 * Hook for accessing database context and operations.
 * 
 * Provides comprehensive database functionality including DID management, message handling,
 * credential storage, and application settings. This hook must be used within a DatabaseProvider.
 * 
 * @returns {Object} Database context
 * 
 * @throws {Error} When used outside of DatabaseProvider
 * 
 */
export function useDatabase() {
    const context = useContext(DatabaseContext);
    if (!context) {
        throw new Error('useDatabase must be used within a DatabaseProvider');
    }
    return context;
}
