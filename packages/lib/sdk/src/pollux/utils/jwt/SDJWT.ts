import Hashing from "hash.js";
import { base64url } from "multiformats/bases/base64";
import { type SDJWTVCConfig, SDJwtVcInstance, type SdJwtVcPayload, } from '@sd-jwt/sd-jwt-vc';
import { type Disclosure } from '@sd-jwt/utils';
import { decodeSdJwtSync, getClaimsSync } from '@sd-jwt/decode';
import type { DisclosureFrame, PresentationFrame } from '@sd-jwt/types';
import * as Domain from '@hyperledger/identus-domain';
import { PolluxError, CastorError } from '@hyperledger/identus-domain';
import { SDJWTCredential } from '../../models/SDJWTVerifiableCredential';
import { Task, notNil } from "../../../utils";
import { ResolveDID } from "./ResolveDID";
import { CreateSDJWT } from "./CreateSDJWT";
import { PKInstance } from "../../../edge-agent/didFunctions/PKInstance";

export const defaultHashConfig = {
  hasherAlg: 'SHA256',
  hasher: (data: string | Uint8Array, alg: string) => {
    const safeAlg = alg.replace(/-/gmi, "").toUpperCase();
    if (safeAlg === 'SHA256') {
      return Uint8Array.from(Hashing.sha256().update(data).digest());
    }
    if (safeAlg === 'SHA512') {
      return Uint8Array.from(Hashing.sha512().update(data).digest());
    }
    throw new PolluxError.InvalidCredentialError(`Invalid Hashing Algorithm. Valid options are: 'SHA256', 'SHA512'`);
  }
};

export class SDJWT extends Task.Runner {
  clone() {
    return new SDJWT();
  }

  decode(jws: string) {
    return decodeSdJwtSync(jws, defaultHashConfig.hasher);
  }

  async sign<E extends SdJwtVcPayload>(options: {
    issuerDID: Domain.DID,
    privateKey?: Domain.PrivateKey,
    payload: E,
    disclosureFrame: DisclosureFrame<E>;
    kid?: string | undefined;
    purpose?: keyof Pick<Domain.PrismDIDKeys, "AUTHENTICATION_KEY" | "ISSUING_KEY">;
  }): Promise<string> {
    return this.runTask(
      new CreateSDJWT({
        did: options.issuerDID,
        payload: options.payload,
        disclosureFrame: options.disclosureFrame,
        privateKey: options.privateKey,
        purpose: options.purpose,
      }));
  }

  async verify(options: {
    issuerDID: Domain.DID,
    jws: string,
    requiredClaimKeys?: string[],
    requiredKeyBindings?: boolean;
  }): Promise<boolean> {
    const { issuerDID, jws } = options;
    const resolved = await this.runTask(new ResolveDID({ did: issuerDID.toString() }));
    const verificationMethods = resolved.didDocument?.verificationMethod;
    if (!verificationMethods) {
      throw new CastorError.NotPossibleToResolveDID("Invalid did document: no verification methods found");
    }
    const jwtObject = SDJWTCredential.fromJWS(jws);

    if (jwtObject.issuer && jwtObject.issuer !== issuerDID.toString()) {
      throw new PolluxError.InvalidCredentialError("SDJWT issuer does not match the expected DID");
    }

    // Check exp claim (RFC 7519 §4.1.4)
    // Normalize timestamps: the codebase uses Date.getTime() (ms) for nbf/exp,
    // but RFC 7519 expects seconds. Values > 1e10 are milliseconds.
    const now = Math.floor(Date.now() / 1000);
    const rawExp = jwtObject.getProperty(Domain.JWT.Claims.exp);
    if (typeof rawExp === 'number') {
      const exp = rawExp > 1e10 ? Math.floor(rawExp / 1000) : rawExp;
      if (now >= exp) {
        throw new PolluxError.InvalidCredentialError(
          `Credential has expired: exp ${exp} is in the past (now: ${now})`
        );
      }
    }

    // Check nbf claim (RFC 7519 §4.1.5)
    const rawNbf = jwtObject.getProperty(Domain.JWT.Claims.nbf);
    if (typeof rawNbf === 'number') {
      const nbf = rawNbf > 1e10 ? Math.floor(rawNbf / 1000) : rawNbf;
      if (now < nbf) {
        throw new PolluxError.InvalidCredentialError(
          `Credential is not yet valid: nbf ${nbf} is in the future (now: ${now})`
        );
      }
    }

    const kidHeader = jwtObject.core.jwt?.header?.kid;
    const methods = notNil(kidHeader)
      ? verificationMethods.filter(x => x.id === kidHeader)
      : verificationMethods;

    //Try verifying using any of the keys
    for (const verificationMethod of methods) {
      const pk = await this.runTask(new PKInstance({ verificationMethod }));

      if (pk && pk.canVerify()) {
        const sdjwt = new SDJwtVcInstance(this.getPKConfig(pk));
        try {
          await sdjwt.verify(
            options.jws,
            options.requiredClaimKeys,
            options.requiredKeyBindings ?? false
          );
          return true;
        } catch (err) {
          // Only swallow signature verification errors — rethrow unexpected ones
          if (err instanceof PolluxError.InvalidCredentialError) {
            throw err;
          }
          // Signature verification failed with this key, try next method
          continue;
        }
      }
    }

    return false;
  }

