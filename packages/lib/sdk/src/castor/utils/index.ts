import type * as Domain from '@hyperledger/identus-domain';

import { DIDDocument } from "@hyperledger/identus-domain";
import { type DIDMethods } from "../methods/types";
import { PrismDIDMethod } from "../methods/prism";
import { PeerDIDMethod } from "../methods/peer";
import { type DIDMethodInput } from '../types';



function toMethodRecord(methods: DIDMethodInput[]): Partial<DIDMethods> {
    const record: Partial<Record<string, DIDMethodInput>> = {};
    for (const m of methods) {
        record[m.method] = m;
    }
    return record as Partial<DIDMethods>;
}

function getDefaultMethods(): DIDMethodInput[] {
    return [
        new PrismDIDMethod(),
        new PeerDIDMethod(),
    ];
}

/**
 * Merge default DID methods with any user-supplied extras.
 * Later entries override earlier ones with the same `method` name.
 */
export function parseParams(
    apollo: Domain.Apollo,
    extraMethods: DIDMethodInput[] = [],
): { apollo: Domain.Apollo; didMethods: Partial<DIDMethods> } {
    return {
        apollo,
        didMethods: toMethodRecord([...getDefaultMethods(), ...extraMethods]),
    };
}


/**
 * Extract all {@link DIDDocument.VerificationMethod} entries from an
 * array of DID Document core properties.
 */
export function extractVerificationMethods(
    coreProperties: DIDDocument.CoreProperty[]
): DIDDocument.VerificationMethod[] {
    return coreProperties.reduce<DIDDocument.VerificationMethod[]>(
        (result, property) => {
            if (property instanceof DIDDocument.VerificationMethods) {
                result.push(...property.values);
            }
            return result;
        },
        []
    );
}