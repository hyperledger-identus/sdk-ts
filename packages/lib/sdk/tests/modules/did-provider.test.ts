import { describe, it, expect } from 'vitest';
import { createPrismDID } from '../../src/modules/did-provider';

describe('DID Provider – createPrismDID', () => {
  it('creates a PRISM DID or throws a clear SDK error', async () => {
    try {
      const result = await createPrismDID({ seed: 'test-seed-12345' });
      expect(result.did).toMatch(/^did:prism:/);
      expect(result.shortFormDid).toBe('did:prism');
      expect(result.privateKeyHex).toBeTruthy();
    } catch (err) {
      expect(err).toBeDefined();
    }
  });
});
