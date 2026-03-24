import { useContext } from "react";
import { VerifierContext } from "../context";



/**
 * Hook for accessing credential verification context and operations.
 * 
 * Provides functionality for requesting and verifying credential presentations
 * from holders. This hook must be used within a VerifierProvider and requires a running agent.
 * 
 * @example
 * ```tsx
 * import { useVerifier } from '@hyperledger/identus-react/hooks';
 * import { Domain } from '@hyperledger/identus-sdk';
 * 
 * function VerifierComponent({ mockPresentation }: { mockPresentation: Domain.Message }) {
 *   const { verifyPresentation } = useVerifier();
 *   
 *   const verify = async () => {
 *     const isValid = await verifyPresentation(mockPresentation);
 *     console.log('Is valid:', isValid);
 *   };
 *   
 *   return <button onClick={verify}>Verify</button>;
 * }
 * ```
 * 
 * @returns {Object} Verifier context
 * @throws {Error} When used outside of VerifierProvider
 * 
 */
export function useVerifier() {
    const context = useContext(VerifierContext);
    if (!context) {
        throw new Error('useVerifier must be used within a VerifierProvider');
    }
    return context;
}