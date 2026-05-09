import { vi, describe, it, expect, beforeEach } from 'vitest';
import * as Domain from '@hyperledger/identus-domain';
import { Message } from '@hyperledger/identus-domain';
import { DIDCommConnection } from '../../../src/plugins/internal/didcomm/connection/DIDCommConnection';

describe("DIDCommConnection", () => {
  describe("receive", () => {
    let connection: DIDCommConnection;

    beforeEach(() => {
      connection = new DIDCommConnection("uri", "host");
    });

    it("returns undefined when message is nil", async () => {
      const ctx = {} as any;
      const result = await connection.receive(undefined, ctx);
      expect(result).toBeUndefined();
    });

    it("returns undefined when no protocol handler is registered (ExpectError)", async () => {
      const message = new Message("{}", undefined, "unknown/piuri");
      const ctx = {
        run: vi.fn().mockRejectedValue(
          new Domain.CommonError.ExpectError("Protocol handler not found for unknown/piuri (message)")
        ),
      } as any;

      const result = await connection.receive(message, ctx);
      expect(result).toBeUndefined();
    });

    it("returns result when protocol handler succeeds", async () => {
      const message = new Message("{}", undefined, "test/piuri");
      const handlerResult = { pid: "test", data: "ok" };
      const ctx = {
        run: vi.fn().mockResolvedValue(handlerResult),
      } as any;

      const result = await connection.receive(message, ctx);
      expect(result).toEqual(handlerResult);
    });

    it("propagates non-ExpectError thrown by protocol handler", async () => {
      const message = new Message("{}", undefined, "test/piuri");
      const domainError = new Domain.PolluxError.InvalidCredentialError("bad credential");
      const ctx = {
        run: vi.fn().mockRejectedValue(domainError),
      } as any;

      await expect(connection.receive(message, ctx))
        .rejects.toThrow("bad credential");
    });
  });
});
