import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import { Api, DID, Message } from '@hyperledger/identus-domain';
import * as Domain from '@hyperledger/identus-domain';
import { MercuryError, Castor } from "@hyperledger/identus-domain";
import { DIDCommProtocol } from "../../src/mercury/DIDCommProtocol";
import { Mercury } from "../../src/mercury";

describe("Mercury", () => {
  let castor: Castor;
  let httpManager: Api;
  let didProtocol: DIDCommProtocol;
  let mercury: Mercury;

  beforeEach(() => {
    castor = {
      parseDID: vi.fn(),
      resolveDID: vi.fn(),
    } as any;

    httpManager = { request: async () => new Domain.ApiResponse<any>(new Uint8Array(), 200) };

    didProtocol = {
      packEncrypted: async () => "",
      unpack: async () => new Message("{}", undefined, "TypeofMessage"),
    };

    mercury = new Mercury(castor, didProtocol, httpManager);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("PackMessage", () => {
    it("should call DIDCommProtocol.packEncrypted with [message, message.to, message.from]", async () => {
      const fromDid = DID.fromString("did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ");
      const toDid = DID.fromString("did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ");
      const message = new Message(
        "{}",
        undefined,
        "TypeofMessage",
        fromDid,
        toDid,
        []
      );

      const spy = vi.spyOn(didProtocol, "packEncrypted");
      await mercury.packMessage(message);

      expect(spy).toHaveBeenCalledWith(message, toDid, fromDid);
    });

    describe("Errors", () => {
      it("should throw error when Messsage.to is not a DID", async () => {
        const message = {} as any;
        await expect(mercury.packMessage(message)).rejects.toThrowError(MercuryError.NoRecipientDIDSetError);
      });
    });
  });

  describe("UnpackMessage", () => {
    it("should call DIDCommProtocol.unpack with [message]", async () => {
      const messageString = "someMessageString";
      vi.spyOn(didProtocol, "unpack");

      mercury.unpackMessage(messageString);

      await expect(didProtocol.unpack).toHaveBeenCalledWith(messageString);
    });
  });

  describe("SendMessage", () => {
    let fromDID: DID;
    let toDID: DID;

    beforeEach(() => {
      fromDID = DID.fromString("did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ");
      toDID = DID.fromString("did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ");

      vi.spyOn(castor, "parseDID").mockReturnValue(fromDID);
      vi.spyOn(httpManager, "request").mockResolvedValue(new Domain.ApiResponse<any>({}, 200));
    });

    describe("Errors", () => {
      it("should throw error when Messsage.to is not a DID", async () => {
        const message = new Message("{}", "", "");

        await expect(mercury.sendMessage(message)).rejects.toThrowError(MercuryError.NoRecipientDIDSetError);
      });

      it("should throw error when Messsage.to has no valid Service", async () => {
        const message = new Message(
          "{}",
          undefined,
          "TypeofMessage",
          toDID,
          fromDID
        );

        vi.spyOn(castor, "resolveDID").mockResolvedValue(new Domain.DIDDocument(toDID, []));

        await expect(mercury.sendMessage(message)).rejects.toThrowError(MercuryError.NoValidServiceFoundError);
      });
    });
  });

  describe("SendMessageParseMessage", () => {
    it("passes the result of sendMessage to unpackMessage", async () => {
      const message = new Message("{}", undefined, "TypeofMessage");
      const returnedMessage = { message: "returnedMessage" };
      const unpackedMessage = new Message("{}", undefined, "TypeofMessage");

      const spySend = vi.spyOn(mercury, "sendMessage").mockResolvedValue(returnedMessage);
      const spyUnpack = vi.spyOn(mercury, "unpackMessage").mockResolvedValue(unpackedMessage);

      const result = await mercury.sendMessageParseMessage(message);
      const jsonMessage = JSON.stringify(returnedMessage);
      expect(spySend).toHaveBeenCalledWith(message);
      expect(spyUnpack).toHaveBeenCalledWith(jsonMessage);
      expect(result).to.equal(unpackedMessage);
    });
  });
});
