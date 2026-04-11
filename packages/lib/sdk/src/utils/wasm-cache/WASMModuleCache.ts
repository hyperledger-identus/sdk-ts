import type {
  WASMModuleDescriptor,
  WASMCacheEntry,
  WASMCacheConfig,
  WASMLoadResult,
  WASMCacheStats,
} from "./types";

/** 30 days in milliseconds */
const DEFAULT_MAX_AGE = 30 * 24 * 60 * 60 * 1000;
const DEFAULT_DB_NAME = "identus-wasm-cache";
const DEFAULT_STORE_NAME = "modules";

/**
 * Caches compiled WebAssembly.Module objects in IndexedDB.
 *
 * WebAssembly.Module is structured-cloneable (per spec) and can be
 * stored in IndexedDB. This eliminates recompilation on subsequent
 * page loads, reducing WASM init from seconds to ~20-50ms.
 *
 * @example
 * ```typescript
 * const cache = new WASMModuleCache();
 * const { module, fromCache, loadTimeMs } = await cache.load(
 *   { name: "anoncreds", version: "1.0.0" },
 *   () => fetch("/wasm/anoncreds_bg.wasm")
 * );
 * const instance = await WebAssembly.instantiate(module, imports);
 * ```
 */
export class WASMModuleCache {
  private readonly dbName: string;
  private readonly storeName: string;
  private readonly maxAge: number;
  private db: IDBDatabase | null = null;

  constructor(config?: WASMCacheConfig) {
    this.dbName = config?.dbName ?? DEFAULT_DB_NAME;
    this.storeName = config?.storeName ?? DEFAULT_STORE_NAME;
    this.maxAge = config?.maxAge ?? DEFAULT_MAX_AGE;
  }

  /**
   * Load a WASM module — from IndexedDB cache if available,
   * otherwise compile from the provided fetch function and cache the result.
   *
   * @param descriptor - Module identifier (name + version)
   * @param fetchModule - Callback that returns a Response or Promise<Response>
   *                      containing the WASM binary. Only called on cache miss.
   * @returns The compiled module with cache metadata
   */
  async load(
    descriptor: WASMModuleDescriptor,
    fetchModule: () => Response | Promise<Response>
  ): Promise<WASMLoadResult> {
    const start = performance.now();
    const key = this.buildKey(descriptor);

    // 1. Try cache hit
    try {
      const entry = await this.getEntry(key);
      if (entry && !this.isExpired(entry)) {
        return {
          module: entry.module,
          fromCache: true,
          loadTimeMs: performance.now() - start,
        };
      }
    } catch {
      // IndexedDB read failed — proceed to fresh compile
    }

    // 2. Cache miss — fetch and compile
    const response = await fetchModule();
    let module: WebAssembly.Module;
    let byteSize = 0;

    if (
      typeof WebAssembly.compileStreaming === "function" &&
      response.headers?.get?.("content-type")?.includes("application/wasm")
    ) {
      // compileStreaming is more efficient: compiles while downloading
      module = await WebAssembly.compileStreaming(
        // Some engines require a fresh Response, so clone it
        response.clone ? response.clone() : response
      );
      // Estimate byte size from content-length header
      const cl = response.headers?.get?.("content-length");
      byteSize = cl ? parseInt(cl, 10) : 0;
    } else {
      // Fallback: buffer then compile
      const bytes = await response.arrayBuffer();
      byteSize = bytes.byteLength;
      module = await WebAssembly.compile(bytes);
    }

    // 3. Store in cache — fire-and-forget (don't block the return)
    const entry: WASMCacheEntry = {
      key,
      module,
      cachedAt: Date.now(),
      byteSize,
    };
    this.putEntry(entry).catch(() => {
      // Silently ignore cache write failures
    });

    return {
      module,
      fromCache: false,
      loadTimeMs: performance.now() - start,
    };
  }

  /** Check if a valid (non-expired) cache entry exists */
  async has(descriptor: WASMModuleDescriptor): Promise<boolean> {
    try {
      const entry = await this.getEntry(this.buildKey(descriptor));
      return entry !== null && !this.isExpired(entry);
    } catch {
      return false;
    }
  }

  /** Delete a specific cache entry */
  async invalidate(descriptor: WASMModuleDescriptor): Promise<void> {
    try {
      await this.deleteEntry(this.buildKey(descriptor));
    } catch {
      // Silently ignore
    }
  }

  /** Delete ALL cached modules */
  async clear(): Promise<void> {
    try {
      const db = await this.openDB();
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction(this.storeName, "readwrite");
        const store = tx.objectStore(this.storeName);
        const req = store.clear();
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    } catch {
      // Silently ignore
    }
  }

  /** Get diagnostic info about all cached entries */
  async getStats(): Promise<WASMCacheStats[]> {
    try {
      const db = await this.openDB();
      const entries = await new Promise<WASMCacheEntry[]>((resolve, reject) => {
        const tx = db.transaction(this.storeName, "readonly");
        const store = tx.objectStore(this.storeName);
        const req = store.openCursor();
        const results: WASMCacheEntry[] = [];

        req.onsuccess = () => {
          const cursor = req.result;
          if (cursor) {
            results.push(cursor.value as WASMCacheEntry);
            cursor.continue();
          } else {
            resolve(results);
          }
        };
        req.onerror = () => reject(req.error);
      });

      const now = Date.now();
      return entries.map((entry) => {
        const [name, version] = entry.key.split("@");
        return {
          name,
          version,
          byteSize: entry.byteSize,
          cachedAt: entry.cachedAt,
          ageMs: now - entry.cachedAt,
        };
      });
    } catch {
      return [];
    }
  }

  /** Open the IndexedDB database (lazy, returns cached connection) */
  private async openDB(): Promise<IDBDatabase> {
    if (this.db) {
      return this.db;
    }

    if (typeof indexedDB === "undefined") {
      throw new Error("IndexedDB is not available");
    }

    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: "key" });
        }
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  /** Get a cache entry from IndexedDB */
  private async getEntry(key: string): Promise<WASMCacheEntry | null> {
    const db = await this.openDB();
    return new Promise<WASMCacheEntry | null>((resolve, reject) => {
      const tx = db.transaction(this.storeName, "readonly");
      const store = tx.objectStore(this.storeName);
      const req = store.get(key);
      req.onsuccess = () => resolve((req.result as WASMCacheEntry) ?? null);
      req.onerror = () => reject(req.error);
    });
  }

  /** Store a cache entry in IndexedDB */
  private async putEntry(entry: WASMCacheEntry): Promise<void> {
    const db = await this.openDB();
    return new Promise<void>((resolve, reject) => {
      const tx = db.transaction(this.storeName, "readwrite");
      const store = tx.objectStore(this.storeName);
      const req = store.put(entry);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  /** Delete a cache entry from IndexedDB */
  private async deleteEntry(key: string): Promise<void> {
    const db = await this.openDB();
    return new Promise<void>((resolve, reject) => {
      const tx = db.transaction(this.storeName, "readwrite");
      const store = tx.objectStore(this.storeName);
      const req = store.delete(key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  /** Build cache key from descriptor */
  private buildKey(descriptor: WASMModuleDescriptor): string {
    return `${descriptor.name}@${descriptor.version}`;
  }

  /** Check if an entry is expired */
  private isExpired(entry: WASMCacheEntry): boolean {
    return Date.now() - entry.cachedAt > this.maxAge;
  }
}
