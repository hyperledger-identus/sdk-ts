/**
 * @packageDocumentation
 * 
 * @module 
 * @mergeModuleWith <project>
 */
import { useContext } from "react";
import { AgentContext } from "../context";

/**
 * Hook for accessing the main Identus Agent context and operations.
 * 
 * The Agent is the central component that orchestrates all Identus SDK operations
 * including DIDComm messaging, credential operations, and connection management.
 * This hook must be used within an AgentProvider.
 * 
 * @returns Agent context object with agent management functionality
 * 
 * @throws {Error} When used outside of AgentProvider
 * 
 * @example
 * ```tsx
 * import { useAgent } from '@hyperledger/identus-react/hooks';
 * 
 * function AgentController() {
 *   const { agent, start, stop, state, setAgent } = useAgent();
 *   
 *   const handleStart = async () => {
 *     try {
 *       await start();
 *       console.log('Agent started successfully');
 *     } catch (error) {
 *       console.error('Failed to start agent:', error);
 *     }
 *   };
 *   
 *   const handleStop = async () => {
 *     try {
 *       await stop();
 *       console.log('Agent stopped successfully');
 *     } catch (error) {
 *       console.error('Failed to stop agent:', error);
 *     }
 *   };
 *   
 *   return (
 *     <div>
 *       <p>Agent State: {state}</p>
 *       <div>
 *         <button onClick={handleStart} disabled={state === 'running'}>
 *           Start Agent
 *         </button>
 *         <button onClick={handleStop} disabled={state === 'stopped'}>
 *           Stop Agent
 *         </button>
 *       </div>
 *       {agent && <p>Agent ID: {agent.getCurrentDID()?.toString()}</p>}
 *     </div>
 *   );
 * }
 * ```
 * 
 */
export function useAgent() {
    const context = useContext(AgentContext);
    if (!context) {
        throw new Error('useAgent must be used within a AgentProvider');
    }
    return context;
}