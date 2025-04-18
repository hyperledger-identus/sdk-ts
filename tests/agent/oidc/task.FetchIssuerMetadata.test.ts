import { vi, describe, it, expect, test, beforeEach } from 'vitest';
import { Task } from "../../../src/utils/tasks";
import { FetchIssuerMetadata } from "../../../src/edge-agent/oidc/tasks";
import * as Fixtures from "../../fixtures";
import { ApiResponse } from "../../../src/domain";
import { InvalidOffer } from "../../../src/edge-agent/oidc/errors";
import { OIDC } from "../../../src";
import { ValidationError } from "../../../src/domain/models/errors/Common";

describe("OIDC Tasks", () => {
  let ctx: Task.Context;

  beforeEach(() => {
    ctx = new Task.Context({
      Api: { request: vi.fn() }
    });
  });

  describe("fetchIssuerMetadata", () => {
    test("path appended to issuer url", async () => {
      const stubRequest = vi.spyOn(ctx.Api, "request").mockReturnValue(new ApiResponse(Fixtures.OIDC.issuerMeta, 200));
      const uri = "http://test/issuermeta";
      const task = new FetchIssuerMetadata({ uri });
      await ctx.run(task);

      expect(stubRequest).toBeCalledWith("GET", `${uri}/.well-known/openid-credential-issuer`);
    });

    test("valid issuer metadata returned", async () => {
      vi.spyOn(ctx.Api, "request").mockReturnValue(new ApiResponse(Fixtures.OIDC.issuerMeta, 200));
      const task = new FetchIssuerMetadata({ uri: "http://test/issuermeta" });
      const result = await ctx.run(task);

      expect(result).to.deep.eq(Fixtures.OIDC.issuerMeta);
    });

    describe("Errors", () => {
      test("invalid uri - null - throws", async () => {
        const task = new FetchIssuerMetadata({ uri: null } as any);
        let err;

        try { await ctx.run(task); }
        catch (e) { err = e; }

        expect(err).to.be.instanceOf(Error);
      });

      test("invalid uri - empty string - throws", async () => {
        const task = new FetchIssuerMetadata({ uri: "" });
        let err;

        try { await ctx.run(task); }
        catch (e) { err = e; }

        expect(err?.toString()).toEqual("TypeError: Invalid URL: ");
      });

      test("invalid issuerMeta - throws", async () => {
        vi.spyOn(ctx.Api, "request").mockReturnValue(new ApiResponse({}, 200));
        const task = new FetchIssuerMetadata({ uri: "http://test/issuermeta" });
        const s = OIDC.TokenResponseSchema;
        let err;

        try { await ctx.run(task); }
        catch (e) { err = e; }

        expect(err).to.be.instanceOf(ValidationError);
      });
    });
  });
});
