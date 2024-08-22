import { expect } from "chai";
import { base64url } from "multiformats/bases/base64";
import { JWT } from "../../src/domain";
import { Domain, Secp256k1PrivateKey } from "../../src";
import * as Fixtures from "../fixtures";

describe("Domain - JWT", () => {
  test("decode", async () => {
    const header = { a: 1 };
    const payload = { b: 2 };
    const signature = "c3";

    const b64Header = base64url.baseEncode(Buffer.from(JSON.stringify(header)));
    const b64Payload = base64url.baseEncode(Buffer.from(JSON.stringify(payload)));
    const jws = `${b64Header}.${b64Payload}.${signature}`;

    const result = await JWT.decode(jws);

    expect(result).to.be.an("object");
    expect(result.header).to.deep.eq(header);
    expect(result.payload).to.deep.eq(payload);
    expect(result.signature).to.deep.eq(signature);
  });

  test("sign - creates JWS string", async () => {
    const result = await JWT.sign(
      Fixtures.DIDs.prismDIDDefault,
      Fixtures.Keys.secp256K1.privateKey,
      { a: 1, b: 2 }
    );

    expect(result).to.be.a("string");
    expect(result.split(".")).to.have.length(3);
  });

  describe("round trip", () => {
    describe("sign > decode", () => {
      const issuerDID = Domain.DID.from('did:prism:9e93a84d492c62e03ab114e0b7a7b4a6880cd0e079f358d2196dc9c312dadb90:Co0CCooCElwKB21hc3RlcjAQAUJPCglzZWNwMjU2azESIBG7LMd7RA5-ckcPQICROrUbKx35x4aFAXjt_zIoWKAbGiD9WlLNP0Lr7JyQ7Q6uoY-m2TnygmAf8EBBTHGYzxm4exJkCg9hdXRoZW50aWNhdGlvbjAQBEJPCglzZWNwMjU2azESIBG7LMd7RA5-ckcPQICROrUbKx35x4aFAXjt_zIoWKAbGiD9WlLNP0Lr7JyQ7Q6uoY-m2TnygmAf8EBBTHGYzxm4exJECghpc3N1aW5nMBACSjYKB0VkMjU1MTkSKzh0dUVjUDRsZFhMQlV6US1YdEpDS1AwUC14QU5acV9SUnZQSDBIYXFWTjg');
      const privateKey = Secp256k1PrivateKey.from.String("8bfd5ff83034bbc004950de2b3a02cdafbbff9faebcb63640c895959a2d3da24", "hex");

      test("headers - default values", async () => {
        const jws = await JWT.sign(issuerDID, privateKey, {});
        const decoded = await JWT.decode(jws);

        expect(decoded.header).to.deep.eq({ alg: 'ES256K', typ: 'JWT' });
      });

      test("headers - default values", async () => {
        const header = { kid: "keyId" };
        const jws = await JWT.sign(issuerDID, privateKey, {}, header);
        const decoded = await JWT.decode(jws);

        expect(decoded.header).to.deep.eq({ alg: 'ES256K', typ: 'JWT', ...header });
      });

      test("payload - expected values", async () => {
        const payload = { round: "trip" };

        const jws = await JWT.sign(issuerDID, privateKey, payload);
        const decoded = await JWT.decode(jws);

        // iss added by default
        expect(decoded.payload).to.have.property("iss", issuerDID.toString());
        expect(decoded.payload).to.have.property("round", payload.round);
      });

      test("signature - verifies", async () => {
        const jws = await JWT.sign(issuerDID, privateKey, { shouldbe: true });
        const decoded = await JWT.decode(jws);
        const verified = await privateKey.publicKey().verify(
          Buffer.from(decoded.data),
          Buffer.from(base64url.baseDecode(decoded.signature))
        );

        expect(verified).to.be.true;
      });
    });
  });
});
