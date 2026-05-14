import * as Domain from "@hyperledger/identus-domain";
import { Task } from "../../utils/tasks";
import { type AgentContext } from "../../edge-agent/Context";
import { Send } from "../../plugins/internal/didcomm";
import { ProtocolIds } from "../../plugins/internal/didcomm/types";
import { MediationKeysUpdateList } from "../../plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList";
import { MediationKeysUpdateResponse } from "../../plugins/internal/didcomm/connection/MediationKeysUpdateResponse";

const KEYLIST_UPDATE_TIMEOUT_MS = 60_000;

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
   * Send a `keylist-update` to the mediator and validate its response.
   *
   * The outgoing `keylist-update` carries `return_route: "all"` (added by
   * Mercury for protocols in `ReturnRouteProtocols`), so the mediator's
   * `keylist-update-response` is returned inline in the same HTTP reply.
   * `Send` surfaces it as the resolved `Message`; this method then asserts
   * piuri + thid and runs {@link MediationKeysUpdateResponse}, which throws
   * on any non-`success` / non-`no_change` result or a malformed body.
   *
   * A {@link KEYLIST_UPDATE_TIMEOUT_MS} timeout guards against an
   * unresponsive mediator.
   *
   * Spec: https://didcomm.org/coordinate-mediation/2.0/mediate-request
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

    let timeoutHandle: ReturnType<typeof setTimeout> | undefined;
    const timeoutPromise = new Promise<never>((_, reject) => {
      timeoutHandle = setTimeout(() => {
        reject(new Error(
          `keylist-update timed out after ${KEYLIST_UPDATE_TIMEOUT_MS / 1000}s`
        ));
      }, KEYLIST_UPDATE_TIMEOUT_MS);
    });

    try {
      const response = await Promise.race([
        ctx.run(new Send({ message: keyListUpdateMessage })),
        timeoutPromise,
      ]);

      if (
        !(response instanceof Domain.Message) ||
        response.piuri !== ProtocolIds.MediationKeysUpdateResponse ||
        response.thid !== keyListUpdateMessage.id
      ) {
        throw new Error(
          `keylist-update: mediator did not return a matching keylist-update-response`
        );
      }

      await ctx.run(new MediationKeysUpdateResponse({ message: response }));
    } finally {
      if (timeoutHandle !== undefined) clearTimeout(timeoutHandle);
    }
  }
}