  async createPresentationFor<T extends SdJwtVcPayload>(options: {
    jws: string,
    privateKey: Domain.PrivateKey,
    presentationFrame?: PresentationFrame<T>;
  }) {
    const sdjwt = new SDJwtVcInstance(this.getSKConfig(options.privateKey));
    return sdjwt.present<T>(options.jws, options.presentationFrame);
  }

  async reveal(
    disclosedPayload: Record<string, unknown>,
    disclosures: Disclosure[]
  ) {
    return getClaimsSync(
      disclosedPayload,
      disclosures,
      defaultHashConfig.hasher
    )
  }

  public getPKConfig(publicKey: Domain.PublicKey): SDJWTVCConfig {
    return {
      hashAlg: defaultHashConfig.hasherAlg.toLocaleLowerCase(),
      hasher: defaultHashConfig.hasher,
      signAlg: publicKey.alg.toLocaleLowerCase(),
      verifier: async (data: string | Uint8Array, signatureEncoded: string) => {
        if (!publicKey.canVerify()) {
          throw new PolluxError.InvalidCredentialError("Cannot verify with this key: key does not support verification");
        }
        const signature = Buffer.from(base64url.baseDecode(signatureEncoded));
        return publicKey.verify(Buffer.from(data), signature)
      },
      saltGenerator: (length: number) => this.saltGenerator(length)
    };
  }


  private saltGenerator(length: number): string {
    function randomBytes(bytes: Uint8Array): Uint8Array {
      if (crypto && typeof crypto.getRandomValues === 'function') {
        return crypto.getRandomValues(bytes);
      }
      throw new PolluxError.InvalidCredentialError('crypto.getRandomValues must be defined');
    }
    if (length <= 0) {
      return '';
    }
    const array = randomBytes(new Uint8Array(length / 2));
    const salt = Array.from(array, (byte) =>
      byte.toString(16).padStart(2, '0'),
    ).join('');
    return salt;
  }

  public getSKConfig(privateKey: Domain.PrivateKey): SDJWTVCConfig {
    return {
      hashAlg: defaultHashConfig.hasherAlg.toLocaleLowerCase(),
      hasher: defaultHashConfig.hasher,
      signAlg: privateKey.alg.toLocaleLowerCase(),
      signer: async (data: string | Uint8Array) => {
        if (!privateKey.isSignable()) {
          throw new PolluxError.InvalidCredentialError("Cannot sign with this key: key does not support signing");
        }
        const signature = privateKey.sign(Buffer.from(data));
        const signatureEncoded = base64url.baseEncode(signature);
        return signatureEncoded
      },
      saltGenerator: (length: number) => this.saltGenerator(length)
    };
  }
}
