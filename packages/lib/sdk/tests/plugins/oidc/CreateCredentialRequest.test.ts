import { vi, describe, expect, test, beforeEach, afterEach } from 'vitest';
import { Task } from "../../../src/utils/tasks";
import { CreateCredentialRequest } from "../../../src/plugins/internal/oidc/tasks";
import { TokenResponse } from '../../../src/plugins/internal/oidc/types';
import { CredentialRequest } from '../../../src/plugins/internal/oidc/protocols/CredentialRequest';
import { InvalidCredentialConfigurationIds } from '../../../src/plugins/internal/oidc/errors';
import { CreatePrismDID } from '../../../src/edge-agent/didFunctions/CreatePrismDID';
import { mockTask } from "../../testFns";
import * as Fixtures from "../../fixtures";

describe("OIDC Tasks", () => {
  let ctx: Task.Context;

  beforeEach(() => {
    ctx = new Task.Context({
      JWT: { signWithDID: vi.fn() }
    });
  });

  afterEach(async () => {
    vi.restoreAllMocks();
  });

  describe("CreateCredentialRequest", () => {
    test("returns CredentialRequest with jwt proof", async () => {
      const mockedJWT = "notajwt";
      vi.spyOn(ctx.JWT, "signWithDID").mockResolvedValue(mockedJWT);
      mockTask(CreatePrismDID, Fixtures.DIDs.prismDIDDefault);

      const offer = Fixtures.OIDC.credentialOfferJson;
      const issuerMeta = Fixtures.OIDC.issuerMeta;
      const clientId = "test-123";
      const accessToken = "9182893";
      const tokenResponse: TokenResponse = {
        access_token: accessToken,
        id_token: "idt",
        c_nonce: "cn",
        token_type: "tt"
      };

      const task = new CreateCredentialRequest({ offer, issuerMeta, clientId, tokenResponse });
      const result = await ctx.run(task);

      expect(result).to.be.instanceOf(CredentialRequest);
      expect(result.method).to.eq("POST");
      // expect(result.accessToken).to.eq(accessToken);

      // expect(result.headers.get("authorization")).to.eq(`Bearer ${accessToken}`);
      expect(result.headers.get("content-type")).to.eq(`application/json`);

      const config = issuerMeta.credential_configurations_supported.StudentProfile;
      expect(result.body).toHaveProperty("format", config.format);
      expect(result.body).toHaveProperty(
        "credential_definition",
        expect.objectContaining({ type: config.credential_definition.type })
      );
      expect(result.body).toHaveProperty(
        "proof",
        expect.objectContaining({ proof_type: "jwt", jwt: mockedJWT })
      );

      expect(`${result.url.origin}${result.url.pathname}`).to.eq(issuerMeta.credential_endpoint);
    });

    test("no proof_types_supported - no proof in params", async () => {
      const mockedJWT = "notajwt";
      vi.spyOn(ctx.JWT, "signWithDID").mockResolvedValue(mockedJWT);
      vi.spyOn(CreatePrismDID.prototype, "run").mockResolvedValue(Fixtures.DIDs.prismDIDDefault);

      const offer = Fixtures.OIDC.credentialOfferJson;
      const clientId = "test-123";
      const tokenResponse: TokenResponse = {
        access_token: "9182893",
        id_token: "idt",
        c_nonce: "cn",
        token_type: "tt"
      };
      const issuerMeta = JSON.parse(JSON.stringify(Fixtures.OIDC.issuerMeta));
      issuerMeta.credential_configurations_supported.StudentProfile.proof_types_supported = {} as any;

      const task = new CreateCredentialRequest({ offer, issuerMeta, clientId, tokenResponse });
      const result = await ctx.run(task);

      expect(result.params).not.to.have.property("proof");
    });

    describe("Errors", () => {
      test("invalid offer - empty credential_configuration_ids - throws", async () => {
        const offer = JSON.parse(JSON.stringify(Fixtures.OIDC.credentialOfferJson));
        offer.credential_configuration_ids = [];

        const task = new CreateCredentialRequest({
          offer,
          issuerMeta: Fixtures.OIDC.issuerMeta,
          clientId: "asd",
          tokenResponse: {} as any
        });

        await expect(ctx.run(task)).rejects.toThrow(InvalidCredentialConfigurationIds);
      });

      test("invalid issuerMeta - credential_configurations_supported not matched - throws", async () => {
        const issuerMeta = JSON.parse(JSON.stringify(Fixtures.OIDC.issuerMeta));
        issuerMeta.credential_configurations_supported = {} as any;

        const task = new CreateCredentialRequest({
          issuerMeta,
          offer: Fixtures.OIDC.credentialOfferJson,
          clientId: "qwerty",
          tokenResponse: {} as any
        });

        await expect(ctx.run(task)).rejects.toThrow(InvalidCredentialConfigurationIds);
      });
    });
  });
});
