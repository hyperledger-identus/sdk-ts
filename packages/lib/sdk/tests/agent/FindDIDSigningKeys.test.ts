import { describe, expect, test, beforeEach, vi } from "vitest";
import { base58btc } from "multiformats/bases/base58";
import { base64url } from "multiformats/bases/base64";
import * as Domain from "@hyperledger/identus-domain";

import {
  FindSigningKeys,
  FindIssuerSigningKeys,
  FindAuthenticationSigningKeys,
  FindKeyAgreementSigningKeys,
  FindCapabilityInvocationSigningKeys,
  FindCapabilityDelegationSigningKeys,
  FindRevocationSigningKeys,
  type SigningKeyData,
} from "../../src/edge-agent/didFunctions/FindDIDSigningKeys";
import { AgentContext } from "../../src/edge-agent/Context";
import { Task } from "../../src/utils";
import * as Fixtures from "../fixtures";

const buildVerificationMethodMultibase = (
  id: string,
  privateKey: Domain.PrivateKey,
): Domain.DIDDocument.VerificationMethod => {
  const publicKey = privateKey.publicKey();
  const decoded = Uint8Array.from(publicKey.to.Buffer());
  return {
    id,
    type: "Multikey",
    controller: "did:prism:test",
    publicKeyMultibase: base58btc.encode(decoded),
  } as unknown as Domain.DIDDocument.VerificationMethod;
};

const buildVerificationMethodJWK = (
  id: string,
  privateKey: Domain.PrivateKey,
  includeY = true,
): Domain.DIDDocument.VerificationMethod => {
  const publicKey = privateKey.publicKey();
  if (!publicKey.isExportable()) {
    throw new Error("Public key is not exportable");
  }
  const jwk = publicKey.to.JWK() as any;
  const publicKeyJwk: any = {
    kty: jwk.kty,
    crv: jwk.crv,
    x: jwk.x,
  };
  if (includeY && jwk.y) {
    publicKeyJwk.y = jwk.y;
  }
  return {
    id,
    type: "JsonWebKey2020",
    controller: "did:prism:test",
    publicKeyJwk,
  } as unknown as Domain.DIDDocument.VerificationMethod;
};

const makeCtx = (overrides: {
  resolveDID?: (did: Domain.DID) => any;
  getDIDPrivateKeysByDID?: (did: Domain.DID) => Promise<Domain.PrivateKey[]>;
  getAllPrismDIDs?: () => Promise<{ did: Domain.DID; privateKey: Domain.PrivateKey }[]>;
} = {}): AgentContext => {
  const Castor = {
    resolveDID:
      overrides.resolveDID ??
      vi.fn().mockResolvedValue({ authentication: [], assertionMethod: [] }),
  } as unknown as Domain.Castor;

  const Pluto = {
    getDIDPrivateKeysByDID:
      overrides.getDIDPrivateKeysByDID ?? vi.fn().mockResolvedValue([]),
    getAllPrismDIDs: overrides.getAllPrismDIDs ?? vi.fn().mockResolvedValue([]),
  } as unknown as Domain.Pluto;

  return new Task.Context({ Castor, Pluto } as any) as AgentContext;
};

