import * as SDK from "@hyperledger/identus-sdk";
import { useMemo } from "react";
import { useApollo } from "./useApollo";

export type ExtraResolver = new (apollo: SDK.Domain.Apollo) => SDK.Domain.DIDResolver;

/**
 * Creates and returns a memoized instance of Castor with optional additional resolvers.
 * 
 * Castor is the cryptographic component of the Identus SDK responsible for DID operations,
 * key management, and cryptographic functions. It can be extended with additional DID resolvers.
 * 
 * @param {ExtraResolver[]} resolvers - Optional array of additional DID resolver constructors to extend Castor functionality
 * @returns Castor Context
 * 
 * @example
 * ```tsx
 * import { useCastor } from '@hyperledger/identus-react/hooks';
 * import { Domain } from '@hyperledger/identus-sdk';
 * 
 * function DIDManager() {
 *   // Basic usage without additional resolvers
 *   const castor = useCastor();
 *   
 *   // Usage with custom resolvers
 *   const castorWithResolvers = useCastor([CustomResolver1, CustomResolver2]);
 *   
 *   const resolveDID = async () => {
 *     try {
 *       const didDocument = await castor.resolveDID(Domain.DID.fromString('did:prism:example'));
 *       console.log('Resolved DID:', didDocument.toString());
 *     } catch (error) {
 *       console.error('Failed to resolve DID:', error);
 *     }
 *   };
 *   
 *   return (
 *     <button onClick={resolveDID}>
 *       Resolve DID
 *     </button>
 *   );
 * }
 * ```
 * 
 */
export function useCastor(resolvers: ExtraResolver[] = []) {
    const apollo = useApollo();
    const castor = useMemo(() => new SDK.Castor(apollo, resolvers), [apollo, resolvers]);
    return castor;
}
