import { ES256KSigner, Signer, createJWT } from "did-jwt";
import * as Domain from "../../../domain";
import { asJsonObj, expect } from "../../../utils";
import { Task } from "../../../utils/tasks";
import { AgentContext } from "../../../edge-agent/Context";
import { base64url } from "multiformats/bases/base64";
import { FindSigningKeys } from "../../../edge-agent/didFunctions/FindDIDSigningKeys";

/**
 * Asyncronously sign with a DID
 *
 * 
 * @param {DID} did
 * @param payload
 * @param header
 * @returns {string}
 */

interface Args {
  did: Domain.DID;
  payload: Partial<Domain.JWT.Payload>;
  header?: Partial<Domain.JWT.Header>;
  privateKey?: Domain.PrivateKey;
}

export class CreateJWT extends Task<string, Args> {
  async run(ctx: AgentContext) {
    const signingKeys = await ctx.run(new FindSigningKeys({
      did: this.args.did,
      privateKey: this.args.privateKey
    }));
    const signingKey = signingKeys.at(0);
    const keyId = signingKey?.kid;
    const privateKey = expect(signingKey?.privateKey ?? this.args.privateKey, "key not found");

    if (!privateKey?.isSignable()) {
      throw new Error("Key is not signable");
    }

    // secp256k1 uses compact encoding while apollo returns der signatures so far
    const signer: Signer = privateKey.curve === Domain.Curve.SECP256K1
      ? ES256KSigner(privateKey.raw)
      : async (data: string | Uint8Array) => {
        const signature = privateKey.sign(Buffer.from(data));
        const encoded = base64url.baseEncode(signature);
        return encoded;
      };

    const jwt = await createJWT(
      this.args.payload,
      { issuer: this.args.did.toString(), signer },
      {
        kid: keyId,
        alg: privateKey.alg,
        ...asJsonObj(this.args.header)
      }
    );

    return jwt;
  }
}
