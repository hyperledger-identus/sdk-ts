
import { defineConfig } from 'tsup'

import Config from './tsup.config';

export default defineConfig({
  ...Config,
  format: undefined,
  dts: {
    resolve: [
      '@hyperledger/identus-anoncreds',
      '@hyperledger/identus-didcomm',
      '@hyperledger/identus-jwe',
      '@hyperledger/identus-domain',
      '@hyperledger/identus-protos',
    ]
  },
});
