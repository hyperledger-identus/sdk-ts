import { describe, expect, test, beforeEach } from 'vitest';
import * as SDK from "../../src";


import * as Fixtures from "../fixtures";
import { randomUUID } from 'node:crypto';

describe("Pluto", () => {
  let instance: SDK.Domain.Pluto;

  beforeEach(async () => {
    const apollo = new SDK.Apollo();
    instance = await SDK.Pluto.create({
      dbName: "test-" + randomUUID(),
      keyRestoration: apollo,
    });


    await instance.start();
  });

  describe("DIDs", () => {
    describe("PrismDIDs", () => {
      test("uuid set on Domain instance - same after store", async () => {
        const sutDID = SDK.Domain.DID.from("did:prism:mock1");
        const sutKey = new SDK.X25519PrivateKey(Fixtures.Keys.x25519.privateKey.raw);

        const uuidDID = sutDID.uuid;
        const uuidKey = sutKey.uuid;
        expect(uuidDID).to.be.a.string;
        expect(uuidKey).to.be.a.string;

        await instance.storeDID(sutDID, sutKey);
        expect(sutDID.uuid).to.be.a.string;
        expect(sutKey.uuid).to.be.a.string;
        expect(sutDID.uuid).to.eql(uuidDID);
        expect(sutKey.uuid).to.eql(uuidKey);
      });

      test("alias passed to storeDID and retrieve by did", async () => {
        const sutDID = SDK.Domain.DID.from("did:prism:mock3");
        const sutKey = new SDK.X25519PrivateKey(Fixtures.Keys.x25519.privateKey.raw);
        const alias = "test-alias";

        await instance.storeDID(sutDID, sutKey, alias);
        const did = await instance.getDIDByDIDOrAlias(sutDID.toString());
        expect(did).to.be.instanceOf(SDK.Domain.DID);
        expect(did?.uuid).to.eql(sutDID.uuid);
        expect(did?.method).to.eql(sutDID.method);
        expect(did?.methodId).to.eql(sutDID.methodId);
        expect(did?.schema).to.eql(sutDID.schema);
        expect(did?.toString()).to.eql(sutDID.toString());
      });

      test("alias passed to storeDID and retrieve by alias", async () => {
        const sutDID = SDK.Domain.DID.from("did:prism:mock3");
        const sutKey = new SDK.X25519PrivateKey(Fixtures.Keys.x25519.privateKey.raw);
        const alias = "test-alias";

        await instance.storeDID(sutDID, sutKey, alias);
        const did = await instance.getDIDByDIDOrAlias(alias);
        expect(did).to.be.instanceOf(SDK.Domain.DID);
        expect(did?.uuid).to.eql(sutDID.uuid);
        expect(did?.method).to.eql(sutDID.method);
        expect(did?.methodId).to.eql(sutDID.methodId);
        expect(did?.schema).to.eql(sutDID.schema);
        expect(did?.toString()).to.eql(sutDID.toString());
      });

      test("Store did with multiple keys", async () => {
        const sutDID = SDK.Domain.DID.from("did:prism:mock4");

        const masterKey = new SDK.Secp256k1PrivateKey(Fixtures.Keys.secp256K1.privateKey.raw);
        const authenticationKey = new SDK.X25519PrivateKey(Fixtures.Keys.x25519.privateKey.raw);
        const issuingKey = new SDK.Ed25519PrivateKey(Fixtures.Keys.ed25519.privateKey.raw);

        await instance.storeDID(sutDID, [masterKey, authenticationKey, issuingKey]);
        const results = await instance.getAllPrismDIDs();

        expect(results).to.be.an("array");
        expect(results).to.have.length(3);

        const sutOut = results[0];
        expect(sutOut).to.be.instanceOf(SDK.Domain.PrismDID);
        expect(sutOut?.did.uuid).to.eql(sutDID.uuid);
        expect(sutOut?.did.method).to.eql(sutDID.method);
        expect(sutOut?.did.methodId).to.eql(sutDID.methodId);
        expect(sutOut?.did.schema).to.eql(sutDID.schema);
        expect(sutOut?.did.toString()).to.eql(sutDID.toString());
      });

      test("Retrieved should match Stored", async () => {
        const sutDID = SDK.Domain.DID.from("did:prism:mock2");
        const sutKey = new SDK.X25519PrivateKey(Fixtures.Keys.x25519.privateKey.raw);

        await instance.storeDID(sutDID, sutKey);
        const results = await instance.getAllPrismDIDs();

        expect(results).to.be.an("array");
        expect(results).to.have.length(1);
        const sutOut = results[0];
        expect(sutOut).to.be.instanceOf(SDK.Domain.PrismDID);
        expect(sutOut?.did.uuid).to.eql(sutDID.uuid);
        expect(sutOut?.did.method).to.eql(sutDID.method);
        expect(sutOut?.did.methodId).to.eql(sutDID.methodId);
        expect(sutOut?.did.schema).to.eql(sutDID.schema);
        expect(sutOut?.did.toString()).to.eql(sutDID.toString());

        // expect(sutOut?.privateKey).to.eql(sutKey.curve);
        const keyOut = sutOut.privateKey as any as SDK.X25519PrivateKey;
        expect(keyOut).to.be.instanceOf(SDK.X25519PrivateKey);
        expect(keyOut.uuid).to.eql(sutKey.uuid);
        expect(keyOut.raw).to.eql(sutKey.raw);
        expect(keyOut.curve).to.eql(sutKey.curve);
        expect(keyOut.index).to.eql(sutKey.index);
        expect(keyOut.keySpecification).to.eql(sutKey.keySpecification);
        expect(keyOut.recoveryId).to.eql(sutKey.recoveryId);
        expect(keyOut.size).to.eql(sutKey.size);
        expect(keyOut.type).to.eql(sutKey.type);
      });
    });

    describe("PeerDIDs", () => {
      test("uuid set on Domain instance - same after store", async () => {
        const sutDID = SDK.Domain.DID.from(Fixtures.DIDs.peerDID1.toString());
        const sutKey = new SDK.X25519PrivateKey(Fixtures.Keys.x25519.privateKey.raw);
        const uuidDID = sutDID.uuid;
        const uuidKey = sutKey.uuid;
        expect(sutDID.uuid).to.be.a.string;
        expect(sutKey.uuid).to.be.a.string;

        await instance.storeDID(sutDID, [sutKey]);
        expect(sutDID.uuid).to.be.a.string;
        expect(sutKey.uuid).to.be.a.string;
        expect(sutDID.uuid).to.eql(uuidDID);
        expect(sutKey.uuid).to.eql(uuidKey);
      });

      test("Retrieved should match Stored", async () => {
        const sutDID = SDK.Domain.DID.from(Fixtures.DIDs.peerDID1.toString());
        const sutKey = new SDK.X25519PrivateKey(Fixtures.Keys.x25519.privateKey.raw);

        await instance.storeDID(sutDID, [sutKey]);
        const results = await instance.getAllPeerDIDs();

        expect(results).to.be.an("array");
        const sutOut = results[0];
        expect(sutOut).to.be.instanceOf(SDK.PeerDID);
        expect(sutOut?.did.uuid).to.eql(sutDID.uuid);
        expect(sutOut?.did.method).to.eql(sutDID.method);
        expect(sutOut?.did.methodId).to.eql(sutDID.methodId);
        expect(sutOut?.did.schema).to.eql(sutDID.schema);
        expect(sutOut?.did.toString()).to.eql(sutDID.toString());

        expect(sutOut?.privateKeys).to.have.length(1);
        expect(sutOut?.privateKeys[0].keyCurve.curve).to.eql(sutKey.curve);
        expect(sutOut?.privateKeys[0].value).to.eql(sutKey.getEncoded());
      });
    });
  });
});
