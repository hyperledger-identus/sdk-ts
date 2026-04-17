/**
 * Pluto — the SDK storage layer.
 *
 * Provides a high-level, Domain-oriented API for persisting DIDs,
 * credentials, keys, messages, and their relationships.  Internally
 * delegates to a {@link Pluto.Store} via typed Repositories.
 *
 * @module Pluto
 */
import * as Domain from "@hyperledger/identus-domain";
import * as Models from "./models";
import { PeerDID } from "../castor/methods/peer/PeerDID";
import { BackupManager } from "./backup/BackupManager";
import { type PlutoRepositories, repositoryFactory } from "./repositories";
import { type Arrayable, asArray, notNil } from "../utils";
import { type Query, type TableName, type CollectionMap, type CollectionSchemas, type StartOptions } from "./types";

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
    query<K extends TableName>(table: K, query?: Query<CollectionSchemas[K]>): Promise<CollectionMap[K][]>;

    /**
     * Persist new data in the Store.
     * 
     * @template K - Valid table name. Must be one of: "credentials", "credential-metadata", "didkey-link", "did-link", "dids", "keys", "messages"
     * @param table - The table name
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
     *   await store.insert("credentials", credential);
     * ```
     * 
     * @returns Promise that resolves when the model is successfully persisted
     * @throws Error if the model is invalid or table name is not recognized
     */
    insert<K extends TableName>(table: K, model: CollectionMap[K]): Promise<void>;

    /**
     * Update an existing row in the Store
     * 
     * @template K - Valid table name. Must be one of: "credentials", "credential-metadata", "didkey-link", "did-link", "dids", "keys", "messages"
     * @param table - The table name
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
     *   await store.update("credentials", updatedCredential);
     * ```
     * 
     * @returns Promise that resolves when the model is successfully updated
     * @throws Error if the model with the given uuid is not found or table name is not recognized
     */
    update<K extends TableName>(table: K, model: CollectionMap[K]): Promise<void>;

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
    delete(table: TableName, uuid: string): Promise<void>;
  }
}

/**
 * Options for creating a Pluto instance via {@link Pluto.create}.
 *
 * Provide **either** a pre-built `store` **or** a `dbName` (in which case
 * the default RIDB-backed store is created automatically).
 *
 * @property keyRestoration - Strategy for restoring private keys from raw bytes.
 * @property store          - A custom {@link Pluto.Store} implementation.
 * @property dbName         - Logical database name used by the default store.
 * @property startOptions   - Configuration forwarded to {@link createStore}.
 */
export type CreateOptions = {
  keyRestoration: Domain.KeyRestoration;
} & ({ store: Pluto.Store; } | { dbName: string; startOptions?: StartOptions; })

/**
 * Orchestration layer for SDK persistence.
 *
 * `Pluto` translates between Domain classes (e.g. `Domain.DID`,
 * `Domain.Credential`) and the underlying {@link Pluto.Store},
 * managing relationships and business logic.
 *
 * **Preferred instantiation** is via the static {@link Pluto.create} factory.
 *
 * @example
 * ```ts
 * const pluto = await Pluto.create({
 *   dbName: "my-wallet",
 *   keyRestoration: apollo,
 * });
 * ```
 */
export class Pluto extends Domain.Startable.Controller implements Domain.Pluto {
  /** Manager for wallet backup and restore operations. */
  public BackupMgr: BackupManager;
  private Repositories: PlutoRepositories;

