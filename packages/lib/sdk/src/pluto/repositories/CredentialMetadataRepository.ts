 
import * as Domain from "@hyperledger/identus-domain";
import type * as Models from "../models";
import type { Pluto } from "../Pluto";
import { MapperRepository } from "./builders/MapperRepository";

export class CredentialMetadataRepository extends MapperRepository<"credential-metadata", Domain.CredentialMetadata> {
  constructor(store: Pluto.Store) {
    super(store, "credential-metadata");
  }

  toDomain(model: Models.CredentialMetadata): Domain.CredentialMetadata {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const json = JSON.parse(model.dataJson);
    const type = this.parseCredentialType(model);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const domain = new Domain.CredentialMetadata(type, model.name, json);

    return this.withId(domain, model.uuid);
  }

  toModel(domain: Domain.CredentialMetadata): Models.CredentialMetadata {
    return {
      recoveryId: domain.type,
      dataJson: JSON.stringify(domain.toJSON()),
      name: domain.name,
      uuid: domain.uuid
    };
  }

  parseCredentialType(model: Models.CredentialMetadata): Domain.CredentialType {
    switch (model.recoveryId) {
      case Domain.CredentialType.AnonCreds.toString():
        return Domain.CredentialType.AnonCreds;

      case Domain.CredentialType.JWT.toString():
        return Domain.CredentialType.JWT;

    }

    throw new Error("Unable to recover CredentialMetadata");
  }
}
