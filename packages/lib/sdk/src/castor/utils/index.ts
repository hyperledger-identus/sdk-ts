import * as Domain from '@hyperledger/identus-domain';
import { base58btc } from "multiformats/bases/base58";

import { CastorError, DIDDocument, type OctetPublicKey, type PublicKey, VerificationMaterialAgreement, VerificationMaterialFormatDID, VerificationMethodTypeAgreement, type VerificationMaterial, VerificationMaterialAuthentication, KeyProperties, Curve, VerificationMethodTypeAuthentication } from "@hyperledger/identus-domain";
import { type DIDMethods } from "../methods/types";
import { PrismDIDMethod } from "../methods/prism";
import { PeerDIDMethod } from "../methods/peer";
import { type DIDMethodInput } from '../types';
import { JWKHelper } from './JWKHelper';
import { MultiCodec } from './Multicodec';



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


function octetPublicKey(publicKey: PublicKey): OctetPublicKey {
    const curve = publicKey.getProperty(Domain.KeyProperties.curve);
    if (!curve) {
        throw new Domain.CastorError.InvalidKeyError();
    }
    const octet: OctetPublicKey = {
        crv: curve,
        kty: "OKP",
        x: Buffer.from(publicKey.getEncoded()).toString(),
    };
    return octet;
}

export function keyAgreementFromPublicKey(
    publicKey: PublicKey
): Domain.VerificationMaterialAgreement {
    const octet = octetPublicKey(publicKey);
    const curve = publicKey.getProperty(Domain.KeyProperties.curve);
    if (curve !== Domain.Curve.X25519) {
        throw new Domain.CastorError.InvalidPublicKeyEncoding();
    }
    return new VerificationMaterialAgreement(
        JSON.stringify(octet),
        VerificationMethodTypeAgreement.JSON_WEB_KEY_2020,
        VerificationMaterialFormatDID.JWK
    );
}

export function validateRawKeyLength(key: Uint8Array) {
    if (key.length !== 32) {
        throw new CastorError.InvalidKeyError();
    }
}

export function authenticationFromPublicKey(
    publicKey: PublicKey
): VerificationMaterialAuthentication {
    const octet = octetPublicKey(publicKey);
    const curve = publicKey.getProperty(KeyProperties.curve);
    if (curve !== Curve.ED25519) {
        throw new CastorError.InvalidPublicKeyEncoding();
    }
    return new VerificationMaterialAuthentication(
        JSON.stringify(octet),
        VerificationMethodTypeAuthentication.JSON_WEB_KEY_2020,
        VerificationMaterialFormatDID.JWK
    );
}


export function createMultibaseEncnumbasis(material: VerificationMaterial): string {
    if (material.format !== VerificationMaterialFormatDID.JWK) {
        throw new CastorError.InvalidKeyError();
    }
    const isVerificationMaterialAgreement =
        material instanceof VerificationMaterialAgreement;

    const decodedKey = isVerificationMaterialAgreement
        ? JWKHelper.fromJWKAgreement(material)
        : JWKHelper.fromJWKAuthentication(material);

    validateRawKeyLength(decodedKey);

    const multiCodec = new MultiCodec(
        decodedKey,
        isVerificationMaterialAgreement
            ? MultiCodec.KeyType.agreement
            : MultiCodec.KeyType.authenticate
    );

    return base58btc.encode(multiCodec.value);
}
export async function computeEncnumbasis(
    publicKey: PublicKey
): Promise<string> {
    let material:
        | Domain.VerificationMaterialAgreement
        | Domain.VerificationMaterialAuthentication;
    let multibaseEcnumbasis: string;

    switch (publicKey.getProperty(Domain.KeyProperties.curve)) {
        case Domain.Curve.X25519:
            material = keyAgreementFromPublicKey(publicKey);
            multibaseEcnumbasis = createMultibaseEncnumbasis(material);
            return multibaseEcnumbasis.slice(1);
        case Domain.Curve.ED25519:
            material = authenticationFromPublicKey(publicKey);
            multibaseEcnumbasis = createMultibaseEncnumbasis(material);
            return multibaseEcnumbasis.slice(1);
        default:
            //TODO: Improve this error handling
            throw new Error("computeEncnumbasis -> InvalidKeyPair Curve");
    }

}