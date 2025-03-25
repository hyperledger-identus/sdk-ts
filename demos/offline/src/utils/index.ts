import SDK from "@hyperledger/identus-sdk";
import { PlutoExtended } from "./db";


export type DIDAlias = {
    did: SDK.Domain.DID;
    alias?: string;
    status: string;
    keys: SDK.Domain.PrivateKey[];
}

export type GroupedDIDs = Record<string, DIDAlias[]>;

export async function getGroupedDIDs(db: PlutoExtended) {
    const dids = await db.getExtendedDIDs();
    const grouped = dids.reduce<GroupedDIDs>((acc, { did: currentDID, alias: currentAlias, status, keys }) => {
        const method = currentDID.method;
        if (!acc[method]) acc[method] = [];

        if (!acc[method].some(({ did }) => did.toString() === currentDID.toString())) {
            acc[method].push({ alias: currentAlias, did: currentDID, status, keys });
        }
        return acc;
    }, {});
    return { groupedDIDs: grouped };
}