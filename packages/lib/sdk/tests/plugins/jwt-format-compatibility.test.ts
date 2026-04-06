import { describe, expect, test } from 'vitest';
import { OEA } from '../../src/plugins/internal/oea/types';
import OEAPlugin from '../../src/plugins/internal/oea';
import DIFPlugin from '../../src/plugins/internal/dif';
import { PluginManager } from '../../src/plugins';

describe("JWT credential format compatibility (#444)", () => {

  describe("OEA.normalizeCredentialFormat", () => {
    test("'jwt' is normalized to 'prism/jwt'", () => {
      expect(OEA.normalizeCredentialFormat("jwt")).toBe("prism/jwt");
    });

    test("'prism/jwt' is unchanged", () => {
      expect(OEA.normalizeCredentialFormat("prism/jwt")).toBe("prism/jwt");
    });

    test("'vc+sd-jwt' is unchanged", () => {
      expect(OEA.normalizeCredentialFormat("vc+sd-jwt")).toBe("vc+sd-jwt");
    });

    test("unknown format is unchanged", () => {
      expect(OEA.normalizeCredentialFormat("some-other-format")).toBe("some-other-format");
    });
  });

  describe("OEA.JWT constant", () => {
    test("OEA.JWT equals 'jwt'", () => {
      expect(OEA.JWT).toBe("jwt");
    });

    test("OEA.PRISM_JWT equals 'prism/jwt'", () => {
      expect(OEA.PRISM_JWT).toBe("prism/jwt");
    });
  });

  describe("OEA Plugin registration", () => {
    test("'credential-issue/jwt' handler is registered", () => {
      expect(OEAPlugin.tasks.has("credential-issue/jwt")).toBe(true);
    });

    test("'credential-offer/jwt' handler is registered", () => {
      expect(OEAPlugin.tasks.has("credential-offer/jwt")).toBe(true);
    });

    test("'presentation-request/jwt' handler is registered", () => {
      expect(OEAPlugin.tasks.has("presentation-request/jwt")).toBe(true);
    });

    test("'jwt' handlers point to same tasks as 'prism/jwt'", () => {
      expect(OEAPlugin.tasks.get("credential-issue/jwt"))
        .toBe(OEAPlugin.tasks.get("credential-issue/prism/jwt"));

      expect(OEAPlugin.tasks.get("credential-offer/jwt"))
        .toBe(OEAPlugin.tasks.get("credential-offer/prism/jwt"));

      expect(OEAPlugin.tasks.get("presentation-request/jwt"))
        .toBe(OEAPlugin.tasks.get("presentation-request/prism/jwt"));
    });
  });

  describe("DIF Plugin registration", () => {
    test("'revocation-check/jwt' handler is registered", () => {
      expect(DIFPlugin.tasks.has("revocation-check/jwt")).toBe(true);
    });

    test("'jwt' revocation handler points to same task as 'prism/jwt'", () => {
      expect(DIFPlugin.tasks.get("revocation-check/jwt"))
        .toBe(DIFPlugin.tasks.get("revocation-check/prism/jwt"));
    });
  });

  describe("PluginManager.findProtocol", () => {
    let manager: PluginManager;

    test("resolves 'jwt' format for credential-issue", () => {
      manager = new PluginManager();
      manager.register(OEAPlugin);

      const handler = manager.findProtocol("credential-issue", "jwt");
      expect(handler).not.toBeNull();
    });

    test("resolves 'prism/jwt' format for credential-issue", () => {
      manager = new PluginManager();
      manager.register(OEAPlugin);

      const handler = manager.findProtocol("credential-issue", "prism/jwt");
      expect(handler).not.toBeNull();
    });

    test("'jwt' and 'prism/jwt' resolve to the same handler", () => {
      manager = new PluginManager();
      manager.register(OEAPlugin);

      const jwtHandler = manager.findProtocol("credential-issue", "jwt");
      const prismJwtHandler = manager.findProtocol("credential-issue", "prism/jwt");
      expect(jwtHandler).toBe(prismJwtHandler);
    });

    test("resolves 'jwt' format for revocation-check", () => {
      manager = new PluginManager();
      manager.register(DIFPlugin);

      const handler = manager.findProtocol("revocation-check", "jwt");
      expect(handler).not.toBeNull();
    });
  });
});
