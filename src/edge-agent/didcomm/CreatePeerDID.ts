import * as Domain from "../../domain";
import { Task } from "../../utils/tasks";
import { AgentContext } from "../Context";
import { Send } from "./Send";
import { MediationKeysUpdateList } from "../../plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList";

/**
 * Asyncronously create and store a new peer did
 *
 * @async
 * @param {Service[]} services
 * @param {boolean} [updateMediator=false]
 * @returns {Promise<DID>}
 */

interface Args {
  services: Domain.DIDDocument.Service[];
  updateMediator: boolean;
}

export class CreatePeerDID extends Task<Domain.DID, Args> {
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
   * Asyncronously update the mediator with the new keyList, used during the mediation process or during DID Rotation
   *
   * @async
   * @param {DID[]} did
   * @returns {Promise<void>}
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
