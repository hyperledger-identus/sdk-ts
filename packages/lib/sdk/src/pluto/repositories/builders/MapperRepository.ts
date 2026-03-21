import type * as Domain from "@hyperledger/identus-domain";
import { type Query } from "../../types";
import { BaseRepository } from "./BaseRepository";
import { type TableName, type CollectionMap, type CollectionSchemas } from "../../types";


/**
 * @class MapperRepository
 * 
 * Extends {@link BaseRepository} to handle Store interactions
 * while mapping between a Domain class and a Model object
 */
export abstract class MapperRepository<K extends TableName, D extends Domain.Pluto.Storable>
  extends BaseRepository<K> {
  /**
   * Map from a Model to the Domain class
   * 
   * @param model the stored Model with a uuid
   * @returns Domain with uuid set
   */
  abstract toDomain(model: CollectionMap[K]): D;
  /**
   * Map from a Domain class to a Model
   * @param domain may be missing uuid
   * @returns Model potentially without uuid
   */
  abstract toModel(domain: D): CollectionMap[K];

  /**
   * Search the Store, mapping any found to Domain
   * 
   * @param query either an object or array of objects with matchable properties
   * @returns {D[]} Array of matched Domain instances
   * @throws {@link Domain.PlutoError.StoreQueryFailed} if the query fails
   */
  async get(query?: Query<CollectionSchemas[K]>): Promise<D[]> {
    const result = await this.getModels(query);
    return result.map(x => this.toDomain(x));
  }

  /**
   * Search for instances based on given values
   * 
   * @param selector object with matchable properties
   * @returns all found Domain instances
   * @throws {@link Domain.PlutoError.StoreQueryFailed} if the query fails
   */
  async find(selector?: Partial<CollectionMap[K]>): Promise<D[]> {
    const query = selector ? { selector } : {};
    const result = await this.getModels(query as Query<CollectionSchemas[K]>);
    return result.map(x => this.toDomain(x));
  }

  /**
   * Search for single instance based on given values
   * 
   * @param selector object with matchable properties
   * @returns first found Domain instance or null
   * @throws {@link Domain.PlutoError.StoreQueryFailed} if the query fails
   */
  async findOne(selector?: Partial<CollectionMap[K]>): Promise<D | null> {
    const result = await this.find(selector);
    const first = result.at(0);

    return first ?? null;
  }

  /**
   * Utility fn for common use of find with uuid
   * 
   * @param uuid 
   * @returns first found Domain instance or undefined
   * @throws {@link Domain.PlutoError.StoreQueryFailed} if the query fails
   */
  async byUUID(uuid: string) {
    return this.findOne({ uuid } as Partial<CollectionMap[K]>);
  }

  /**
   * Persist the Domain instance in the Store.
   * 
   * @param domain 
   * 
   * Will be mapped to relevant Model for persistance
   * @see {@link BaseRepository.insert}
   * @throws {@link Domain.PlutoError.StoreInsertError} if insert fails
   */
  async save(domain: D): Promise<void> {
    const model = this.toModel(domain);
    await this.insert(model);
  }
}
