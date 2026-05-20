import { type DID, CastorError } from "../models";
import { type PrivateKey } from "../models/keyManagement/PrivateKey"

export namespace PeerDID {

}

export interface PeerDIDEncoded {
    t: string;
    s: {
        uri: string;
        r?: string[];
        a?: string[];
    }
}

export class PeerDID {
    constructor(
        public readonly did: DID,
        public readonly privateKeys: PrivateKey[] = []
    ) {
        const regex = /(([01](z)([1-9a-km-zA-HJ-NP-Z]{46,47}))|(2((\.[AEVID](z)([1-9a-km-zA-HJ-NP-Z]{46,47}))+(\.(S)[0-9a-zA-Z=]*)*)))$/;
        const isValid = did.schema === "did" && did.method === "peer" && regex.test(did.methodId);

        if (isValid === false) {
            throw new CastorError.InvalidPeerDIDError();
        }
    }
}