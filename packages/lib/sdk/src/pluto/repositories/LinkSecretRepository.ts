import * as Domain from "@hyperledger/identus-domain";
import type * as Models from "../models";
import type { Pluto } from "../Pluto";
import { MapperRepository } from "./builders/MapperRepository";
import { KeyProperties } from "@hyperledger/identus-domain";

export class LinkSecretRepository extends MapperRepository<"keys", Domain.LinkSecret> {
  baseModel = {
    recoveryId: "linksecret"
  };

  constructor(store: Pluto.Store) {
    super(store, "keys");
  }

  toDomain(model: Models.Key): Domain.LinkSecret {
    const keySpecification = JSON.parse(model.data);
    const secret = Buffer.from(keySpecification[KeyProperties.rawKey], "hex").toString();
    const domain = new Domain.LinkSecret(secret, model.alias);
    return this.withId(domain, model.uuid);
  }

  toModel(domain: Domain.LinkSecret): Models.Key {
    return {
      ...this.baseModel,
      uuid: domain.uuid,
      alias: domain.name,
      data: JSON.stringify({
        [KeyProperties.rawKey]: Buffer.from(domain.secret).toString("hex")
      })
    };
  }
}
