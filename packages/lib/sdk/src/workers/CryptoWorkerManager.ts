import type {
  CryptoKeyType,
  CryptoWorkerRequest,
  CryptoWorkerResponse,
} from "./types";

type PendingRequest = {
  resolve: (value: any) => void;
  reject: (reason: any) => void;
};

/**
 * Singleton manager for Web Worker crypto operations.
 * Public methods require isSupported() === true; otherwise getWorker() throws.
 */
export class CryptoWorkerManager {
  private static instance: CryptoWorkerManager | null = null;

  private worker: Worker | null = null;
  private nextId = 0;
  private readonly pending = new Map<number, PendingRequest>();
  private readonly supported: boolean;

  private constructor() {
    this.supported =
      typeof Worker !== "undefined" &&
      globalThis.window !== undefined;
  }

  static getInstance(): CryptoWorkerManager {
    CryptoWorkerManager.instance ??= new CryptoWorkerManager();
    return CryptoWorkerManager.instance;
  }

  isSupported(): boolean {
    return this.supported;
  }

  private getWorker(): Worker {
    if (!this.supported) {
      throw new Error(
        "Web Workers are not available in this environment. Check isSupported() before calling worker methods."
      );
    }
    if (!this.worker) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore -- import.meta.url is valid in ESM bundles (tsup/esbuild/vite)
      const workerURL = new URL("./crypto.worker.js", import.meta.url);
      this.worker = new Worker(workerURL, { type: "module" });

      this.worker.onmessage = (event: MessageEvent<CryptoWorkerResponse>) => {
        const response = event.data;
        const pending = this.pending.get(response.id);
        if (!pending) return;

        this.pending.delete(response.id);

        if (response.type === "error") {
          pending.reject(new Error(response.message));
        } else if (response.type === "sign_result") {
          pending.resolve(response.signature);
        } else if (response.type === "verify_result") {
          pending.resolve(response.result);
        } else if (response.type === "generateKeyPair_result") {
          pending.resolve({ privateKeyRaw: response.privateKeyRaw, publicKeyRaw: response.publicKeyRaw });
        } else if (response.type === "deriveKey_result") {
          pending.resolve({ derivedKeyRaw: response.derivedKeyRaw, chainCode: response.chainCode });
        } else if (response.type === "createSeed_result") {
          pending.resolve(response.seed);
        } else if (response.type === "createRandomSeed_result") {
          pending.resolve({ seed: response.seed, mnemonics: response.mnemonics });
        } else if (response.type === "createRandomMnemonics_result") {
          pending.resolve(response.mnemonics);
        }
      };

      this.worker.onerror = (err) => {
        this.pending.forEach((pending, id) => {
          pending.reject(new Error(`Worker error: ${err.message}`));
          this.pending.delete(id);
        });
      };
    }
    return this.worker;
  }

  private sendRequest<T>(request: CryptoWorkerRequest): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.pending.set(request.id, { resolve, reject });
      this.getWorker().postMessage(request);
    });
  }

  sign(keyType: CryptoKeyType, keyRaw: Uint8Array, message: Uint8Array): Promise<Uint8Array> {
    return this.sendRequest<Uint8Array>({
      type: "sign",
      id: this.nextId++,
      keyType,
      keyRaw,
      message,
    });
  }

  verify(keyType: CryptoKeyType, keyRaw: Uint8Array, message: Uint8Array, signature: Uint8Array): Promise<boolean> {
    return this.sendRequest<boolean>({
      type: "verify",
      id: this.nextId++,
      keyType,
      keyRaw,
      message,
      signature,
    });
  }

  generateKeyPair(keyType: CryptoKeyType): Promise<{ privateKeyRaw: Uint8Array; publicKeyRaw: Uint8Array }> {
    return this.sendRequest({
      type: "generateKeyPair",
      id: this.nextId++,
      keyType,
    });
  }

  deriveKey(
    keyType: CryptoKeyType,
    keyRaw: Uint8Array,
    chainCode: string,
    derivationPath: string
  ): Promise<{ derivedKeyRaw: Uint8Array; chainCode: string | null }> {
    return this.sendRequest({
      type: "deriveKey",
      id: this.nextId++,
      keyType,
      keyRaw,
      chainCode,
      derivationPath,
    });
  }

  createSeed(mnemonics: string[], passphrase: string): Promise<Uint8Array> {
    return this.sendRequest<Uint8Array>({
      type: "createSeed",
      id: this.nextId++,
      mnemonics,
      passphrase,
    });
  }

  createRandomSeed(passphrase?: string): Promise<{ seed: Uint8Array; mnemonics: string[] }> {
    return this.sendRequest({
      type: "createRandomSeed",
      id: this.nextId++,
      passphrase,
    });
  }

  createRandomMnemonics(): Promise<string[]> {
    return this.sendRequest<string[]>({
      type: "createRandomMnemonics",
      id: this.nextId++,
    });
  }

  terminate(): void {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
    this.pending.forEach((pending) => {
      pending.reject(new Error("Worker terminated"));
    });
    this.pending.clear();
    CryptoWorkerManager.instance = null;
  }
}
