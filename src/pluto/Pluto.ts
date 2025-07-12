/* eslint-disable @typescript-eslint/no-namespace */



import * as Domain from "../domain";
import * as Models from "./models";
import { PeerDID } from "../peer-did/PeerDID";
import { BackupManager } from "./backup/BackupManager";
import { PlutoRepositories, repositoryFactory } from "./repositories";
import { Arrayable, asArray, notNil } from "../utils";
import { Startable } from "../domain/protocols/Startable";
import { Version } from "../domain/backup";
import { Query } from "./types";


/**
 * Pluto implementation
 * 
 * Structure:
 * - Pluto class is an orchestration layer
 * - Repositories handle mapping between Domain and Storable Models
 * - Models suggest db structure
 * - Store abstracts db implementation
 * 
 * Pluto:
 * - always handles Domain classes
 * - manage relationships
 * - handle logic and concepts
 * - throw known Errors
 * - return null
 * - naming convention
 *   - (get/store) (Domain name Pluralized) ie getCredentials
 * 
 * Models:
 * - naming convention
 *   - alias for optional names
 *   - name for required identifiers
 *   - dataJson for JSON.stringified objects
 * 
 * Store:
 * - simplified interface
 * - crud interactions
 * - only use Models
 * 
 */
export namespace Pluto {
  /**
   * Store interface for Pluto persistence layer
   * 
   * This interface defines the contract for database operations on Models.
   * Implementations must handle CRUD operations for all supported model types.
   * 
   * Supported Models:
   * - Models.Credential - Verifiable credentials
   * - Models.CredentialMetadata - Metadata for credential schemas
   * - Models.DID - Decentralized identifiers
   * - Models.Key - Private keys
   * - Models.Message - DIDComm messages
   * - Models.DIDKeyLink - Links between DIDs and keys
   * - Models.DIDLink - Links between DIDs (pairs, mediators, routing)
   * 
   * Supported Tables:
   * - "credentials" - Stores credential data
   * - "credential-metadata" - Stores credential metadata
   * - "dids" - Stores DID documents
   * - "keys" - Stores private keys
   * - "messages" - Stores DIDComm messages
   * - "didkey-link" - Stores DID-key relationships
   * - "did-link" - Stores DID-DID relationships
   */
  export interface Store {
    /**
     * Handle any necessary startup.
     * Will be called first before any usage, if provided.
     */
    start?(): Promise<void>;

    /**
     * Handle any necessary teardown.
     */
    stop?(): Promise<void>;

    /**
     * Run a query to fetch data from the Store
     * 
     * @template T - The model type that extends Models.Model (e.g., Models.Credential, Models.DID, Models.Key, etc.)
     * @param table - Valid table name. Must be one of: "credentials", "credential-metadata", "didkey-link", "did-link", "dids", "keys", "messages"
     * @param query - Optional Query object with selector conditions and operators for filtering results
     * 
     * Query behavior:
     * - Properties within an object will be AND'ed together
     * - Different objects in $or array will be OR'd together
     * - Omit query parameter to fetch all records from the table
     * 
     * @example
     * Search for credentials by uuid and issuer
     * ```ts
     *   store.query<Models.Credential>("credentials", { 
     *     selector: { uuid: "credential-123", issuer: "did:example:issuer" }
     *   })
     * ```
     * @example
     * Search for DIDs with method "prism" OR "peer"
     * ```ts
     *   store.query<Models.DID>("dids", { 
     *     selector: { $or: [{ method: "prism" }, { method: "peer" }] }
     *   })
     * ```
     * @example
     * Fetch all messages from the table
     * ```ts
     *   store.query<Models.Message>("messages")
     * ```
     * 
     * @returns Promise resolving to array of models matching the query criteria
     */
    query<T extends Models.Model>(table: string, query?: Query<T>): Promise<T[]>;

    /**
     * Persist new data in the Store.
     * 
     * @template T - The model type that extends Models.Model (e.g., Models.Credential, Models.DID, Models.Key, etc.)
     * @param table - Valid table name. Must be one of: "credentials", "credential-metadata", "didkey-link", "did-link", "dids", "keys", "messages"
     * @param model - The model instance to persist. Must include all required properties and should have a valid uuid
     * 
     * @example
     * Insert a new credential
     * ```ts
     *   const credential: Models.Credential = {
     *     uuid: "credential-123",
     *     recoveryId: "jwt",
     *     dataJson: JSON.stringify(credentialData),
     *     id: "credential-id",
     *     issuer: "did:example:issuer"
     *   };
     *   await store.insert<Models.Credential>("credentials", credential);
     * ```
     * 
     * @returns Promise that resolves when the model is successfully persisted
     * @throws Error if the model is invalid or table name is not recognized
     */
    insert<T extends Models.Model>(table: string, model: T): Promise<void>;

