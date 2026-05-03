import { ApiError } from '@hyperledger/identus-domain';
import { describe, expect, test, vi, afterEach } from 'vitest';

import { FETCH_API_DEFAULT_MAX_RESPONSE_BODY_BYTES, FetchApi } from '../../src/edge-agent/helpers/FetchApi';

describe('FetchApi response body limiting', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  test('parses bodies within the configured byte limit', async () => {
    const bodyText = '{"a":1}';
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(new Response(bodyText, { status: 200 }))
    );

    const api = new FetchApi({ maxResponseBodyBytes: FETCH_API_DEFAULT_MAX_RESPONSE_BODY_BYTES });
    const response = await api.request('GET', 'http://127.0.0.1/example');

    expect(response.body).toEqual({ a: 1 });
  });

  test('rejects payloads larger than maxResponseBodyBytes', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response(
          new ReadableStream({
            start(controller) {
              controller.enqueue(new Uint8Array(1000).fill(120));
              controller.enqueue(new Uint8Array(1000).fill(120));
              controller.close();
            },
          }),
          { status: 200 }
        )
      )
    );

    const api = new FetchApi({ maxResponseBodyBytes: 1000 });

    await expect(async () => {
      await api.request('GET', 'http://127.0.0.1/large');
    }).rejects.toSatisfy(
      (err: unknown): err is ApiError =>
        err instanceof ApiError &&
        err.status === 413
    );
  });

  test('maxResponseBodyBytes of 0 disables limiting', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response(
          new ReadableStream({
            start(controller) {
              controller.enqueue(new Uint8Array(2500).fill(121));
              controller.close();
            },
          }),
          { status: 200 }
        )
      )
    );

    const api = new FetchApi({ maxResponseBodyBytes: 0 });
    await expect(api.request('GET', 'http://127.0.0.1/unbounded')).resolves.toBeTruthy();
  });
});
