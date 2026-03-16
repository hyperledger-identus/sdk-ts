



import { secp256k1 } from "@noble/curves/secp256k1";

import * as base58 from "multiformats/bases/base58";
import * as base64 from "multiformats/bases/base64";
import { SHA256 } from "@stablelib/sha256";
import * as Domain from "../../domain";

import * as AllProtos from "./node_models";

import Protos = AllProtos.io.iohk.atala.prism.protos;

import PublicKey = Protos.PublicKey;
import CompressedECKeyData = Protos.CompressedECKeyData;
import DIDCreationData = Protos.CreateDIDOperation.DIDCreationData;
import Service = Protos.Service;
import CreateDIDOperation = Protos.CreateDIDOperation;
import UpdateDIDOperation = Protos.UpdateDIDOperation;
import AtalaBlock = Protos.AtalaBlock;
import SignedAtalaOperation = Protos.SignedAtalaOperation;
import AtalaObject = Protos.AtalaObject;
import AtalaOperation = Protos.AtalaOperation;
import UpdateDIDAction = Protos.UpdateDIDAction;
import AddServiceAction = Protos.AddServiceAction;
import AddKeyAction = Protos.AddKeyAction;
import DeactivateDIDOperation = Protos.DeactivateDIDOperation;
import IssueCredentialBatchOperation = Protos.IssueCredentialBatchOperation;
import RevokeCredentialsOperation = Protos.RevokeCredentialsOperation;
import ProtocolVersionUpdateOperation = Protos.ProtocolVersionUpdateOperation;
import { PrivateKey } from "../../domain";
import { PrismDIDKeyUsage, PrismDIDKeyUsageType } from "../../domain/models/derivation/schemas/PrismDerivation";
import { Secp256k1PublicKey } from "../../apollo/utils/Secp256k1PublicKey";


function createDIDOperation(keys: PublicKey[]) {
    return new CreateDIDOperation({
        did_data: new DIDCreationData({
            public_keys: keys
        })
    })
}

type Operations = {
    create_did?: CreateDIDOperation,
    update_did?: UpdateDIDOperation,
    deactivate_did?: DeactivateDIDOperation,
    issue_credential_batch?: IssueCredentialBatchOperation,
    revoke_credentials?: RevokeCredentialsOperation,
    protocol_version_update?: ProtocolVersionUpdateOperation,
}

function createOperation(operations: Operations) {
    return new AtalaOperation({
        create_did: operations.create_did,
        update_did: operations.update_did,
        deactivate_did: operations.deactivate_did,
        issue_credential_batch: operations.issue_credential_batch,
        revoke_credentials: operations.revoke_credentials,
        protocol_version_update: operations.protocol_version_update,
    });
}

export class PrismDIDFactory {

    #operations: Operations = {}
    #signedOperation: SignedAtalaOperation | null = null;

