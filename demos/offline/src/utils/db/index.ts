import SDK from '@hyperledger/identus-sdk'
import { Doc, QueryType, RIDB, StorageType } from '@trust0/ridb';
import { uuid } from '@stablelib/uuid';

import { schemas } from '@/utils/db/schemas';
import { DatabaseState } from '@/utils/types';

type SchemasType = typeof schemas;

// Helper to load RIDB lazily
let ridbModule: typeof import('@trust0/ridb') | null = null;

async function getRIDBModule(): Promise<typeof import('@trust0/ridb')> {
    if (!ridbModule) {
        ridbModule = await import('@trust0/ridb');
    }
    return ridbModule;
}

class RIDBStore implements SDK.Pluto.Store {
    public state: DatabaseState = 'disconnected';

    get collections() {
        if (!this._db) {
            throw new Error("Start the ridb first")
        }
        return this._db.collections
    }

    constructor(
        public _db: RIDB<SchemasType>,
        protected password: string,
        protected storageType: StorageType
    ) {

    }

    private parseName(collectionName: keyof SchemasType): keyof SchemasType {
        const name = collectionName
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .toLowerCase() as keyof SchemasType;

        if (!this.collections[name]) {
            throw new Error(`Collection  does not exist`)
        }
        return name as keyof SchemasType;
    }

    async query(table: keyof SchemasType, query?: QueryType<any>): Promise<any[]> {
        const collectionName = this.parseName(table);
        const collection = this.collections[collectionName]!;
        const ridbQuery = (query as any)?.selector || query || {}
        return collection.find(ridbQuery as any) as any
    }

    async insert<T extends SDK.Domain.Pluto.Storable>(table: keyof SchemasType, model: T): Promise<void> {
        const collectionName = this.parseName(table);
        const collection = this.collections[collectionName]!
        await collection.create(model as any)
    }

    async update<T extends SDK.Domain.Pluto.Storable>(table: keyof SchemasType, model: T): Promise<void> {
        const collectionName = this.parseName(table);
        const collection = this.collections[collectionName]!
        await collection.update(model as any)
    }

    async delete(table: keyof SchemasType, uuid: string): Promise<void> {
        const collectionName = this.parseName(table);
        const collection = this.collections[collectionName]!
        await collection.delete(uuid)
    }

    async start() {
        this.state = 'loading';
        await this._db.start({
            storageType: this.storageType,
            password: this.password
        })
        this.state = 'loaded';
    }

    async stop(): Promise<void> {
        this._db.close()
        this.state = 'disconnected';
    }
}

type DIDStatus = 'pending' | 'published' | 'deactivated';
type ApolloWithKeyRestoration = SDK.Domain.Apollo & SDK.Domain.KeyRestoration;

export class PlutoExtended {
    public _internal: RIDBStore;
    public pluto: SDK.Pluto;
    public db: RIDB<SchemasType>;

    public revalidateAuthentication: () => Promise<boolean>;

    constructor(
        dbName: string,
        password: string,
        storageType: StorageType = StorageType.IndexDB,
        private apollo: ApolloWithKeyRestoration = new SDK.Apollo()
    ) {
        this.db = new RIDB({
            dbName,
            schemas,
            migrations: undefined
        });
        const store = new RIDBStore(this.db, password, storageType);

        this._internal = store;
        this.pluto = new SDK.Pluto(store, apollo)
        this.pluto.storeDID = this.storeDID.bind(this);
        this.revalidateAuthentication = () => this.db.authenticate(password);
    }

    // Factory method to create PlutoExtended instance with dynamic import
    static async create(
        dbName: string,
        password: string,
        storageTypeName: string = 'IndexDB', // Use string names instead of enum values
        apollo: ApolloWithKeyRestoration = new SDK.Apollo()
    ): Promise<PlutoExtended> {
        const { StorageType } = await getRIDBModule();
        // Map string name to actual enum value
        let storageType: StorageType;
        switch (storageTypeName) {
            case 'InMemory':
                storageType = StorageType.InMemory;
                break;
            case 'IndexDB':
            default:
                storageType = StorageType.IndexDB;
                break;
        }

        return new PlutoExtended(dbName, password, storageType, apollo);
    }

    get state(): DatabaseState {
        return this._internal.state
    }

    get collections() {
        return this._internal.collections;
    }

