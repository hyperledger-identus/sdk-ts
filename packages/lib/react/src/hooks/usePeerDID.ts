import { useContext } from "react";
import { PeerDIDContext } from "../context";

/**
 * Hook for accessing Peer DID context and operations.
 * 
 * Peer DIDs are ephemeral, off-ledger DIDs used for direct peer-to-peer communication.
 * They're created quickly and don't require blockchain anchoring. This hook must be used
 * within a PeerDIDProvider.
 * 
 * @returns {Object} Peer DID context
 * @throws {Error} When used outside of PeerDIDProvider
 * 
 * @example
 * ```tsx
 * import { usePeerDID } from '@hyperledger/identus-react/hooks';
 * 
 * function PeerDIDComponent() {
 *   const { peerDID, create } = usePeerDID();
 *   
 *   const handleCreatePeerDID = async () => {
 *     try {
 *       await create();
 *       console.log('Peer DID created for communication');
 *     } catch (error) {
 *       console.error('Failed to create Peer DID:', error);
 *     }
 *   };
 *   
 *   return (
 *     <div>
 *       {peerDID ? (
 *         <div>
 *           <p>Peer DID: {peerDID.toString()}</p>
 *           <p>Ready for peer-to-peer communication</p>
 *         </div>
 *       ) : (
 *         <button onClick={handleCreatePeerDID}>
 *           Create Peer DID
 *         </button>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 *
 */
export function usePeerDID() {
    const context = useContext(PeerDIDContext);
    if (!context) {
        throw new Error('usePeerDID must be used within a PeerDIDProvider');
    }
    return context;
}