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
    // CreateDIDOperation now only contains master key with CompressedECKeyData and "master" label.
    // All DIDs using the same master key produce the same DID regardless of auth/issuing keys.
    const masterOnlyDid = "did:prism:7afef0efaeec5c256b662e50bed277314e4748b2d4edee833af405a26201f701:Cj4KPBI6CgZtYXN0ZXIQAUouCglzZWNwMjU2azESIQP9IDIUwFTpO0oFkZbs5niSI7ZtvmDHOgG6w93jyiUI_g";
    const secpMultibase = "zSXxpYB6edvxvWxRTo3kMUoTTQVHpbNnXo2Z1AjLA78iqLdK2kVo5xw9rGg8uoEgmhxYahNur3RvV7HnaktWBqkXt";

    // Old DID values (ECKeyData uncompressed + "master-0" key ID + all keys in CreateDID) for backward compat tests
    const legacySecpDid = "did:prism:032e7383265cab026f4bdf8b903f8f78840fefc5b201ccce06fc263f7b3be5df:CskBCsYBEl0KCG1hc3Rlci0wEAFCTwoJc2VjcDI1NmsxEiD9IDIUwFTpO0oFkZbs5niSI7ZtvmDHOgG6w93jyiUI_hog2ZbGuaULlxsyr4CtdA_Es7g74e_buaDAe_mXiTQIfosSZQoQYXV0aGVudGljYXRpb24tMBAEQk8KCXNlY3AyNTZrMRIg_SAyFMBU6TtKBZGW7OZ4kiO2bb5gxzoBusPd48olCP4aINmWxrmlC5cbMq-ArXQPxLO4O-Hv27mgwHv5l4k0CH6L";

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
        // CreateDID only contains master key; auth keys go in UpdateDID
        const result = await castor.createPrismDID(Fixtures.Keys.secp256K1.publicKey, [], [Fixtures.Keys.secp256K1]);
        expect(result).not.toBeNull();
        expect(result.toString()).toEqual(masterOnlyDid);
      });

      it("Should create a prismDID from a KeyPair (SECP256K1)", async () => {
        const result = await castor.createPrismDID(Fixtures.Keys.secp256K1, [], [Fixtures.Keys.secp256K1]);
        expect(result).not.toBeNull();
        expect(result.toString()).toEqual(masterOnlyDid);
      });

      it("Should create same DID regardless of auth key type (Ed25519)", async () => {
        // Same master key → same DID, auth keys don't affect CreateDID operation
        const result = await castor.createPrismDID(Fixtures.Keys.secp256K1, [], [Fixtures.Keys.ed25519]);
        expect(result).not.toBeNull();
        expect(result.toString()).toEqual(masterOnlyDid);
      });

      it("Should create same DID regardless of auth key type (X25519)", async () => {
        const result = await castor.createPrismDID(Fixtures.Keys.secp256K1, [], [Fixtures.Keys.x25519]);
        expect(result.toString()).toEqual(masterOnlyDid);
      });
    });

    describe("Integration Tests", () => {
      describe("DIDDocument", () => {
        test("backward compat: resolve legacy DID with ECKeyData and master-0 key ID", async () => {
          // This tests backward compatibility: resolving a DID created with old encoding
          // (ECKeyData uncompressed + "master-0" key ID) should still work correctly
          const didStr = legacySecpDid;
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

        const masterKeyId = `master`;

        const testVerificationMethod = (sut: any, didStr: string, keyId: string, keyMultibase: string, curve: DIDDocument.VerificationMethod.Type) => {
          expect(sut).toBeInstanceOf(DIDDocument.VerificationMethod);
          expect(sut?.controller).toEqual(didStr);
          expect(sut?.id).toEqual(`${didStr}#${keyId}`);
          expect(sut?.publicKeyJwk).toBeUndefined();
          expect(sut?.publicKeyMultibase).toEqual(keyMultibase);
          expect(sut?.type).toEqual(curve);
        };

        test("master key only in CreateDID operation", async () => {
          // CreateDID only includes master key — auth/issuing keys go in UpdateDID
          const prismDid = await castor.createPrismDID(
            Fixtures.Keys.secp256K1,
            [],
            [Fixtures.Keys.secp256K1,]
          );
          const sut = await castor.resolveDID(prismDid.toString());

          expect(sut).not.toBeNull();
          // Only master key in CreateDID operation
          expect(sut.coreProperties).to.be.an("array").toHaveLength(1);

          const verificationMethods = sut.coreProperties.at(0) as DIDDocument.VerificationMethods;
          expect(verificationMethods).toBeInstanceOf(DIDDocument.VerificationMethods);
          expect(verificationMethods.values).toHaveLength(1);

          const vm0 = verificationMethods.values.at(0);
          testVerificationMethod(vm0, masterOnlyDid, masterKeyId, secpMultibase, "EcdsaSecp256k1VerificationKey2019");
        });

        test("auth/issuing keys do not affect CreateDID operation hash", async () => {
          // Passing different auth keys produces the same DID (same master key → same hash)
          const did1 = await castor.createPrismDID(Fixtures.Keys.secp256K1, [], [ed25519, x25519]);
          const did2 = await castor.createPrismDID(Fixtures.Keys.secp256K1, [], [Fixtures.Keys.secp256K1]);
          const did3 = await castor.createPrismDID(Fixtures.Keys.secp256K1);

          expect(did1.toString()).toEqual(masterOnlyDid);
          expect(did2.toString()).toEqual(masterOnlyDid);
          expect(did3.toString()).toEqual(masterOnlyDid);
        });
      });

      it("Should correctly create a prismDID from an existing HexKey", async () => {
        const didExample = "did:prism:21348949d33d3a504b71d9870139373494e0e7aac69182cf2f034007d15c723b:Cj4KPBI6CgZtYXN0ZXIQAUouCglzZWNwMjU2azESIQM0uc3mFJCwkgCSyOmi10Uz0cbLQiz1BCOk4AawFQh5MA";
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

      it("Create a PrismDID and verify signature with master key (CreateDID only has master)", async () => {
        // CreateDID only contains master key — verify signature using master key
        const issuerSeed = apollo.createRandomSeed().seed;

        const masterSk = apollo.createPrivateKey({
          type: KeyTypes.EC,
          curve: Curve.SECP256K1,
          seed: Buffer.from(issuerSeed.value).toString("hex"),
        });

        const did = await castor.createPrismDID(masterSk.publicKey());
        const text = "The quick brown fox jumps over the lazy dog";
        const signature =
          masterSk.isSignable() && masterSk.sign(Buffer.from(text));

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


      it("Spec test vector: deterministic DID from mnemonic", async () => {
        // Test vector from the deterministic DID creation specification
        const mnemonic = "vacuum only object oxygen sell engine firm fiscal shiver finish village clock limit unable reject lawn hard adapt plunge between lawsuit stuff educate knock".split(" ");

        // Derive seed from mnemonic via Apollo (handles BIP-39 internally)
        const seed = apollo.createSeed(mnemonic as any, "");
        const seedHex = Buffer.from(seed.value).toString("hex");

        // Derive master key at m/29'/29'/0'/1'/0'
        const { PrismDerivationPath, PrismDIDKeyUsage: PrismKeyUsage, PrismDerivationPathSchema } = await import(
          "../../src/domain/models/derivation/schemas/PrismDerivation"
        );
        const masterKeyPath = PrismDerivationPath.init(0, PrismKeyUsage.MASTER_KEY, 0);
        const masterSK = apollo.createPrivateKey({
          type: KeyTypes.EC,
          curve: Curve.SECP256K1,
          seed: seedHex,
          derivationPath: masterKeyPath.toString(),
          derivationSchema: PrismDerivationPathSchema,
        });

        // Create DID via Castor — master-key-only CreateDID
        const did = await castor.createPrismDID(masterSK.publicKey());

        // Determinism: same mnemonic + same derivation → same DID every time
        const did2 = await castor.createPrismDID(masterSK.publicKey());
        expect(did.toString()).toEqual(did2.toString());

        // Verify the DID is a valid long-form prism DID
        expect(did.toString()).toMatch(/^did:prism:[0-9a-f]{64}:/);

        // Resolve to verify it's well-formed
        const resolved = await castor.resolveDID(did.toString());
        expect(resolved).toBeInstanceOf(DIDDocument);

        // Verify the resolved DID only contains the master key
        const verificationMethods = resolved.coreProperties.find(
          (prop): prop is DIDDocument.VerificationMethods => prop instanceof DIDDocument.VerificationMethods
        );
        expect(verificationMethods?.values).toHaveLength(1);
        expect(verificationMethods?.values.at(0)?.id).toContain("#master");
      });

      it("Spec test vector: raw seed produces expected key and deterministic DID", async () => {
        // Use the raw seed hex from the spec directly (bypassing BIP-39 passphrase handling)
        const specSeedHex = "3b32a5049f2b4e3af31ec5c1ae75fada1ad2eb8be5accf56ada343ad89eeb083208e538b3b97836e3bd7048c131421bf5bea9e3a1d25812a2d831e2bab89e058";

        const { PrismDerivationPath, PrismDIDKeyUsage: PrismKeyUsage, PrismDerivationPathSchema } = await import(
          "../../src/domain/models/derivation/schemas/PrismDerivation"
        );
        const masterKeyPath = PrismDerivationPath.init(0, PrismKeyUsage.MASTER_KEY, 0);
        const masterSK = apollo.createPrivateKey({
          type: KeyTypes.EC,
          curve: Curve.SECP256K1,
          seed: specSeedHex,
          derivationPath: masterKeyPath.toString(),
          derivationSchema: PrismDerivationPathSchema,
        });

        // Verify the derived compressed public key matches the spec test vector
        const compressedPubkey = (masterSK.publicKey() as any).getEncodedCompressed
          ? (masterSK.publicKey() as any).getEncodedCompressed()
          : masterSK.publicKey().raw;
        expect(Buffer.from(compressedPubkey).toString("hex")).toEqual(
          "023f7c75c9e5fba08fea1640d6faa3f8dc0151261d2b56026d46ddcbe1fc5a5bbb"
        );

        // Create DID — deterministic from spec seed
        const did = await castor.createPrismDID(masterSK.publicKey());

        // Verify the canonical DID (short-form hash) matches the spec test vector exactly
        const expectedCanonicalDID = "did:prism:35fbaf7f8a68e927feb89dc897f4edc24ca8d7510261829e4834d931e947e6ca";
        const parts = did.toString().split(":");
        const canonicalDID = `${parts[0]}:${parts[1]}:${parts[2]}`;
        expect(canonicalDID).toEqual(expectedCanonicalDID);

        // Verify it's deterministic
        const did2 = await castor.createPrismDID(masterSK.publicKey());
        expect(did.toString()).toEqual(did2.toString());

        // Resolve and verify structure
        const resolved = await castor.resolveDID(did.toString());
        expect(resolved).toBeInstanceOf(DIDDocument);
        const vms = resolved.coreProperties.find(
          (prop): prop is DIDDocument.VerificationMethods => prop instanceof DIDDocument.VerificationMethods
        );
        expect(vms?.values).toHaveLength(1);
        expect(vms?.values.at(0)?.id).toContain("#master");
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