  static async #createWithStore(store: Pluto.Store, keyRestoration: Domain.KeyRestoration) {
    const pluto = new Pluto(store, keyRestoration);
    await pluto.start();
    return pluto;
  }

  /**
   * Create and start a new Pluto instance.
   *
   * When a `dbName` is provided (instead of a pre-built `store`), the
   * default RIDB-backed store is created automatically.
   *
   * @param options - See {@link CreateOptions}.
   * @returns A started Pluto instance ready for use.
   *
   * @example
   * Using the default store
   * ```ts
   * const pluto = await Pluto.create({
   *   dbName: "identus-wallet",
   *   keyRestoration: apollo,
   * });
   * ```
   *
   * @example
   * Using a custom store
   * ```ts
   * const pluto = await Pluto.create({
   *   store: myCustomStore,
   *   keyRestoration: apollo,
   * });
   * ```
   */
  static async create(options: CreateOptions) {
    const { keyRestoration } = options;
    if ('store' in options) {
      return Pluto.#createWithStore(options.store, keyRestoration);
    }
    const { createStore } = await import("./store");
    const { dbName, startOptions } = options;
    const defaultStore = await createStore(dbName, startOptions)
    const pluto = new Pluto(defaultStore, keyRestoration);
    await pluto.start();
    return pluto;
  }

  /**
   * @deprecated Use Pluto.create() instead
   * @param store 
   * @param keyRestoration 
   */
  constructor(
    readonly store: Pluto.Store,
    keyRestoration: Domain.KeyRestoration
  ) {
    super();
    this.Repositories = repositoryFactory(store, keyRestoration);
    this.BackupMgr = new BackupManager(this, this.Repositories);
  }

  /** @internal Start the underlying store. */
  protected async _start() {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    if (notNil(this.store.start)) {
      await this.store.start();
    }
  }

  /** @internal Stop the underlying store. */
  protected async _stop() {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    if (notNil(this.store.stop)) {
      await this.store.stop();
    }
  }

  /**
   * Create a full backup of the wallet.
   *
   * @param version - Optional backup format version.
   * @returns Serialised backup payload.
   */
  backup(version?: Domain.Backup.Version) {
    return this.BackupMgr.backup(version);
  }

  /**
   * Restore wallet data from a backup.
   *
   * @param backup - A backup payload previously created by {@link backup}.
   */
  restore(backup: Domain.Backup.Schema) {
    return this.BackupMgr.restore(backup);
  }

  /**
   * Delete a message by its identifier.
   *
   * @param id - The message `id` (not the `uuid`).
   */
  async deleteMessage(id: string) {
    const message = await this.Repositories.Messages.findOne({ id });
    //TODO: Improve error handling
    if (message) {
      await this.Repositories.Messages.delete(message.uuid);
    }
  }

  /** Credentials **/

  /**
   * Persist a credential.
   * @param credential - The {@link Domain.Credential} to store.
   */
  async storeCredential(credential: Domain.Credential) {
    await this.Repositories.Credentials.save(credential);
  }

  /**
   * Retrieve all stored credentials.
   * @returns Array of {@link Domain.Credential} instances.
   */
  async getAllCredentials() {
    return this.Repositories.Credentials.get();
  }

  /**
   * Mark a credential as revoked.
   *
   * @param credential - The credential to revoke. Must be storable.
   * @throws Error if the credential is null or not storable.
   */
  async revokeCredential(credential: Domain.Credential) {
    if (!credential || !credential.isStorable()) {
      throw new Error("Credential not found or invalid");
    }
    credential.properties.set("revoked", true);
    const credentialModel = this.Repositories.Credentials.toModel(credential);
    await this.Repositories.Credentials.update(credentialModel);
  }


  /** Credential Metadata **/

  /**
   * Persist credential metadata (e.g. schema information).
   * @param metadata - The {@link Domain.CredentialMetadata} to store.
   */
  async storeCredentialMetadata(metadata: Domain.CredentialMetadata) {
    await this.Repositories.CredentialMetadata.save(metadata);
  }

  /**
   * Retrieve credential metadata by name.
   * @param name - The metadata name/key.
   * @returns The matching metadata or `null`.
   */
  async getCredentialMetadata(name: string) {
    return await this.Repositories.CredentialMetadata.findOne({ name });
  }


  /** LinkSecret **/

  /**
   * Persist an AnonCreds link secret.
   * @param linkSecret - The {@link Domain.LinkSecret} to store.
   */
  async storeLinkSecret(linkSecret: Domain.LinkSecret) {
    return await this.Repositories.LinkSecrets.save(linkSecret);
  }

  /**
   * Retrieve a link secret by name.
   * @param name - Defaults to {@link Domain.LinkSecret.defaultName}.
   * @returns The matching link secret or `null`.
   */
  async getLinkSecret(name: string = Domain.LinkSecret.defaultName) {
    return await this.Repositories.LinkSecrets.findOne({ alias: name });
  }


  /** PrivateKeys **/

  /**
   * Persist a private key.
   * @param privateKey - The {@link Domain.PrivateKey} to store.
   */
  async storePrivateKey(privateKey: Domain.PrivateKey) {
    await this.Repositories.Keys.save(privateKey);
  }

  /**
   * Get all private keys linked to a DID.
   *
   * @param did - The DID whose keys should be retrieved.
   * @returns Array of {@link Domain.PrivateKey} instances.
   */
  async getDIDPrivateKeysByDID(did: Domain.DID) {
    const links = await this.Repositories.DIDKeyLinks.getModels({ selector: { didId: did.uuid } });
    const $or = links.map(x => ({ uuid: x.keyId }));
    const keys = await this.Repositories.Keys.get({ selector: { $or } });

    return keys;
  }

  /** DIDs **/

  /**
   * Store a DID with optional associated keys and alias.
   *
   * @param did   - The {@link Domain.DID} to persist.
   * @param keys  - Optional private key(s) to link to the DID.
   * @param alias - Optional human-readable name.
   */
  async storeDID(did: Domain.DID, keys?: Arrayable<Domain.PrivateKey>, alias?: string) {
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

  /**
   * Store a Prism DID and its associated private key.
   *
   * @param did        - The Prism {@link Domain.DID}.
   * @param privateKey - The key used to control the DID.
   * @param alias      - Optional human-readable name.
   */
  async storePrismDID(did: Domain.DID, privateKey: Domain.PrivateKey, alias?: string) {
    await this.Repositories.DIDs.save(did, alias);
    await this.Repositories.Keys.save(privateKey);

    await this.Repositories.DIDKeyLinks.insert({
      alias,
      didId: did.uuid,
      keyId: privateKey.uuid
    });
  }

  /**
   * Retrieve all stored Prism DIDs with their keys.
   * @returns Array of {@link Domain.PrismDID} instances.
   */
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

  private async getPrismDIDS(didId: string) {
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

  /**
   * Store a Peer DID and its associated private keys.
   *
   * @param did         - The Peer {@link Domain.DID}.
   * @param privateKeys - The keys that constitute the Peer DID.
   */
  async storePeerDID(did: Domain.DID, privateKeys: Domain.PrivateKey[]) {
    await this.Repositories.DIDs.save(did);
    for (const key of privateKeys) {
      await this.Repositories.Keys.save(key);
      await this.Repositories.DIDKeyLinks.insert({ didId: did.uuid, keyId: key.uuid });
    }
  }

  /**
   * Retrieve all stored Peer DIDs with their key material.
   * @returns Array of {@link PeerDID} instances.
   */
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
        case Domain.Curve.X25519.toString():
          return { curve: Domain.Curve.X25519 };
        case Domain.Curve.ED25519.toString():
          return { curve: Domain.Curve.ED25519 };
        case Domain.Curve.SECP256K1.toString():
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

  /**
   * Persist a single DIDComm message.
   * @param message - The {@link Domain.Message} to store.
   */
  async storeMessage(message: Domain.Message) {
    await this.Repositories.Messages.save(message);
  }

  /**
   * Persist multiple DIDComm messages.
   * @param messages - The messages to store.
   */
  async storeMessages(messages: Domain.Message[]) {
    for (const msg of messages) {
      await this.Repositories.Messages.save(msg);
    }
  }

  /**
   * Retrieve a single message by its protocol-level id.
   * @param id - The message `id`.
   * @returns The matching {@link Domain.Message} or `null`.
   */
  async getMessage(id: string) {
    return await this.Repositories.Messages.findOne({ id });
  }

  /**
   * Retrieve all stored messages.
   * @returns Array of {@link Domain.Message} instances.
   */
  async getAllMessages() {
    return this.Repositories.Messages.get();
  }


  /** DID Pairs **/

  /**
   * Store a DID pair relationship.
   *
   * @param host     - The local/host DID.
   * @param receiver - The remote/target DID.
   * @param alias    - Human-readable name for this pair.
   */
  async storeDIDPair(host: Domain.DID, receiver: Domain.DID, alias: string) {
    await this.Repositories.DIDs.save(host);
    await this.Repositories.DIDs.save(receiver);

    await this.Repositories.DIDLinks.insert({
      alias,
      role: Models.DIDLink.role.pair,
      hostId: host.uuid,
      targetId: receiver.uuid
    });
  }

  /**
   * Retrieve all stored DID pairs.
   * @returns Array of {@link Domain.DIDPair} instances.
   */
  async getAllDidPairs() {
    const links = await this.Repositories.DIDLinks.getModels({ selector: { role: Models.DIDLink.role.pair } });
    const didPairs = await Promise.all(links.map(x => this.mapDIDPairToDomain(x)));
    const filtered = didPairs.filter((x): x is Domain.DIDPair => x != null);

    return filtered;
  }

  /**
   * Find the DID pair that includes the given DID.
   *
   * @param did - Either side of the pair.
   * @returns The matching {@link Domain.DIDPair} or `null`.
   */
  async getPairByDID(did: Domain.DID) {
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

  /**
   * Find a DID pair by its alias.
   *
   * @param alias - The pair alias.
   * @returns The matching {@link Domain.DIDPair} or `null`.
   */
  async getPairByName(alias: string) {
    const links = await this.Repositories.DIDLinks.getModels(
      {
        selector: { alias, role: Models.DIDLink.role.pair }
      });
    const link = this.onlyOne(links);
    const didPair = this.mapDIDPairToDomain(link);

    return didPair;
  }

  private async mapDIDPairToDomain(link: Models.DIDLink) {
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

  /**
   * Retrieve all stored mediator configurations.
   *
   * Each mediator consists of a host DID, a mediator DID, and a routing DID.
   *
   * @returns Array of {@link Domain.Mediator} objects.
   */
  async getAllMediators() {
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
        const mediatorLink = links.find(x => x.hostId === hostId && x.role === Models.DIDLink.role.mediator.valueOf());
        const routingLink = links.find(x => x.hostId === hostId && x.role === Models.DIDLink.role.routing.valueOf());

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

  /**
   * Persist a mediator configuration.
   *
   * Stores the three DIDs involved (host, mediator, routing) and
   * creates the internal DID-link relationships.
   *
   * @param mediator - The {@link Domain.Mediator} to store.
   */
  async storeMediator(mediator: Domain.Mediator) {
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
