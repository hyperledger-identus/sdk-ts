import { defineConfig } from 'tsup'

import prodConfig from './tsup.config'

/** Same as production bundle, without identifier/whitespace minification — for local debugging (e.g. e2e). */
export default defineConfig({
  ...prodConfig,
  minifyWhitespace: false,
  minifyIdentifiers: false,
})
