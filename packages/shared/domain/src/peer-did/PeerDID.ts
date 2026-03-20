import { type KeyCurve, type DID, CastorError } from "../models";

export namespace PeerDID {
    // Q: why is this a custom shape instead of a Domain.PrivateKey?
    export interface PrivateKey {
        /**
         * Instance of a KeyCurve
         *
         * @type {KeyCurve}
         */
        keyCurve: KeyCurve;
        /**
         * Value as Uint8Array, buffer like
         *
         * @type {Uint8Array}
         */
        value: Uint8Array;
    }
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
        public readonly privateKeys: PeerDID.PrivateKey[] = []
    ) {
        const regex = /(([01](z)([1-9a-km-zA-HJ-NP-Z]{46,47}))|(2((\.[AEVID](z)([1-9a-km-zA-HJ-NP-Z]{46,47}))+(\.(S)[0-9a-zA-Z=]*)*)))$/;
        const isValid = did.schema === "did" && did.method === "peer" && regex.test(did.methodId);

        if (isValid === false) {
            throw new CastorError.InvalidPeerDIDError();
        }
    }
}