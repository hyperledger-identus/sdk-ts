import SDK from '@hyperledger/identus-sdk';
import InMemory from '@pluto-encrypted/inmemory';
import { uuid } from '@stablelib/uuid';
import { schemas } from '@/utils/db/schemas';

type DIDStatus = 'pending' | 'published' | 'deactivated';

export class PlutoExtended {
  // public _internal: SDK.Store;
  public pluto: SDK.Pluto;
  // public db: RIDB<SchemasType>;

  public revalidateAuthentication: () => Promise<boolean>;

  constructor(
    dbName: string,
    password: string,
    private apollo: SDK.Domain.Apollo & SDK.Domain.KeyRestoration
  ) {
    // this.db = new RIDB({
    //     dbName,
    //     schemas,
    //     migrations: undefined
    // });
    // const store = new RIDBStore(this.db, password, storageType);

    const store = new SDK.Store(
      {
        name: "test",
        storage: InMemory,
        password: Buffer.from(password).toString("hex")
      },
      schemas
    );

    // this._internal = store;
    this.pluto = new SDK.Pluto(store, apollo);
    this.pluto.storeDID = this.storeDID.bind(this);
    this.revalidateAuthentication = () => Promise.resolve(true);
    // this.revalidateAuthentication = () => this.db.authenticate(password);
  }

  get state() {
    return this.pluto.state;
  }

  get collections() {
    return (this.pluto as any).store.collections;
  }

  async getMessages(): Promise<{ message: SDK.Domain.Message, read: boolean; }[]> {
    const messages = await this.collections.messages.find({});
    return messages.map((message: any) => ({
      message: SDK.Domain.Message.fromJson(message.dataJson),
      read: message.read ?? false
    }));
  }

  async readMessage(message: SDK.Domain.Message) {
    const [found] = await this.collections.messages.find({ $or: [{ uuid: message.uuid }, { id: message.id }] });
    if (found) {
      await this.collections.messages.update({
        ...found,
        read: true
      });
    }
  }

  async getExtendedDIDs() {
    const dids = await this.collections.dids.find({});
    return Promise.all(
      dids
        .filter((did: any) => did.method === 'prism')
        .map(async (did: any) => {
          const keysIds = await this.collections['didkey-link'].find({ didId: did.uuid });
          const keys = await Promise.all(keysIds.map(({ keyId }: any) => this.collections.keys.findById(keyId)));
          return {
            did: SDK.Domain.DID.fromString(did.uuid),
            status: did.status as DIDStatus,
            alias: did.alias,
            keys: keys.map((key) => this.apollo.restorePrivateKey({
              recoveryId: key.recoveryId,
              raw: Buffer.from(key.rawHex, 'hex'),
              index: key.index
            }))
          };
        }));
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

  async createIssuanceFlow(issuanceFlow: any) {
    return this.collections.issuance.create(issuanceFlow);
  }

  async updateIssuanceFlow(issuanceFlow: any) {
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
      };
    }
    return null;
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
    };
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
    await this.pluto.start();
  }

  async stop() {
    await this.pluto.stop();
  }

}


