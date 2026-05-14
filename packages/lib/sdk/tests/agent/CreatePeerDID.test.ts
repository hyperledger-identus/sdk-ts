import { vi, describe, expect, test, beforeEach, afterEach } from 'vitest';
import { randomUUID } from 'node:crypto';

import * as Domain from '@hyperledger/identus-domain';
import { CreatePeerDID } from '../../src/edge-agent/didFunctions/CreatePeerDID';
import { Task } from '../../src/utils';
import { Apollo, Castor, Pluto } from '../../src';
import { Send } from '../../src/plugins/internal/didcomm';
import { mockTask } from '../testFns';
import * as Fixtures from '../fixtures';

/**
 * Integration tests for CreatePeerDID exercising the keylist-update flow
 * introduced for issue #391 (see PR #566). The outgoing `keylist-update`
 * carries `return_route: "all"`, so the mediator's `keylist-update-response`
 * is returned inline as `Send`'s resolved value and `CreatePeerDID`
 * validates it. The flow rejects when the response reports a failure
 * result, when no matching response comes back, or when the 60 s timeout
 * elapses.
 */
describe('CreatePeerDID', () => {
  let ctx: Task.Context<any>;
  let apollo: Apollo;
  let castor: Castor;
  let pluto: Pluto;
  let connections: any;

  const mediatorDID = Domain.DID.from(
    'did:peer:2.Ez6LSjNzhLeoBEL67PHWSq6X7A7YFuQpcqs13g3cYJTRFyhpu.Vz6MkemtLC5RN1bwBopgZVgXpRRXoigbZjKQt8NHEiJR1eAQ1.SeyJ0IjoiZG0iLCJzIjoiaHR0cHM6Ly9tZWRpYXRvciIsImEiOlsiZGlkY29tbS92MiJdfQ'
  );
  const hostDID = Domain.DID.from(
    'did:peer:2.Ez6LSfhufN8b8EufbxPNRh88YYvjpf7uuVfa3tMG4nKeFK2wX.Vz6Mkf2USnehnAgu263PfyTDsB7KhjuR64wMa3Y4XLHi3KuQS.SeyJ0IjoiZG0iLCJzIjoiaHR0cHM6Ly9ob3N0IiwiYSI6WyJkaWRjb21tL3YyIl19'
  );
  const createdDID = Fixtures.DIDs.peerDID1;
  const peerRecipientDID = Fixtures.DIDs.peerDID2.toString();

  /** Build a `keylist-update-response` message body matching the spec. */
  const buildResponseMessage = (
    updated: Array<{ recipient_did: string; action: string; result: string }> | unknown,
    thid?: string,
  ): Domain.Message =>
    new Domain.Message(
      { updated } as any,
      randomUUID(),
      'https://didcomm.org/coordinate-mediation/2.0/keylist-update-response' as any,
      mediatorDID,
      hostDID,
      [],
      thid,
    );

  beforeEach(async () => {
    apollo = new Apollo();
    castor = new Castor(apollo);
    pluto = await Pluto.create({
      dbName: 'test-' + randomUUID(),
      keyRestoration: apollo,
    });

    connections = {
      mediator: {
        asMediator: () => ({
          hostDID,
          mediatorDID,
        }),
      },
      find: vi.fn(),
    };

    ctx = new Task.Context({
      Apollo: apollo,
      Castor: castor,
      Pluto: pluto,
      Connections: connections,
      logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn(), debug: vi.fn() } as any,
    } as any);

    vi.spyOn(castor, 'createDID').mockResolvedValue(createdDID);
    vi.spyOn(pluto, 'storeDID').mockResolvedValue();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  /**
   * Stub Send.run so it resolves to an inline keylist-update-response whose
   * `thid` is taken from the outgoing message's id. The mediator returns
   * the response in the POST reply body (return_route=all) and `Send`
   * surfaces the parsed response synchronously.
   */
  const mockSendInlineResponse = (updated: unknown): void => {
    vi.spyOn(Send.prototype, 'run').mockImplementation(async function (this: any) {
      const msg = this.args.message as Domain.Message;
      return buildResponseMessage(updated, msg.id);
    });
  };

  describe('updateMediator = true', () => {
    test('resolves when mediator responds with result "success"', async () => {
      mockSendInlineResponse([
        { recipient_did: peerRecipientDID, action: 'add', result: 'success' },
      ]);

      const result = await ctx.run(
        new CreatePeerDID({ services: [], updateMediator: true }),
      );

      expect(result).toBe(createdDID);
    });

    test('resolves when mediator responds with result "no_change"', async () => {
      mockSendInlineResponse([
        { recipient_did: peerRecipientDID, action: 'add', result: 'no_change' },
      ]);

      const result = await ctx.run(
        new CreatePeerDID({ services: [], updateMediator: true }),
      );

      expect(result).toBe(createdDID);
    });

    test('rejects when mediator reports result "client_error"', async () => {
      mockSendInlineResponse([
        { recipient_did: peerRecipientDID, action: 'add', result: 'client_error' },
      ]);

      await expect(
        ctx.run(new CreatePeerDID({ services: [], updateMediator: true })),
      ).rejects.toThrow(/keylist-update failed/);
    });

    test('rejects when mediator reports result "server_error"', async () => {
      mockSendInlineResponse([
        { recipient_did: peerRecipientDID, action: 'add', result: 'server_error' },
      ]);

      await expect(
        ctx.run(new CreatePeerDID({ services: [], updateMediator: true })),
      ).rejects.toThrow(/server_error/);
    });

    test('rejects when response body.updated is missing or not an array', async () => {
      mockSendInlineResponse(undefined);

      await expect(
        ctx.run(new CreatePeerDID({ services: [], updateMediator: true })),
      ).rejects.toThrow(/body\.updated is not an array/);
    });

    test('rejects when Send does not resolve within 60 seconds', async () => {
      vi.useFakeTimers();

      vi.spyOn(Send.prototype, 'run').mockImplementation(
        () => new Promise(() => {}),
      );

      const promise = ctx.run(
        new CreatePeerDID({ services: [], updateMediator: true }),
      );
      const assertion = expect(promise).rejects.toThrow(/timed out after 60s/);

      await vi.advanceTimersByTimeAsync(60_000);
      await assertion;
    });

    test('rejects when Send resolves to an unrelated message (wrong piuri)', async () => {
      vi.spyOn(Send.prototype, 'run').mockResolvedValue(
        new Domain.Message('{}' as any, randomUUID(), 'urn:test:other' as any),
      );

      await expect(
        ctx.run(new CreatePeerDID({ services: [], updateMediator: true })),
      ).rejects.toThrow(/did not return a matching keylist-update-response/);
    });

    test('rejects when Send resolves to a keylist-update-response with a non-matching thid', async () => {
      vi.spyOn(Send.prototype, 'run').mockResolvedValue(
        buildResponseMessage(
          [{ recipient_did: peerRecipientDID, action: 'add', result: 'success' }],
          'not-the-thid-we-sent',
        ),
      );

      await expect(
        ctx.run(new CreatePeerDID({ services: [], updateMediator: true })),
      ).rejects.toThrow(/did not return a matching keylist-update-response/);
    });

    test('rejects when Send resolves to undefined (no inline response)', async () => {
      vi.spyOn(Send.prototype, 'run').mockResolvedValue(undefined);

      await expect(
        ctx.run(new CreatePeerDID({ services: [], updateMediator: true })),
      ).rejects.toThrow(/did not return a matching keylist-update-response/);
    });
  });

  describe('updateMediator = false (default)', () => {
    test('does not call Send at all', async () => {
      const sendSpy = vi
        .spyOn(Send.prototype, 'run')
        .mockResolvedValue(undefined);

      const result = await ctx.run(
        new CreatePeerDID({ services: [], updateMediator: false }),
      );

      expect(result).toBe(createdDID);
      expect(sendSpy).not.toHaveBeenCalled();
    });
  });

  describe('updateMediator = true but no mediator connected', () => {
    test('throws NoMediatorAvailableError', async () => {
      connections.mediator = undefined;

      await expect(
        ctx.run(new CreatePeerDID({ services: [], updateMediator: true })),
      ).rejects.toThrow(Domain.AgentError.NoMediatorAvailableError);
    });
  });
});
