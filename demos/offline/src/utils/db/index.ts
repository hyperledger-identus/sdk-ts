import SDK from '@hyperledger/identus-sdk';
import IndexDB from '@pluto-encrypted/indexdb';
import { uuid } from '@stablelib/uuid';
import { schemas } from '@/utils/db/schemas';

type DIDStatus = 'pending' | 'published' | 'deactivated';

interface KeyModel {
  uuid: string;
  key: string;
  value: string;
}

export class PlutoExtended {
  public store: SDK.Store;
  public pluto: SDK.Pluto;

  public revalidateAuthentication: () => Promise<boolean>;

  constructor(
    dbName: string,
    password: string,
    private apollo: SDK.Domain.Apollo & SDK.Domain.KeyRestoration
  ) {
    const store = new SDK.Store(
      {
        name: "test",
        storage: IndexDB,
        password: Buffer.from(password).toString("hex")
      },
      schemas
    );

    this.store = store;
    this.pluto = new SDK.Pluto(store, apollo);
    this.pluto.storeDID = this.storeDID.bind(this);
    this.revalidateAuthentication = () => Promise.resolve(true);
    // this.revalidateAuthentication = () => this.db.authenticate(password);
  }

  get state() {
    return this.pluto.state;
  }

  getCollection(name: string) {
    return (this.pluto as any).store.getCollection(name);
  }

  async getMessages(): Promise<{ message: SDK.Domain.Message, read: boolean; }[]> {
    const messages = await this.store.query("messages");
    return messages.map((message: any) => ({
      message: SDK.Domain.Message.fromJson(message.dataJson),
      read: message.read ?? false
    }));
  }

  async readMessage(message: SDK.Domain.Message) {
    const [found] = await this.store.query<any>("messages", { selector: { $or: [{ uuid: message.uuid }, { id: message.id }] } });
    if (found) {
      await this.store.update("messages", {
        ...found,
        read: true
      });
    }
  }

  async getExtendedDIDs() {
    const dids = await this.store.query("dids");
    return Promise.all(
      dids
        .filter((did: any) => did.method === 'prism')
        .map(async (did: any) => {
          const keysIds = await this.store.query('didkey-link', { selector: { didId: did.uuid } } as any);
          const keys = await Promise.all(
            keysIds.map(({ keyId }: any) => this.store.query("keys", { selector: { uuid: keyId } }))
          );

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

    await this.store.insert("dids", {
      uuid: did.toString(),
      status: 'unpublished',
      alias,
      schema: did.schema,
      method: did.method,
    });

    const keyArray = Array.isArray(keys) ? keys : [keys];

    for (const key of keyArray) {
      if (key.isStorable()) {
        await this.store.insert("keys", {
          recoveryId: key.recoveryId,
          rawHex: Buffer.from(key.raw).toString('hex'),
          uuid: key.uuid,
          alias: alias,
          index: key.index ?? 0
        });

        await this.store.insert('didkey-link', {
          alias,
          didId: did.uuid,
          keyId: key.uuid,
          uuid: uuid()
        });
      }
    }
  }

  async updateDIDStatus(did: SDK.Domain.DID, status: DIDStatus) {
    const found = await this.store.query("dids", { selector: { uuid: did.toString() } });

    if (!found) {
      throw new Error("DID not found");
    }
    await this.store.update("dids", {
      ...found,
      status
    });
  }

  async getIssuanceFlows() {
    return this.store.query("issuance");
  }

  async getIssuanceFlow(id: string) {
    return this.store.query("issuance", { selector: { id } as any });
  }

  async createIssuanceFlow(issuanceFlow: any) {
    return this.store.insert("issuance", issuanceFlow);
  }

  async updateIssuanceFlow(issuanceFlow: any) {
    return this.store.update("issuance", issuanceFlow);
  }

  async deleteIssuanceFlow(id: string) {
    return this.store.delete("issuance", id);
  }

  async decryptSeed(): Promise<SDK.Domain.Seed | null> {
    const seeds = await this.store.query("settings", { selector: { key: 'seed' } as any });

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
    const key = 'seed';
    const value = Buffer.from(seed.value).toString('hex');
    await this.storeSettingsByKey(key, value);

    return {
      value: Uint8Array.from(seed.value)
    };
  }

  async getSettingsByKey(key: string): Promise<string | null> {
    const found = await this.store.query<KeyModel>("settings", { selector: { key } });

    return found.length > 0
      ? found[0].value
      : null;
  }

  async storeSettingsByKey(key: string, value: string) {
    await this.deleteSettingsByKey(key);
    const model: KeyModel = { key, value, uuid: uuid() };
    await this.store.insert("settings", model);
  }

  async deleteSettingsByKey(key: string) {
    const found = await this.store.query<KeyModel>("settings", { selector: { key } });

    for (const row of found) {
      await this.store.delete("settings", row.uuid);
    }
  }

  async start() {
    await this.pluto.start();
  }

  async stop() {
    await this.pluto.stop();
  }

}
