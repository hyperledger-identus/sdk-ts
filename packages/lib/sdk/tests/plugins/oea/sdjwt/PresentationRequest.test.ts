import { vi, describe, expect, test, beforeEach } from 'vitest';
import { Apollo, JWTCredential, Pluto, SDJWTCredential } from '../../../../src';
import { JWT, SDJWT } from "../../../../src/pollux/utils/jwt";
import { PresentationRequest } from '../../../../src/plugins/internal/oea/sdjwt';
import { Task } from '../../../../src/utils';
import { OEA } from '../../../../src/plugins/internal/oea/types';
import { AgentError, PolluxError, Castor } from '@hyperledger/identus-domain';
import * as Fixtures from "../../../fixtures";
import { randomUUID } from 'node:crypto';

const challenge = '4b47724b-72b9-4870-9997-6a123c58769f';
const domain = 'http://localhost:8085';

function makePresentationRequest(): OEA.PresentationRequest {
  return {
    options: { challenge, domain },
    presentation_definition: {
      id: randomUUID(),
      input_descriptors: [],
    },
  };
}

describe("Plugins - OEA", () => {
  let ctx: Task.Context<{
    Apollo: Apollo;
    Castor: Castor;
    Pluto: Pluto;
    JWT: JWT;
    SDJWT: SDJWT;
  }>;
  let pluto: Pluto;

  beforeEach(async () => {
    pluto = await Pluto.create({
      dbName: "test-" + randomUUID(),
      keyRestoration: new Apollo(),
    })

    ctx = new Task.Context<any>({
      Pluto: pluto,
      JWT: new JWT(),
      SDJWT: new SDJWT(),
    });
  });

  describe("SDJWT", () => {
    describe("PresentationRequest", () => {
      test("Payload returned (OEA.PRISM_SDJWT, JWS)", async () => {
        vi.spyOn(pluto, "getDIDPrivateKeysByDID").mockResolvedValue([Fixtures.Keys.ed25519.privateKey]);

        const credential = SDJWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
        const presentationRequest = makePresentationRequest();
        const result = await ctx.run(new PresentationRequest({ credential, presentationRequest }));

        expect(result.pid).toEqual(OEA.PRISM_SDJWT);
        expect(result.data).toEqual(expect.stringContaining(""));
      });

      test("KB-JWT contains nonce and aud from presentation request", async () => {
        vi.spyOn(pluto, "getDIDPrivateKeysByDID").mockResolvedValue([Fixtures.Keys.ed25519.privateKey]);

        const credential = SDJWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
        const presentationRequest = makePresentationRequest();
        const result = await ctx.run(new PresentationRequest({ credential, presentationRequest }));

        const segments = (result.data as string).split('~');
        const kbJwtSegment = segments[segments.length - 1];
        expect(kbJwtSegment).toBeTruthy();

        const [, payloadB64] = kbJwtSegment.split('.');
        const kbPayload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString());

        expect(kbPayload.nonce).toEqual(challenge);
        expect(kbPayload.aud).toEqual(domain);
        expect(kbPayload.sd_hash).toEqual(expect.any(String));
        expect(kbPayload.iat).toEqual(expect.any(Number));
      });

      test("credential not SDJWTCredential - throws", async () => {
        const credential = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
        const presentationRequest = makePresentationRequest();

        const sut = ctx.run(new PresentationRequest({ credential, presentationRequest }));

        await expect(sut).rejects.toThrow(PolluxError.InvalidPresentationProofArgs);
      });

      test("privateKey not found - throws", async () => {
        vi.spyOn(pluto, "getDIDPrivateKeysByDID").mockResolvedValue([]);
        const credential = SDJWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
        const presentationRequest = makePresentationRequest();

        const sut = ctx.run(new PresentationRequest({ credential, presentationRequest }));

        await expect(sut).rejects.toThrowError(AgentError.CannotFindDIDPrivateKey);
      });

      test("Ed25519 privateKey not found - throws", async () => {
        vi.spyOn(pluto, "getDIDPrivateKeysByDID").mockResolvedValue([Fixtures.Keys.secp256K1.privateKey]);
        const credential = SDJWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
        const presentationRequest = makePresentationRequest();

        const sut = ctx.run(new PresentationRequest({ credential, presentationRequest }));

        await expect(sut).rejects.toThrowError(AgentError.CannotFindDIDPrivateKey);
      });
    });
  });
});

