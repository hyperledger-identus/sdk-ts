/**
 * Supported key types for Web Worker crypto operations.
 */
export type CryptoKeyType = "Ed25519" | "Secp256k1";

// --- Requests (Main thread → Worker) ---

export interface SignRequest {
  type: "sign";
  id: number;
  keyType: CryptoKeyType;
  keyRaw: Uint8Array;
  message: Uint8Array;
}

export interface VerifyRequest {
  type: "verify";
  id: number;
  keyType: CryptoKeyType;
  keyRaw: Uint8Array;
  message: Uint8Array;
  signature: Uint8Array;
}

export interface GenerateKeyPairRequest {
  type: "generateKeyPair";
  id: number;
  keyType: CryptoKeyType;
}

export interface DeriveKeyRequest {
  type: "deriveKey";
  id: number;
  keyType: CryptoKeyType;
  keyRaw: Uint8Array;
  chainCode: string;
  derivationPath: string;
}

export interface CreateSeedRequest {
  type: "createSeed";
  id: number;
  mnemonics: string[];
  passphrase: string;
}

export interface CreateRandomSeedRequest {
  type: "createRandomSeed";
  id: number;
  passphrase?: string;
}

export interface CreateRandomMnemonicsRequest {
  type: "createRandomMnemonics";
  id: number;
}

export type CryptoWorkerRequest =
  | SignRequest
  | VerifyRequest
  | GenerateKeyPairRequest
  | DeriveKeyRequest
  | CreateSeedRequest
  | CreateRandomSeedRequest
  | CreateRandomMnemonicsRequest;

// --- Responses (Worker → Main thread) ---

export interface SignResponse {
  type: "sign_result";
  id: number;
  signature: Uint8Array;
}

export interface VerifyResponse {
  type: "verify_result";
  id: number;
  result: boolean;
}

export interface GenerateKeyPairResponse {
  type: "generateKeyPair_result";
  id: number;
  privateKeyRaw: Uint8Array;
  publicKeyRaw: Uint8Array;
}

export interface DeriveKeyResponse {
  type: "deriveKey_result";
  id: number;
  derivedKeyRaw: Uint8Array;
  chainCode: string | null;
}

export interface CreateSeedResponse {
  type: "createSeed_result";
  id: number;
  seed: Uint8Array;
}

export interface CreateRandomSeedResponse {
  type: "createRandomSeed_result";
  id: number;
  seed: Uint8Array;
  mnemonics: string[];
}

export interface CreateRandomMnemonicsResponse {
  type: "createRandomMnemonics_result";
  id: number;
  mnemonics: string[];
}

export interface ErrorResponse {
  type: "error";
  id: number;
  message: string;
}

export type CryptoWorkerResponse =
  | SignResponse
  | VerifyResponse
  | GenerateKeyPairResponse
  | DeriveKeyResponse
  | CreateSeedResponse
  | CreateRandomSeedResponse
  | CreateRandomMnemonicsResponse
  | ErrorResponse;
