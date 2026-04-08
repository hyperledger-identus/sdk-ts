import * as Domain from "@hyperledger/identus-domain";
import type * as Models from "../models";
import type { Pluto } from "../Pluto";
import { MapperRepository } from "./builders/MapperRepository";
import { JWTCredential } from "../../pollux/models/JWTVerifiableCredential";
import { SDJWTCredential } from "../../pollux/models/SDJWTVerifiableCredential";
import { JWTVerifiableCredentialRecoveryId } from "@hyperledger/identus-domain";

export class CredentialRepository extends MapperRepository<"credentials", Domain.Credential> {
  constructor(store: Pluto.Store) {
    super(store, "credentials");
  }

  toDomain(model: Models.Credential): Domain.Credential {
    switch (model.recoveryId) {
      case Domain.SDJWTVerifiableCredentialRecoveryId: {
        const jwtModel = JSON.parse(model.dataJson);
        const jws = jwtModel.id;
        const credential = SDJWTCredential.fromJWS(
          jws,
          jwtModel.revoked ?? false,
        );
        return this.withId(credential, model.uuid);
      }
      case JWTVerifiableCredentialRecoveryId: {
        const jwtModel = JSON.parse(model.dataJson);
        const credential = JWTCredential.fromJWS(
          jwtModel.id,
          jwtModel.revoked ?? false
        );
        return this.withId(credential, model.uuid);
      }
      default: {
        const credential = Domain.Credential.restoreFromFactory(
          model.recoveryId,
          model.dataJson
        );
        if (credential) {
          return this.withId(credential, model.uuid);
        }
        throw new Domain.PlutoError.UnknownCredentialTypeError(
          `No credential factory registered for recoveryId: ${model.recoveryId}`
        );
      }
    }
  }

  toModel(credential: Domain.Credential): Models.Credential {
    if (!credential.isStorable()) {
      throw new Domain.PlutoError.CredentialNotStorable();
    }
    const item = credential.toStorable();
    return {
      uuid: credential.uuid,
      id: item.id,
      recoveryId: credential.recoveryId,
      dataJson: item.credentialData,
      issuer: item.issuer,
      subject: item.subject,
      credentialCreated: item.credentialCreated,
      credentialUpdated: item.credentialUpdated,
      credentialSchema: item.credentialSchema,
      validUntil: item.validUntil,
      revoked: item.revoked ?? false
    };
  }
}
