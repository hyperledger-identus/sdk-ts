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

    test("expired credential (exp in the past) throws InvalidCredentialError", async () => {
      const { temporalClaims } = Fixtures.Credentials.SDJWT;
      const issuerDID = Domain.DID.fromString(temporalClaims.issuerDID);

      vi.spyOn(sut as any, "runTask").mockResolvedValue({
        didDocument: { verificationMethod: [{}] },
      });

      const result = sut.verify({
        jws: temporalClaims.expiredJws,
        issuerDID,
      });

      await expect(result).rejects.toThrow(Domain.PolluxError.InvalidCredentialError);
      await expect(result).rejects.toThrow(/expired/);
    });

    test("not-yet-valid credential (nbf in the future) throws InvalidCredentialError", async () => {
      const { temporalClaims } = Fixtures.Credentials.SDJWT;
      const issuerDID = Domain.DID.fromString(temporalClaims.issuerDID);

      vi.spyOn(sut as any, "runTask").mockResolvedValue({
        didDocument: { verificationMethod: [{}] },
      });

      const result = sut.verify({
        jws: temporalClaims.notYetValidJws,
        issuerDID,
      });

      await expect(result).rejects.toThrow(Domain.PolluxError.InvalidCredentialError);
      await expect(result).rejects.toThrow(/not yet valid/);
    });

    test("credential without exp/nbf proceeds to signature verification", async () => {
      const { temporalClaims } = Fixtures.Credentials.SDJWT;
      const issuerDID = Domain.DID.fromString(temporalClaims.issuerDID);

      // First call: ResolveDID → return DID doc; Second call: PKInstance → return null (no key)
      vi.spyOn(sut as any, "runTask")
        .mockResolvedValueOnce({ didDocument: { verificationMethod: [{}] } })
        .mockResolvedValueOnce(null);

      // Without exp/nbf, verify proceeds past temporal checks to signature loop
      const result = await sut.verify({
        jws: temporalClaims.validJws,
        issuerDID,
      });

      expect(result).toBe(false);
    });

    test("console.log is not called on verification failure", async () => {
      const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
      const { temporalClaims } = Fixtures.Credentials.SDJWT;
      const issuerDID = Domain.DID.fromString(temporalClaims.issuerDID);

      vi.spyOn(sut as any, "runTask")
        .mockResolvedValueOnce({ didDocument: { verificationMethod: [{}] } })
        .mockResolvedValueOnce(null);

      await sut.verify({
        jws: temporalClaims.validJws,
        issuerDID,
      });

      expect(consoleSpy).not.toHaveBeenCalled();
      consoleSpy.mockRestore();
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
});
