import { vi, describe, expect, test, beforeEach, afterEach } from 'vitest';
import { Task } from "../../../src/utils/tasks";
import { FetchAuthServerMeta } from "../../../src/plugins/internal/oidc";
import { ApiResponse } from '../../../src/domain';
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

  describe("FetchAuthServerMeta", () => {
    test("returns ApiResponse for Authorization Server Metadata", async () => {
      vi.spyOn(ctx.Api, "request").mockResolvedValue(new ApiResponse(Fixtures.OIDC.authMeta, 200));

      const serverUri = "http://test/uri";
      const task = new FetchAuthServerMeta({ serverUri });
      const result = await ctx.run(task);

      expect(result).to.be.instanceOf(ApiResponse);
      expect(result.body).to.eq(Fixtures.OIDC.authMeta);
    });

    test("algorithm - oidc - openid-configuration endpoint", async () => {
      const stubRequest = vi.spyOn(ctx.Api, "request").mockResolvedValue(new ApiResponse(Fixtures.OIDC.authMeta, 200));

      const serverUri = "http://test/uri";
      const task = new FetchAuthServerMeta({ serverUri, algorithm: "oidc" });
      await ctx.run(task);

      expect(stubRequest).toHaveBeenCalledOnce();
      const args = stubRequest.mock.calls[0];
      expect(args[0]).to.eq(`GET`);
      expect(args[1]).to.eq(`${serverUri}/.well-known/openid-configuration`);
    });

    test("algorithm - oauth2 - oauth-authorization-server endpoint", async () => {
      const stubRequest = vi.spyOn(ctx.Api, "request").mockResolvedValue(new ApiResponse(Fixtures.OIDC.authMeta, 200));

      const serverUri = "http://testuri";
      const task = new FetchAuthServerMeta({ serverUri, algorithm: "oauth2" });
      await ctx.run(task);

      expect(stubRequest).toHaveBeenCalledOnce();
      const args = stubRequest.mock.calls[0];
      expect(args[0]).to.eq(`GET`);
      expect(args[1]).to.eq(`${serverUri}/.well-known/oauth-authorization-server`);
    });

    describe("Errors", () => {
      test("invalid serverUri - non http(s) - throws", async () => {
        const task = new FetchAuthServerMeta({ serverUri: "qwerty://bad/uri" });
        await expect(ctx.run(task)).rejects.toThrow();
      });

      test("invalid algorithm - throws", async () => {
        const task = new FetchAuthServerMeta({ serverUri: "http://testuri", algorithm: "notmatched" });
        await expect(ctx.run(task)).rejects.toThrow();
      });

      test("invalid response - non 200 status - throws", async () => {
        vi.spyOn(ctx.Api, "request").mockResolvedValue(new ApiResponse(Fixtures.OIDC.authMeta, 400));

        const task = new FetchAuthServerMeta({ serverUri: "http://test/uri" });
        await expect(ctx.run(task)).rejects.toThrow();
      });

      test("invalid response - metadata fails validation - throws", async () => {
        vi.spyOn(ctx.Api, "request").mockResolvedValue(new ApiResponse({}, 200));

        const task = new FetchAuthServerMeta({ serverUri: "http://test/uri" });
        await expect(ctx.run(task)).rejects.toThrow();
      });
    });
  });
});
