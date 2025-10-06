import { vi, describe, expect, it, test, beforeEach, afterEach } from 'vitest';
import { base58btc } from "multiformats/bases/base58";
import Apollo from "../../src/apollo/Apollo";
import Castor from "../../src/castor/Castor";
import * as ECConfig from "../../src/domain/models/ECConfig";
import { Secp256k1PublicKey } from "../../src/apollo/utils/Secp256k1PublicKey";
import * as Fixtures from "../fixtures";
import * as Protos from "../../src/castor/protos/node_models";
import { ed25519, x25519 } from "../fixtures/keys";
import {
  Curve,
  DID,
  DIDDocument,
  KeyTypes,
} from "../../src/domain";

describe("PrismDID",
  () => {
    let apollo: Apollo;
    let castor: Castor;
    const secpDid = "did:prism:032e7383265cab026f4bdf8b903f8f78840fefc5b201ccce06fc263f7b3be5df:CskBCsYBEl0KCG1hc3Rlci0wEAFCTwoJc2VjcDI1NmsxEiD9IDIUwFTpO0oFkZbs5niSI7ZtvmDHOgG6w93jyiUI_hog2ZbGuaULlxsyr4CtdA_Es7g74e_buaDAe_mXiTQIfosSZQoQYXV0aGVudGljYXRpb24tMBAEQk8KCXNlY3AyNTZrMRIg_SAyFMBU6TtKBZGW7OZ4kiO2bb5gxzoBusPd48olCP4aINmWxrmlC5cbMq-ArXQPxLO4O-Hv27mgwHv5l4k0CH6L";
    const secpMultibase = "zSXxpYB6edvxvWxRTo3kMUoTTQVHpbNnXo2Z1AjLA78iqLdK2kVo5xw9rGg8uoEgmhxYahNur3RvV7HnaktWBqkXt";
    const ed25519Did = "did:prism:fc9fcaead407285991cdf1d27819720d8923e96274794c24977045e00b72e4c7:CqUBCqIBEl0KCG1hc3Rlci0wEAFCTwoJc2VjcDI1NmsxEiD9IDIUwFTpO0oFkZbs5niSI7ZtvmDHOgG6w93jyiUI_hog2ZbGuaULlxsyr4CtdA_Es7g74e_buaDAe_mXiTQIfosSQQoQYXV0aGVudGljYXRpb24tMBAESisKB0VkMjU1MTkSIHZuX9hnUeQWh6UcQfG0xJbxP9ICAtqeNODLMfbMCfde";
    const ed25519Multibase = "z8yJizaEga14wo4pHUDBXCnrp5A9WbFDuk5DZnPq5mCHK";
    const x25519Did = "did:prism:5911e7a69ef3d1af144fa2192190c3576ce8087e2444f93b5b6cf12a71156e5f:CqQBCqEBEl0KCG1hc3Rlci0wEAFCTwoJc2VjcDI1NmsxEiD9IDIUwFTpO0oFkZbs5niSI7ZtvmDHOgG6w93jyiUI_hog2ZbGuaULlxsyr4CtdA_Es7g74e_buaDAe_mXiTQIfosSQAoQYXV0aGVudGljYXRpb24tMBAESioKBlgyNTUxORIg_PjHefFh9H7qH3Vt7MO8VEN-F2PlWcXzdxw6LPkxEGE";
    const x25519Multibase = "zJ2VmASEaRF41F4BQSydGNi7zd5ud5YhqXxTKicPGd5FN";

    beforeEach(async () => {
      apollo = new Apollo();
      castor = new Castor(apollo);
    });

    afterEach(async () => {
      vi.restoreAllMocks();
    });

    describe("createPrismDID", () => {
      it("Should create a signed prism did AtalaObject", async () => {
        const { publicKey, privateKey } = Fixtures.Keys.secp256K1;
        const did = await castor.createPrismDID(publicKey);
        const atalaObjectBuffer = await castor.createPrismDIDAtalaObject(privateKey, did);
        const atalaObject = Protos.io.iohk.atala.prism.protos.AtalaObject.deserializeBinary(atalaObjectBuffer);

        expect(atalaObject).toHaveProperty("block_content");
        expect(atalaObject.block_content).toHaveProperty("operations");
        expect(atalaObject.block_content.operations).toHaveLength(1);
        expect(atalaObject.block_content.operations[0]).toHaveProperty("operation");
        expect(atalaObject.block_content.operations[0].operation.create_did).toHaveProperty("did_data");
        expect(atalaObject.block_content.operations[0].operation.create_did.did_data).toHaveProperty("public_keys");
        expect(atalaObject.block_content.operations[0].operation.create_did.did_data.public_keys).toHaveLength(1);
        expect(atalaObject.block_content.operations[0].operation.create_did.did_data.public_keys[0]).toHaveProperty("id");
        // expect(atalaObject.block_content.operations[0].operation.create_did.did_data.public_keys[0].id).toEqual(getUsageId(Usage.MASTER_KEY, 0));
      });
      it("Should create a prismDID from a PublicKey (SECP256K1)", async () => {
        const result = await castor.createPrismDID(Fixtures.Keys.secp256K1.publicKey, [], [Fixtures.Keys.secp256K1]);
        expect(result).not.toBeNull();
        expect(result.toString()).toEqual(secpDid);
      });

      it("Should create a prismDID from a KeyPair (SECP256K1)", async () => {
        const result = await castor.createPrismDID(Fixtures.Keys.secp256K1, [], [Fixtures.Keys.secp256K1]);
        expect(result).not.toBeNull();
        expect(result.toString()).toEqual(secpDid);
      });

      it("Should create a prismDID from a KeyPair (Ed25519)", async () => {
        const result = await castor.createPrismDID(Fixtures.Keys.secp256K1, [], [Fixtures.Keys.ed25519]);
        expect(result).not.toBeNull();
        expect(result.toString()).toEqual(ed25519Did);
      });

      it("Should create a prismDID from a KeyPair (X25519)", async () => {
        const result = await castor.createPrismDID(Fixtures.Keys.secp256K1, [], [Fixtures.Keys.x25519]);
        expect(result.toString()).toEqual(x25519Did);
      });
    });

    describe("Integration Tests", () => {
      describe("DIDDocument", () => {
        test("real example resolves correctly", async () => {
          const didStr = "did:prism:032e7383265cab026f4bdf8b903f8f78840fefc5b201ccce06fc263f7b3be5df:CskBCsYBEl0KCG1hc3Rlci0wEAFCTwoJc2VjcDI1NmsxEiD9IDIUwFTpO0oFkZbs5niSI7ZtvmDHOgG6w93jyiUI_hog2ZbGuaULlxsyr4CtdA_Es7g74e_buaDAe_mXiTQIfosSZQoQYXV0aGVudGljYXRpb24tMBAEQk8KCXNlY3AyNTZrMRIg_SAyFMBU6TtKBZGW7OZ4kiO2bb5gxzoBusPd48olCP4aINmWxrmlC5cbMq-ArXQPxLO4O-Hv27mgwHv5l4k0CH6L";
          const sut = await castor.resolveDID(didStr);

          expect(sut).toBeInstanceOf(DIDDocument);
          expect(sut.id.toString()).toEqual(didStr);
          expect(sut.coreProperties).to.be.an("array").toHaveLength(2);

          const cp0 = sut.coreProperties.at(0) as DIDDocument.VerificationMethods;
          expect(cp0).toBeInstanceOf(DIDDocument.VerificationMethods);
          expect(cp0.values).toHaveLength(2);

          const cp0v0 = cp0.values.at(0);
          expect(cp0v0).toBeInstanceOf(DIDDocument.VerificationMethod);
          expect(cp0v0?.controller).toEqual(didStr);
          expect(cp0v0?.id).toEqual(`${didStr}#master-0`);
          expect(cp0v0?.publicKeyJwk).toBeUndefined();
          expect(cp0v0?.publicKeyMultibase).toEqual("zSXxpYB6edvxvWxRTo3kMUoTTQVHpbNnXo2Z1AjLA78iqLdK2kVo5xw9rGg8uoEgmhxYahNur3RvV7HnaktWBqkXt");
          expect(cp0v0?.type).toEqual("EcdsaSecp256k1VerificationKey2019");

          const cp0v1 = cp0.values.at(1);
          expect(cp0v1).toBeInstanceOf(DIDDocument.VerificationMethod);
          expect(cp0v1?.controller).toEqual(didStr);
          expect(cp0v1?.id).toEqual(`${didStr}#authentication-0`);
          expect(cp0v1?.publicKeyJwk).toBeUndefined();
          expect(cp0v1?.publicKeyMultibase).toEqual("zSXxpYB6edvxvWxRTo3kMUoTTQVHpbNnXo2Z1AjLA78iqLdK2kVo5xw9rGg8uoEgmhxYahNur3RvV7HnaktWBqkXt");
          expect(cp0v1?.type).toEqual("EcdsaSecp256k1VerificationKey2019");

          // no services
          // const cp1 = sut.coreProperties.at(1) as Services;
          // expect(cp1).toBeInstanceOf(Services);
          // expect(cp1.values).toHaveLength(0);

          const cp1 = sut.coreProperties.at(1) as DIDDocument.Authentication;
          expect(cp1).toBeInstanceOf(DIDDocument.Authentication);
          expect(cp1.urls).to.include(`${didStr}#authentication-0`);

          const cp1vm0 = cp1.verificationMethods.at(0);
          expect(cp1vm0).toBeInstanceOf(DIDDocument.VerificationMethod);
          expect(cp1vm0?.controller).toEqual(didStr);
          expect(cp1vm0?.id).toEqual(`${didStr}#authentication-0`);
          expect(cp1vm0?.publicKeyJwk).toBeUndefined();
          expect(cp1vm0?.publicKeyMultibase).toEqual("zSXxpYB6edvxvWxRTo3kMUoTTQVHpbNnXo2Z1AjLA78iqLdK2kVo5xw9rGg8uoEgmhxYahNur3RvV7HnaktWBqkXt");
          expect(cp1vm0?.type).toEqual("EcdsaSecp256k1VerificationKey2019");
        });

        const masterKeyId = `master-0`;
        const authenticationKeyId = `authentication-0`;

        const testVerificationMethod = (sut: any, didStr: string, keyId: string, keyMultibase: string, curve: DIDDocument.VerificationMethod.Type) => {
          expect(sut).toBeInstanceOf(DIDDocument.VerificationMethod);
          expect(sut?.controller).toEqual(didStr);
          expect(sut?.id).toEqual(`${didStr}#${keyId}`);
          expect(sut?.publicKeyJwk).toBeUndefined();
          expect(sut?.publicKeyMultibase).toEqual(keyMultibase);
          expect(sut?.type).toEqual(curve);
        };

        test("master key", async () => {
          const prismDid = await castor.createPrismDID(
            Fixtures.Keys.secp256K1,
            [],
            [Fixtures.Keys.secp256K1,]
          );
          const sut = await castor.resolveDID(prismDid.toString());

          expect(sut).not.toBeNull();
          // master key correctly encoded > decoded
          expect(sut.coreProperties).to.be.an("array").toHaveLength(2);

          // no issuing keys given - so only master and authentication keys
          const verificationMethods = sut.coreProperties.at(0) as DIDDocument.VerificationMethods;
          expect(verificationMethods).toBeInstanceOf(DIDDocument.VerificationMethods);
          expect(verificationMethods.values).toHaveLength(2);

          const vm0 = verificationMethods.values.at(0);
          testVerificationMethod(vm0, secpDid, masterKeyId, secpMultibase, "EcdsaSecp256k1VerificationKey2019");

          const vm1 = verificationMethods.values.at(1);
          testVerificationMethod(vm1, secpDid, authenticationKeyId, secpMultibase, "EcdsaSecp256k1VerificationKey2019");

          // authentication key correctly encoded > decoded
          const authProp = sut.coreProperties.at(1) as DIDDocument.Authentication;
          expect(authProp).toBeInstanceOf(DIDDocument.Authentication);
          expect(authProp.urls[0]).toEqual(`${secpDid}#${authenticationKeyId}`);
          const authvm0 = authProp.verificationMethods.at(0);
          testVerificationMethod(authvm0, secpDid, authenticationKeyId, secpMultibase, "EcdsaSecp256k1VerificationKey2019");

          // no services given - so undefined
          const services = sut.coreProperties.at(2) as DIDDocument.Services;
          expect(services).toBeUndefined();
        });

        test("issuing keys", async () => {
          const expectedDid = "did:prism:4bc64000a571d546caa789e24c1ad58eb13a06ce597f475b533a164fe969ac52:CucBCuQBEl0KCG1hc3Rlci0wEAFCTwoJc2VjcDI1NmsxEiD9IDIUwFTpO0oFkZbs5niSI7ZtvmDHOgG6w93jyiUI_hog2ZbGuaULlxsyr4CtdA_Es7g74e_buaDAe_mXiTQIfosSQQoQYXV0aGVudGljYXRpb24tMBAESisKB0VkMjU1MTkSIHZuX9hnUeQWh6UcQfG0xJbxP9ICAtqeNODLMfbMCfdeEkAKEGF1dGhlbnRpY2F0aW9uLTEQBEoqCgZYMjU1MTkSIPz4x3nxYfR-6h91bezDvFRDfhdj5VnF83ccOiz5MRBh";
          const prismDid = await castor.createPrismDID(Fixtures.Keys.secp256K1, [], [ed25519, x25519]);
          const sut = await castor.resolveDID(prismDid.toString());

          expect(sut.coreProperties).to.be.an("array").toHaveLength(2);

          // 2 issuing keys given
          const verificationMethods = sut.coreProperties.at(0) as DIDDocument.VerificationMethods;
          expect(verificationMethods).toBeInstanceOf(DIDDocument.VerificationMethods);
          expect(verificationMethods.values).toHaveLength(3);

          const vm0 = verificationMethods.values.at(0);
          testVerificationMethod(vm0, expectedDid, masterKeyId, secpMultibase, "EcdsaSecp256k1VerificationKey2019");

          const vm2 = verificationMethods.values.at(1);
          testVerificationMethod(vm2, expectedDid, `authentication-0`, ed25519Multibase, "Ed25519VerificationKey2020");

          const vm3 = verificationMethods.values.at(2);
          testVerificationMethod(vm3, expectedDid, `authentication-1`, x25519Multibase, "X25519KeyAgreementKey2020");

          const authentication = sut.coreProperties.at(1) as DIDDocument.Authentication;
          expect(authentication).toBeInstanceOf(DIDDocument.Authentication);
          expect(authentication.verificationMethods).toHaveLength(2);

          const au0 = authentication.verificationMethods.at(0);
          testVerificationMethod(au0, expectedDid, `authentication-0`, ed25519Multibase, "Ed25519VerificationKey2020");

          const au1 = authentication.verificationMethods.at(1);
          testVerificationMethod(au1, expectedDid, `authentication-1`, x25519Multibase, "X25519KeyAgreementKey2020");

          // no services given - so empty
          const services = sut.coreProperties.at(2);
          expect(services).toBeUndefined();
        });
      });

      it("Should correctly create a prismDID from an existing HexKey", async () => {
        const didExample = "did:prism:4a1525a94cc3d91af5584c2335e57969c10fe945a8b665d0bdadabbfc5f6ec99:CmEKXxJdCghtYXN0ZXItMBABQk8KCXNlY3AyNTZrMRIgNLnN5hSQsJIAksjpotdFM9HGy0Is9QQjpOAGsBUIeTAaIOT59-SWscgVbukqRPyL5iSxeL5deLmHfVzNQxpUKVyn";
        const resolvedDID = await castor.resolveDID(didExample);

        const pubHex = "0434b9cde61490b0920092c8e9a2d74533d1c6cb422cf50423a4e006b015087930e4f9f7e496b1c8156ee92a44fc8be624b178be5d78b9877d5ccd431a54295ca7";
        const masterPublicKey = new Secp256k1PublicKey(Buffer.from(pubHex, "hex"));

        const createdDID = await castor.createPrismDID(masterPublicKey, []);
        const resolveCreated = await castor.resolveDID(createdDID.toString());

        const verificationMethod = resolveCreated.coreProperties.find(
          (prop): prop is DIDDocument.VerificationMethods => prop instanceof DIDDocument.VerificationMethods
        );

        const resolvedPublicKeyMultibase =
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
          verificationMethod?.values.at(0)?.publicKeyMultibase!;

        const resolvedPublicKeyBuffer = Buffer.from(
          base58btc.decode(resolvedPublicKeyMultibase)
        );

        expect(resolvedPublicKeyBuffer).to.deep.equal(masterPublicKey.raw);
        expect(resolveCreated.id.toString()).toEqual(resolvedDID.id.toString());
      });

      it("Create a PrismDID and verify a signature", async () => {
        const privateKey = apollo.createPrivateKey({
          type: KeyTypes.EC,
          curve: Curve.SECP256K1,
          seed: Buffer.from(apollo.createRandomSeed().seed.value).toString("hex"),
        });
        const publicKey = privateKey.publicKey();

        const did = await castor.createPrismDID(publicKey, []);
        const text = "The quick brown fox jumps over the lazy dog";
        const signature =
          privateKey.isSignable() && privateKey.sign(Buffer.from(text));

        expect(signature).not.toEqual(false);

        if (signature) {
          const result = await castor.verifySignature(
            did,
            Buffer.from(text),
            Buffer.from(signature)
          );
          expect(result).toEqual(true);
        }
      });

      it("Create a ED25519 PrismDID and verify a signature", async () => {

        const issuerSeed = apollo.createRandomSeed().seed;

        const sk = apollo.createPrivateKey({
          type: KeyTypes.EC,
          curve: Curve.ED25519,
          seed: Buffer.from(issuerSeed.value).toString("hex"),
        });
        const masterSk = apollo.createPrivateKey({
          type: KeyTypes.EC,
          curve: Curve.SECP256K1,
          seed: Buffer.from(issuerSeed.value).toString("hex"),
        });

        const did = await castor.createPrismDID(masterSk.publicKey(), [], [sk.publicKey()]);
        const text = "The quick brown fox jumps over the lazy dog";
        const signature =
          sk.isSignable() && sk.sign(Buffer.from(text));

        expect(signature).not.toEqual(false);

        if (signature) {
          const result = await castor.verifySignature(
            did,
            Buffer.from(text),
            Buffer.from(signature)
          );
          expect(result).toEqual(true);
        }
      });

      it("Should resolve prismDID key correctly", async () => {

        const did =
          "did:prism:2c6e089b137b566e97bf8e1c234755f9f8690194c3bc52c6431ff4bb960394b1:CtADCs0DElsKBmF1dGgtMRAEQk8KCXNlY3AyNTZrMRIgvMs2bdoiICUhwR4BGk2hip8QWzG0YUfKaOa1xDyxMNUaIHm3gJ0eaeiqadY0NFlXOcAidM1SUyupvouHKsaCr0IaEmAKC2Fzc2VydGlvbi0xEAJCTwoJc2VjcDI1NmsxEiCr03dJu2xHHYCOBKNK4JNwh3ypp2JX6-Cr8tXiI17KnBogK9A6g0btjurK8n1R2ZeACOFmZkzPs2wDUy01UtqLH4sSXAoHbWFzdGVyMBABQk8KCXNlY3AyNTZrMRIgA1ltJZ4-5OmDYoiP2ZiKg-MMDR3BfDdw-oHYCvpGZEQaIAh1R73E0DW_wi4Ng5xxkDQ77ocpSz_iiEGE9svSPxtaGjoKE2h0dHBzOi8vZm9vLmJhci5jb20SDUxpbmtlZERvbWFpbnMaFGh0dHBzOi8vZm9vLmJhci5jb20vGjgKEmh0dHBzOi8vdXBkYXRlLmNvbRINTGlua2VkRG9tYWlucxoTaHR0cHM6Ly91cGRhdGUuY29tLxo4ChJodHRwczovL3JlbW92ZS5jb20SDUxpbmtlZERvbWFpbnMaE2h0dHBzOi8vcmVtb3ZlLmNvbS8";
        const resolved = await castor.resolveDID(did);

        const verificationMethod = resolved.coreProperties.find(
          (prop): prop is DIDDocument.VerificationMethods => prop instanceof DIDDocument.VerificationMethods
        );

        const resolvedPublicKeyBase64 =
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
          verificationMethod?.values.at(0)?.publicKeyMultibase!;

        const resolvedPublicKeyBuffer = Buffer.from(
          base58btc.decode(resolvedPublicKeyBase64)
        );

        resolvedPublicKeyBuffer.length;
        expect(resolvedPublicKeyBuffer.length).toEqual(
          ECConfig.PUBLIC_KEY_BYTE_SIZE
        );
      });

      it("Should resolve prismDID (short form did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae) correctly", async () => {

        const did = "did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae";
        const resolved = await castor.resolveDID(did);

        // {
        //   "id" : "did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae",
        //   "assertionMethod" : [
        //     {
        //       "id" : "did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae#issuing0",
        //       "controller" : "did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae",
        //       "type" : "JsonWebKey2020",
        //       "publicKeyJwk" : {
        //         "kty" : "EC",
        //         "crv" : "secp256k1",
        //         "x" : "poDxfZtoOpBDtFqJmJ03_tei3ooCXrGXkJM_WUErZPM",
        //         "y" : "M6WTO1raVf2TNHO7t0IpiurajRo6k12HbJvNa2L-8sA",
        //         "kid" : "did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae#issuing0"
        //       }
        //     }
        //   ]
        // }

        const assertionMethod = resolved.coreProperties.find((prop): prop is DIDDocument.AssertionMethod => prop instanceof DIDDocument.AssertionMethod);
        expect(assertionMethod?.verificationMethods.at(0)?.id!).toEqual("did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae#issuing0");

        const pk = assertionMethod?.verificationMethods.at(0)?.publicKeyJwk!;
        expect(pk.kid).toEqual("did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae#issuing0");
        expect(pk.x).toEqual("poDxfZtoOpBDtFqJmJ03_tei3ooCXrGXkJM_WUErZPM");
      });

      it("Should parse DIDDocument from JSON correctly", async () => {
        const diddoc = DIDDocument.fromJSON(
          JSON.parse(
            `{
              "id" : "did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae",
              "assertionMethod" : [
                {
                  "id" : "did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae#issuing0",
                  "controller" : "did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae",
                  "type" : "JsonWebKey2020",
                  "publicKeyJwk" : {
                    "kty" : "EC",
                    "crv" : "secp256k1",
                    "x" : "poDxfZtoOpBDtFqJmJ03_tei3ooCXrGXkJM_WUErZPM",
                    "y" : "M6WTO1raVf2TNHO7t0IpiurajRo6k12HbJvNa2L-8sA",
                    "kid" : "did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae#issuing0"
                  }
                }
              ]
            }`
          )
        );

        const assertionMethod = diddoc.coreProperties.find((prop): prop is DIDDocument.AssertionMethod => prop instanceof DIDDocument.AssertionMethod);
        expect(assertionMethod?.verificationMethods.at(0)?.id!).toEqual("did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae#issuing0");
        const pk = assertionMethod?.verificationMethods.at(0)?.publicKeyJwk!;
        expect(pk.kid).toEqual("did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae#issuing0");
        expect(pk.x).toEqual("poDxfZtoOpBDtFqJmJ03_tei3ooCXrGXkJM_WUErZPM");
      });


      it("Method DIDDocument.cloneWithNewDID MUST replace the DID identifier correctly in the whole document", async () => {
        const diddoc = DIDDocument.fromJSON(
          JSON.parse(
            `{
              "id" : "did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae",
              "assertionMethod" : [
                {
                  "id" : "did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae#issuing0",
                  "controller" : "did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae",
                  "type" : "JsonWebKey2020",
                  "publicKeyJwk" : {
                    "kty" : "EC",
                    "crv" : "secp256k1",
                    "x" : "poDxfZtoOpBDtFqJmJ03_tei3ooCXrGXkJM_WUErZPM",
                    "y" : "M6WTO1raVf2TNHO7t0IpiurajRo6k12HbJvNa2L-8sA",
                    "kid" : "did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae#issuing0"
                  }
                }
              ]
            }`
          )
        );

        const cloneDiddoc = DIDDocument.cloneWithNewDID(diddoc, DID.fromString("did:example:test"))
        // console.log(cloneDiddoc)

        const assertionMethod = diddoc.coreProperties.find((prop): prop is DIDDocument.AssertionMethod => prop instanceof DIDDocument.AssertionMethod);
        expect(assertionMethod?.verificationMethods.at(0)?.id!).toEqual("did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae#issuing0");
        const pk = assertionMethod?.verificationMethods.at(0)?.publicKeyJwk!;
        expect(pk.kid).toEqual("did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae#issuing0");
        expect(pk.x).toEqual("poDxfZtoOpBDtFqJmJ03_tei3ooCXrGXkJM_WUErZPM");

        const clonedAssertionMethod = cloneDiddoc.coreProperties.find((prop): prop is DIDDocument.AssertionMethod => prop instanceof DIDDocument.AssertionMethod);
        expect(clonedAssertionMethod?.verificationMethods.at(0)?.id!).toEqual("did:example:test#issuing0");
        const clonedPk = clonedAssertionMethod?.verificationMethods.at(0)?.publicKeyJwk!;
        expect(clonedPk.kid).toEqual("did:example:test#issuing0");
        expect(clonedPk.x).toEqual("poDxfZtoOpBDtFqJmJ03_tei3ooCXrGXkJM_WUErZPM");
      });
    });
  });
