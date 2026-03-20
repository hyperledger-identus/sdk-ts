import { AxesArray, type BaseSchema, DerivationPathBase } from "../base";
import { ApolloError } from "../../Errors";
import { DerivationAxis } from "../DerivationAxis";
// import type is erased from .d.ts — rollup-plugin-dts never sees the proto namespace
import type * as Protos from "@hyperledger/identus-protos";

/**
 * Mirrors `io.iohk.atala.prism.protos.KeyUsage` from the auto-generated
 * protobuf code. Defined locally to keep the proto namespace (which contains
 * ES `#private` fields) out of the DTS rollup graph — rollup-plugin-dts
 * cannot handle `#private` inside namespace class declarations.
 *
 * The `satisfies` clause below guarantees at compile time that every member
 * matches the proto definition — if the proto enum changes, tsc will error.
 */
export const PrismDIDKeyUsage = {
  UNKNOWN_KEY: 0,
  MASTER_KEY: 1,
  ISSUING_KEY: 2,
  KEY_AGREEMENT_KEY: 3,
  AUTHENTICATION_KEY: 4,
  REVOCATION_KEY: 5,
  CAPABILITY_INVOCATION_KEY: 6,
  CAPABILITY_DELEGATION_KEY: 7,
} as const satisfies Record<
  keyof typeof Protos.io.iohk.atala.prism.protos.KeyUsage,
  Protos.io.iohk.atala.prism.protos.KeyUsage
>;

export type PrismDIDKeyUsageType = typeof PrismDIDKeyUsage[keyof typeof PrismDIDKeyUsage];
export const PRISM_IDENTIFIER = 0x1D;
export const PRISM_WALLET_PURPOSE = PRISM_IDENTIFIER;
export const PRISM_DID_METHOD = PRISM_IDENTIFIER;
export const PrismDerivationPathSchema = "prism";

interface PrismDerivationSchema extends BaseSchema {
  walletPurpose: number;
  didMethod: number;
  didIndex: number;
  keyPurpose: number;
  keyIndex: number;
}

export class PrismDerivationPath extends DerivationPathBase<PrismDerivationSchema> {
  schema = PrismDerivationPathSchema;

  constructor(paths: number[]) {
    if (paths.length !== 5) {
      throw new ApolloError.InvalidDerivationPath("Incorrect Derivation Schema");
    }
    const [walletPurpose, didMethod, didIndex, keyPurpose, keyIndex] = paths;
    if (typeof walletPurpose === 'undefined' ||
      typeof didMethod === 'undefined' ||
      typeof didIndex === 'undefined' ||
      typeof keyPurpose === 'undefined' ||
      typeof keyIndex === 'undefined'
    ) {
      throw new ApolloError.InvalidDerivationPath("Incorrect Derivation Schema");
    }
    super({ walletPurpose, didMethod, didIndex, keyPurpose, keyIndex });
  }

  get index(): number {
    return this.keyIndex.number;
  }

  get walletPurpose() {
    return DerivationAxis.hardened(this.variables.walletPurpose);
  }

  get didMethod() {
    return DerivationAxis.hardened(this.variables.didMethod);
  }

  get didIndex() {
    return DerivationAxis.hardened(this.variables.didIndex);
  }

  get keyPurpose() {
    return DerivationAxis.hardened(this.variables.keyPurpose);
  }

  get keyIndex() {
    return DerivationAxis.hardened(this.variables.keyIndex);
  }

  static init(
    keyIndex = 0,
    keyPurpose: number = PrismDIDKeyUsage.AUTHENTICATION_KEY,
    didIndex = 0
  ): PrismDerivationPath {
    return new PrismDerivationPath([
      PRISM_WALLET_PURPOSE,
      PRISM_DID_METHOD,
      didIndex,
      keyPurpose,
      keyIndex
    ]);
  }

  toString(): string {
    return this.axes.toString();
  }

  get axes() {
    return AxesArray.from([
      this.walletPurpose,
      this.didMethod,
      this.didIndex,
      this.keyPurpose,
      this.keyIndex
    ]);
  }
}
