import { base58btc } from 'multiformats/bases/base58';
import * as Domain from "../../../domain";
import { isObject, notEmptyString, Task } from "../../../utils";
// TODO importing from Castor
import { FromJWK } from "./FromJWK";
import { AgentContext } from "../../../edge-agent/didcomm/Context";

export interface Args {
  verificationMethod: Domain.VerificationMethod;
}
export class PKInstance extends Task<Domain.PublicKey | undefined, Args> {
  async run(ctx: AgentContext) {
    const verificationMethod = this.args.verificationMethod;
    let pk: Domain.PublicKey | undefined = undefined;

    if (notEmptyString(verificationMethod.publicKeyMultibase)) {
      const decoded = base58btc.decode(verificationMethod.publicKeyMultibase);
      if (verificationMethod.type === "EcdsaSecp256k1VerificationKey2019") {
        pk = ctx.Apollo.createPublicKey({
          [Domain.KeyProperties.curve]: Domain.Curve.SECP256K1,
          [Domain.KeyProperties.rawKey]: decoded
        });
      } else if (verificationMethod.type === "Ed25519VerificationKey2018" ||
        verificationMethod.type === "Ed25519VerificationKey2020") {
        pk = ctx.Apollo.createPublicKey({
          [Domain.KeyProperties.curve]: Domain.Curve.ED25519,
          [Domain.KeyProperties.rawKey]: decoded
        });
      } else if (verificationMethod.type === "X25519KeyAgreementKey2019" ||
        verificationMethod.type === "X25519KeyAgreementKey2020") {
        pk = ctx.Apollo.createPublicKey({
          [Domain.KeyProperties.curve]: Domain.Curve.X25519,
          [Domain.KeyProperties.rawKey]: decoded
        });
      } else if (verificationMethod.type === "JsonWebKey2020") {
        pk = ctx.Apollo.createPublicKey({
          [Domain.KeyProperties.curve]: Domain.Curve.SECP256K1,
          [Domain.KeyProperties.rawKey]: decoded
        });
      }
      return pk;
    }

    if (isObject(verificationMethod.publicKeyJwk)) {
      const keyPair = await ctx.run(
        new FromJWK({ jwk: verificationMethod.publicKeyJwk as Domain.JWK })
      );
      if (keyPair instanceof Domain.KeyPair) {
        pk = keyPair.publicKey;
      } else {
        pk = keyPair;
      }
      return pk;
    }

    throw new Error("Not supported");
  }
}
