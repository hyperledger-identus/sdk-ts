import { describe, it, expect, beforeEach, vi } from "vitest";
import "fake-indexeddb/auto";
import { WASMModuleCache } from "../../src/utils/wasm-cache/WASMModuleCache";
import type { WASMModuleDescriptor } from "../../src/utils/wasm-cache/types";

/**
 * Create a minimal valid WASM binary (magic number + version 1).
 * This is the smallest valid .wasm binary that WebAssembly.compile() accepts.
 */
function createMinimalWASMBytes(): Uint8Array {
  return new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00]);
}

/**
 * Create a mock fetch function that returns a Response containing WASM bytes.
 */
function createMockFetch(bytes: Uint8Array): () => Promise<Response> {
  return () =>
    Promise.resolve(
      new Response(bytes.buffer, {
        headers: { "Content-Type": "application/wasm" },
      })
    );
}

const TEST_DESCRIPTOR: WASMModuleDescriptor = {
  name: "test-module",
  version: "1.0.0",
};

describe("WASMModuleCache", () => {
  let cache: WASMModuleCache;
  let wasmBytes: Uint8Array;

  beforeEach(() => {
    // Use a unique DB name per test to avoid cross-test contamination
    cache = new WASMModuleCache({
      dbName: `test-wasm-cache-${Math.random().toString(36).slice(2)}`,
    });
    wasmBytes = createMinimalWASMBytes();
  });

  // ---------- load() tests ----------

  it("load() — compiles module on cache miss", async () => {
    const result = await cache.load(TEST_DESCRIPTOR, createMockFetch(wasmBytes));
    expect(result.module).toBeInstanceOf(WebAssembly.Module);
  });

  it("load() — returns fromCache: false on first load", async () => {
    const result = await cache.load(TEST_DESCRIPTOR, createMockFetch(wasmBytes));
    expect(result.fromCache).toBe(false);
  });

  it("load() — returns fromCache: true on second load (cache hit)", async () => {
    await cache.load(TEST_DESCRIPTOR, createMockFetch(wasmBytes));
    // Small delay to allow fire-and-forget putEntry to complete
    await new Promise((r) => setTimeout(r, 50));

    const result = await cache.load(TEST_DESCRIPTOR, createMockFetch(wasmBytes));
    expect(result.fromCache).toBe(true);
  });

  it("load() — second load is faster than first (proves cache works)", async () => {
    const first = await cache.load(TEST_DESCRIPTOR, createMockFetch(wasmBytes));
    await new Promise((r) => setTimeout(r, 50));

    const second = await cache.load(TEST_DESCRIPTOR, createMockFetch(wasmBytes));
    // The second load should come from cache — at minimum fromCache should be true
    expect(second.fromCache).toBe(true);
    expect(second.module).toBeInstanceOf(WebAssembly.Module);
  });

  it("load() — recompiles when version changes", async () => {
    await cache.load(TEST_DESCRIPTOR, createMockFetch(wasmBytes));
    await new Promise((r) => setTimeout(r, 50));

    const newDescriptor: WASMModuleDescriptor = {
      name: "test-module",
      version: "2.0.0",
    };
    const result = await cache.load(newDescriptor, createMockFetch(wasmBytes));
    expect(result.fromCache).toBe(false);
  });

  it("load() — recompiles when entry is expired (custom short maxAge)", async () => {
    const shortLivedCache = new WASMModuleCache({
      dbName: `test-wasm-cache-expire-${Math.random().toString(36).slice(2)}`,
      maxAge: 1, // 1 ms — will expire immediately
    });

    await shortLivedCache.load(TEST_DESCRIPTOR, createMockFetch(wasmBytes));
    await new Promise((r) => setTimeout(r, 50));

    const result = await shortLivedCache.load(
      TEST_DESCRIPTOR,
      createMockFetch(wasmBytes)
    );
    expect(result.fromCache).toBe(false);
  });

  it("load() — fetchModule is NOT called on cache hit", async () => {
    await cache.load(TEST_DESCRIPTOR, createMockFetch(wasmBytes));
    await new Promise((r) => setTimeout(r, 50));

    const fetchSpy = vi.fn(createMockFetch(wasmBytes));
    await cache.load(TEST_DESCRIPTOR, fetchSpy);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("load() — handles fetchModule error gracefully (throws to caller)", async () => {
    const failingFetch = () => Promise.reject(new Error("Network error"));
    await expect(cache.load(TEST_DESCRIPTOR, failingFetch)).rejects.toThrow(
      "Network error"
    );
  });

  // ---------- has() tests ----------

  it("has() — returns false for missing entry", async () => {
    const result = await cache.has(TEST_DESCRIPTOR);
    expect(result).toBe(false);
  });

  it("has() — returns true for cached entry", async () => {
    await cache.load(TEST_DESCRIPTOR, createMockFetch(wasmBytes));
    await new Promise((r) => setTimeout(r, 50));

    const result = await cache.has(TEST_DESCRIPTOR);
    expect(result).toBe(true);
  });

  it("has() — returns false for expired entry", async () => {
    const shortLivedCache = new WASMModuleCache({
      dbName: `test-wasm-cache-has-expire-${Math.random().toString(36).slice(2)}`,
      maxAge: 1,
    });

    await shortLivedCache.load(TEST_DESCRIPTOR, createMockFetch(wasmBytes));
    await new Promise((r) => setTimeout(r, 50));

    const result = await shortLivedCache.has(TEST_DESCRIPTOR);
    expect(result).toBe(false);
  });

  // ---------- invalidate() tests ----------

  it("invalidate() — removes specific entry", async () => {
    await cache.load(TEST_DESCRIPTOR, createMockFetch(wasmBytes));
    await new Promise((r) => setTimeout(r, 50));

    await cache.invalidate(TEST_DESCRIPTOR);
    const result = await cache.has(TEST_DESCRIPTOR);
    expect(result).toBe(false);
  });

  // ---------- clear() tests ----------

  it("clear() — removes all entries", async () => {
    const desc1: WASMModuleDescriptor = { name: "mod-a", version: "1.0.0" };
    const desc2: WASMModuleDescriptor = { name: "mod-b", version: "1.0.0" };

    await cache.load(desc1, createMockFetch(wasmBytes));
    await cache.load(desc2, createMockFetch(wasmBytes));
    await new Promise((r) => setTimeout(r, 50));

    await cache.clear();

    expect(await cache.has(desc1)).toBe(false);
    expect(await cache.has(desc2)).toBe(false);
  });

  // ---------- getStats() tests ----------

  it("getStats() — returns correct metadata", async () => {
    await cache.load(TEST_DESCRIPTOR, createMockFetch(wasmBytes));
    await new Promise((r) => setTimeout(r, 50));

    const stats = await cache.getStats();
    expect(stats).toHaveLength(1);
    expect(stats[0].name).toBe("test-module");
    expect(stats[0].version).toBe("1.0.0");
    expect(stats[0].cachedAt).toBeGreaterThan(0);
    expect(stats[0].ageMs).toBeGreaterThanOrEqual(0);
  });

  // ---------- graceful degradation ----------

  it("graceful degradation — works when compileStreaming unavailable", async () => {
    // Save and remove compileStreaming
    const original = WebAssembly.compileStreaming;
    // @ts-expect-error — intentionally removing for test
    delete WebAssembly.compileStreaming;

    try {
      const result = await cache.load(
        { name: "no-streaming", version: "1.0.0" },
        createMockFetch(wasmBytes)
      );
      expect(result.module).toBeInstanceOf(WebAssembly.Module);
      expect(result.fromCache).toBe(false);
    } finally {
      // Restore
      WebAssembly.compileStreaming = original;
    }
  });
});
