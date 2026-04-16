import { describe, it, assert, expect, test, beforeEach, afterEach } from 'vitest';
import { DID, CastorError } from '@hyperledger/identus-domain';

describe("DID", () => {

  describe("toString", () => {
    test("returns {schema}:{method}:{methodId}", () => {
      const schema = "a";
      const method = "b";
      const methodId = "c";
      const did = new DID(schema, method, methodId);

      const result = did.toString();

      expect(result).to.be.a.string(`${schema}:${method}:${methodId}`);
    });
  });

  describe("from", () => {
    test("given DID - returns that DID", () => {
      const did = new DID("did", "test", "abc");
      const result = DID.from(did);

      expect(result).to.eq(did);
    });

    test("given string - returns DID", () => {
      const method = "peer";
      const methodId = "abc123";
      const result = DID.from(`did:${method}:${methodId}`);

      expect(result).to.be.instanceOf(DID);
      expect(result.schema).to.eq("did");
      expect(result.method).to.eq(method);
      expect(result.methodId).to.eq(methodId);
    });
  });

  describe("fromString", () => {
    test("valid string - returns DID", () => {
      const method = "prism";
      const methodId = "abc123";
      const result = DID.fromString(`did:${method}:${methodId}`);

      expect(result).to.be.instanceOf(DID);
      expect(result.schema).to.eq("did");
      expect(result.method).to.eq(method);
      expect(result.methodId).to.eq(methodId);
    });


    describe("invalid", () => {
      test("empty string - throws", () => {
        assert.throws(
          () => DID.fromString(``),
          CastorError.InvalidDIDString,
        );
      });

      test("missing method + methodId - throws", () => {
        assert.throws(
          () => DID.fromString(`did:`),
          CastorError.InvalidDIDString,
        );
      });

      test("missing methodId - throws", () => {
        assert.throws(
          () => DID.fromString(`did:method`),
          CastorError.InvalidDIDString,
        );
      });
    });
  });
});