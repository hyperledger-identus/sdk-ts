import { CastorError, DIDDocument } from '@hyperledger/identus-domain';
import { describe, expect, test, vi, afterEach } from 'vitest';

import { DIDResolverHttpProxy } from '../../src/castor/resolver/DIDResolverHttpProxy';

describe('DIDResolverHttpProxy', () => {
  const endpoint = 'https://resolver.example/';
  const did = 'did:example:123';

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  test('maps fetch rejection to NotPossibleToResolveDID', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockRejectedValue(new TypeError('failed to fetch'))
    );

    const resolver = new DIDResolverHttpProxy(endpoint, 'prism');

    await expect(async () => {
      await resolver.resolve(did);
    }).rejects.toSatisfy(
      (err: unknown): err is CastorError.NotPossibleToResolveDID =>
        err instanceof CastorError.NotPossibleToResolveDID &&
        /HTTP DID resolver request failed/u.test(err.message)
    );
  });

  test('includes HTTP status and body snippet on unsuccessful response', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ error: 'boom' }), {
          status: 502,
          statusText: 'Bad Gateway',
        })
      )
    );

    const resolver = new DIDResolverHttpProxy(endpoint, 'prism');

    await expect(async () => {
      await resolver.resolve(did);
    }).rejects.toSatisfy(
      (err: unknown): err is CastorError.NotPossibleToResolveDID =>
        err instanceof CastorError.NotPossibleToResolveDID &&
        /HTTP 502 Bad Gateway/u.test(err.message) &&
        /boom/u.test(err.message)
    );
  });

  test('surfaces invalid JSON payloads from the resolver endpoint', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(new Response('{ not-json', { status: 200 }))
    );

    const resolver = new DIDResolverHttpProxy(endpoint, 'prism');

    await expect(async () => {
      await resolver.resolve(did);
    }).rejects.toMatchObject({
      message: expect.stringMatching(/invalid JSON/u),
    });
  });

  test('parses DID document JSON on success', async () => {
    const docJson = {
      id: 'did:example:abcdef',
      verificationMethod: [],
    };

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify(docJson), {
          status: 200,
        })
      )
    );

    const resolver = new DIDResolverHttpProxy(endpoint, 'prism');
    const resolved = await resolver.resolve(docJson.id);

    expect(resolved).toBeInstanceOf(DIDDocument);
    expect(resolved.id.toString()).toBe(docJson.id);
  });

  test('wraps DID document parsing failures', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ id: '' }), {
          status: 200,
        })
      )
    );

    const resolver = new DIDResolverHttpProxy(endpoint, 'prism');

    await expect(async () => {
      await resolver.resolve(did);
    }).rejects.toSatisfy(
      (err: unknown): err is CastorError.NotPossibleToResolveDID =>
        err instanceof CastorError.NotPossibleToResolveDID &&
        /Unable to interpret resolver response as DID document/u.test(err.message)
    );
  });
});
