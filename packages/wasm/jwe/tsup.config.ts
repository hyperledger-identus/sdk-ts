import fs from 'fs'
import path from 'path'
import { defineConfig } from 'tsup'
import type { Plugin } from 'esbuild'

const generatedDir = path.resolve(__dirname, './generated')

/**
 * esbuild plugin to resolve @hyperledger/identus-* imports
 * to the generated wasm packages (tsconfig paths don't work in esbuild)
 */
function wasmPackagesPlugin(): Plugin {
  const aliases: Record<string, string> = {
    '@hyperledger/identus-jwe': path.join(generatedDir),
  }

  return {
    name: 'wasm-packages',
    setup(build) {
      // Resolve subpath imports like @hyperledger/identus-jwe/foo_bg.wasm
      build.onResolve({ filter: /^@hyperledger\/identus-jwe\// }, (args) => {
        const parts = args.path.split('/')
        const pkgName = `${parts[0]}/${parts[1]}`
        const subpath = parts.slice(2).join('/')
        const baseDir = aliases[pkgName]
        if (baseDir) {
          return { path: path.join(baseDir, subpath) }
        }
        return undefined
      })

      // Resolve bare package imports like @hyperledger/identus-jwe
      // Must resolve to the actual entry file (main field in package.json),
      // not the directory itself — esbuild cannot read a directory as a file.
      build.onResolve({ filter: /^@hyperledger\/identus-jwe$/ }, (args) => {
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
  entry: [
    'src/index.ts',
  ],
  format: ['esm'],
  outDir: "build",
  clean: true,
  splitting: true,
  sourcemap: false,
  // dts handled by separate tsc step (rollup-plugin-dts crashes on protobuf namespaces)
  skipNodeModulesBundle: false,
  loader: {
    '.wasm': 'binary'
  },
  esbuildPlugins: [wasmPackagesPlugin()],
  external: ['buffer'],
  minifyWhitespace: true,
  minifyIdentifiers: true,
  minifySyntax: false,
  dts: true
});
