import fs from 'fs'
import path from 'path'
import { defineConfig } from 'tsup'
import type { Plugin } from 'esbuild'

const generatedDir = path.resolve(__dirname, './generated')

/**
 * esbuild plugin to resolve @hyperledger/identus-didcomm-wasm imports
 * to the generated wasm packages (tsconfig paths don't work in esbuild)
 */
function wasmPackagesPlugin(): Plugin {
  const aliases: Record<string, string> = {
    '@hyperledger/identus-didcomm-wasm': generatedDir,
  }

  return {
    name: 'wasm-packages',
    setup(build) {
      // Resolve subpath imports like @hyperledger/identus-didcomm-wasm/foo_bg.wasm
      build.onResolve({ filter: /^@hyperledger\/identus-didcomm-wasm\// }, (args) => {
        const parts = args.path.split('/')
        const pkgName = `${parts[0]}/${parts[1]}`
        const subpath = parts.slice(2).join('/')
        const baseDir = aliases[pkgName]
        if (baseDir) {
          return { path: path.join(baseDir, subpath) }
        }
        return undefined
      })

      // Resolve bare package imports like @hyperledger/identus-didcomm-wasm
      build.onResolve({ filter: /^@hyperledger\/identus-didcomm-wasm$/ }, (args) => {
        const baseDir = aliases[args.path]
        if (baseDir) {
          const pkgJsonPath = path.join(baseDir, 'package.json')
          const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'))
          const main = pkgJson.main || 'index.js'
          return { path: path.join(baseDir, main) }
        }
        return undefined
      })

      // Ensure .wasm files resolved from generated packages are loaded as binary buffers
      build.onLoad({ filter: /\.wasm$/ }, (args) => {
        return {
          contents: fs.readFileSync(args.path),
          loader: 'binary',
        }
      })
    },
  }
}

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  tsconfig: 'tsconfig.lib.json',
  outDir: "build",
  clean: true,
  splitting: true,
  dts: true,
  sourcemap: true,
  skipNodeModulesBundle: false,
  loader: { '.wasm': 'binary' },
  esbuildPlugins: [wasmPackagesPlugin()],
  external: ['buffer'],
  minifyWhitespace: true,
  minifyIdentifiers: true,
  minifySyntax: false,
});
