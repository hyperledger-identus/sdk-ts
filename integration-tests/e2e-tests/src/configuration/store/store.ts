import { CollectionsOfDatabase, MangoQuery, RxDatabase, RxDatabaseCreator, RxDocument, addRxPlugin, createRxDatabase } from 'rxdb';
import { RxDBJsonDumpPlugin } from 'rxdb/plugins/json-dump';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { RxDBMigrationPlugin } from 'rxdb/plugins/migration'
import SDK from '@hyperledger/identus-sdk'

export class IntegrationStore implements SDK.Pluto.Store {
  private _db?: RxDatabase<CollectionsOfDatabase, any, any>;

  constructor(
    private readonly options: RxDatabaseCreator,
    private readonly collections?: SDK.CollectionList
  ) {
    addRxPlugin(RxDBQueryBuilderPlugin);
    addRxPlugin(RxDBJsonDumpPlugin);
    addRxPlugin(RxDBMigrationPlugin)
    addRxPlugin(RxDBUpdatePlugin);
  }

  get db() {
    if (!this._db) {
      throw new Error('Start Pluto first.');
    }

    return this._db;
  }

  /**
   * Start the database and build collections
   */
  async start(): Promise<void> {
    if (!this._db) {
      this._db = await createRxDatabase({
        ...this.options,
        multiInstance: true
      });
      const collections = SDK.makeCollections(this.collections ?? {});
      await this._db.addCollections(collections);
    }
  }

  async stop(): Promise<void> {
    await this.db.destroy();
    delete this._db;
  }

  async update<T extends SDK.Domain.Pluto.Storable>(name: string, model: T): Promise<void> {
    const table = this.getCollection(name);
    const rxQuery = table.findOne({
      selector: { uuid: model.uuid }
    });
    const row = await rxQuery.exec();

    if (row) {
      // Improve error handling when not found
      await row.patch(model);
    }
  }

  async delete(name: string, uuid: string): Promise<void> {
    const table = this.getCollection(name);
    const rxQuery = table.findOne({
      selector: { uuid }
    });
    const row = await rxQuery.exec();
    //TODO: Improve error handling, specially when not found
    await row?.remove();
  }

  getCollection(name: string) {
    const safeName = name.replace(/([A-Z])/g, "-$1").toLowerCase();
    if (!this.db.collections[safeName]) {
      throw new Error("Collection does not exist");
    }

    return this.db.collections[safeName];
  }

  async query<T extends SDK.Domain.Pluto.Storable>(name: string, query?: MangoQuery<T>) {
    const collection = this.getCollection(name);
    const rxQuery = collection.find(query);
    const result: RxDocument[] = await rxQuery.exec();
    const models = result.map(x => x._data);
    return models as any;
  }

  async insert(name: string, data: any) {
    const table = this.getCollection(name);
    await table.insert(data);
  }

  /**
   * Use with caution, this will remove all entries from database
   */
  async cleanup() {
    const storages = Array.from(this.db.storageInstances.values());

    for (const storage of storages) {
      await storage.cleanup(Infinity);
    }
  }

  /**
   * Use with caution, this will remove all entries from database
   * and then destroy the database itself.
   */
  async clear() {
    await this.cleanup();
    await this.db.remove();
    delete this._db;
  }
}
