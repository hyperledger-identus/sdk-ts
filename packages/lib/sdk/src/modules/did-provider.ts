import * as Domain from '@hyperledger/identus-domain';
import { Apollo } from '../apollo';
import { Castor } from '../castor';

export interface DIDCreateOptions {
  label?: string;
  seed?: string;
}

export interface DIDCreateResult {
  did: string;
  shortFormDid: string;
  privateKeyHex: string;
}

/**
 * Create a PRISM DID using the Edge Agent SDK.
 * Suitable for offline-first, browser-based scenarios.
 * 
 * @param options - Configuration for DID creation (optional seed for determinism)
 * @returns DID result with full form, short form, and private key hex
 * @example
 * const result = await createPrismDID();
 * console.log('DID:', result.did);
 */
export async function createPrismDID(
  options: DIDCreateOptions = {}
): Promise<DIDCreateResult> {
  const apollo = new Apollo();
  const castor = new Castor(apollo);

  // Generate seed (deterministic if provided, random otherwise)
  const seedBytes = options.seed
    ? new TextEncoder().encode(options.seed)
    : apollo.createRandomSeed().seed.value;

  const masterSK = apollo.createPrivateKey({
    [Domain.KeyProperties.curve]: Domain.Curve.SECP256K1,
    [Domain.KeyProperties.seed]: seedBytes,
    [Domain.KeyProperties.derivationPath]: Domain.PrismDerivationPath.init(0, Domain.PrismDIDKeyUsage.MASTER_KEY).toString(),
    [Domain.KeyProperties.derivationSchema]: Domain.PrismDerivationPathSchema,
  });

  const authSK = apollo.createPrivateKey({
    [Domain.KeyProperties.curve]: Domain.Curve.ED25519,
    [Domain.KeyProperties.seed]: seedBytes,
    [Domain.KeyProperties.derivationPath]: Domain.PrismDerivationPath.init(0, Domain.PrismDIDKeyUsage.ISSUING_KEY).toString(),
    [Domain.KeyProperties.derivationSchema]: Domain.PrismDerivationPathSchema,
  });

  // Create PRISM DID using the same pattern as the SDK's edge-agent flow
  const didObj = await castor.createDID('prism', {
    keys: {
      MASTER_KEY: masterSK,
      AUTHENTICATION_KEY: [authSK],
    },
  });
  const did = didObj.toString();
  const shortFormDid = did.split(':').slice(0, 3).join(':');

  return {
    did,
    shortFormDid,
    // Prefer a hex encoding of the private key bytes. Use getEncoded() when
    // available (returns Buffer), otherwise fall back to the raw bytes if
    // exposed. As a last resort, serialize to string.
    privateKeyHex: (() => {
      try {
        // prefer getEncoded() -> Buffer
        if (typeof (masterSK as any).getEncoded === 'function') {
          const enc = (masterSK as any).getEncoded();
          return Buffer.from(enc).toString('hex');
        }
        if ((masterSK as any).raw) {
          return Buffer.from((masterSK as any).raw).toString('hex');
        }
      } catch (e) {
        // fall through
      }
      return String((masterSK as any).toString?.() || '');
    })(),
  };
}

export default createPrismDID;