    /**
     * Update an existing row in the Store
     * 
     * @template T - The model type that extends Models.Model (e.g., Models.Credential, Models.DID, Models.Key, etc.)
     * @param table - Valid table name. Must be one of: "credentials", "credential-metadata", "didkey-link", "did-link", "dids", "keys", "messages"
     * @param model - The model instance with updated data. Must include the uuid to identify the record to update
     * 
     * @example
     * Update a credential to mark it as revoked
     * ```ts
     *   const updatedCredential: Models.Credential = {
     *     uuid: "credential-123",
     *     recoveryId: "jwt",
     *     dataJson: JSON.stringify(updatedCredentialData),
     *     id: "credential-id",
     *     issuer: "did:example:issuer",
     *     revoked: true
     *   };
     *   await store.update<Models.Credential>("credentials", updatedCredential);
     * ```
     * 
     * @returns Promise that resolves when the model is successfully updated
     * @throws Error if the model with the given uuid is not found or table name is not recognized
     */
    update<T extends Models.Model>(table: string, model: T): Promise<void>;

    /**
     * Delete a row from the Store
     * 
     * @param table - Valid table name. Must be one of: "credentials", "credential-metadata", "didkey-link", "did-link", "dids", "keys", "messages"
     * @param uuid - The unique identifier of the record to delete
     * 
     * @example
     * Delete a credential by its uuid
     * ```ts
     *   await store.delete("credentials", "credential-123");
     * ```
     * 
     * @example
     * Delete a DID by its uuid
     * ```ts
     *   await store.delete("dids", "did:example:123");
     * ```
     * 
     * @returns Promise that resolves when the record is successfully deleted
     * @throws Error if the record with the given uuid is not found or table name is not recognized
     */
    delete(table: string, uuid: string): Promise<void>;
  }
}

export class Pluto extends Startable.Controller implements Domain.Pluto {
  public BackupMgr: BackupManager;
  private Repositories: PlutoRepositories;

  constructor(
    private readonly store: Pluto.Store,
    private readonly keyRestoration: Domain.KeyRestoration
  ) {
    super();
    this.Repositories = repositoryFactory(store, keyRestoration);
    this.BackupMgr = new BackupManager(this, this.Repositories);
  }

  protected async _start() {
    if (notNil(this.store.start)) {
      await this.store.start();
    }
  }

  protected async _stop() {
    if (notNil(this.store.stop)) {
      await this.store.stop();
    }
  }

  /** Backups **/
  backup(version?: Version) {
    return this.BackupMgr.backup(version);
  }

  restore(backup: Domain.Backup.Schema) {
    return this.BackupMgr.restore(backup);
  }

  async deleteMessage(id: string): Promise<void> {
    const message = await this.Repositories.Messages.findOne({ id });
    //TODO: Improve error handling
    if (message) {
      await this.Repositories.Messages.delete(message.uuid);
    }
  }

  /** Credentials **/

  async storeCredential(credential: Domain.Credential): Promise<void> {
    await this.Repositories.Credentials.save(credential);
  }

  async getAllCredentials(): Promise<Domain.Credential[]> {
    return this.Repositories.Credentials.get();
  }


  async revokeCredential(credential: Domain.Credential): Promise<void> {
    if (!credential || !credential.isStorable()) {
      throw new Error("Credential not found or invalid");
    }
    credential.properties.set("revoked", true);
    const credentialModel = await this.Repositories.Credentials.toModel(credential);
    await this.Repositories.Credentials.update(credentialModel);
  }


  /** Credential Metadata **/

  async storeCredentialMetadata(metadata: Domain.CredentialMetadata): Promise<void> {
    await this.Repositories.CredentialMetadata.save(metadata);
  }

  async getCredentialMetadata(name: string): Promise<Domain.CredentialMetadata | null> {
    return await this.Repositories.CredentialMetadata.findOne({ name });
  }


  /** LinkSecret **/

  async storeLinkSecret(linkSecret: Domain.LinkSecret): Promise<void> {
    return await this.Repositories.LinkSecrets.save(linkSecret);
  }

  async getLinkSecret(name: string = Domain.LinkSecret.defaultName): Promise<Domain.LinkSecret | null> {
    return await this.Repositories.LinkSecrets.findOne({ alias: name });
  }


  /** PrivateKeys **/

