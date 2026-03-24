import { useContext } from "react";
import { ConnectionsContext } from "../context";


/**
 * Hook for accessing DID connection context and operations.
 * 
 * Provides functionality for managing established DID connections (relationships
 * between DIDs) including viewing and deleting connections. This hook must be
 * used within a ConnectionsProvider.
 * 
 * @returns {Object} Connections context
 * 
 * @throws {Error} When used outside of ConnectionsProvider
 * 
 * @example
 * ```tsx
 * import { useConnections } from '@hyperledger/identus-react/hooks';
 * 
 * function ConnectionManager() {
 *   const { connections, deleteConnection } = useConnections();
 *   
 *   const handleDeleteConnection = async (connection) => {
 *     if (window.confirm('Are you sure you want to delete this connection?')) {
 *       try {
 *         await deleteConnection(connection);
 *         console.log('Connection deleted successfully');
 *       } catch (error) {
 *         console.error('Failed to delete connection:', error);
 *       }
 *     }
 *   };
 *   
 *   return (
 *     <div>
 *       <h3>My Connections ({connections.length})</h3>
 *       
 *       {connections.map((connection, index) => (
 *         <div key={index} className="connection-card">
 *           <h4>Connection {index + 1}</h4>
 *           <p>Host: {connection.host.toString()}</p>
 *           <p>Receiver: {connection.receiver.toString()}</p>
 *           <p>Name: {connection.name || 'Unnamed Connection'}</p>
 *           
 *           <button 
 *             onClick={() => handleDeleteConnection(connection)}
 *             className="delete-button"
 *           >
 *             Delete Connection
 *           </button>
 *         </div>
 *       ))}
 *       
 *       {connections.length === 0 && (
 *         <p>No connections established. Create a connection to get started.</p>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 * 
 */
export function useConnections() {
    const context = useContext(ConnectionsContext);
    if (!context) {
        throw new Error('useConnections must be used within a ConnectionsProvider');
    }
    return context;
}   