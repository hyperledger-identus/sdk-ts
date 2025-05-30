import { vi, describe, expect, test, beforeEach, afterEach } from 'vitest';
import { Task } from "../../../src/utils/tasks";
import { ApiResponse } from "../../../src/domain";
import { ParseCredentialOffer } from "../../../src/plugins/internal/oidc/tasks";
import { InvalidOffer } from "../../../src/plugins/internal/oidc/errors";
import * as Fixtures from "../../fixtures";

describe("OIDC Tasks", () => {
  let ctx: Task.Context;

  beforeEach(() => {
    ctx = new Task.Context<any>({
      Api: { request: vi.fn() }
    });
  });

  afterEach(async () => {
    vi.restoreAllMocks();
  });

  describe("parseCredentialOffer", () => {
    test("valid offer - json - returns offer", async () => {
      const task = new ParseCredentialOffer({ value: Fixtures.OIDC.credentialOfferJson });
      const result = await ctx.run(task);
      expect(result).to.deep.eq(Fixtures.OIDC.credentialOfferJson);
    });

    test("valid offer - urlencoded - returns offer", async () => {
      const task = new ParseCredentialOffer({ value: Fixtures.OIDC.credentialOfferQueryParam });
      const result = await ctx.run(task);
      expect(result).to.deep.eq(Fixtures.OIDC.credentialOfferJson);
    });

    test("valid offer - uri - returns offer", async () => {
      const stubRequest = vi.spyOn(ctx.Api, "request").mockResolvedValue(new ApiResponse(Fixtures.OIDC.credentialOfferJson, 200));
      const uri = "openid-credential-offer://?credential_offer_uri=http%3A%2F%2Flocalhost%2Ftestoffer";
      const task = new ParseCredentialOffer({ value: uri });
      const result = await ctx.run(task);

      expect(result).to.deep.eq(Fixtures.OIDC.credentialOfferJson);
      expect(stubRequest).toHaveBeenCalledWith("GET", "http://localhost/testoffer");
    });

    describe("Errors", () => {
      test("unhandled value - throws", async () => {
        const task = new ParseCredentialOffer({ value: null });
        let err;

        try { await ctx.run(task); }
        catch (e) { err = e; }

        expect(err).to.be.instanceOf(InvalidOffer);
      });

      test("invalid json - throws", async () => {
        const task = new ParseCredentialOffer({ value: {} });
        let err;

        try { await ctx.run(task); }
        catch (e) { err = e; }

        expect(err).to.be.instanceOf(InvalidOffer);
      });
    });
  });
});
