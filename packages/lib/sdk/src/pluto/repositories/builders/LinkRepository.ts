import * as Domain from "@hyperledger/identus-domain";
import { BaseRepository, type OptionalId } from "./BaseRepository";
import { type TableName, type CollectionMap } from "../../types";

/**
 * @class LinkRepository
 * 
 * Extends {@link BaseRepository} to handle model relationships
 */
export abstract class LinkRepository<K extends TableName>
  extends BaseRepository<K> {
  override insert(model: OptionalId<CollectionMap[K]>): Promise<CollectionMap[K]> {
    const obj = { uuid: Domain.Pluto.makeUUID(), ...model };
    return super.insert(obj as CollectionMap[K]);
  }
}
