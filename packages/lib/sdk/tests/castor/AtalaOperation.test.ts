import { describe, it, beforeEach, expect } from 'vitest';
import { secp256k1 } from "@noble/curves/secp256k1";
import { SHA256 } from "@stablelib/sha256";
import { Domain } from "../../src";
import { Apollo } from "../../src/apollo";
import { Castor, UpdateActionType } from "../../src/castor";
import * as Fixtures from "../fixtures";
import * as Protos from "@hyperledger/identus-protos";
import { CastorError, PrismDIDKeyUsage, PublicKey, VerifiableKey } from '@hyperledger/identus-domain';

let apollo: Apollo;
let castor: Castor;


describe("AtalaOperation", () => {
  beforeEach(() => {
    apollo = new Apollo();
    castor = new Castor(apollo);
  });

  it("Should create a signed prism did AtalaObject", async () => {
    const { publicKey, privateKey } = Fixtures.Keys.secp256K1;

    const did = await castor.createDID('prism', {
      keys: {
        MASTER_KEY: privateKey,
      },
    });
    const atalaObjectBuffer = await castor.publishDID(
      'prism',
      {
        key: privateKey,
        did: did,
      }
    );
    const atalaObject = Protos.io.iohk.atala.prism.protos.AtalaObject.deserializeBinary(atalaObjectBuffer);
    expect(atalaObject).toHaveProperty("block_content");
    expect(atalaObject.block_content).toHaveProperty("operations");
    expect(atalaObject.block_content.operations).toHaveLength(1);
    expect(atalaObject.block_content.operations[0]).toHaveProperty("operation");
    expect(atalaObject.block_content.operations[0].operation.create_did).toHaveProperty("did_data");
    expect(atalaObject.block_content.operations[0].operation.create_did.did_data).toHaveProperty("public_keys");
    expect(atalaObject.block_content.operations[0].operation.create_did.did_data.public_keys).toHaveLength(1);
    expect(atalaObject.block_content.operations[0].operation.create_did.did_data.public_keys[0]).toHaveProperty("id");
    expect(atalaObject.block_content.operations[0].operation.create_did.did_data.public_keys[0].id).to.equal(`master-0`);
    const signedOperation = atalaObject.block_content.operations[0];
    const signature = Buffer.from(signedOperation.signature);
    const keyId = signedOperation.signed_with;
    const operation = signedOperation.operation;
    const pkProto = operation.create_did.did_data.public_keys.find((key) => {
      return key.id === keyId;
    })!;
    expect(pkProto).to.not.toBeUndefined();
    const serializedOperation = operation.serializeBinary();
    const verify = publicKey.verify(Buffer.from(serializedOperation), signature);
    expect(verify).toBe(true);
  });

  it("Should be able to verify a created AtalaObject", async () => {
    const randomSeed = apollo.createRandomSeed().seed.value;
    const masterSK = await apollo.createPrivateKey({
      type: Domain.KeyTypes.EC,
      curve: Domain.Curve.SECP256K1,
      seed: randomSeed,
    });
    const did = await castor.createDID('prism', {
      keys: {
        MASTER_KEY: masterSK,
      },
    });
    const atalaObjectBuffer = await castor.publishDID(
      'prism',
      {
        key: masterSK,
        did: did,
      }
    );
    const atalaObject = Protos.io.iohk.atala.prism.protos.AtalaObject.deserializeBinary(atalaObjectBuffer);
    expect(atalaObject).toHaveProperty("block_content");
    expect(atalaObject.block_content).toBeInstanceOf(Protos.io.iohk.atala.prism.protos.AtalaBlock);
    const atalaBlock = atalaObject.block_content;
    expect(atalaBlock).toHaveProperty("operations");
    expect(atalaBlock.operations).toBeInstanceOf(Array);
    const signedOperations = atalaBlock.operations;
    expect(signedOperations.length).toBe(1);
    const signedOperation = signedOperations[0];
    expect(signedOperation).toHaveProperty('operation');
    expect(signedOperation).toHaveProperty('signature');
    const signature = Buffer.from(signedOperation.signature);
    const keyId = signedOperation.signed_with;
    const operation = signedOperation.operation;
    const pkProto = operation.create_did.did_data.public_keys.find((key) => {
      return key.id === keyId;
    })!;
    expect(pkProto).to.not.toBeUndefined();
    const serializedOperation = operation.serializeBinary();
    const verifiableKey = masterSK.publicKey() as PublicKey & VerifiableKey;
    const verify = verifiableKey.verify(Buffer.from(serializedOperation), signature);
    expect(verify).toBe(true);
  });

  it("Should be able to recover a valid operations and verify its signatures", async () => {
    const atalaObjects = [
      [
        "22b40112b1010a086d61737465722d301240cec0520059c15b6c18197d4ac0fe",
        "2e74969787286acf4a15329061919f24ea53223cfeeaccf624df5f8a8d1874ec",
        "b619ea6c717d42cf2f432392888e6b10e0ca1a630a610a5f125d0a086d617374",
        "65722d301001424f0a09736563703235366b3112203a7c4e0a1edc7641fbae67",
        "10d3f99fd5a060d5c36a9bc6ea6342f7b72e596a241a2097503dfd1626a50c90",
        "3db9e0126e78c076eeb38d84d700e82473b77609538465"
      ],
      [
        "22bb0112b8010a086d61737465722d3012473045022100db0af9deac06669eef",
        "3842fc97c714f7438a1025ce3f6be21662be011324465b02206ca0e0d96790c4",
        "e662e534cdb5b069be2b73e4e8a434681ebc82ab28be03d89d1a630a610a5f12",
        "5d0a086d61737465722d301001424f0a09736563703235366b31122062cf8f70",
        "49e88e77440bc0a87f9028cc8bd8c01ee7443e5b7f172b04857bf9811a20f87b",
        "bc103262d192be587d86095245ed7ee7a5755299abc8ae30aa492fb3cc60"
      ],
      [
        "22b40112b1010a086d61737465722d301240c5eb814e40bea9eaa5a565578409",
        "a373bb89c3f2ae90bafdf6d790bf29a71e947f63f8ee7b9ff84fe179ca929cfe",
        "7a15467f13ddbe53288c49e6b83c1de693e71a630a610a5f125d0a086d617374",
        "65722d301001424f0a09736563703235366b311220f37ca1aae1630e0af82a06",
        "83118aa44f1218d3c3eaa992f8a7e4d86e36e7d9bf1a205a194a9bbf69090729",
        "305b3368638cf1b3cc010a12d24565c44733b1e1199b4a"
      ]
    ];

    const fromProto = (proto: Protos.io.iohk.atala.prism.protos.PublicKey) => {
      const curve = proto.compressed_ec_key_data?.curve ?? proto.ec_key_data.curve;

      if (proto.key_data === "ec_key_data") {
        return apollo.createPublicKey({
          [Domain.KeyProperties.curve]: curve,
          [Domain.KeyProperties.curvePointX]: proto.ec_key_data.x,
          [Domain.KeyProperties.curvePointY]: proto.ec_key_data.y,
        });
      }

      return apollo.createPublicKey({
        [Domain.KeyProperties.curve]: curve,
        [Domain.KeyProperties.rawKey]: proto.compressed_ec_key_data.data
      });
    };

    for (let objectHexSplit of atalaObjects) {
      const atalaObjectHex = objectHexSplit.join("");
      const atalaObjectRaw = new Uint8Array(Buffer.from(atalaObjectHex, 'hex'));
      const atalaObject = Protos.io.iohk.atala.prism.protos.AtalaObject.deserializeBinary(atalaObjectRaw);
      expect(atalaObject).toHaveProperty("block_content");
      expect(atalaObject.block_content).toBeInstanceOf(Protos.io.iohk.atala.prism.protos.AtalaBlock);
      const atalaBlock = atalaObject.block_content;
      expect(atalaBlock).toHaveProperty("operations");
      expect(atalaBlock.operations).toBeInstanceOf(Array);
      const signedOperations = atalaBlock.operations;
      expect(signedOperations.length).toBe(1);
      const signedOperation = signedOperations[0];
      expect(signedOperation).toHaveProperty('operation');
      expect(signedOperation).toHaveProperty('signature');
      const signature = Buffer.from(signedOperation.signature);
      const keyId = signedOperation.signed_with;
      const operation = signedOperation.operation;
      const pkProto = operation.create_did.did_data.public_keys.find((key) => {
        return key.id === keyId;
      })!;
      expect(pkProto).to.not.toBeUndefined();
      const serializedOperation = operation.serializeBinary();

      const masterPk = fromProto(pkProto);
      expect(masterPk.canVerify()).toBe(true);
      const verifiableKey = masterPk as PublicKey & VerifiableKey;
      const verify = verifiableKey.verify(Buffer.from(serializedOperation), signature);
      expect(verify).toBe(true);
    }
  });

  describe("update", () => {
    const { privateKey } = Fixtures.Keys.secp256K1;

    const createDid = () =>
      castor.createDID('prism', { keys: { MASTER_KEY: privateKey } });

    const deserializeUpdate = (buffer: Uint8Array) => {
      const atalaObject = Protos.io.iohk.atala.prism.protos.AtalaObject.deserializeBinary(buffer);
      const signedOperation = atalaObject.block_content.operations[0];
      return {
        atalaObject,
        signedOperation,
        updateDid: signedOperation.operation.update_did,
        actions: signedOperation.operation.update_did.actions,
      };
    };

    it("wraps the update in a signed AtalaObject targeting the DID state hash", async () => {
      const did = await createDid();
      const stateHash = did.methodId.split(":")[0];

      const buffer = await castor.updateDID('prism', {
        key: privateKey,
        did,
        actions: [{ actionType: UpdateActionType.removeKey, removeKey: { id: "issuing-0" } }],
      });

      const { atalaObject, signedOperation, updateDid } = deserializeUpdate(buffer);

      expect(atalaObject.block_content.operations).toHaveLength(1);
      expect(signedOperation.signed_with).toEqual("master-0");
      expect(signedOperation.signature.length).toBeGreaterThan(0);
      expect(signedOperation.operation).toHaveProperty("update_did");
      expect(updateDid.id).toEqual(stateHash);
      // first update: previous operation hash defaults to the DID state hash bytes
      expect(Buffer.from(updateDid.previous_operation_hash).toString("hex")).toEqual(stateHash);
    });

    it("signs the operation with the master key so the signature verifies", async () => {
      const did = await createDid();
      const buffer = await castor.updateDID('prism', {
        key: privateKey,
        did,
        actions: [{ actionType: UpdateActionType.removeService, removeService: { id: "service-0" } }],
      });

      const { signedOperation } = deserializeUpdate(buffer);
      const operationBytes = signedOperation.operation.serializeBinary();
      const digest = new SHA256().update(operationBytes).digest();
      const publicKey = privateKey.publicKey();

      // the operation is signed with a DER-encoded ECDSA signature
      const signature = secp256k1.Signature.fromDER(signedOperation.signature);
      const verified = secp256k1.verify(signature, digest, publicKey.raw);
      expect(verified).toBe(true);
    });

    it("builds an add_key action from a public key", async () => {
      const did = await createDid();
      const buffer = await castor.updateDID('prism', {
        key: privateKey,
        did,
        actions: [{
          actionType: UpdateActionType.addKey,
          addKey: {
            id: "issuing-1",
            purpose: PrismDIDKeyUsage.ISSUING_KEY,
            publicKey: privateKey.publicKey(),
          },
        }],
      });

      const { actions } = deserializeUpdate(buffer);
      expect(actions).toHaveLength(1);
      expect(actions[0].action).toEqual("add_key");
      expect(actions[0].add_key.key.id).toEqual("issuing-1");
      expect(actions[0].add_key.key.usage).toEqual(PrismDIDKeyUsage.ISSUING_KEY);
    });

    it("builds a remove_key action", async () => {
      const did = await createDid();
      const buffer = await castor.updateDID('prism', {
        key: privateKey,
        did,
        actions: [{ actionType: UpdateActionType.removeKey, removeKey: { id: "authentication-0" } }],
      });

      const { actions } = deserializeUpdate(buffer);
      expect(actions[0].action).toEqual("remove_key");
      expect(actions[0].remove_key.keyId).toEqual("authentication-0");
    });

    it("builds an add_service action", async () => {
      const did = await createDid();
      const buffer = await castor.updateDID('prism', {
        key: privateKey,
        did,
        actions: [{
          actionType: UpdateActionType.addService,
          addService: {
            id: "service-1",
            type: "LinkedDomains",
            serviceEndpoint: ["https://example.com", "https://example.org"],
          },
        }],
      });

      const { actions } = deserializeUpdate(buffer);
      expect(actions[0].action).toEqual("add_service");
      expect(actions[0].add_service.service.id).toEqual("service-1");
      expect(actions[0].add_service.service.type).toEqual("LinkedDomains");
      expect(actions[0].add_service.service.service_endpoint).toEqual([
        "https://example.com",
        "https://example.org",
      ]);
    });

    it("builds a remove_service action", async () => {
      const did = await createDid();
      const buffer = await castor.updateDID('prism', {
        key: privateKey,
        did,
        actions: [{ actionType: UpdateActionType.removeService, removeService: { id: "service-2" } }],
      });

      const { actions } = deserializeUpdate(buffer);
      expect(actions[0].action).toEqual("remove_service");
      expect(actions[0].remove_service.serviceId).toEqual("service-2");
    });

    it("builds an update_service action", async () => {
      const did = await createDid();
      const buffer = await castor.updateDID('prism', {
        key: privateKey,
        did,
        actions: [{
          actionType: UpdateActionType.updateService,
          updateService: {
            id: "service-3",
            type: "LinkedDomains",
            serviceEndpoint: ["https://update.example.com"],
          },
        }],
      });

      const { actions } = deserializeUpdate(buffer);
      expect(actions[0].action).toEqual("update_service");
      expect(actions[0].update_service.serviceId).toEqual("service-3");
      expect(actions[0].update_service.type).toEqual("LinkedDomains");
      expect(actions[0].update_service.service_endpoints).toEqual(["https://update.example.com"]);
    });

    it("preserves the order of multiple actions", async () => {
      const did = await createDid();
      const buffer = await castor.updateDID('prism', {
        key: privateKey,
        did,
        actions: [
          { actionType: UpdateActionType.removeKey, removeKey: { id: "issuing-0" } },
          {
            actionType: UpdateActionType.addService,
            addService: { id: "service-1", type: "LinkedDomains", serviceEndpoint: ["https://a.com"] },
          },
          { actionType: UpdateActionType.removeService, removeService: { id: "service-9" } },
        ],
      });

      const { actions } = deserializeUpdate(buffer);
      expect(actions).toHaveLength(3);
      expect(actions.map((a) => a.action)).toEqual(["remove_key", "add_service", "remove_service"]);
    });

    it("uses an explicit previousOperationHash when provided", async () => {
      const did = await createDid();
      const previousOperationHash = new SHA256().update(Buffer.from("previous-op")).digest();

      const buffer = await castor.updateDID('prism', {
        key: privateKey,
        did,
        previousOperationHash,
        actions: [{ actionType: UpdateActionType.removeKey, removeKey: { id: "issuing-0" } }],
      });

      const { updateDid } = deserializeUpdate(buffer);
      expect(Buffer.from(updateDid.previous_operation_hash)).toEqual(Buffer.from(previousOperationHash));
    });

    it("throws when no actions are supplied", async () => {
      const did = await createDid();
      await expect(
        castor.updateDID('prism', { key: privateKey, did, actions: [] })
      ).rejects.toThrow(CastorError.InvalidKeyError);
    });

    it("throws when the key cannot sign the operation", async () => {
      const did = await createDid();
      await expect(
        castor.updateDID('prism', {
          key: Fixtures.Keys.ed25519.privateKey,
          did,
          actions: [{ actionType: UpdateActionType.removeKey, removeKey: { id: "issuing-0" } }],
        })
      ).rejects.toThrow(CastorError.InvalidKeyError);
    });
  });
});
