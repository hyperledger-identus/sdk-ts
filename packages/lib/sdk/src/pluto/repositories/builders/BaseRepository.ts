import * as Domain from "@hyperledger/identus-domain";
import type { Pluto } from "../../Pluto";
import { type Query, type Model } from "../../types";
import { type TableName, type CollectionMap, type CollectionSchemas } from "../../types";

export type OptionalId<T extends Model> = Omit<T, "uuid"> & { uuid?: string; };
export type WithId<T> = T & Required<Domain.Pluto.Storable>;

/**
 * @class BaseRepository
 * 
 * Encapsulate the functionality for interacting with the Store
 */
export abstract class BaseRepository<K extends TableName> {
  /**
   * Allows setting of properties to be present in all Models sent to Store
   */
  protected baseModel: Partial<CollectionMap[K]> = {};

  constructor(
    private readonly store: Pluto.Store,
    protected readonly name: K,
  ) { }

  /**
   * Persist the Model in the Store.
   * 
   * @param model
   * @returns {CollectionMap[K]}
   * @throws {@link Domain.PlutoError.StoreInsertError} if insert fails
   */
  async insert(model: CollectionMap[K]): Promise<CollectionMap[K]> {
    const obj = { ...model, ...this.baseModel };
    try {
      await this.store.insert(this.name, obj);
      return obj;
    }
    catch (err) {
      console.log(err)
      throw new Domain.PlutoError.StoreInsertError();
    }
  }

  async update(model: CollectionMap[K]) {
    try {
      await this.store.update(this.name, model)
    }
    catch {
      throw new Domain.PlutoError.StoreUpdateError();
    }
  }

  async delete(uuid: string) {
    try {
      await this.store.delete(this.name, uuid)
    }
    catch {
      throw new Domain.PlutoError.StoreDeleteError();
    }
  }

  /**
   * Search the Store for Models
   * 
   * @param query a Query object, a set of values and operators defining the query
   * @see ../types.ts
   * 
   * @example
   * search for a model with uuid and name
   * ```ts
   *   repo.getModels({ selector: { uuid: "1", name: "eg" }})
   * ```
   * @example
   * search for models with uuid of 1 or 2
   * ```ts
   *   repo.getModels({ selector: { $or: [{ uuid: "1" }, { uuid: "2" }] }})
   * ```
   * @example
   * search for all models
   * ```ts
   *   repo.getModels()
   * ```
   * 
   * @returns {CollectionMap[K][]} Array of matched Models
   * @throws {@link Domain.Models} if the query fails
   */
  async getModels(query?: Query<CollectionSchemas[K]>): Promise<CollectionMap[K][]> {
    return this.runQuery(query);
  }

  /**
   * Handle internal logic for running a query
   * 
   * @param query
   * @returns {CollectionMap[K][]}
   * @throws {@link Domain.PlutoError.StoreQueryFailed}
   */
  private async runQuery(query?: Query<CollectionSchemas[K]>): Promise<CollectionMap[K][]> {
    const mQuery = this.makeMangoQuery(query);
    try {
      return await this.store.query(this.name, mQuery);
    }
    catch {
      throw new Domain.PlutoError.StoreQueryFailed();
    }
  }

  /**
   * Create the query to run from the given query and baseQuery
   * 
   * @param query 
   * @returns 
   */
  private makeMangoQuery(query?: Query<CollectionSchemas[K]>): Query<CollectionSchemas[K]> | undefined {
    if (Object.keys(this.baseModel).length > 0) {
      const baseSelector = { ...this.baseModel } as Record<string, unknown>;

      if (query?.selector) {
        return {
          ...query,
          selector: {
            $and: [baseSelector, query.selector]
          } as Query<CollectionSchemas[K]>['selector']
        };
      } else {
        return {
          ...query,
          selector: baseSelector as Query<CollectionSchemas[K]>['selector']
        };
      }
    }

    return query;
  }

  /**
   * Add the UUID to a Storable and return
   * 
   * @param {Storable} obj 
   * @param {string} uuid 
   * @returns {T}
   */
  protected withId<X extends Domain.Pluto.Storable>(obj: X, uuid: string): WithId<X> {
    obj.uuid = uuid;
    return obj as WithId<X>;
  }
}
