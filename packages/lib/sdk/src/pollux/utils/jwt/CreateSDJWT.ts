import type * as Domain from "@hyperledger/identus-domain";
import { PolluxError } from "@hyperledger/identus-domain";
import { Task } from "../../../utils/tasks";
import { SDJwtVcInstance, type SdJwtVcPayload, } from "@sd-jwt/sd-jwt-vc";
import type { DisclosureFrame } from '@sd-jwt/types';
import { type Plugins } from "../../../plugins";
import { FindSigningKeys } from "../../../edge-agent/didFunctions/FindDIDSigningKeys";
import { expect } from "../../../utils";

/**
 * Creates a signed SD-JWT (Selective Disclosure JWT) using a DID's private key.
 *
 * SD-JWT (RFC 9052) is an extension of JWT that allows:
 * - Issuing credentials with selective disclosure capabilities
 * - Holders to selectively reveal only necessary claims to verifiers
 * - Privacy-preserving credential presentation
 *
 * Example use case:
 * - An issuer creates an SD-JWT with claims: name, age, address, email
 * - The holder can share a version that only discloses: name and age
 * - Verifier can still verify the issuer's signature on the hidden claims
 *
 * Key Purpose Selection:
 * - Default is "ISSUING_KEY" for credential issuance (requires "assertionMethod" in DID)
 * - This is appropriate because SD-JWTs are typically issued as verifiable credentials
 * - Note: Like CreateJWT, SD-JWT also defaults to ISSUING_KEY since both are used for
 *   credential issuance flows. Use AUTHENTICATION_KEY only for authentication challenges.
 *
 * See: https://datatracker.ietf.org/doc/html/rfc9052 (SD-JWT specification)
 *
 * @param {DID} did - The DID that will issue this SD-JWT credential
 * @param {SdJwtVcPayload} payload - The credential claims to include
 * @param {JWT.Header} [header] - Optional custom JWT header fields
 * @param {DisclosureFrame} disclosureFrame - Specifies which claims are selectively disclosable
 * @param {PrivateKey} [privateKey] - Optional: specific key to use (otherwise searches all keys)
 * @param {keyof PrismDIDKeys} [purpose] - Verification relationship (default: "ISSUING_KEY")
 * @returns {string} The signed SD-JWT
 */

interface Args {
  did: Domain.DID;
  payload: SdJwtVcPayload;
  header?: Partial<Domain.JWT.Header>;
  disclosureFrame: DisclosureFrame<SdJwtVcPayload>;
  privateKey?: Domain.PrivateKey;
  purpose?: keyof Pick<Domain.PrismDIDKeys, "AUTHENTICATION_KEY" | "ISSUING_KEY">;
}

export class CreateSDJWT extends Task<string, Args> {

  async run(ctx: Plugins.Context) {
    // Default to ISSUING_KEY because SD-JWTs are typically issued as verifiable credentials.
    // The issuer signs the credential, allowing verifiers to:
    // 1. Verify the issuer's signature
    // 2. Selectively disclose only necessary claims
    // The issuer's public key is found via the "assertionMethod" in their DID document.
    const signingKeys = await ctx.run(
      new FindSigningKeys({
        did: this.args.did,
        privateKey: this.args.privateKey,
        purpose: this.args.purpose ?? "ISSUING_KEY",
      })
    );
    const signingKey = signingKeys.at(0);
    const keyId = signingKey?.kid;
    const privateKey = expect(signingKey?.privateKey, "key not found");
    if (!privateKey?.isSignable()) {
      throw new PolluxError.InvalidCredentialError("Key is not signable");
    }
    const config = ctx.SDJWT.getSKConfig(privateKey);
    const sdjwt = new SDJwtVcInstance(config);
    return sdjwt.issue(
      this.args.payload,
      this.args.disclosureFrame,
      keyId ? { header: { kid: keyId } } : undefined
    );
  }
}
