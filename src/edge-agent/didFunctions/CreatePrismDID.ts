import * as Domain from "../../domain";
import {
  PrismDerivationPath,
  PrismDerivationPathSchema,
  PrismDIDKeyUsage
} from "../../domain/models/derivation/schemas/PrismDerivation";
import { Task } from "../../utils/tasks";
import { AgentContext } from "../Context";
import { PrismKeyPathIndexTask } from "./PrismKeyPathIndex";

interface Args {
  authenticationKeyCurve?: Domain.Curve;
  services?: Domain.DIDDocument.Service[];
  alias?: string;
  keyPathIndex?: number;
}

/**
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
    // TODO should this be using AUTHENTICATION_KEY
    const issuingDerivation = PrismDerivationPath.init(index, PrismDIDKeyUsage.ISSUING_KEY);
    const seedHex = Buffer.from(ctx.Seed.value).toString("hex");
    const masterSK = ctx.Apollo.createPrivateKey({
      [Domain.KeyProperties.curve]: Domain.Curve.SECP256K1,
      [Domain.KeyProperties.seed]: seedHex,
      [Domain.KeyProperties.derivationPath]: masterKeyDerivation.toString(),
      [Domain.KeyProperties.derivationSchema]: PrismDerivationPathSchema
    });

    const authKeyCurve = this.args.authenticationKeyCurve ?? Domain.Curve.ED25519;
    const authKey = ctx.Apollo.createPrivateKey({
      [Domain.KeyProperties.curve]: authKeyCurve,
      [Domain.KeyProperties.seed]: seedHex,
      [Domain.KeyProperties.derivationPath]: issuingDerivation.toString(),
      [Domain.KeyProperties.derivationSchema]: PrismDerivationPathSchema
    });

    const did = await ctx.Castor.createPrismDID(
      masterSK.publicKey(),
      this.args.services,
      [authKey.publicKey()]
    );

    await ctx.Pluto.storeDID(did, [masterSK, authKey], this.args.alias);

    return did;
  }
}
