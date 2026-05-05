import fs from 'fs'
import path from 'path'

/**
 * esbuild plugin to strip `new URL("*_bg.wasm", import.meta.url)` references
 * from wasm-bindgen generated JS files.
 */
function wasmUrlStripPlugin() {
  return {
    name: 'strip-wasm-url',
    setup(build) {
      build.onLoad({ filter: /\.js$/ }, async (args) => {
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
 * to the generated wasm packages
 */
function wasmPackagesPlugin(aliasName, generatedDir) {
  const aliases = {
    [aliasName]: generatedDir,
  }

  const escapedAlias = aliasName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const subpathFilter = new RegExp(`^${escapedAlias}\\/`)
  const bareFilter = new RegExp(`^${escapedAlias}$`)

  return {
    name: 'wasm-packages',
    setup(build) {
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
 * @param {string} aliasName - The WASM package alias to resolve
 * @param {string} projectDir - The absolute path to the consuming project directory
 * @returns {import('tsup').Options}
 */
export function createWasmTsupConfig(aliasName, projectDir) {
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
