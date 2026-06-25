import { ES256KSigner, type Signer, createJWT } from "did-jwt";
import * as Domain from "@hyperledger/identus-domain";
import { PolluxError } from "@hyperledger/identus-domain";
import { asJsonObj, expect } from "../../../utils";
import { Task } from "../../../utils/tasks";
import { type AgentContext } from "../../../edge-agent/Context";
import { base64url } from "multiformats/bases/base64";
import { FindSigningKeys } from "../../../edge-agent/didFunctions/FindDIDSigningKeys";

/**
 * Creates a signed JWT (JSON Web Token) using a DID's private key.
 *
 * In Self-Sovereign Identity (SSI) systems, JWTs are commonly used for:
 * - Issuing verifiable credentials (VCs)
 * - Creating proof of DID ownership
 * - Sharing signed claims about subjects
 *
 * Key Purpose Selection:
 * - Default is "ISSUING_KEY" because most JWT creation is for credential issuance,
 *   which requires the "assertionMethod" capability (see DID spec)
 * - Use "AUTHENTICATION_KEY" only when signing challenge-response proofs for DID ownership
 *
 * How it works:
 * 1. Finds signing keys matching the specified purpose
 * 2. Creates a JWT with the DID as the issuer
 * 3. Signs with the found private key
 * 4. Returns the signed JWT string (can be transmitted to other parties)
 *
 * The recipient can verify this JWT by:
 * - Resolving your DID document
 * - Getting your public key from the matching verification relationship
 * - Using the public key to verify the JWT signature
 *
 * @param {DID} did - The DID that will be the issuer of this JWT
 * @param {JWT.Payload} payload - The claims to include in the JWT
 * @param {JWT.Header} [header] - Optional custom JWT header fields
 * @param {PrivateKey} [privateKey] - Optional: specific key to use (otherwise searches all keys)
 * @param {keyof PrismDIDKeys} [purpose] - Verification relationship to use (default: "ISSUING_KEY")
 * @returns {string} The signed JWT
 */

interface Args {
  did: Domain.DID;
  payload: Partial<Domain.JWT.Payload>;
  header?: Partial<Domain.JWT.Header>;
  privateKey?: Domain.PrivateKey;
  purpose?: keyof Pick<Domain.PrismDIDKeys, "AUTHENTICATION_KEY" | "ISSUING_KEY">;
}

export class CreateJWT extends Task<string, Args> {
  async run(ctx: AgentContext) {
    // Default to ISSUING_KEY because JWT creation is most commonly used for:
    // - Credential issuance (requires "assertionMethod" in DID document)
    // - Proof of claims about subjects
    // Change to AUTHENTICATION_KEY only for challenge-response authentication flows
    const signingKeys = await ctx.run(new FindSigningKeys({
      did: this.args.did,
      privateKey: this.args.privateKey,
      purpose: this.args.purpose ?? "ISSUING_KEY"
    }));
    const signingKey = signingKeys.at(0);
    const keyId = signingKey?.kid;
    const privateKey = expect(signingKey?.privateKey ?? this.args.privateKey, "key not found");

    if (!privateKey?.isSignable()) {
      throw new PolluxError.InvalidCredentialError("Key is not signable");
    }

    // secp256k1 uses compact encoding while apollo returns der signatures so far
    const signer: Signer = privateKey.curve === Domain.Curve.SECP256K1.toString()
      ? ES256KSigner(privateKey.raw)
      : async (data: string | Uint8Array) => {
        const signature = privateKey.sign(Buffer.from(data));
        const encoded = base64url.baseEncode(signature);
        return encoded
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
