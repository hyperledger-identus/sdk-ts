import * as Domain from "../../domain";
import { Task } from "../../utils/tasks";
import { AgentContext } from "../Context";
import { Send } from "./Send";
import { MediationKeysUpdateList } from "../../plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList";

/**
 * Arguments for creating a new peer DID
 */
interface Args {
  /** Array of services to include in the DID document */
  services: Domain.DIDDocument.Service[];
  /** Whether to update the mediator with the new DID's key list */
  updateMediator: boolean;
}

/**
 * Task class for creating and storing new peer DIDs.
 * 
 * This class generates a new peer DID with authentication and key agreement keys,
 * optionally includes mediator services, and stores the DID with its private keys
 * in the agent's storage. It can also update the mediator's key list if specified.
 */
export class CreatePeerDID extends Task<Domain.DID, Args> {
  /**
   * Executes the task to create and store a new peer DID.
   * 
   * This method:
   * 1. Creates key agreement and authentication private keys
   * 2. Adds mediator service if available and not already present
   * 3. Creates the peer DID using Castor
   * 4. Optionally updates the mediator's key list
   * 5. Stores the DID and its private keys in Pluto
   * 
   * @param ctx - The agent context containing Apollo, Castor, Pluto, and Connections
   * @returns A Promise that resolves to the created DID
   */
  async run(ctx: AgentContext): Promise<Domain.DID> {
    const services = this.args.services;
    const updateMediator = this.args.updateMediator ?? false;
    const publicKeys: Domain.PublicKey[] = [];
    const keyAgreementPrivateKey = ctx.Apollo.createPrivateKey({
      type: Domain.KeyTypes.Curve25519,
      curve: Domain.Curve.X25519,
    });

    const authenticationPrivateKey = ctx.Apollo.createPrivateKey({
      type: Domain.KeyTypes.EC,
      curve: Domain.Curve.ED25519,
    });

    publicKeys.push(keyAgreementPrivateKey.publicKey());
    publicKeys.push(authenticationPrivateKey.publicKey());
    const mediatorDID = ctx.Connections.mediator?.uri;

    if (
      mediatorDID &&
      !services.find((service) => {
        return service.isDIDCommMessaging;
      })
    ) {
      //TODO This still needs to be done update the key List
      services.push(
        new Domain.DIDDocument.Service(
          "#didcomm-1",
          ["DIDCommMessaging"],
          new Domain.DIDDocument.ServiceEndpoint(mediatorDID.toString())
        )
      );
    }
    const did = await ctx.Castor.createPeerDID(publicKeys, services);

    if (updateMediator) {
      await this.updateKeyListWithDID(ctx, did);
    }

    await ctx.Pluto.storeDID(did, [
      keyAgreementPrivateKey,
      authenticationPrivateKey,
    ]);

    return did;
  }

  /**
   * Asynchronously updates the mediator with the new key list.
   * 
   * This method is used during the mediation process or during DID rotation
   * to inform the mediator about new keys that should be included in the
   * mediation key list for message routing.
   *
   * @param ctx - The agent context containing connections and messaging capabilities
   * @param did - The DID to add to the mediator's key list
   * @returns A Promise that resolves when the key list update is sent
   * @throws {Domain.AgentError.NoMediatorAvailableError} When no mediator is available
   */
  async updateKeyListWithDID(ctx: AgentContext, did: Domain.DID): Promise<void> {
    const mediator = ctx.Connections.mediator?.asMediator();

    if (!mediator) {
      throw new Domain.AgentError.NoMediatorAvailableError();
    }
    const keyListUpdateMessage = new MediationKeysUpdateList(
      mediator.hostDID,
      mediator.mediatorDID,
      [did]
    ).makeMessage();

    await ctx.run(new Send({ message: keyListUpdateMessage }));
    // [ ] handle response https://github.com/hyperledger-identus/sdk-ts/issues/391
  }
}
