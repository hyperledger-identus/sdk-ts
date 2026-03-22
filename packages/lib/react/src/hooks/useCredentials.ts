
import { useContext } from "react";
import { CredentialsContext } from "../context";

/**
 * Hook for accessing credential storage context and operations.
 * 
 * Provides functionality for managing stored verifiable credentials including
 * retrieval, deletion, and refresh operations. This hook must be used within
 * a CredentialsProvider.
 * 
 * @returns {Object} Credentials context
 * 
 * @throws {Error} When used outside of CredentialsProvider
 * 
 * @example
 * ```tsx
 * import { useCredentials } from '@hyperledger/identus-react/hooks';
 * 
 * function CredentialWallet() {
 *   const { credentials, deleteCredential, fetchCredentials } = useCredentials();
 *   
 *   const handleDeleteCredential = async (credential) => {
 *     if (window.confirm('Are you sure you want to delete this credential?')) {
 *       try {
 *         await deleteCredential(credential);
 *         console.log('Credential deleted successfully');
 *       } catch (error) {
 *         console.error('Failed to delete credential:', error);
 *       }
 *     }
 *   };
 *   
 *   const refreshCredentials = async () => {
 *     try {
 *       await fetchCredentials();
 *       console.log('Credentials refreshed');
 *     } catch (error) {
 *       console.error('Failed to refresh credentials:', error);
 *     }
 *   };
 *   
 *   return (
 *     <div>
 *       <h3>My Credentials ({credentials.length})</h3>
 *       <button onClick={refreshCredentials}>Refresh</button>
 *       
 *       {credentials.map((credential, index) => (
 *         <div key={index} className="credential-card">
 *           <h4>{credential.claims.name || 'Unnamed Credential'}</h4>
 *           <p>Issuer: {credential.issuer}</p>
 *           <p>Type: {credential.credentialType}</p>
 *           <p>ID: {credential.id}</p>
 *           
 *           <button 
 *             onClick={() => handleDeleteCredential(credential)}
 *             className="delete-button"
 *           >
 *             Delete
 *           </button>
 *         </div>
 *       ))}
 *       
 *       {credentials.length === 0 && (
 *         <p>No credentials stored. Accept a credential offer to get started.</p>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 * 
 */
export function useCredentials() {
    const context = useContext(CredentialsContext);
    if (!context) {
        throw new Error('useCredentials must be used within a CredentialsProvider');
    }
    return context;
}