    async getMessages(): Promise<{ message: SDK.Domain.Message, read: boolean }[]> {
        const messages = await this.collections.messages.find({});
        return messages.map((message) => ({
            message: SDK.Domain.Message.fromJson(message.dataJson),
            read: message.read ?? false
        }))
    }

    async readMessage(message: SDK.Domain.Message) {
        const [found] = await this.collections.messages.find({ $or: [{ uuid: message.uuid }, { id: message.id }] });
        if (found) {
            await this.collections.messages.update({
                ...found,
                read: true
            })
        }
    }

    async getExtendedDIDs() {
        const dids = await this.collections.dids.find({});
        return Promise.all(dids.filter((did) => did.method === 'prism').map(async (did) => {
            const keysIds = await this.collections['didkey-link'].find({ didId: did.uuid });
            const keys = await Promise.all(keysIds.map(({ keyId }) => this.collections.keys.findById(keyId)))
            return {
                did: SDK.Domain.DID.fromString(did.uuid),
                status: did.status as DIDStatus,
                alias: did.alias,
                keys: keys.map((key) => this.apollo.restorePrivateKey({
                    recoveryId: key.recoveryId,
                    raw: Buffer.from(key.rawHex, 'hex'),
                    index: key.index
                }))
            }
        }))
    }

    async storeDID(did: SDK.Domain.DID, keys: SDK.Domain.PrivateKey[], alias: string = "DID") {
        if (alias.trim().length === 0) alias = "DID";

        await this.collections.dids.create({
            uuid: did.toString(),
            status: 'unpublished',
            alias,
            schema: did.schema,
            method: did.method,
        });

        const keyArray = Array.isArray(keys) ? keys : [keys];

        for (const key of keyArray) {
            if (key.isStorable()) {
                await this.collections.keys.create({
                    recoveryId: key.recoveryId,
                    rawHex: Buffer.from(key.raw).toString('hex'),
                    uuid: key.uuid,
                    alias: alias,
                    index: key.index ?? 0
                });
                await this.collections['didkey-link'].create({
                    alias,
                    didId: did.uuid,
                    keyId: key.uuid,
                    uuid: uuid()
                });
            }
        }
    }

    async updateDIDStatus(did: SDK.Domain.DID, status: DIDStatus) {
        const found = await this.collections.dids.findById(did.toString());
        if (!found) {
            throw new Error("DID not found");
        }
        await this.collections.dids.update({
            ...found,
            status
        });
    }

    async getIssuanceFlows() {
        return this.collections.issuance.find({});
    }

    async getIssuanceFlow(id: string) {
        return this.collections.issuance.findById(id) || null;
    }

    async createIssuanceFlow(issuanceFlow: Doc<SchemasType["issuance"]>) {
        return this.collections.issuance.create(issuanceFlow);
    }

    async updateIssuanceFlow(issuanceFlow: Doc<SchemasType["issuance"]>) {
        return this.collections.issuance.update(issuanceFlow);
    }

    async deleteIssuanceFlow(id: string) {
        return this.collections.issuance.delete(id);
    }

    async decryptSeed(): Promise<SDK.Domain.Seed | null> {
        const seeds = await this.collections.settings.find({ key: 'seed' });
        if (seeds.length) {
            return {
                value: Uint8Array.from(
                    Buffer.from(seeds[0].value, 'hex')
                )
            }
        }
        return null
    }

    async storeSeed(seed: SDK.Domain.Seed): Promise<SDK.Domain.Seed> {
        for (const row of await this.collections.settings.find({ key: 'seed' })) {
            await this.collections.settings.delete(row.id);
        }
        await this.collections.settings.create({
            key: 'seed',
            value: Buffer.from(seed.value).toString('hex'),
            id: uuid()
        });
        return {
            value: Uint8Array.from(
                seed.value
            )
        }
    }

    async getSettingsByKey(key: string): Promise<string | null> {
        const keys = await this.collections.settings.find({ key });
        if (keys.length) {
            return keys[0].value;
        }
        return null;
    }

    async storeSettingsByKey(key: string, value: string) {
        for (const row of await this.collections.settings.find({ key })) {
            await this.collections.settings.delete(row.id);
        }
        await this.collections.settings.create({
            key,
            value,
            id: uuid()
        });
    }

    async deleteSettingsByKey(key: string) {
        for (const row of await this.collections.settings.find({ key })) {
            await this.collections.settings.delete(row.id);
        }
    }

    async start() {
        await this._internal.start()
    }

    async stop() {
        await this._internal.stop()
    }

}


