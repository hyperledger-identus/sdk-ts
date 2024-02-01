import * as Domain from "../../domain";
import type * as Models from "../models";
import type { Pluto } from "../Pluto";
import { MapperRepository } from "./builders/MapperRepository";
import { AnonCredsCredential, AnonCredsRecoveryId } from "../../pollux/models/AnonCredsVerifiableCredential";
import { JWTCredential, JWTVerifiableCredentialRecoveryId } from "../../pollux/models/JWTVerifiableCredential";

export class CredentialRepository extends MapperRepository<Models.Credential, Domain.Credential> {
  constructor(store: Pluto.Store) {
    super(store, "credentials");
  }

  toDomain(model: Models.Credential) {
    switch (model.recoveryId) {
      case JWTVerifiableCredentialRecoveryId: {
        const jwtObj = JSON.parse(model.dataJson);
        const credential = JWTCredential.fromJWT(jwtObj, jwtObj.id);
        return this.withId(credential, model.uuid);
      }
      case AnonCredsRecoveryId: {
        const json = JSON.parse(model.dataJson);
        const credential = new AnonCredsCredential(json);
        return this.withId(credential, model.uuid);
      }
    }

    throw new Domain.PlutoError.UnknownCredentialTypeError();
  }

  toModel(credential: Domain.Credential) {
    if (!credential.isStorable()) {
      throw new Domain.PlutoError.CredentialNotStorable();
    }

    const item = credential.toStorable();

    return {
      uuid: credential.uuid,
      recoveryId: credential.recoveryId,
      dataJson: item.credentialData,

      issuer: item.issuer,
      subject: item.subject,
      credentialCreated: item.credentialCreated,
      credentialUpdated: item.credentialUpdated,
      credentialSchema: item.credentialSchema,
      validUntil: item.validUntil,
      revoked: item.revoked
    };
  }
}
