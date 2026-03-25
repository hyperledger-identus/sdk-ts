import fs from 'fs'
import path from 'path'
import { type Options } from 'tsup'
import type { Plugin } from 'esbuild'

/**
 * esbuild plugin to strip `new URL("*_bg.wasm", import.meta.url)` references
 * from wasm-bindgen generated JS files.
 *
 * esbuild cannot tree-shake the async `default` export (__wbg_init) that
 * contains this URL reference. If left in, downstream bundlers (Metro, webpack)
 * try to resolve the .wasm file at build time and fail.
 *
 * We replace the URL constructor call with `undefined` so the dead code
 * path is harmless.
 */
function wasmUrlStripPlugin(): Plugin {
  return {
    name: 'strip-wasm-url',
    setup(build) {
      build.onLoad({ filter: /\.js$/ }, async (args) => {
        // Only process wasm-bindgen generated files in the generated directory
        if (!args.path.includes('generated')) return undefined
        const source = await fs.promises.readFile(args.path, 'utf-8')
        if (!source.includes('_bg.wasm')) return undefined
        const stripped = source.replace(
          /new URL\(["'][^"']*_bg\.wasm["'],\s*import\.meta\.url\)/g,
          'undefined'
        )
        return { contents: stripped, loader: 'js' }
      })
    },
  }
}

/**
 * esbuild plugin to resolve @hyperledger/identus-* imports
 * to the generated wasm packages (tsconfig paths don't work in esbuild)
 */
function wasmPackagesPlugin(aliasName: string, generatedDir: string): Plugin {
  const aliases: Record<string, string> = {
    [aliasName]: generatedDir,
  }

  // Build regex patterns from the alias name (escape slashes for regex)
  const escapedAlias = aliasName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const subpathFilter = new RegExp(`^${escapedAlias}\\/`)
  const bareFilter = new RegExp(`^${escapedAlias}$`)

  return {
    name: 'wasm-packages',
    setup(build) {
      // Resolve subpath imports like @hyperledger/identus-anoncreds-wasm/foo_bg.wasm
      build.onResolve({ filter: subpathFilter }, (args) => {
        const parts = args.path.split('/')
        const pkgName = `${parts[0]}/${parts[1]}`
        const subpath = parts.slice(2).join('/')
        const baseDir = aliases[pkgName]
        if (baseDir) {
          return { path: path.join(baseDir, subpath) }
        }
        return undefined
      })

      // Resolve bare package imports like @hyperledger/identus-anoncreds-wasm
      // Must resolve to the actual entry file (main field in package.json),
      // not the directory itself — esbuild cannot read a directory as a file.
      build.onResolve({ filter: bareFilter }, (args) => {
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

/**
 * Creates a tsup config for a WASM wrapper package.
 *
 * @param aliasName - The WASM package alias to resolve
 *   (e.g. `"@hyperledger/identus-anoncreds-wasm"`)
 * @param projectDir - The absolute path to the consuming project directory
 *   (typically `__dirname` from the calling config)
 */
export function createWasmTsupConfig(aliasName: string, projectDir: string): Options {
  const generatedDir = path.resolve(projectDir, './generated')

  return {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    tsconfig: 'tsconfig.lib.json',
    outDir: "build",
    clean: true,
    splitting: true,
    dts: false,
    sourcemap: true,
    skipNodeModulesBundle: false,
    loader: { '.wasm': 'binary' },
    esbuildPlugins: [wasmUrlStripPlugin(), wasmPackagesPlugin(aliasName, generatedDir)],
    external: ['buffer'],
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minifySyntax: false,
  }
}
