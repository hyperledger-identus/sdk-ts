import * as Domain from "../../domain";
import {
  PrismDerivationPath,
  PrismDerivationPathSchema,
  PrismDIDKeyUsage
} from "../../domain/models/derivation/schemas/PrismDerivation";
import { Task } from "../../utils/tasks";
import { AgentContext } from "../Context";

export interface CreateDeterministicPrismDIDArgs {
  mnemonic: Domain.MnemonicWordList;
  passphrase?: string;
  didIndex?: number;
}

/**
 * Handle the creation of a deterministic PrismDID from a BIP-39 mnemonic.
 *
 * Derives a single master key at path m/29'/29'/didIndex'/1'/0' using secp256k1.
 * Creates a master-key-only DID using CompressedECKeyData.
 *
 * The DID is deterministic: same mnemonic + passphrase + didIndex
 * will always produce the same DID identifier.
 */
export class CreateDeterministicPrismDID extends Task<Domain.DID, CreateDeterministicPrismDIDArgs> {
  async run(ctx: AgentContext) {
    const didIndex = this.args.didIndex ?? 0;
    const passphrase = this.args.passphrase ?? "";

    const seed = ctx.Apollo.createSeed(this.args.mnemonic, passphrase);
    const seedHex = Buffer.from(seed.value).toString("hex");

    // Derive master key at m/29'/29'/didIndex'/1'/0'
    // PrismDerivationPath.init(keyIndex, keyPurpose, didIndex)
    const masterKeyDerivation = PrismDerivationPath.init(
      0,
      PrismDIDKeyUsage.MASTER_KEY,
      didIndex
    );

    const masterSK = ctx.Apollo.createPrivateKey({
      [Domain.KeyProperties.curve]: Domain.Curve.SECP256K1,
      [Domain.KeyProperties.seed]: seedHex,
      [Domain.KeyProperties.derivationPath]: masterKeyDerivation.toString(),
      [Domain.KeyProperties.derivationSchema]: PrismDerivationPathSchema
    });

    // Create DID with only master key (no authentication/issuing keys)
    const did = await ctx.Castor.createPrismDID(masterSK.publicKey());

    await ctx.Pluto.storeDID(did, [masterSK]);

    return did;
  }
}
