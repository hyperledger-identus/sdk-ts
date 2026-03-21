import type { Model } from "../types";
import { schemaFactory } from "../utils";

/**
 * A single attribute within an {@link Issuance}.
 */
export interface Claim {
    /** Claim attribute name (e.g. `"dateOfBirth"`). */
    name: string;
    /** Claim value. */
    value: string;
    /** Semantic type of the value (e.g. `"string"`, `"date"`). */
    type: string;
}

/**
 * Model for credential issuance records.
 *
 * Tracks the claims, format, and issuing DID for a credential
 * that is being (or has been) issued.  The `claims` array is
 * encrypted at rest.
 */
export interface Issuance extends Model {
    /** Application-defined identifier for this issuance. */
    id: string;
    /** Set of claims to include in the issued credential. */
    claims: Claim[];
    /** Credential format identifier (e.g. `"jwt"`, `"anoncreds"`). */
    credentialFormat: string;
    /** Whether the credential should be issued automatically. */
    automaticIssuance?: boolean;
    /** DID of the issuer. */
    issuingDID: string;
}

/**
 * RIDB schema for the {@link Issuance} model.
 * Version 0 — `claims` stored as an encrypted array of objects.
 */
export const IssuanceSchema = schemaFactory<Issuance>(schema => {
    schema.setRequired('id', 'claims', 'credentialFormat', 'issuingDID');
    schema.addProperty("string", "id");
    schema.addProperty("array", "claims", {
        items: {
            type: "object",
            properties: {
                name: { type: "string", required: true },
                value: { type: "string", required: true },
                type: { type: "string", required: true }
            }
        }
    });
    schema.addProperty("string", "credentialFormat");
    schema.addProperty("boolean", "automaticIssuance");
    schema.addProperty("string", "issuingDID");

    schema.setEncrypted("claims");
    schema.setVersion(0);
});