describe("FindSigningKeys", () => {
  const did = Fixtures.DIDs.prismDIDDefault;
  const secpKey = Fixtures.Keys.secp256K1.privateKey;
  const edKey = Fixtures.Keys.ed25519.privateKey;

  describe("purpose -> verification relationship", () => {
    test("AUTHENTICATION_KEY uses didDoc.authentication", async () => {
      const method = buildVerificationMethodMultibase("kid-auth", secpKey);
      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({
          authentication: [method],
          assertionMethod: [
            buildVerificationMethodMultibase("kid-assertion", edKey),
          ],
        }),
        getDIDPrivateKeysByDID: vi.fn().mockResolvedValue([secpKey, edKey]),
      });

      const result = await ctx.run(
        new FindSigningKeys({ did, purpose: "AUTHENTICATION_KEY" }),
      );

      expect(result).toHaveLength(1);
      expect(result[0].kid).toBe("kid-auth");
      expect(result[0].privateKey).toBe(secpKey);
    });

    test("ISSUING_KEY uses didDoc.assertionMethod", async () => {
      const authMethod = buildVerificationMethodMultibase("kid-auth", secpKey);
      const assertionMethod = buildVerificationMethodMultibase(
        "kid-assertion",
        edKey,
      );
      const resolveDID = vi.fn().mockResolvedValue({
        authentication: [authMethod],
        assertionMethod: [assertionMethod],
      });
      const ctx = makeCtx({
        resolveDID,
        getDIDPrivateKeysByDID: vi.fn().mockResolvedValue([secpKey, edKey]),
      });

      const result = await ctx.run(
        new FindSigningKeys({ did, purpose: "ISSUING_KEY" }),
      );

      expect(result).toHaveLength(1);
      expect(result[0].kid).toBe("kid-assertion");
      expect(result[0].privateKey).toBe(edKey);
    });

    test("unknown purpose -> empty result", async () => {
      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({
          authentication: [buildVerificationMethodMultibase("kid-auth", secpKey)],
          assertionMethod: [
            buildVerificationMethodMultibase("kid-assertion", edKey),
          ],
        }),
        getDIDPrivateKeysByDID: vi.fn().mockResolvedValue([secpKey, edKey]),
      });

      const result = await ctx.run(
        new FindSigningKeys({
          did,
          purpose: "SOMETHING_ELSE" as any,
        }),
      );

      expect(result).toEqual([]);
    });
  });

  describe("key sourcing (getKeys)", () => {
    test("uses provided args.privateKey when given", async () => {
      const method = buildVerificationMethodMultibase("kid-1", secpKey);
      const getDIDPrivateKeysByDID = vi.fn().mockResolvedValue([edKey]);
      const getAllPrismDIDs = vi.fn().mockResolvedValue([]);
      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({ authentication: [method] }),
        getDIDPrivateKeysByDID,
        getAllPrismDIDs,
      });

      const result = await ctx.run(
        new FindSigningKeys({
          did,
          privateKey: secpKey,
          purpose: "AUTHENTICATION_KEY",
        }),
      );

      expect(result).toHaveLength(1);
      expect(result[0].privateKey).toBe(secpKey);
      expect(getDIDPrivateKeysByDID).not.toHaveBeenCalled();
      expect(getAllPrismDIDs).not.toHaveBeenCalled();
    });

    test("falls back to Pluto.getDIDPrivateKeysByDID when no key arg", async () => {
      const method = buildVerificationMethodMultibase("kid-1", secpKey);
      const getDIDPrivateKeysByDID = vi.fn().mockResolvedValue([secpKey]);
      const getAllPrismDIDs = vi.fn().mockResolvedValue([]);
      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({ authentication: [method] }),
        getDIDPrivateKeysByDID,
        getAllPrismDIDs,
      });

      const result = await ctx.run(
        new FindSigningKeys({ did, purpose: "AUTHENTICATION_KEY" }),
      );

      expect(getDIDPrivateKeysByDID).toHaveBeenCalledWith(did);
      expect(getAllPrismDIDs).not.toHaveBeenCalled();
      expect(result).toHaveLength(1);
      expect(result[0].privateKey).toBe(secpKey);
    });

    test("falls back to PrismDIDs filtered by did when getDIDPrivateKeysByDID is empty", async () => {
      const method = buildVerificationMethodMultibase("kid-1", secpKey);
      const matchingPrismDID = { did, privateKey: secpKey };
      const otherDID = Fixtures.DIDs.prismDIDOnlyMaster;
      const otherPrismDID = { did: otherDID, privateKey: edKey };
      const getAllPrismDIDs = vi
        .fn()
        .mockResolvedValue([matchingPrismDID, otherPrismDID]);
      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({ authentication: [method] }),
        getDIDPrivateKeysByDID: vi.fn().mockResolvedValue([]),
        getAllPrismDIDs,
      });

      const result = await ctx.run(
        new FindSigningKeys({ did, purpose: "AUTHENTICATION_KEY" }),
      );

      expect(getAllPrismDIDs).toHaveBeenCalledOnce();
      expect(result).toHaveLength(1);
      expect(result[0].privateKey).toBe(secpKey);
    });

    test("returns empty when no keys are available from any source", async () => {
      const method = buildVerificationMethodMultibase("kid-1", secpKey);
      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({ authentication: [method] }),
        getDIDPrivateKeysByDID: vi.fn().mockResolvedValue([]),
        getAllPrismDIDs: vi.fn().mockResolvedValue([]),
      });

      const result = await ctx.run(
        new FindSigningKeys({ did, purpose: "AUTHENTICATION_KEY" }),
      );

      expect(result).toEqual([]);
    });
  });

  describe("matchKeys logic", () => {
    test("matches by publicKeyMultibase and assigns method.id as kid", async () => {
      const method = buildVerificationMethodMultibase("kid-mb", secpKey);
      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({ authentication: [method] }),
        getDIDPrivateKeysByDID: vi.fn().mockResolvedValue([secpKey, edKey]),
      });

      const result: SigningKeyData[] = await ctx.run(
        new FindSigningKeys({ did, purpose: "AUTHENTICATION_KEY" }),
      );

      expect(result).toHaveLength(1);
      expect(result[0].kid).toBe("kid-mb");
      expect(result[0].privateKey).toBe(secpKey);
      expect(result[0].publicKey).toBeDefined();
    });

    test("matches by publicKeyJwk including y coordinate", async () => {
      const method = buildVerificationMethodJWK("kid-jwk-y", secpKey, true);
      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({ authentication: [method] }),
        getDIDPrivateKeysByDID: vi.fn().mockResolvedValue([secpKey]),
      });

      const result = await ctx.run(
        new FindSigningKeys({ did, purpose: "AUTHENTICATION_KEY" }),
      );

      expect(result).toHaveLength(1);
      expect(result[0].kid).toBe("kid-jwk-y");
      expect(result[0].privateKey).toBe(secpKey);
    });

    test("matches by publicKeyJwk without y coordinate (Ed25519)", async () => {
      const method = buildVerificationMethodJWK("kid-jwk", edKey, false);
      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({ authentication: [method] }),
        getDIDPrivateKeysByDID: vi.fn().mockResolvedValue([edKey]),
      });

      const result = await ctx.run(
        new FindSigningKeys({ did, purpose: "AUTHENTICATION_KEY" }),
      );

      expect(result).toHaveLength(1);
      expect(result[0].kid).toBe("kid-jwk");
      expect(result[0].privateKey).toBe(edKey);
    });

    test("matches non-exportable keys via curve + base64url-encoded raw bytes", async () => {
      const publicKey = secpKey.publicKey();
      const decoded = Uint8Array.from(publicKey.to.Buffer());
      const encodedX = base64url.baseEncode(decoded);

      const fakePublicKey = {
        isExportable: () => false,
        curve: Domain.Curve.SECP256K1,
        to: { Buffer: () => publicKey.to.Buffer() },
      } as unknown as Domain.PublicKey;

      const fakePrivateKey = {
        publicKey: () => fakePublicKey,
      } as unknown as Domain.PrivateKey;

      const method = {
        id: "kid-non-exportable",
        type: "JsonWebKey2020",
        controller: "did:prism:test",
        publicKeyJwk: {
          kty: "EC",
          crv: Domain.Curve.SECP256K1,
          x: encodedX,
        },
      } as unknown as Domain.DIDDocument.VerificationMethod;

      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({ authentication: [method] }),
        getDIDPrivateKeysByDID: vi.fn().mockResolvedValue([fakePrivateKey]),
      });

      const result = await ctx.run(
        new FindSigningKeys({ did, purpose: "AUTHENTICATION_KEY" }),
      );

      expect(result).toHaveLength(1);
      expect(result[0].kid).toBe("kid-non-exportable");
      expect(result[0].privateKey).toBe(fakePrivateKey);
    });

    test("verification method that has neither multibase nor jwk is skipped", async () => {
      const method = {
        id: "kid-empty",
        type: "Unknown",
        controller: "did:prism:test",
      } as unknown as Domain.DIDDocument.VerificationMethod;

      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({ authentication: [method] }),
        getDIDPrivateKeysByDID: vi.fn().mockResolvedValue([secpKey]),
      });

      const result = await ctx.run(
        new FindSigningKeys({ did, purpose: "AUTHENTICATION_KEY" }),
      );

      expect(result).toEqual([]);
    });

    test("only methods that match a known key are returned", async () => {
      const matchingMethod = buildVerificationMethodMultibase(
        "kid-match",
        secpKey,
      );
      const unrelatedKey = Fixtures.Keys.x25519.privateKey;
      const unmatchedMethod = buildVerificationMethodMultibase(
        "kid-unrelated",
        unrelatedKey,
      );

      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({
          authentication: [matchingMethod, unmatchedMethod],
        }),
        getDIDPrivateKeysByDID: vi.fn().mockResolvedValue([secpKey]),
      });

      const result = await ctx.run(
        new FindSigningKeys({ did, purpose: "AUTHENTICATION_KEY" }),
      );

      expect(result).toHaveLength(1);
      expect(result[0].kid).toBe("kid-match");
    });
  });

  describe("Explicit signing key finders", () => {
    test("FindIssuerSigningKeys delegates to FindSigningKeys with ISSUING_KEY purpose", async () => {
      const authMethod = buildVerificationMethodMultibase("kid-auth", secpKey);
      const assertionMethod = buildVerificationMethodMultibase(
        "kid-assertion",
        edKey,
      );
      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({
          authentication: [authMethod],
          assertionMethod: [assertionMethod],
        }),
        getDIDPrivateKeysByDID: vi.fn().mockResolvedValue([secpKey, edKey]),
      });

      const result = await ctx.run(
        new FindIssuerSigningKeys({ did }),
      );

      expect(result).toHaveLength(1);
      expect(result[0].kid).toBe("kid-assertion");
      expect(result[0].privateKey).toBe(edKey);
    });

    test("FindAuthenticationSigningKeys delegates to FindSigningKeys with AUTHENTICATION_KEY purpose", async () => {
      const authMethod = buildVerificationMethodMultibase("kid-auth", secpKey);
      const assertionMethod = buildVerificationMethodMultibase(
        "kid-assertion",
        edKey,
      );
      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({
          authentication: [authMethod],
          assertionMethod: [assertionMethod],
        }),
        getDIDPrivateKeysByDID: vi.fn().mockResolvedValue([secpKey, edKey]),
      });

      const result = await ctx.run(
        new FindAuthenticationSigningKeys({ did }),
      );

      expect(result).toHaveLength(1);
      expect(result[0].kid).toBe("kid-auth");
      expect(result[0].privateKey).toBe(secpKey);
    });

    test("FindKeyAgreementSigningKeys delegates to FindSigningKeys with KEY_AGREEMENT_KEY purpose", async () => {
      const keyAgreementMethod = buildVerificationMethodMultibase(
        "kid-key-agreement",
        secpKey,
      );
      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({
          keyAgreement: [keyAgreementMethod],
        }),
        getDIDPrivateKeysByDID: vi.fn().mockResolvedValue([secpKey]),
      });

      const result = await ctx.run(
        new FindKeyAgreementSigningKeys({ did }),
      );

      expect(result).toHaveLength(1);
      expect(result[0].kid).toBe("kid-key-agreement");
      expect(result[0].privateKey).toBe(secpKey);
    });

    test("FindCapabilityInvocationSigningKeys delegates with CAPABILITY_INVOCATION_KEY purpose", async () => {
      const capabilityMethod = buildVerificationMethodMultibase(
        "kid-cap-invocation",
        edKey,
      );
      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({
          capabilityInvocation: [capabilityMethod],
        }),
        getDIDPrivateKeysByDID: vi.fn().mockResolvedValue([edKey]),
      });

      const result = await ctx.run(
        new FindCapabilityInvocationSigningKeys({ did }),
      );

      expect(result).toHaveLength(1);
      expect(result[0].kid).toBe("kid-cap-invocation");
      expect(result[0].privateKey).toBe(edKey);
    });

    test("FindCapabilityDelegationSigningKeys delegates with CAPABILITY_DELEGATION_KEY purpose", async () => {
      const capabilityMethod = buildVerificationMethodMultibase(
        "kid-cap-delegation",
        secpKey,
      );
      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({
          capabilityDelegation: [capabilityMethod],
        }),
        getDIDPrivateKeysByDID: vi.fn().mockResolvedValue([secpKey]),
      });

      const result = await ctx.run(
        new FindCapabilityDelegationSigningKeys({ did }),
      );

      expect(result).toHaveLength(1);
      expect(result[0].kid).toBe("kid-cap-delegation");
      expect(result[0].privateKey).toBe(secpKey);
    });

    test("FindRevocationSigningKeys delegates with REVOCATION_KEY purpose", async () => {
      const revocationMethod = buildVerificationMethodMultibase(
        "kid-revocation",
        edKey,
      );
      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({
          revocation: [revocationMethod],
        }),
        getDIDPrivateKeysByDID: vi.fn().mockResolvedValue([edKey]),
      });

      const result = await ctx.run(
        new FindRevocationSigningKeys({ did }),
      );

      expect(result).toHaveLength(1);
      expect(result[0].kid).toBe("kid-revocation");
      expect(result[0].privateKey).toBe(edKey);
    });

    test("explicit finders accept optional privateKey argument", async () => {
      const method = buildVerificationMethodMultibase("kid-auth", secpKey);
      const getDIDPrivateKeysByDID = vi.fn().mockResolvedValue([edKey]);
      const ctx = makeCtx({
        resolveDID: vi.fn().mockResolvedValue({ authentication: [method] }),
        getDIDPrivateKeysByDID,
      });

      const result = await ctx.run(
        new FindAuthenticationSigningKeys({ did, privateKey: secpKey }),
      );

      expect(result).toHaveLength(1);
      expect(result[0].privateKey).toBe(secpKey);
      expect(getDIDPrivateKeysByDID).not.toHaveBeenCalled();
    });
  });
});
