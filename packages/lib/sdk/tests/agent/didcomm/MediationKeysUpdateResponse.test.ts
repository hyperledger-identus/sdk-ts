import { vi, describe, expect, test, beforeEach, afterEach } from 'vitest';
import * as Domain from '@hyperledger/identus-domain';
import { Task } from '../../../src/utils';
import { ProtocolIds } from '../../../src/plugins/internal/didcomm/types';
import { MediationKeysUpdateResponse } from '../../../src/plugins/internal/didcomm/connection/MediationKeysUpdateResponse';
import * as Fixtures from "../../fixtures";

describe("MediationKeysUpdateResponse", () => {
  let ctx: Task.Context<{}>;
  let warn: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    warn = vi.fn();
    const logger = { warn, debug: vi.fn(), info: vi.fn(), error: vi.fn() };
    ctx = new Task.Context({ logger });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const makeMessage = (body: unknown) => new Domain.Message(
    body as Domain.JsonObj,
    "id-keylist-response",
    ProtocolIds.MediationKeysUpdateResponse,
    Fixtures.DIDs.peerDID2,
    Fixtures.DIDs.peerDID1
  );

  test("all results success or no_change - no warnings", async () => {
    const message = makeMessage({
      updated: [
        { recipient_did: "did:peer:a", action: "add", result: "success" },
        { recipient_did: "did:peer:b", action: "add", result: "no_change" },
      ],
    });

    await ctx.run(new MediationKeysUpdateResponse({ message }));

    expect(warn).not.toHaveBeenCalled();
  });

  test("server_error result logs warning with recipient and action", async () => {
    const message = makeMessage({
      updated: [
        { recipient_did: "did:peer:bad", action: "add", result: "server_error" },
      ],
    });

    await ctx.run(new MediationKeysUpdateResponse({ message }));

    expect(warn).toHaveBeenCalledOnce();
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining("did:peer:bad (add): server_error")
    );
  });

  test("client_error result logs warning", async () => {
    const message = makeMessage({
      updated: [
        { recipient_did: "did:peer:x", action: "remove", result: "client_error" },
      ],
    });

    await ctx.run(new MediationKeysUpdateResponse({ message }));

    expect(warn).toHaveBeenCalledOnce();
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining("did:peer:x (remove): client_error")
    );
  });

  test("mixed results - only failures warn", async () => {
    const message = makeMessage({
      updated: [
        { recipient_did: "did:peer:ok", action: "add", result: "success" },
        { recipient_did: "did:peer:bad", action: "add", result: "server_error" },
      ],
    });

    await ctx.run(new MediationKeysUpdateResponse({ message }));

    expect(warn).toHaveBeenCalledOnce();
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining("did:peer:bad")
    );
  });

  test("body without updated array - silently returns", async () => {
    const message = makeMessage({});

    await ctx.run(new MediationKeysUpdateResponse({ message }));

    expect(warn).not.toHaveBeenCalled();
  });
});
