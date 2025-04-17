import { vi, describe, expect, test, beforeEach, afterEach } from 'vitest';
import { Task } from "../../../src/utils/tasks";
import { CreateAuthorizationRequest } from "../../../src/plugins/internal/oidc";
import { AuthorizationRequest } from '../../../src/plugins/internal/oidc';
import * as Fixtures from "../../fixtures";

describe("OIDC Tasks", () => {
  let ctx: Task.Context;

  beforeEach(() => {
    ctx = new Task.Context({});
  });

  afterEach(async () => {
    vi.restoreAllMocks();
  });

  describe("CreateAuthorizationRequest", () => {
    test("Required Args", async () => {
      const authServerMeta = Fixtures.OIDC.authMeta;
      const issuerMeta = Fixtures.OIDC.issuerMeta;
      const clientId = "test-123";
      const redirectUri = "http://test/redirect";

      const task = new CreateAuthorizationRequest({
        authServerMeta,
        issuerMeta,
        clientId,
        redirectUri
      });
      const result = await ctx.run(task);

      expect(result).to.be.instanceOf(AuthorizationRequest);
      expect(result.authServerMeta).to.deep.eq(authServerMeta);
      expect(result.issuerMeta).to.deep.eq(issuerMeta);
      expect(`${result.url.origin}${result.url.pathname}`).to.eq(authServerMeta.authorization_endpoint);
      expect(result.params.get("client_id")).to.eq(clientId);
      expect(result.params.get("redirect_uri")).to.eq(redirectUri);
      expect(result.params.get("response_type")).to.eq("code");
      expect(result.params.get("scope")).to.deep.eq(
        Object.keys(issuerMeta.credential_configurations_supported).join(" ")
      );
      expect(result.params.get("issuer_state")).to.be.null;
    });

    test("Optional Args - scopes - given value used", async () => {
      const scopes = ["test", "123"];
      const task = new CreateAuthorizationRequest({
        authServerMeta: Fixtures.OIDC.authMeta,
        issuerMeta: Fixtures.OIDC.issuerMeta,
        clientId: "test-123",
        redirectUri: "http://test/redirect",
        scopes
      });
      const result = await ctx.run(task);

      expect(result).to.be.instanceOf(AuthorizationRequest);
      expect(result.params.get("scope")).to.eq(scopes.join(" "));
    });

    test("Optional Args - offer - issuer_state added", async () => {
      const offer = Fixtures.OIDC.credentialOfferJson;
      const task = new CreateAuthorizationRequest({
        authServerMeta: Fixtures.OIDC.authMeta,
        issuerMeta: Fixtures.OIDC.issuerMeta,
        clientId: "test-123",
        redirectUri: "http://test/redirect",
        offer
      });
      const result = await ctx.run(task);

      expect(result).to.be.instanceOf(AuthorizationRequest);
      expect(result.params.get("issuer_state")).to.eq(offer.grants.authorization_code.issuer_state);
    });
  });
});
