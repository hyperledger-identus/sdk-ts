import { describe, expect, test, beforeEach, vi, afterEach } from 'vitest';
import { base64url } from "multiformats/bases/base64";
import { SDJWT } from "../../src/pollux/utils/jwt/SDJWT";
import { Apollo, Castor, Domain } from "../../src";
import * as Fixtures from "../fixtures";
import { Task } from '../../src/utils';
import { FindSigningKeys } from '../../src/edge-agent/didFunctions/FindDIDSigningKeys';
import type { SdJwtVcPayload } from '@sd-jwt/sd-jwt-vc';

describe("Domain - SDJWT", () => {
  let sut: SDJWT;
  let apollo: Domain.Apollo;
  let castor: Domain.Castor;
  let plutoMock: Domain.Pluto;

  beforeEach(() => {
    apollo = new Apollo();
    castor = new Castor(apollo);
    plutoMock = { getDIDPrivateKeysByDID: vi.fn() } as any;
    const ctx = new Task.Context({
      Apollo: apollo,
      Castor: castor,
      Pluto: plutoMock,
      SDJWT: {
        getSKConfig: vi.fn().mockReturnValue({
          signer: vi.fn().mockResolvedValue(new Uint8Array(64)),
          verifier: vi.fn().mockResolvedValue(true),
          signAlg: 'EdDSA',
          hasher: vi.fn(),
          hashAlg: 'sha-256',
          saltGenerator: vi.fn(),
        }),
      } as any,
    });
    sut = new SDJWT().withContext(ctx) as SDJWT;
  });

  test("decode", async () => {
    const header = { a: 1 };
    const payload = { b: 2 };
    const signature = "c3";

    const b64Header = base64url.baseEncode(Buffer.from(JSON.stringify(header)));
    const b64Payload = base64url.baseEncode(Buffer.from(JSON.stringify(payload)));
    const jws = `${b64Header}.${b64Payload}.${signature}`;

    const result = sut.decode(jws);

    expect(result).to.be.an("object");
    expect(result).to.be.an("object");
    expect(result.disclosures).toEqual([]);
    expect(result.jwt).toEqual(expect.objectContaining({ header, payload, signature }));
  });

  test("decode with invalid jws - throws", async () => {
    expect(() => sut.decode(`a.b.c.d`)).toThrow();
  });

  describe("verify", () => {
    test("issuerDID resolves with no verificationMethods - throws", async () => {
      // mock ResolveDID return value
      vi.spyOn(sut as any, "runTask").mockResolvedValue({});

      const result = sut.verify({
        jws: Fixtures.Credentials.JWT.credentialPayloadEncoded,
        issuerDID: Fixtures.DIDs.peerDID1
      });

      await expect(result).rejects.toThrow(Domain.CastorError.NotPossibleToResolveDID);
    });

    test("issuerDID doesnt match jwt issuer - returns false", async () => {
      const result = sut.verify({
        jws: Fixtures.Credentials.JWT.credentialPayloadEncoded,
        issuerDID: Fixtures.DIDs.peerDID3
      });

      await expect(result).rejects.toThrow(Domain.PolluxError.InvalidCredentialError);
    });

    describe("expiration (exp)", () => {
      const issuerDID = Domain.DID.fromString("did:prism:test123");

      function buildSDJWT(payload: Record<string, unknown>): string {
        const header = { typ: "vc+sd-jwt", alg: "EdDSA" };
        const b64Header = base64url.baseEncode(Buffer.from(JSON.stringify(header)));
        const fullPayload = { iss: issuerDID.toString(), vct: "http://example.com", _sd_alg: "sha-256", ...payload };
        const b64Payload = base64url.baseEncode(Buffer.from(JSON.stringify(fullPayload)));
        return `${b64Header}.${b64Payload}.dummysig~`;
      }

      afterEach(() => {
        vi.useRealTimers();
      });

      test("SD-JWT with exp in the past - returns false", async () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date("2024-01-01T00:00:00Z"));

        vi.spyOn(sut as any, "runTask").mockResolvedValue({
          didDocument: { verificationMethod: [{}] },
        });

        const jws = buildSDJWT({ iat: 1699900000, exp: 1700000000 });
        const result = await sut.verify({ jws, issuerDID });
        expect(result).toBe(false);
      });

      test("SD-JWT with exp in the future - proceeds to signature verification", async () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date("2024-01-01T00:00:00Z"));

        vi.spyOn(sut as any, "runTask")
          .mockResolvedValueOnce({ didDocument: { verificationMethod: [{}] } })
          .mockResolvedValueOnce(null);

        const jws = buildSDJWT({ iat: 1699900000, exp: 1900000000 });
        const result = await sut.verify({ jws, issuerDID });
        expect(result).toBe(false);
      });

      test("SD-JWT without exp claim - proceeds to signature verification", async () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date("2024-01-01T00:00:00Z"));

        vi.spyOn(sut as any, "runTask")
          .mockResolvedValueOnce({ didDocument: { verificationMethod: [{}] } })
          .mockResolvedValueOnce(null);

        const jws = buildSDJWT({ iat: 1699900000 });
        const result = await sut.verify({ jws, issuerDID });
        expect(result).toBe(false);
      });

      test("SD-JWT with exp in milliseconds (future) - normalizes and proceeds", async () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date("2024-01-01T00:00:00Z"));

        vi.spyOn(sut as any, "runTask")
          .mockResolvedValueOnce({ didDocument: { verificationMethod: [{}] } })
          .mockResolvedValueOnce(null);

        const jws = buildSDJWT({ iat: 1699900000, exp: 1900000000000 });
        const result = await sut.verify({ jws, issuerDID });
        expect(result).toBe(false);
      });

      test("SD-JWT with exp in milliseconds (past) - normalizes and rejects", async () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date("2024-01-01T00:00:00Z"));

        vi.spyOn(sut as any, "runTask").mockResolvedValue({
          didDocument: { verificationMethod: [{}] },
        });

        const jws = buildSDJWT({ iat: 1699900000, exp: 1700000000000 });
        const result = await sut.verify({ jws, issuerDID });
        expect(result).toBe(false);
      });
    });

    describe("not-before (nbf)", () => {
      const issuerDID = Domain.DID.fromString("did:prism:test123");

      function buildSDJWT(payload: Record<string, unknown>): string {
        const header = { typ: "vc+sd-jwt", alg: "EdDSA" };
        const b64Header = base64url.baseEncode(Buffer.from(JSON.stringify(header)));
        const fullPayload = { iss: issuerDID.toString(), vct: "http://example.com", _sd_alg: "sha-256", ...payload };
        const b64Payload = base64url.baseEncode(Buffer.from(JSON.stringify(fullPayload)));
        return `${b64Header}.${b64Payload}.dummysig~`;
      }

      afterEach(() => {
        vi.useRealTimers();
      });

      test("SD-JWT with nbf in the future - returns false", async () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date("2024-01-01T00:00:00Z"));

        vi.spyOn(sut as any, "runTask").mockResolvedValue({
          didDocument: { verificationMethod: [{}] },
        });

        const jws = buildSDJWT({ iat: 1699900000, nbf: 1900000000 });
        const result = await sut.verify({ jws, issuerDID });
        expect(result).toBe(false);
      });

      test("SD-JWT with nbf in the past - proceeds to signature verification", async () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date("2024-01-01T00:00:00Z"));

        vi.spyOn(sut as any, "runTask")
          .mockResolvedValueOnce({ didDocument: { verificationMethod: [{}] } })
          .mockResolvedValueOnce(null);

        const jws = buildSDJWT({ iat: 1699900000, nbf: 1699900000 });
        const result = await sut.verify({ jws, issuerDID });
        expect(result).toBe(false);
      });

      test("SD-JWT without nbf claim - proceeds to signature verification", async () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date("2024-01-01T00:00:00Z"));

        vi.spyOn(sut as any, "runTask")
          .mockResolvedValueOnce({ didDocument: { verificationMethod: [{}] } })
          .mockResolvedValueOnce(null);

        const jws = buildSDJWT({ iat: 1699900000 });
        const result = await sut.verify({ jws, issuerDID });
        expect(result).toBe(false);
      });
    });

  });

  describe("purpose", () => {
    let findSigningKeysSpy: any;

    const minimalPayload: SdJwtVcPayload = {
      iss: Fixtures.DIDs.prismDIDDefault.toString(),
      vct: "TestCredential",
      iat: Math.floor(Date.now() / 1000),
    };

    beforeEach(() => {
      findSigningKeysSpy = vi.spyOn(FindSigningKeys.prototype, "run");
      findSigningKeysSpy.mockResolvedValue([{
        kid: "key-1",
        publicKey: Fixtures.Keys.secp256K1.publicKey,
        privateKey: Fixtures.Keys.secp256K1.privateKey,
      }]);
    });

    afterEach(() => {
      findSigningKeysSpy.mockRestore();
    });

    test("no purpose given - defaults to ISSUING_KEY", async () => {
      await sut.sign({
        issuerDID: Fixtures.DIDs.prismDIDDefault,
        payload: minimalPayload,
        disclosureFrame: {},
        privateKey: Fixtures.Keys.secp256K1.privateKey,
      });

      expect(findSigningKeysSpy).toHaveBeenCalledOnce();
      const instance = findSigningKeysSpy.mock.instances[0] as any;
      expect(instance.args.purpose).toBe("ISSUING_KEY");
    });

    test("explicit ISSUING_KEY purpose", async () => {
      await sut.sign({
        issuerDID: Fixtures.DIDs.prismDIDDefault,
        payload: minimalPayload,
        disclosureFrame: {},
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        purpose: "ISSUING_KEY",
      });

      expect(findSigningKeysSpy).toHaveBeenCalledOnce();
      const instance = findSigningKeysSpy.mock.instances[0] as any;
      expect(instance.args.purpose).toBe("ISSUING_KEY");
    });

    test("explicit AUTHENTICATION_KEY purpose", async () => {
      await sut.sign({
        issuerDID: Fixtures.DIDs.prismDIDDefault,
        payload: minimalPayload,
        disclosureFrame: {},
        privateKey: Fixtures.Keys.secp256K1.privateKey,
        purpose: "AUTHENTICATION_KEY",
      });

      expect(findSigningKeysSpy).toHaveBeenCalledOnce();
      const instance = findSigningKeysSpy.mock.instances[0] as any;
      expect(instance.args.purpose).toBe("AUTHENTICATION_KEY");
    });
  });

  // Regression: `signAlg` and `hashAlg` returned by getSKConfig/getPKConfig
  // must be spec-compliant values - they land verbatim in the SD-JWT header
  // (`alg`) and the `_sd_alg` claim respectively.
  // - signAlg: RFC 7518 / RFC 8037 (`EdDSA`, `ES256K`) - case sensitive.
  // - hashAlg: IANA Hash Function Algorithm Names (`sha-256`) - lowercase + dash.
  describe("config alg", () => {
    let plain: SDJWT;

    beforeEach(() => {
      plain = new SDJWT();
    });

    test("getSKConfig - Ed25519 - signAlg is EdDSA", () => {
      const config = plain.getSKConfig(Fixtures.Keys.ed25519.privateKey);

      expect(config.signAlg).to.eq(Domain.JWT_ALG.EdDSA);
      expect(config.signAlg).to.eq("EdDSA");
      expect(config.signAlg).not.to.eq("eddsa");
    });

    test("getSKConfig - Secp256k1 - signAlg is ES256K", () => {
      const config = plain.getSKConfig(Fixtures.Keys.secp256K1.privateKey);

      expect(config.signAlg).to.eq(Domain.JWT_ALG.ES256K);
      expect(config.signAlg).to.eq("ES256K");
      expect(config.signAlg).not.to.eq("es256k");
    });

    test("getPKConfig - Ed25519 - signAlg is EdDSA", () => {
      const config = plain.getPKConfig(Fixtures.Keys.ed25519.publicKey);

      expect(config.signAlg).to.eq(Domain.JWT_ALG.EdDSA);
      expect(config.signAlg).to.eq("EdDSA");
      expect(config.signAlg).not.to.eq("eddsa");
    });

    test("getPKConfig - Secp256k1 - signAlg is ES256K", () => {
      const config = plain.getPKConfig(Fixtures.Keys.secp256K1.publicKey);

      expect(config.signAlg).to.eq(Domain.JWT_ALG.ES256K);
      expect(config.signAlg).to.eq("ES256K");
      expect(config.signAlg).not.to.eq("es256k");
    });

    test("getSKConfig - hashAlg is the IANA name 'sha-256'", () => {
      const config = plain.getSKConfig(Fixtures.Keys.ed25519.privateKey);

      expect(config.hashAlg).to.eq("sha-256");
      expect(config.hashAlg).not.to.eq("sha256");
      expect(config.hashAlg).not.to.eq("SHA256");
      expect(config.hashAlg).not.to.eq("SHA-256");
    });

    test("getPKConfig - hashAlg is the IANA name 'sha-256'", () => {
      const config = plain.getPKConfig(Fixtures.Keys.ed25519.publicKey);

      expect(config.hashAlg).to.eq("sha-256");
      expect(config.hashAlg).not.to.eq("sha256");
      expect(config.hashAlg).not.to.eq("SHA256");
      expect(config.hashAlg).not.to.eq("SHA-256");
    });
  });

  describe("Key Binding JWT", () => {
    let plain: SDJWT;

    beforeEach(() => {
      plain = new SDJWT();
    });

    test("getSKConfig includes kbSigner and kbSignAlg", () => {
      const config = plain.getSKConfig(Fixtures.Keys.ed25519.privateKey);

      expect(config.kbSigner).toBeDefined();
      expect(typeof config.kbSigner).toBe("function");
      expect(config.kbSignAlg).toBeDefined();
      expect(config.kbSignAlg).toBe(Fixtures.Keys.ed25519.privateKey.alg);
    });

    test("getSKConfig kbSignAlg matches signAlg", () => {
      const ed25519Config = plain.getSKConfig(Fixtures.Keys.ed25519.privateKey);
      expect(ed25519Config.kbSignAlg).toBe(ed25519Config.signAlg);

      const secp256k1Config = plain.getSKConfig(Fixtures.Keys.secp256K1.privateKey);
      expect(secp256k1Config.kbSignAlg).toBe(secp256k1Config.signAlg);
    });

    test("createPresentationFor with KB options produces KB-JWT segment", async () => {
      const privateKey = Fixtures.Keys.ed25519.privateKey;
      const issuerDID = Fixtures.DIDs.prismDIDDefault;

      // Mock FindSigningKeys for the sign() call
      const findSigningKeysSpy = vi.spyOn(
        (await import("../../src/edge-agent/didFunctions/FindDIDSigningKeys")).FindSigningKeys.prototype,
        "run"
      );
      findSigningKeysSpy.mockResolvedValue([{
        kid: "key-1",
        publicKey: Fixtures.Keys.ed25519.publicKey,
        privateKey: privateKey,
      }]);

      const payload = {
        iss: issuerDID.toString(),
        vct: "TestCredential",
        iat: Math.floor(Date.now() / 1000),
        sub: "did:prism:holder123",
        name: "Test User",
      };

      // Use sut (has full context with SDJWT) to issue
      const issued = await sut.sign({
        issuerDID,
        payload,
        disclosureFrame: { name: true } as any,
        privateKey,
      });

      // Now present with KB options using plain instance
      const presentation = await plain.createPresentationFor({
        jws: issued,
        privateKey,
        presentationFrame: {},
        kb: {
          payload: {
            nonce: "test-challenge-nonce-123",
            aud: "https://verifier.example.com",
            iat: 1700000000,
          },
        },
      });

      // SD-JWT presentation format: header.payload.signature~disclosure1~...~kb-jwt
      // The KB-JWT should be the last segment after the final ~
      expect(typeof presentation).toBe("string");
      const parts = presentation.split("~");
      const kbJwt = parts[parts.length - 1];
      expect(kbJwt).toBeTruthy();
      expect(kbJwt.split(".")).toHaveLength(3); // KB-JWT is a compact JWT

      // Decode and verify the KB-JWT header
      const [kbHeaderB64, kbPayloadB64] = kbJwt.split(".");
      const kbHeader = JSON.parse(Buffer.from(base64url.baseDecode(kbHeaderB64)).toString());
      expect(kbHeader.typ).toBe("kb+jwt");
      expect(kbHeader.alg).toBe(privateKey.alg);

      // Decode and verify the KB-JWT payload
      const kbPayload = JSON.parse(Buffer.from(base64url.baseDecode(kbPayloadB64)).toString());
      expect(kbPayload.nonce).toBe("test-challenge-nonce-123");
      expect(kbPayload.aud).toBe("https://verifier.example.com");
      expect(kbPayload.iat).toBe(1700000000);
      expect(kbPayload.sd_hash).toBeDefined();
      expect(typeof kbPayload.sd_hash).toBe("string");

      findSigningKeysSpy.mockRestore();
    });

    test("createPresentationFor without KB options produces no KB-JWT segment", async () => {
      const privateKey = Fixtures.Keys.ed25519.privateKey;
      const issuerDID = Fixtures.DIDs.prismDIDDefault;

      const findSigningKeysSpy = vi.spyOn(
        (await import("../../src/edge-agent/didFunctions/FindDIDSigningKeys")).FindSigningKeys.prototype,
        "run"
      );
      findSigningKeysSpy.mockResolvedValue([{
        kid: "key-1",
        publicKey: Fixtures.Keys.ed25519.publicKey,
        privateKey: privateKey,
      }]);

      const payload = {
        iss: issuerDID.toString(),
        vct: "TestCredential",
        iat: Math.floor(Date.now() / 1000),
        sub: "did:prism:holder123",
      };

      // Use sut (has full context) to issue
      const issued = await sut.sign({
        issuerDID,
        payload,
        disclosureFrame: {},
        privateKey,
      });

      // Present WITHOUT KB options (backward compatibility)
      const presentation = await plain.createPresentationFor({
        jws: issued,
        privateKey,
        presentationFrame: {},
      });

      // The last part after the final ~ should be empty (no KB-JWT)
      expect(typeof presentation).toBe("string");
      expect(presentation.endsWith("~")).toBe(true);

      findSigningKeysSpy.mockRestore();
    });
  });
});
