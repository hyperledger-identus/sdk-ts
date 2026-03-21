import type { Model } from "../types";
import { schemaFactory } from "../utils";

export interface Claim {
    name: string;
    value: string;
    type: string;
}

export interface Issuance extends Model {
    id: string;
    claims: Claim[];
    credentialFormat: string;
    automaticIssuance?: boolean;
    issuingDID: string;
}

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
