import * as Domain from "@hyperledger/identus-domain";
import { Task } from "../../utils/tasks";
import { type AgentContext } from "../../edge-agent/Context";
import { Send } from "../../plugins/internal/didcomm";
import { MediationKeysUpdateList } from "../../plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList";

/**
 * Arguments for creating a new peer DID
 */
export interface Args {
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
    const mediators = ctx.Connections.allMediators;

    if (
      mediators.length > 0 &&
      !services.find((service) => {
        return service.isDIDCommMessaging;
      })
    ) {
      //TODO This still needs to be done update the key List
      mediators.forEach((mediator, index) => {
        services.push(
          new Domain.DIDDocument.Service(
            `#didcomm-${index + 1}`,
            ["DIDCommMessaging"],
            new Domain.DIDDocument.ServiceEndpoint(mediator.uri)
          )
        );
      });
    }
    const did = await ctx.Castor.createDID(
      'peer',
      {
        services: services,
        keys: {
          KEY_AGREEMENT_KEY: [keyAgreementPrivateKey],
          AUTHENTICATION_KEY: [authenticationPrivateKey],
        }
      }
    );

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
    const mediators = ctx.Connections.allMediators;

    if (mediators.length === 0) {
      throw new Domain.AgentError.NoMediatorAvailableError();
    }

    for (const connection of mediators) {
      const mediator = connection.asMediator();
      const keyListUpdateMessage = new MediationKeysUpdateList(
        mediator.hostDID,
        mediator.mediatorDID,
        [did]
      ).makeMessage();

      await ctx.run(new Send({ message: keyListUpdateMessage }));
    }
  }
}
