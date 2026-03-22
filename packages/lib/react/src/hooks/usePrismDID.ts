import { useContext } from "react";
import { PrismDIDContext } from "../context";

/**
 * Hook for accessing Prism DID context and operations.
 * 
 * Prism DIDs are anchored on the Cardano blockchain and provide long-term, 
 * verifiable identity. This hook must be used within a PrismDIDProvider.
 * 
 * @returns {Object} Prism DID context
 * @throws {Error} When used outside of PrismDIDProvider
 * 
 * @example
 * ```tsx
 * import { usePrismDID } from '@hyperledger/identus-react/hooks';
 * 
 * function PrismDIDComponent() {
 *   const { prismDID, create } = usePrismDID();
 *   
 *   const handleCreateDID = async () => {
 *     try {
 *       await create('my-prism-identity');
 *       console.log('Prism DID created successfully');
 *     } catch (error) {
 *       console.error('Failed to create Prism DID:', error);
 *     }
 *   };
 *   
 *   return (
 *     <div>
 *       {prismDID ? (
 *         <p>Current Prism DID: {prismDID.toString()}</p>
 *       ) : (
 *         <button onClick={handleCreateDID}>Create Prism DID</button>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 * 
 */
export function usePrismDID() {
    const context = useContext(PrismDIDContext);
    if (!context) {
        throw new Error('usePrismDID must be used within a PrismDIDProvider');
    }
    return context;
}