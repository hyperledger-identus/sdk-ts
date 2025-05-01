import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import * as RunProtocolModule from "../../../src/edge-agent/helpers/RunProtocol";
import { Task } from '../../../src/utils';
import * as Fixtures from "../../fixtures";
import { HandleIssueCredential } from '../../../src/plugins/internal/didcomm/tasks/HandleIssueCredential';


describe("Agent", () => {
  let ctx: Task.Context;

  beforeEach(() => {
    ctx = new Task.Context({});
  });


  afterEach(async () => {
    vi.restoreAllMocks();
  });

  describe("HandleIssueCredential", () => {
    test("unknown Payload returned from protocol - throws", async () => {
      vi.spyOn(RunProtocolModule, "RunProtocol")
        .mockReturnValue({
          run: () => Promise.resolve({ pid: "not-credential", data: {} }),
          log: () => ({}),
        } as any);

      const sut = ctx.run(new HandleIssueCredential({ message: Fixtures.Messages.IssueCredential }));

      await expect(sut).rejects.toThrow("invalid Credential issued");
    });

    test("Credential not returned from protocol - throws", async () => {
      vi.spyOn(RunProtocolModule, "RunProtocol")
        .mockReturnValue({
          run: () => Promise.resolve({ pid: "credential", data: {} }),
          log: () => ({}),
        } as any);

      const sut = ctx.run(new HandleIssueCredential({ message: Fixtures.Messages.IssueCredential }));

      await expect(sut).rejects.toThrow("invalid Credential issued");
    });
  });
});