    private getSigningKeyUsage(privateKey: PrivateKey) {

        const operation = createOperation(this.#operations);
        if (!privateKey.isSignable()) {
            throw new Domain.CastorError.InvalidKeyError("Cannot sign with this key");
        }

        const publicKey = privateKey.publicKey();
        const publicKeyHex = publicKey instanceof Secp256k1PublicKey ?
            Buffer.from(publicKey.getEncodedCompressed()).toString("hex") :
            Buffer.from(publicKey.getEncoded()).toString("hex");

        const operationKeys = [
            ...operation.create_did?.did_data.public_keys,
            ...operation.update_did?.actions.flatMap((action) => action.has_add_key ? [action.add_key.key] : [])
        ];


        for (const key of operationKeys) {
            if (key.has_compressed_ec_key_data) {
                const hex = Buffer.from(key.compressed_ec_key_data.data).toString("hex");
                if (hex === publicKeyHex) {
                    return {
                        key,
                        usage: key.usage,
                        index: this.getUsageFromId(key.id).index
                    }
                }
            } else if (key.has_ec_key_data) {
                if (key.ec_key_data.curve !== Domain.Curve.SECP256K1.toString()) {
                    throw new Domain.CastorError.InvalidKeyError("Cannot sign with this key, expected DIDOperation with Secp256k1 key uncompressed, but found " + key.ec_key_data.curve);
                }
                const uncompressed = Secp256k1PublicKey.secp256k1FromByteCoordinates(
                    Buffer.from(key.ec_key_data.x),
                    Buffer.from(key.ec_key_data.y)
                )
                const compressed = uncompressed.getEncodedCompressed();
                const hex = Buffer.from(compressed).toString("hex");
                if (hex === publicKeyHex) {
                    return {
                        key,
                        usage: key.usage,
                        index: this.getUsageFromId(key.id).index
                    }
                }
            }
        }

        throw new Error("No matching public key found");
    }


    private getUsageFromId(id: string): { usage: PrismDIDKeyUsageType, index: number; } {
        const regex = /#([a-zA-Z]+)(-\d+)?/;
        const [_, methodId, methodIndex = '0'] = id.match(regex) || [];
        if (methodId === undefined || methodIndex === undefined) {
            throw new Domain.CastorError.MethodIdIsDoesNotSatisfyRegex("Verification method id does not contain fragment");
        }
        const index = parseInt(methodIndex);
        if (methodId === "master") {
            return { usage: PrismDIDKeyUsage.MASTER_KEY, index };
        }
        if (methodId === "issuing") {
            return { usage: PrismDIDKeyUsage.ISSUING_KEY, index };
        }
        if (methodId === "agreement") {
            return { usage: PrismDIDKeyUsage.KEY_AGREEMENT_KEY, index };
        }
        if (methodId === "authentication") {
            return { usage: PrismDIDKeyUsage.AUTHENTICATION_KEY, index };
        }
        if (methodId === "revocation") {
            return { usage: PrismDIDKeyUsage.REVOCATION_KEY, index };
        }
        if (methodId === "delegation") {
            return { usage: PrismDIDKeyUsage.CAPABILITY_DELEGATION_KEY, index };
        }
        if (methodId === "invocation") {
            return { usage: PrismDIDKeyUsage.CAPABILITY_INVOCATION_KEY, index };
        }
        return { usage: PrismDIDKeyUsage.UNKNOWN_KEY, index };
    }
    /**
      * create an identifier for keys within a DID Document
      * should be unique within the Document
      * 
      * @param keyUsage - maps to a prefix word
      * @param index - occurrence of this keyUsage
      * @returns {string}
      */
    private getUsageId(keyUsage: PrismDIDKeyUsageType, index = 0): string {
        switch (keyUsage) {
            case PrismDIDKeyUsage.MASTER_KEY:
                // A DID could potentially have several masterKeys
                if (index === 0) {
                    return 'master'
                }
                return `master-${index}`;
            case PrismDIDKeyUsage.ISSUING_KEY:
                return `issuing-${index}`;
            case PrismDIDKeyUsage.KEY_AGREEMENT_KEY:
                return `agreement-${index}`;
            case PrismDIDKeyUsage.AUTHENTICATION_KEY:
                return `authentication-${index}`;
            case PrismDIDKeyUsage.REVOCATION_KEY:
                return `revocation-${index}`;
            case PrismDIDKeyUsage.CAPABILITY_DELEGATION_KEY:
                return `delegation-${index}`;
            case PrismDIDKeyUsage.CAPABILITY_INVOCATION_KEY:
                return `invocation-${index}`;
            default:
                return `unknown-${index}`;
        }
    }

    private getCompressedECKeyData(publicKey: Domain.PublicKey) {
        if (publicKey.curve === Domain.Curve.SECP256K1 && publicKey instanceof Secp256k1PublicKey) {
            return new CompressedECKeyData({
                curve: publicKey.curve,
                data: publicKey.getEncodedCompressed(),
            })
        }
        return new CompressedECKeyData({
            curve: publicKey.curve,
            data: publicKey.raw,
        })
    }

    addKey(key: Domain.PublicKey, usage: PrismDIDKeyUsageType, index?: number) {
        const keyProto = new PublicKey({
            id: this.getUsageId(usage, index),
            usage,
            compressed_ec_key_data: this.getCompressedECKeyData(key)
        })

        if (usage === PrismDIDKeyUsage.MASTER_KEY) {
            if (!this.#operations.create_did) {
                this.#operations.create_did = createDIDOperation([]);
            }
            this.#operations.create_did.did_data.public_keys.push(keyProto)
        } else {
            if (!this.#operations.update_did) {
                this.#operations.update_did = new UpdateDIDOperation({ actions: [] });
            }
            const add_key = new AddKeyAction({ key: keyProto });
            const updateDIDAction = new UpdateDIDAction({ add_key });

            this.#operations.update_did.actions.push(updateDIDAction);
        }
    }

    addService(service: Domain.DIDDocument.Service) {
        if (!this.#operations.update_did) {
            this.#operations.update_did = new UpdateDIDOperation({ actions: [] });
        }

        const add_service = new AddServiceAction({
            service: new Service({
                service_endpoint: [service.serviceEndpoint.uri],
                id: service.id,
                type: service.type.at(0),
            })
        });

        const updateDIDAction = new UpdateDIDAction({ add_service });
        this.#operations.update_did.actions.push(updateDIDAction);
    }

    /**
     * Signs the DID operation with the given private key.
     * Will extract the publicKey usage from the operation
     * @param privateKey - The private key to sign the DID operation with.
     */
    sign(privateKey: PrivateKey) {
        const operation = createOperation(this.#operations);
        const { usage, index } = this.getSigningKeyUsage(privateKey);
        const encodedState = operation.serializeBinary();
        const encodedStateHash = (new SHA256()).update(encodedState).digest();
        const signature = secp256k1.sign(Buffer.from(encodedStateHash), privateKey.raw);
        this.#signedOperation = new SignedAtalaOperation({
            operation,
            signature: signature.toDERRawBytes(),
            signed_with: this.getUsageId(usage, index)
        });
    }

    get serializedAtalaObject() {
        if (!this.#signedOperation) {
            throw new Error("No signed operations");
        }
        const block = AtalaBlock.fromObject({ operations: [this.#signedOperation] });
        const atalaObject = AtalaObject.fromObject({ block_content: block });
        return atalaObject.serialize()
    }

    get did() {
        const operation = createOperation(this.#operations);
        const encodedState = operation.serializeBinary();
        const sha256 = new SHA256();
        const stateHash = Buffer.from(sha256.update(encodedState).digest()).toString("hex");
        const base64State = base64.base64url.baseEncode(encodedState);
        const methodSpecificId = Domain.PrismDID.parseMethodId([stateHash, base64State]);
        return new Domain.DID("did", "prism", methodSpecificId.toString());
    }
}