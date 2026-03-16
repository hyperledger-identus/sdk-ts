import { type DerivableKey } from "./DerivableKey";
import { KeyProperties } from "../KeyProperties";
import { type SignableKey } from "./SignableKey";
import { type StorableKey } from "./StorableKey";
import { type VerifiableKey } from "./VerifiableKey";
import { Curve } from "./Curve";
import { type KeyTypes } from "./KeyTypes";
import { type ExportableKey } from "./exportable";
import { JWT_ALG } from "../VerifiableCredential";

export abstract class Key {
  abstract type: KeyTypes;
  abstract keySpecification: Map<KeyProperties | string, string>;
  abstract size: number;
  abstract raw: Uint8Array;
  abstract to: ExportableKey.Common["to"];

  abstract getEncoded(): Uint8Array;

  get curve() {
     
    return this.getProperty(KeyProperties.curve)!;
  }

  get alg(): JWT_ALG {
    const curve = this.getProperty(KeyProperties.curve);

    if (curve === Curve.SECP256K1) {
      return JWT_ALG.ES256K;
    }
    if (curve === Curve.ED25519 || curve === Curve.X25519) {
      return JWT_ALG.EdDSA;
    }
    return JWT_ALG.unknown;
  }

  isDerivable(): this is DerivableKey {
    return "derive" in this;
  }

  isExportable(): this is ExportableKey {
    return "JWK" in this.to && "PEM" in this.to;
  }

  isSignable(): this is SignableKey {
    return "sign" in this;
  }

  isStorable(): this is StorableKey {
    return "recoveryId" in this;
  }

  canVerify(): this is VerifiableKey {
    return "verify" in this;
  }

  getProperty(name: string) {
    return this.keySpecification.get(name);
  }

  isCurve<T>(curve: string): this is T {
    const keyCurve = this.keySpecification.get(KeyProperties.curve);
    return keyCurve === curve || keyCurve?.toLocaleLowerCase() === curve.toLowerCase();
  }
}
