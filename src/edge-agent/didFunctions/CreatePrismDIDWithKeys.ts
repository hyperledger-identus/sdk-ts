import {
  DIDDocument,
  PrivateKey,
  DID,
  RequiredPrismDIDKeys,
  RequiredPrismDIDSecretKeys
} from "../../domain";
import {
  PrismDIDKeyUsage
} from "../../domain/models/derivation/schemas/PrismDerivation";
import { Arrayable } from "../../utils";
import { Task } from "../../utils/tasks";
import { AgentContext } from "../Context";






export interface Args {
  keys: RequiredPrismDIDSecretKeys;
  services?: DIDDocument.Service[];
  alias?: string;
}

/**
 * Handle the creation of a PrismDID
 *
 * Calculate and use the latest Prism DID KeyPathIndex.
 * Create the relevant PrivateKeys.
 * Store the PrismDID plus Keys in Pluto
 *
 * @param { Curve } authenticationKeyCurve specify the Curve used for the included AuthenticationKey (default: ED25519)
 * @param { Curve } issuingKeyCurve specify the Curve used for an additional IssuingKey (maps to assertionMethod)
 */
export class CreatePrismDIDWithKeys extends Task<DID, Args> {

  async run(ctx: AgentContext) {

    for (const keyUsage of this.keyUsagesWithoutMasterKey) {
      if (!this.publicKeys[keyUsage]) this.publicKeys[keyUsage] = []
      const privateKey = this.args.keys[keyUsage];
      if (privateKey) {
        this.secretKeys.push(privateKey);
        this.publicKeys[keyUsage].push(privateKey.publicKey())
      }
    }

    const did = await ctx.Castor.createPrismDID(
      this.args.keys.MASTER_KEY.publicKey(),
      this.args.services,
      this.publicKeys
    );

    await ctx.Pluto.storeDID(did, this.secretKeys, this.args.alias);

    return did;
  }

  private get keyUsage() {
    return Object.keys(this.args.keys) as Array<keyof typeof PrismDIDKeyUsage>;
  }

  private get keyUsagesWithoutMasterKey() {
    return this.keyUsage.filter((usage) => usage !== 'MASTER_KEY');
  }

  private get publicKeys() {
    const keys: RequiredPrismDIDKeys = { 'MASTER_KEY': [this.args.keys.MASTER_KEY.publicKey()] }
    return keys;
  }

  private get secretKeys() {
    const secretKeys: Arrayable<PrivateKey> = [this.args.keys.MASTER_KEY]
    return secretKeys;
  }
}

