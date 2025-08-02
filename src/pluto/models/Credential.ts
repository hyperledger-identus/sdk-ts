import * as sha256 from '@stablelib/sha256';
import * as Domain from "../../domain";
import type { Model } from "./Model";
import { schemaFactory } from "./Schema";
import { JWTVerifiableCredentialRecoveryId } from "../../pollux/models/JWTVerifiableCredential";
import { AnonCredsRecoveryId } from "../../pollux/models/AnonCredsVerifiableCredential";
import { PlutoError } from '../../domain';
import { MigrationStrategies } from '../types';

/**
 * Definition for Storable Credential model
 * Represents {@link Domain.Credential Credential}
 * 
 * @typedef {Object} CredentialModel
 */
export interface Credential extends Model {
  /**
   * Identifier for recovery
   */
  recoveryId: string;
  /**
   * Stringified JSON values
   */
  dataJson: string;

  // searchable properties
  issuer?: string;
  subject?: string;
  credentialCreated?: string;
  credentialUpdated?: string;
  credentialSchema?: string;
  validUntil?: number;
  revoked?: boolean;
  // availableClaims?: string[];
  id: string;
}

export const CredentialSchema = schemaFactory<Credential>(schema => {
  schema.addProperty("string", "recoveryId");
  schema.addProperty("string", "dataJson");

  schema.addProperty("string", "issuer");
  schema.addProperty("string", "subject");
  schema.addProperty("string", "credentialCreated");
  schema.addProperty("string", "credentialUpdated");
  schema.addProperty("string", "credentialSchema");
  schema.addProperty("number", "validUntil");
  schema.addProperty("boolean", "revoked");

  schema.setEncrypted("dataJson");
  schema.setVersion(2);

  //V1
  schema.addProperty("string", "id");
  schema.setRequired("recoveryId", "dataJson", "id");

});

export const CredentialMigration: MigrationStrategies = {
  1: function (document) {
    const recoveryId = document.recoveryId;
    if (recoveryId == JWTVerifiableCredentialRecoveryId) {
      const jwtObj = JSON.parse(document.dataJson);
      return {
        ...document,
        id: jwtObj.id
      }
    }
    if (recoveryId == AnonCredsRecoveryId) {
      const anoncredsObject = JSON.parse(document.dataJson);
      if (anoncredsObject.revoked !== undefined) {
        delete anoncredsObject.revoked;
      }
      const anoncredsStr = JSON.stringify(anoncredsObject)
      return {
        ...document,
        id: Buffer.from(sha256.hash(Buffer.from(anoncredsStr))).toString('hex')
      }

    }
    throw new PlutoError.UnknownCredentialTypeError();
  },
  2: function (document) {
    return {
      ...document,
      validUntil: document.validUntil ? new Date(document.validUntil).getTime() : undefined
    }
  }
}