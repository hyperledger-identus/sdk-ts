import { describe, expect, test, beforeEach, afterEach, vi } from 'vitest';
import * as Domain from '@hyperledger/identus-domain';
import { Task } from '../../src/utils';
import * as Fixtures from "../fixtures";
import { HandleOfferCredential } from '../../src/plugins/internal/didcomm/tasks/HandleOfferCredential';
import { ProtocolIds } from '../../src/plugins/internal/didcomm/types';

describe("HandleOfferCredential Test", () => {
  let ctx: Task.Context<{}>;

  beforeEach(() => {
    ctx = new Task.Context({});
  });

  describe("piuri validation", () => {
    test("should throw InvalidOfferCredentialMessageError when message piuri does not match OfferCredential", async () => {
      const invalidMessage = new Domain.Message(
        { comment: "Test" },
        "test-id",
        "https://didcomm.org/issue-credential/3.0/propose-credential",
        Fixtures.DIDs.peerDID1,
        Fixtures.DIDs.peerDID2,
        [],
        "test-thread-id"
      );

      const task = new HandleOfferCredential({ message: invalidMessage });

      await expect(ctx.run(task)).rejects.toThrow(Domain.AgentError.InvalidOfferCredentialMessageError);
      await expect(ctx.run(task)).rejects.toThrow(
        `expected piuri '${ProtocolIds.OfferCredential}' but received '${invalidMessage.piuri}'`
      );
    });

    test("should throw with correct error message for random piuri", async () => {
      const randomPiuri = "https://example.com/some-other-protocol/1.0/message";
      const invalidMessage = new Domain.Message(
        { comment: "Test" },
        "test-id",
        randomPiuri,
        Fixtures.DIDs.peerDID1,
        Fixtures.DIDs.peerDID2,
        [],
        "test-thread-id"
      );

      const task = new HandleOfferCredential({ message: invalidMessage });

      await expect(ctx.run(task)).rejects.toThrow(
        `expected piuri '${ProtocolIds.OfferCredential}' but received '${randomPiuri}'`
      );
    });
  });
});
