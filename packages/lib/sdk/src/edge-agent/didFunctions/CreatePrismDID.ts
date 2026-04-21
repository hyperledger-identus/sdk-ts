import * as Domain from "@hyperledger/identus-domain";
import {
  PrismDerivationPath,
  PrismDerivationPathSchema,
  PrismDIDKeyUsage
} from "@hyperledger/identus-domain";
import { Task } from "../../utils/tasks";
import { type AgentContext } from "../Context";
import { PrismKeyPathIndexTask } from "./PrismKeyPathIndex";

export interface Args {
  authenticationKeyCurve?: Domain.Curve;
  services?: Domain.DIDDocument.Service[];
  alias?: string;
  keyPathIndex?: number;
}

/**
 * @deprecated will be removed in a later release, please use CreatePrismDIDWithKeys
 * Handle the creation of a PrismDID
 * 
 * Calculate and use the latest Prism DID KeyPathIndex.
 * Create the relevant PrivateKeys.
 * Store the PrismDID plus Keys in Pluto
 * 
 * @param { Domain.Curve } authenticationKeyCurve specify the Curve used for the included AuthorizationKey
 */
export class CreatePrismDID extends Task<Domain.DID, Args> {
  async run(ctx: AgentContext) {
    const index = await ctx.run(new PrismKeyPathIndexTask({ index: this.args.keyPathIndex }));
    const masterKeyDerivation = PrismDerivationPath.init(index, PrismDIDKeyUsage.MASTER_KEY);
    const issuingDerivation = PrismDerivationPath.init(index, PrismDIDKeyUsage.ISSUING_KEY);

    const seed = new Uint8Array(await ctx.Seed());

    const masterSK = ctx.Apollo.createPrivateKey({
      [Domain.KeyProperties.curve]: Domain.Curve.SECP256K1,
      [Domain.KeyProperties.seed]: seed,
      [Domain.KeyProperties.derivationPath]: masterKeyDerivation.toString(),
      [Domain.KeyProperties.derivationSchema]: PrismDerivationPathSchema
    });

    const authKeyCurve = this.args.authenticationKeyCurve ?? Domain.Curve.ED25519;
    const authKey = ctx.Apollo.createPrivateKey({
      [Domain.KeyProperties.curve]: authKeyCurve,
      [Domain.KeyProperties.seed]: seed,
      [Domain.KeyProperties.derivationPath]: issuingDerivation.toString(),
      [Domain.KeyProperties.derivationSchema]: PrismDerivationPathSchema
    });

    const did = await ctx.Castor.createDID(
      'prism',
      {
        services: this.args.services,
        keys: {
          MASTER_KEY: masterSK,
          AUTHENTICATION_KEY: [authKey]
        }
      }
    );

    await ctx.Pluto.storeDID(did, [masterSK, authKey], this.args.alias);

    seed.fill(0)

    return did;
  }
}
