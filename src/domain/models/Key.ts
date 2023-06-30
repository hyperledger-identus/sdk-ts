import { DerivableKey } from "./DerivableKey";
import { ApolloError } from "./Errors";
import { KeyProperties } from "./KeyProperties";
import { SignableKey } from "./SignableKey";
import { StorableKey } from "./StorableKey";
import { VerifiableKey } from "./VerifiableKey";
export interface KeyCurve {
  curve: Curve;
  index?: number;
}

export enum Curve {
  X25519 = "X25519",
  ED25519 = "Ed25519",
  SECP256K1 = "Secp256k1",
}

export function getKeyCurveByNameAndIndex(
  name: string,
  index?: number
): KeyCurve {
  switch (name) {
    case Curve.X25519:
      return { curve: Curve.X25519 };
    case Curve.ED25519:
      return { curve: Curve.ED25519 };
    case Curve.SECP256K1:
      return { curve: Curve.SECP256K1, index };
    default:
      throw new ApolloError.InvalidKeyCurve(name, Object.keys(Curve));
  }
}

export enum KeyTypes {
  "EC" = "EC",
  "Curve25519" = "Curve25519",
}

export abstract class Key {
  abstract type: KeyTypes;
  abstract keySpecification: Map<KeyProperties | string, string>;
  abstract size: number;
  abstract raw: Uint8Array;

  abstract getEncoded(): Uint8Array;

  isExportable(): this is StorableKey {
    return "export" in this;
  }

  isSignable(): this is SignableKey {
    return "sign" in this;
  }

  isDerivable(): this is DerivableKey {
    return "derive" in this;
  }

  canVerify(): this is VerifiableKey {
    return "verify" in this;
  }

  getProperty(name: string) {
    return this.keySpecification.get(name);
  }

  isCurve<T>(curve: string): this is T {
    const keyCurve = this.keySpecification.get(KeyProperties.curve);
    return keyCurve === curve;
  }
}
