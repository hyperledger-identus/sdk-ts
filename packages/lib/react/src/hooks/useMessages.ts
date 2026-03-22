import { useContext } from "react";
import { MessagesContext } from "../context";

/**
 * Hook for accessing DIDComm message context and operations.
 * 
 * Provides functionality for managing DIDComm messages including reading, deleting,
 * and filtering messages by type. This hook must be used within a MessagesProvider.
 * 
 * @returns {Object} Messages context
 * 
 * @throws {Error} When used outside of MessagesProvider
 * 
 * @example
 * ```tsx
 * import { useMessages } from '@hyperledger/identus-react/hooks';
 * 
 * function MessageInbox() {
 *   const { 
 *     messages, 
 *     unreadMessages, 
 *     readMessage, 
 *     deleteMessage,
 *     getMessages 
 *   } = useMessages();
 *   
 *   const handleReadMessage = async (message) => {
 *     try {
 *       await readMessage(message);
 *       console.log('Message marked as read');
 *     } catch (error) {
 *       console.error('Failed to mark message as read:', error);
 *     }
 *   };
 *   
 *   const handleDeleteMessage = async (message) => {
 *     try {
 *       await deleteMessage(message);
 *       console.log('Message deleted');
 *     } catch (error) {
 *       console.error('Failed to delete message:', error);
 *     }
 *   };
 *   
 *   const refreshMessages = async () => {
 *     try {
 *       await getMessages();
 *       console.log('Messages refreshed');
 *     } catch (error) {
 *       console.error('Failed to refresh messages:', error);
 *     }
 *   };
 *   
 *   return (
 *     <div>
 *       <h3>Messages ({messages.length})</h3>
 *       <p>Unread: {unreadMessages.length}</p>
 *       
 *       <button onClick={refreshMessages}>Refresh</button>
 *       
 *       {messages.map((item, index) => (
 *         <div key={index} className={!item.read ? 'unread' : ''}>
 *           <p>From: {item.message.from?.toString()}</p>
 *           <p>Type: {item.message.piuri}</p>
 *           <button onClick={() => handleReadMessage(item.message)}>
 *             Mark as Read
 *           </button>
 *           <button onClick={() => handleDeleteMessage(item.message)}>
 *             Delete
 *           </button>
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 * 
 */
export function useMessages() {
    const context = useContext(MessagesContext);
    if (!context) {
        throw new Error('useMessages must be used within a MessagesProvider');
    }
    return context;
}