  async storePrivateKey(privateKey: Domain.PrivateKey): Promise<void> {
    await this.Repositories.Keys.save(privateKey);
  }

  async getDIDPrivateKeysByDID(did: Domain.DID): Promise<Domain.PrivateKey[]> {
    const links = await this.Repositories.DIDKeyLinks.getModels({ selector: { didId: did.uuid } });
    const $or = links.map(x => ({ uuid: x.keyId }));
    const keys = await this.Repositories.Keys.get({ selector: { $or } });

    return keys;
  }

  /** DIDs **/

  async storeDID(did: Domain.DID, keys?: Arrayable<Domain.PrivateKey>, alias?: string): Promise<void> {
    await this.Repositories.DIDs.save(did, alias);
    for (const key of asArray(keys)) {
      await this.Repositories.Keys.save(key);
      await this.Repositories.DIDKeyLinks.insert({
        alias,
        didId: did.uuid,
        keyId: key.uuid
      });
    }
  }

  /** Prism DIDs **/

  async storePrismDID(did: Domain.DID, privateKey: Domain.PrivateKey, alias?: string): Promise<void> {
    await this.Repositories.DIDs.save(did, alias);
    await this.Repositories.Keys.save(privateKey);

    await this.Repositories.DIDKeyLinks.insert({
      alias,
      didId: did.uuid,
      keyId: privateKey.uuid
    });
  }

  async getAllPrismDIDs(): Promise<Domain.PrismDID[]> {
    const dids = await this.Repositories.DIDs.find({ method: "prism" });
    const prismDIDS: Domain.PrismDID[] = [];
    for (const did of dids) {
      const dbDids = await this.getPrismDIDS(did.uuid);
      for (const prismDID of dbDids) {
        prismDIDS.push(prismDID);
      }
    }
    return prismDIDS;
  }

  private async getPrismDIDS(didId: string): Promise<Domain.PrismDID[]> {
    const links = await this.Repositories.DIDKeyLinks.getModels({ selector: { didId } });
    return Promise.all(
      links.map(async (link) => {
        const did = await this.Repositories.DIDs.byUUID(link.didId);
        const key = await this.Repositories.Keys.byUUID(link.keyId);
        if (!did || !key) {
          throw new Error("PrismDID not found");
        }
        const prismDID = new Domain.PrismDID(did, key, link.alias);
        return prismDID;
      })
    );
  }


  /** Peer DIDs **/

  async storePeerDID(did: Domain.DID, privateKeys: Domain.PrivateKey[]): Promise<void> {
    await this.Repositories.DIDs.save(did);
    for (const key of privateKeys) {
      await this.Repositories.Keys.save(key);
      await this.Repositories.DIDKeyLinks.insert({ didId: did.uuid, keyId: key.uuid });
    }
  }

  async getAllPeerDIDs(): Promise<PeerDID[]> {
    const allDids = await this.Repositories.DIDs.find({ method: "peer" });
    const allLinks = await this.Repositories.DIDKeyLinks.getModels({
      selector: { $or: allDids.map(x => ({ didId: x.uuid })) }
    });
    const allKeys = await this.Repositories.Keys.get({
      selector: { $or: allLinks.map(x => ({ uuid: x.keyId })) }
    });

    const getKeyCurveByNameAndIndex = (name: string, index?: number): Domain.KeyCurve => {
      switch (name) {
        case Domain.Curve.X25519:
          return { curve: Domain.Curve.X25519 };
        case Domain.Curve.ED25519:
          return { curve: Domain.Curve.ED25519 };
        case Domain.Curve.SECP256K1:
          return { curve: Domain.Curve.SECP256K1, index };
        default:
          throw new Domain.ApolloError.InvalidKeyCurve(name);
      }
    };

    const peerDids = allDids.map(did => {
      const keyIds = allLinks.filter(x => x.didId === did.uuid).map(x => x.keyId);
      const keys = allKeys.filter(x => keyIds.includes(x.uuid));

      const peerDid = new PeerDID(
        did,
        // TODO: remove this when PeerDIDs are updated to use PrivateKey
        keys.map(x => ({
          keyCurve: getKeyCurveByNameAndIndex(x.curve, x.index),
          value: x.getEncoded()
        }))
      );

      return peerDid;
    });

    return peerDids;
  }


  /** Messages **/

  async storeMessage(message: Domain.Message): Promise<void> {
    await this.Repositories.Messages.save(message);
  }

  async storeMessages(messages: Domain.Message[]): Promise<void> {
    for (const msg of messages) {
      await this.Repositories.Messages.save(msg);
    }
  }

