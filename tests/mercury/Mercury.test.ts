import { vi, describe, it, expect, beforeEach } from 'vitest';
import {
  Api,
  DID,
  DIDDocument,
  Message,
  PublicKey,
  Service,
} from "../../src/domain";
import * as Domain from "../../src/domain";
import { MercuryError } from "../../src/domain/models/Errors";
import { DIDCommProtocol } from "../../src/mercury/DIDCommProtocol";
import Mercury from "../../src/mercury/Mercury";
import { Castor } from "../../src/domain/buildingBlocks/Castor";

describe("Mercury", () => {
  let ctx: {
    castor: Castor;
    httpManager: Api;
    didProtocol: DIDCommProtocol;
    mercury: Mercury;
  };

  const makeTestContext = (message?: Message) => {
    const castor: Castor = {
      parseDID(did: string): DID {
        throw new Error("Method not implemented.");
      },
      createPrismDID(
        masterPublicKey: PublicKey,
        services?: Service[] | undefined
      ): Promise<DID> {
        throw new Error("Method not implemented.");
      },
      createPeerDID(publicKeys: PublicKey[], services: Service[]): Promise<DID> {
        throw new Error("Method not implemented.");
      },
      resolveDID(did: string): Promise<DIDDocument> {
        throw new Error("Method not implemented.");
      },
      verifySignature(
        did: DID,
        challenge: Uint8Array,
        signature: Uint8Array
      ): Promise<boolean> {
        throw new Error("Method not implemented.");
      },
      getEcnumbasis(did: DID, publicKey: PublicKey): string {
        throw new Error("Method not implemented.");
      },
    };
    const httpManager: Api = {
      request: async () => new Domain.ApiResponse<any>(new Uint8Array(), 200),
    };
    const didProtocol: DIDCommProtocol = {
      packEncrypted: async () => "",
      unpack: async () =>
        message || new Message("{}", undefined, "TypeofMessage"),
    };
    const mercury = new Mercury(castor, didProtocol, httpManager);
    mercury.castor = castor;
    return { castor, httpManager, didProtocol, mercury };
  };

  describe("PackMessage", () => {
    it("should call DIDCommProtocol.packEncrypted with [message, message.to, message.from]", () => {
      const fromDid = DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
      );
      const toDid = DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
      );
      const message = new Message(
        "{}",
        undefined,
        "TypeofMessage",
        fromDid,
        toDid,
        []
      );
      const ctx = makeTestContext(message);

      vi.spyOn(ctx.didProtocol, "packEncrypted");
      ctx.mercury.packMessage(message);

      expect(ctx.didProtocol.packEncrypted).toBeCalledWith(
        message,
        toDid,
        fromDid
      );
    });

    describe("Errors", () => {
      it("should throw error when Messsage.to is not a DID", () => {
        const message = {} as any;
        const ctx = makeTestContext(message);

        expect(() => ctx.mercury.packMessage(message)).to.throw(
          MercuryError.NoRecipientDIDSetError
        );
      });

      it("should throw error when Messsage.to is not a DID", () => {
        const message = new Message("{}", "", "");
        const ctx = makeTestContext(message);
        expect(() => ctx.mercury.packMessage(message)).to.throw(
          MercuryError.NoRecipientDIDSetError
        );
      });
    });
  });

  describe("UnpackMessage", () => {
    it("should call DIDCommProtocol.unpack with [message]", () => {
      const ctx = makeTestContext();
      const messageString = "someMessageString";

      vi.spyOn(ctx.didProtocol, "unpack");
      ctx.mercury.unpackMessage(messageString);

      expect(ctx.didProtocol.unpack).toBeCalledWith(messageString);
    });
  });

  describe("SendMessage", () => {
    let fromDID;
    let toDID;

    beforeEach(() => {
      ctx = makeTestContext();
      fromDID = DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
      );
      toDID = DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
      );

      vi.spyOn(ctx.castor, "parseDID").mockReturnValue(fromDID);
      vi
        .spyOn(ctx.httpManager, "request")
        .mockResolvedValue(new Domain.ApiResponse<any>({}, 200));
    });

    // it("should call HttpManager.postEncrypted with [ServiceEndpoint.uri, packedMessage]", async () => {
    //   const packedMessage = "qwerty";
    //   const message = new Message(
    //     "{}",
    //     undefined,
    //     "DIDCommMessaging",
    //     fromDID,
    //     toDID
    //   );

    //   const endpoint = new ServiceEndpoint("testUri");
    //   const services = new Services([
    //     new Service("testService", ["DIDCommMessaging"], endpoint),
    //   ]);
    //   sandbox
    //     .stub(ctx.castor, "resolveDID")
    //     .resolves(new Domain.DIDDocument(toDID, [services]));
    //   sandbox.stub(ctx.didProtocol, "packEncrypted").resolves(packedMessage);

    //   await ctx.mercury.sendMessage(message);

    //   expect(ctx.didProtocol.packEncrypted).to.have.been.calledWith(
    //     message,
    //     toDID,
    //     fromDID
    //   );
    //   expect(ctx.mercury.castor.resolveDID).to.have.been.calledWith(
    //     toDID.toString()
    //   );
    //   expect(ctx.mercury.api.request).to.have.been.calledWith(
    //     "POST",
    //     endpoint.uri,
    //     new Map(),
    //     new Map([["Content-type", "application/didcomm-encrypted+json"]]),
    //     packedMessage
    //   );
    // });

    describe("Errors", () => {
      it("should throw error when Messsage.to is not a DID", async () => {
        const message = new Message("{}", "", "");

        expect(ctx.mercury.sendMessage(message)).rejects.toThrow(
          MercuryError.NoRecipientDIDSetError
        );
      });

      it("should throw error when Messsage.to has no valid Service", async () => {
        const message = new Message(
          "{}",
          undefined,
          "TypeofMessage",
          toDID,
          fromDID
        );

        vi
          .spyOn(ctx.castor, "resolveDID")
          .mockResolvedValue(new Domain.DIDDocument(toDID, []));

        expect(ctx.mercury.sendMessage(message)).rejects.toThrow(
          MercuryError.NoValidServiceFoundError
        );
      });
    });
  });

  describe("SendMessageParseMessage", () => {
    it("passes the result of sendMessage to unpackMessage", async () => {
      const ctx = makeTestContext();
      const message = new Message("{}", undefined, "TypeofMessage");
      const returnedMessage = { message: "returnedMessage" };
      const unpackedMessage = new Message("{}", undefined, "TypeofMessage");

      vi.spyOn(ctx.mercury, "sendMessage").mockImplementation(async () => returnedMessage);
      vi.spyOn(ctx.mercury, "unpackMessage").mockImplementation(async () => unpackedMessage);

      const result = await ctx.mercury.sendMessageParseMessage(message);
      const jsonMessage = JSON.stringify(returnedMessage);
      expect(ctx.mercury.sendMessage).toBeCalledWith(message);
      expect(ctx.mercury.unpackMessage).toBeCalledWith(jsonMessage);
      expect(result).to.equal(unpackedMessage);
    });
  });
});
