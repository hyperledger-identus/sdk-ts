import { useContext } from "react";
import { IssuerContext } from "../context";

/**
 * Hook for accessing credential issuance context and operations.
 * 
 * Provides functionality for creating and issuing verifiable credentials to holders.
 * This hook must be used within an IssuerProvider and requires a running agent.
 * 
 * @example
 * ```tsx
 * import { useIssuer } from '@hyperledger/identus-react/hooks';
 * import { Domain } from '@hyperledger/identus-sdk';
 * 
 * function IssuerComponent() {
 *   const { createOOBOffer } = useIssuer();
 *   
 *   const createOffer = async () => {
 *     const url = await createOOBOffer(
 *       Domain.CredentialType.JWT,
 *       'credential-id',
 *       [{ name: 'name', value: 'Alice', type: 'string' }]
 *     );
 *     console.log('Offer URL:', url);
 *   };
 *   
 *   return <button onClick={createOffer}>Create Offer</button>;
 * }
 * ```
 * 
 * @returns {Object} Issuer context
 * 
 * @throws {Error} When used outside of IssuerProvider
 * 
 */
export function useIssuer() {
    const context = useContext(IssuerContext);
    if (!context) {
        throw new Error('useIssuer must be used within a IssuerProvider');
    }
    return context;
}   