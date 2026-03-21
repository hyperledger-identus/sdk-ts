import { defineConfig } from 'tsup'
import { createWasmTsupConfig } from '@hyperledger/identus-wasm-config/tsup.config'

export default defineConfig(
  createWasmTsupConfig('@hyperledger/identus-didcomm-wasm', __dirname)
)