  async getMessage(id: string): Promise<Domain.Message | null> {
    return await this.Repositories.Messages.findOne({ id });
  }

  async getAllMessages(): Promise<Domain.Message[]> {
    return this.Repositories.Messages.get();
  }


  /** DID Pairs **/

  async storeDIDPair(host: Domain.DID, receiver: Domain.DID, alias: string): Promise<void> {
    await this.Repositories.DIDs.save(host);
    await this.Repositories.DIDs.save(receiver);

    await this.Repositories.DIDLinks.insert({
      alias,
      role: Models.DIDLink.role.pair,
      hostId: host.uuid,
      targetId: receiver.uuid
    });
  }

  async getAllDidPairs(): Promise<Domain.DIDPair[]> {
    const links = await this.Repositories.DIDLinks.getModels({ selector: { role: Models.DIDLink.role.pair } });
    const didPairs = await Promise.all(links.map(x => this.mapDIDPairToDomain(x)));
    const filtered = didPairs.filter((x): x is Domain.DIDPair => x != null);

    return filtered;
  }

  async getPairByDID(did: Domain.DID): Promise<Domain.DIDPair | null> {
    const links = await this.Repositories.DIDLinks.getModels({
      selector: {
        $or: [
          { role: Models.DIDLink.role.pair, hostId: did.uuid },
          { role: Models.DIDLink.role.pair, targetId: did.uuid }
        ]
      }
    });

    // ?? this seems presumptuous? couldnt hostDID be re-used?
    const link = this.onlyOne(links);
    const didPair = this.mapDIDPairToDomain(link);

    return didPair;
  }

  async getPairByName(alias: string): Promise<Domain.DIDPair | null> {
    const links = await this.Repositories.DIDLinks.getModels(
      {
        selector: { alias, role: Models.DIDLink.role.pair }
      });
    const link = this.onlyOne(links);
    const didPair = this.mapDIDPairToDomain(link);

    return didPair;
  }

  private async mapDIDPairToDomain(link: Models.DIDLink): Promise<Domain.DIDPair | null> {
    const hostDID = await this.Repositories.DIDs.byUUID(link.hostId);
    const targetDID = await this.Repositories.DIDs.byUUID(link.targetId);
    const alias = link.alias ?? "";

    if (!hostDID || !targetDID) {
      return null;
    }

    const didPair = new Domain.DIDPair(hostDID, targetDID, alias);
    return didPair;
  }


  /** Mediators **/

  async getAllMediators(): Promise<Domain.Mediator[]> {
    const links = await this.Repositories.DIDLinks.getModels({
      selector: {
        $or: [
          { role: Models.DIDLink.role.mediator },
          { role: Models.DIDLink.role.routing },
        ]
      }
    });
    const hostIds = links.map(x => x.hostId).filter((x, i, s) => s.indexOf(x) === i);

    const result = await Promise.all(
      hostIds.map(async hostId => {
        const mediatorLink = links.find(x => x.hostId === hostId && x.role === Models.DIDLink.role.mediator);
        const routingLink = links.find(x => x.hostId === hostId && x.role === Models.DIDLink.role.routing);

        if (!mediatorLink || !routingLink) {
          throw new Error();
        }

        const hostDID = await this.Repositories.DIDs.byUUID(hostId);
        const mediatorDID = await this.Repositories.DIDs.byUUID(mediatorLink.targetId);
        const routingDID = await this.Repositories.DIDs.byUUID(routingLink.targetId);

        if (!hostDID || !mediatorDID || !routingDID) {
          throw new Error();
        }

        const domain: Domain.Mediator = { hostDID, mediatorDID, routingDID };
        return domain;
      })
    );

    return result;
  }

  async storeMediator(mediator: Domain.Mediator): Promise<void> {
    await this.Repositories.DIDs.save(mediator.hostDID);
    await this.Repositories.DIDs.save(mediator.mediatorDID);
    await this.Repositories.DIDs.save(mediator.routingDID);

    await this.Repositories.DIDLinks.insert({
      role: Models.DIDLink.role.mediator,
      hostId: mediator.hostDID.uuid,
      targetId: mediator.mediatorDID.uuid
    });

    await this.Repositories.DIDLinks.insert({
      role: Models.DIDLink.role.routing,
      hostId: mediator.hostDID.uuid,
      targetId: mediator.routingDID.uuid
    });
  }

  private onlyOne<T>(arr: T[]): T {
    const item = arr.at(0);
    if (!item || arr.length !== 1) throw new Error("something wrong");

    return item;
  }
}
