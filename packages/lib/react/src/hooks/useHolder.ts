import { useContext } from "react";
import { HolderContext } from "../context";

/**
 * Hook for accessing credential holder context and operations.
 * 
 * Provides functionality for receiving, storing, and presenting verifiable credentials.
 * This hook must be used within a HolderProvider and requires a running agent.
 * 
 * @example
 * ```tsx
 * import { useHolder } from '@hyperledger/identus-react/hooks';
 * import { Domain } from '@hyperledger/identus-sdk';
 * 
 * function HolderComponent({ mockMessage }: { mockMessage: Domain.Message }) {
 *   const { acceptOOBOffer } = useHolder();
 *   
 *   const handleOffer = async () => {
 *     await acceptOOBOffer(mockMessage);
 *   };
 *   
 *   return <button onClick={handleOffer}>Accept Offer</button>;
 * }
 * ```
 * 
 * @returns {Object} Holder context
 * 
 * @throws {Error} When used outside of HolderProvider
 * 
 */
export function useHolder() {
    const context = useContext(HolderContext);
    if (!context) {
        throw new Error('useHolder must be used within a HolderProvider');
    }
    return context;
}