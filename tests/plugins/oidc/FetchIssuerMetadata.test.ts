import { vi, describe, expect, test, beforeEach, afterEach } from 'vitest';
import { Task } from "../../../src/utils/tasks";
import { ApiResponse } from "../../../src/domain";
import { ValidationError } from "../../../src/domain/models/errors/Common";
import { FetchIssuerMetadata } from "../../../src/plugins/internal/oidc/tasks";
import { TokenResponse } from "../../../src/plugins/internal/oidc/types";
import * as Fixtures from "../../fixtures";

describe("OIDC Tasks", () => {
  let ctx: Task.Context;

  beforeEach(() => {
    ctx = new Task.Context({
      Api: { request: vi.fn() }
    });
  });

  afterEach(async () => {
    vi.restoreAllMocks();
  });

  describe("fetchIssuerMetadata", () => {
    test("path appended to issuer url", async () => {
      const stubRequest = vi.spyOn(ctx.Api, "request").mockResolvedValue(new ApiResponse(Fixtures.OIDC.issuerMeta, 200));
      const uri = "http://test/issuermeta";
      const task = new FetchIssuerMetadata({ uri });
      await ctx.run(task);

      expect(stubRequest).toHaveBeenCalledWith("GET", `${uri}/.well-known/openid-credential-issuer`);
    });

    test("valid issuer metadata returned", async () => {
      vi.spyOn(ctx.Api, "request").mockResolvedValue(new ApiResponse(Fixtures.OIDC.issuerMeta, 200));
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
        vi.spyOn(ctx.Api, "request").mockResolvedValue(new ApiResponse({}, 200));
        const task = new FetchIssuerMetadata({ uri: "http://test/issuermeta" });
        const s = TokenResponse;
        let err;

        try { await ctx.run(task); }
        catch (e) { err = e; }

        expect(err).to.be.instanceOf(ValidationError);
      });
    });
  });
});
