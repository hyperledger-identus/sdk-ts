import { base64url } from "multiformats/bases/base64";
import * as Domain from "@hyperledger/identus-domain";
import { PolluxError, CastorError } from "@hyperledger/identus-domain";
import { JWTCredential } from "../../models/JWTVerifiableCredential";
import { Task, isNil } from "../../../utils";
import { CreateJWT } from "./CreateJwt";
import { ResolveDID } from "./ResolveDID";
import { PKInstance } from "../../../edge-agent/didFunctions/PKInstance";


export class JWT extends Task.Runner {
  clone() {
    return new JWT();
  }

  async decode(jws: string) {
    return Domain.JWT.decode(jws);
  }

  /**
   * Creates a signed JWT from a DID and Key
   * 
   * @param did 
   * @param payload 
   * @param header 
   * @param privateKey 
   * @param purpose which verification relationship to use for key lookup (default: "assertionMethod")
   * @returns 
   */
  signWithDID(
    did: Domain.DID,
    payload: Partial<Domain.JWT.Payload>,
    header?: Partial<Domain.JWT.Header>,
    privateKey?: Domain.PrivateKey,
    purpose?: keyof Pick<Domain.PrismDIDKeys, "AUTHENTICATION_KEY" | "ISSUING_KEY">,
  ): Promise<string> {
    return this.runTask(new CreateJWT({ did, payload, header, privateKey, purpose }));
  }

  async verify(options: {
    jws: string;
    issuerDID: Domain.DID,
    holderDID?: Domain.DID,
  }): Promise<boolean> {
    try {
      const { issuerDID, jws, holderDID } = options;
      const resolved = await this.runTask(new ResolveDID({ did: issuerDID.toString() }));
      const verificationMethods = resolved.didDocument?.verificationMethod;

      if (!verificationMethods) {
        throw new CastorError.NotPossibleToResolveDID("Invalid did document: no verification methods found");
      }

      const jwtObject = JWTCredential.fromJWS(jws);
      if (jwtObject.issuer !== issuerDID.toString()) {
        throw new PolluxError.InvalidCredentialError("JWT issuer does not match the expected DID");
      }

      if (jwtObject.isCredential && holderDID && holderDID.toString() !== jwtObject.subject) {
        throw new PolluxError.InvalidCredentialError("JWT subject (holder) does not match the expected DID");
      }

      const decoded = await this.decode(jws);

      // Verify not-before (nbf) claim per RFC 7519 Section 4.1.5
      // If nbf is present and the current time is before it, the JWT is not yet valid
      const nbf = decoded.payload.nbf;
      if (typeof nbf === "number" && Math.floor(Date.now() / 1000) < nbf) {
        return false;
      }

      for (const verificationMethod of verificationMethods) {
        try {
          const pk = await this.runTask(new PKInstance({ verificationMethod }));

          if (isNil(pk) || !pk.canVerify()) {
            throw new CastorError.InvalidKeyError("Invalid key verification method type found");
          }

          const decodedSignature = base64url.baseDecode(decoded.signature);
          const passed = pk.verify(Buffer.from(decoded.data), Buffer.from(decodedSignature));

          if (passed === true) {
            return passed;
          }
        }
        catch {
          // return false;
        }
      }

      return false;
    } catch {
      return false;
    }
  }
}
