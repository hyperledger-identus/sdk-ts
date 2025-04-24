import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import Apollo from "../../../src/apollo/Apollo";
import Castor from "../../../src/castor/Castor";
import { Pluto } from "../../../src/pluto/Pluto";
import * as Domain from "../../../src/domain";
import { DIDCommSecretsResolver } from "../../../src/mercury/didcomm/SecretsResolver";
import { Curve } from "../../../src/domain";
import * as Fixtures from "../../fixtures";

describe("Mercury DIDComm SecretsResolver", () => {
  let apollo: Apollo;
  let castor: Castor;
  let pluto: Pluto;
  let secretsResolver: DIDCommSecretsResolver;

  beforeEach(() => {
    apollo = {
      createPrivateKey: vi.fn(),
    } as any;

    castor = {
      getEcnumbasis: (did, publicKey) => `${publicKey.curve}`,
      resolveDID: async () => ({}) as Domain.DIDDocument,
    } as any;

    pluto = {
      getAllPeerDIDs: async () => [],
    } as any;

    secretsResolver = new DIDCommSecretsResolver(apollo, castor, pluto);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("find_secrets", () => {
    it("should return matched secret", async () => {
      const did = Domain.DID.fromString("did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ");
      const secret = did.toString();
      // TODO: update when PeerDID Types are fixed
      vi.spyOn(pluto, "getAllPeerDIDs").mockResolvedValue([{ did: secret } as any]);

      const result = await secretsResolver.find_secrets([secret]);

      expect(result).to.have.lengthOf(1);
      expect(result).to.contain(secret);
    });

    it("should return matched secret - no duplicates", async () => {
      const did = Domain.DID.fromString("did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ");
      const secret = did.toString();
      vi.spyOn(pluto, "getAllPeerDIDs").mockResolvedValue([{ did: secret }, { did: secret }] as any);

      const result = await secretsResolver.find_secrets([secret]);

      expect(result).to.have.lengthOf(1);
      expect(result).to.eql([secret]);
    });

    it("should return empty array with unmatched secret", async () => {
      const did = Domain.DID.fromString("did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ");
      const secret = did.toString();
      vi.spyOn(pluto, "getAllPeerDIDs").mockResolvedValue([]);

      const result = await secretsResolver.find_secrets([secret]);

      expect(result).to.have.lengthOf(0);
    });
  });

  describe("get_secret", () => {
    it("should return matched secret", async () => {
      const did = Domain.DID.fromString("did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ");
      const secret = did.toString();
      const publicKeyJwk: Domain.JWK.OKP = {
        crv: Domain.Curve.X25519,
        kid: "kid",
        kty: "OKP",
        x: Buffer.from(new Uint8Array()).toString("base64url"),
      };
      const ecnum = "ecnum123";
      const privateKey = Fixtures.Keys.x25519.privateKey;
      const peerDid = {
        did: secret,
        curve: Curve.X25519,
        privateKeys: [
          {
            keyCurve: {
              curve: privateKey.curve
            },
            value: privateKey.getEncoded(),
          },
        ],
      } as any;

      vi.spyOn(pluto, "getAllPeerDIDs").mockResolvedValue([peerDid]);
      vi.spyOn(castor, "resolveDID").mockResolvedValue(
        new Domain.DIDDocument(did, [
          new Domain.DIDDocument.VerificationMethods([
            new Domain.DIDDocument.VerificationMethod(
              secret,
              "controller",
              "JsonWebKey2020",
              publicKeyJwk
            ),
          ]),
        ])
      );

      vi.spyOn(castor, "getEcnumbasis").mockReturnValue(ecnum);
      vi.spyOn(apollo, "createPrivateKey").mockReturnValue(privateKey);

      const result = await secretsResolver.get_secret(secret);

      expect(result).not.to.be.null;
      expect(result).to.eql({
        id: `${secret}#${ecnum}`,
        type: "JsonWebKey2020",
        privateKeyJwk: {
          crv: peerDid.curve,
          kty: "OKP",
          d: peerDid.privateKeys[0].value.toString(),
          x: publicKeyJwk.x as any,
        },
      });
    });

    it("should return null when unmatched secret", async () => {
      const did = Domain.DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
      );
      const secret = did.toString();
      vi.spyOn(pluto, "getAllPeerDIDs").mockResolvedValue([]);

      const result = await secretsResolver.get_secret(secret);

      expect(result).to.be.null;
    });
  });
});
