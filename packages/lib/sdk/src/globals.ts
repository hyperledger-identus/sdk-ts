import { Buffer } from "buffer";

if (typeof globalThis !== "undefined") {
    (globalThis as any).Buffer = Buffer
}
