import SDK from '@hyperledger/identus-sdk'
import { schemas } from './schemas';
import { Doc, QueryType, RIDB, StartOptions, StorageType } from '@trust0/ridb';
import { Arrayable } from '../../../../../build/utils';

import { uuid } from '@stablelib/uuid';

type SchemasType = typeof schemas;

class RIDBStore implements SDK.Pluto.Store {

    get collections() {
        if (!this._db) {
            throw new Error("Start the ridb first")
        }
        return this._db.collections
    }

    constructor(
        private _db: RIDB<SchemasType>,
        private password: string,
        private storageType: StorageType
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
        await this._db.start({
            storageType: this.storageType,
            password: this.password
        })
    }

    async stop(): Promise<void> {
        this._db.close()
    }
}

type DIDStatus = 'pending' | 'published' | 'deactivated';
type ApolloWithKeyRestoration = SDK.Domain.Apollo & SDK.Domain.KeyRestoration;

export class PlutoExtended {
    public _internal: RIDBStore;
    public pluto: SDK.Pluto;
    private _db: RIDB<SchemasType>;

    constructor(
        dbName: string,
        private password: string,
        private storageType: StorageType = StorageType.IndexDB,
        private apollo: ApolloWithKeyRestoration = new SDK.Apollo()
    ) {
        const db = new RIDB({
            dbName,
            schemas,
            migrations: {
                credentials: {},
                dids: {},
                issuance: {},
                'credential-metadata': {},
                'didkey-link': {},
                'did-link': {},
                keys: {},
                messages: {},
                settings: {}
            }
        });
        const store = new RIDBStore(db, password, storageType);
        this._db = db;
        this._internal = store;
        this.pluto = new SDK.Pluto(store, apollo)

        this.pluto.storeDID = this.storeDID.bind(this);
    }

    get collections() {
        return this._internal.collections;
    }

    async getExtendedDIDs() {
        const dids = await this.collections.dids.find({});
        return Promise.all(dids.map(async (did) => {
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

    async storeDID(did: SDK.Domain.DID, keys: Arrayable<SDK.Domain.PrivateKey>, alias: string = "DID") {
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
        return this.collections.issuance.findById(id);
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
        await this._db.start({
            storageType: this.storageType,
            password: this.password
        })
    }

}


