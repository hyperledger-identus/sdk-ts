import * as Domain from "@hyperledger/identus-domain";
import type * as Models from "../models";
import type { Pluto } from "../Pluto";
import { type Query } from "../types";
import type { CollectionSchemas } from "../types";
import { MapperRepository } from "./builders/MapperRepository";

export class KeyRepository extends MapperRepository<"keys", Domain.PrivateKey> {
  constructor(
    store: Pluto.Store,
    private readonly keyRestoration: Domain.KeyRestoration
  ) {
    super(store, "keys");
  }

  override async getModels(query?: Query<CollectionSchemas['keys']>): Promise<Models.Key[]> {
    const result = await super.getModels(query);
    const filtered = result.filter(x => x.recoveryId !== "linksecret");

    return filtered;
  }

  toDomain(model: Models.Key): Domain.PrivateKey {
    const domain = this.keyRestoration.restorePrivateKey({
      ...model,
      data: Buffer.from(model.data),
    });
    if (model.index != undefined && !domain.keySpecification.has(Domain.KeyProperties.index)) {
      domain.keySpecification.set(Domain.KeyProperties.index, model.index.toString());
    }
    return this.withId(domain, model.uuid);
  }

  toModel(domain: Domain.PrivateKey): Models.Key {
    if (!domain.isStorable()) {
      throw new Domain.PlutoError.PrivateKeyNotStorable();
    }
    return {
      uuid: domain.uuid,
      recoveryId: domain.recoveryId,
      index: domain.index,
      data: Buffer.from(domain.data).toString(),
    };
  }
}
