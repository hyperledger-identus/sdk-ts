import { JWTPayload, Signer, createJWT } from "did-jwt";
import { base64url } from "multiformats/bases/base64";
import { Curve, DID, PrivateKey } from "..";
import { asJsonObj, isNil } from "../../utils/guards";
// ??? shouldnt be importing Pollux error
import { InvalidJWTString } from "../models/errors/Pollux";

export namespace JWT {
  export interface Header {
    typ: string;
    alg: string;
    [key: string]: any;
  }

  export type Payload = JWTPayload;

  export interface DecodedObj {
    header: Header;
    payload: Payload;
    signature: string;
    data: string;
  }


  /**
   * Creates a signed JWT 
   * 
   * @param issuer 
   * @param privateKey 
   * @param payload 
   * @returns 
   */
  export const sign = async (
    issuer: DID,
    privateKey: PrivateKey,
    payload: Partial<Payload>,
    header?: Partial<Header>
  ): Promise<string> => {
    if (!privateKey.isSignable()) {
      throw new Error("Key is not signable");
    }

    const signer: Signer = async (data: any) => {
      const rawSignature = privateKey.sign(Buffer.from(data));
      const signature = privateKey.curve === Curve.SECP256K1
        ? normaliseDER(rawSignature)
        : rawSignature;

      const encoded = base64url.baseEncode(signature);
      return encoded;
    };

    const jwt = await createJWT(
      payload,
      { issuer: issuer.toString(), signer },
      { alg: privateKey.alg, ...asJsonObj(header) }
    );

    return jwt;
  };

  /**
   * decode a JWT into its parts
   * 
   * @param jws 
   * @returns 
   */
  export const decode = (jws: string): DecodedObj => {
    const parts = jws.split(".");
    const headersEnc = parts.at(0);
    const payloadEnc = parts.at(1);

    if (parts.length != 3 || isNil(headersEnc) || isNil(payloadEnc)) {
      throw new InvalidJWTString();
    }

    const headers = base64url.baseDecode(headersEnc);
    const payload = base64url.baseDecode(payloadEnc);

    return {
      header: JSON.parse(Buffer.from(headers).toString()),
      payload: JSON.parse(Buffer.from(payload).toString()),
      signature: parts[2],
      data: `${headersEnc}.${payloadEnc}`,
    };
  };
}

/**
 * Fix around normalising DER signatures into their raw representation
 * @param derSignature Uint8Array
 * @returns Uint8Array
 */
function normaliseDER(derSignature: Uint8Array): Uint8Array {
  // Ensure the DER signature starts with the correct sequence header
  if (derSignature[0] !== 0x30) {
    return derSignature;
  }
  // Get the length of the sequence
  let seqLength = derSignature[1];
  let offset = 2;
  if (seqLength & 0x80) {
    const lengthBytes = seqLength & 0x7f;
    seqLength = 0;
    for (let i = 0; i < lengthBytes; i++) {
      seqLength = (seqLength << 8) | derSignature[offset++];
    }
  }

  if (derSignature[offset++] !== 0x02) {
    throw new Error('Invalid DER signature: expected integer for r');
  }

  const rLength = derSignature[offset++];
  let r = Buffer.from(derSignature.slice(offset, offset + rLength));
  offset += rLength;

  // Extract s value
  if (derSignature[offset++] !== 0x02) {
    throw new Error('Invalid DER signature: expected integer for s');
  }
  const sLength = derSignature[offset++];
  let s = Buffer.from(derSignature.slice(offset, offset + sLength));

  // Normalize r and s to 32 bytes
  if (r.length > 32) {
    r = r.slice(-32); // truncate if r is longer than 32 bytes
  } else if (r.length < 32) {
    const paddedR = Uint8Array.from(Buffer.alloc(32));
    r.copy(paddedR, 32 - r.length);
    r = Buffer.from(paddedR); // left pad with zeros if r is shorter than 32 bytes
  }

  if (s.length > 32) {
    s = s.slice(-32); // truncate if s is longer than 32 bytes
  } else if (s.length < 32) {
    const paddedS = Uint8Array.from(Buffer.alloc(32));
    s.copy(paddedS, 32 - s.length);
    s = Buffer.from(paddedS); // left pad with zeros if s is shorter than 32 bytes
  }

  // Concatenate r and s to form the raw signature
  return Uint8Array.from([...r, ...s]);
}
