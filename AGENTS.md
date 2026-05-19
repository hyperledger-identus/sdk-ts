# Identus TypeScript SDK — Agent Instructions

## Developer Commands

| Command | What it does |
|---------|-------------|
| `yarn build` | Full build via `build.sh` (cleans first, then builds in dependency order) |
| `yarn test` | Run all package tests (`npx nx run-many --target=test`) |
| `yarn lint` | ESLint across all packages (`npx nx run-many --target=lint`) |
| `yarn lint:fix` | ESLint with `--fix` across all packages |
| `yarn lint:text` | markdownlint-cli2 + yamllint + editorconfig-checker |
| `yarn lint:text:fix` | markdownlint-cli2 with `--fix` |
| `yarn clean` | Removes generated dirs, build dirs, and resets Nx cache |
| `yarn clean:generated` | Removes all `generated/` folders (WASM bindings only — protobuf `.ts` output in `packages/lib/protos/src/` is overwritten on rebuild, not deleted by this command) |
| `yarn clean:build` | Removes all `build/` folders |
| `yarn clean:reset` | Resets Nx cache (`npx nx reset`) |
| `yarn coverage` | Vitest coverage across all workspace projects (`packages/lib/*`, `shared/*`, `wasm/*`) via root `vitest.config.js` |
| `yarn coverage:nx` | Coverage across all Nx packages via `nx run-many` (includes typecheck dependency) |
| `yarn docs` | TypeDoc generation across packages |

## Single-Package Commands

Nx projects are addressed by their `package.json` `name`. Key project names:

- `@hyperledger/identus-protos` — protobuf definitions (`packages/lib/protos`)
- `@hyperledger/identus-domain` — shared domain types (`packages/shared/domain`)
- `@hyperledger/identus-anoncreds` — AnonCreds WASM wrapper (`packages/wasm/anoncreds`)
- `@hyperledger/identus-didcomm` — DIDComm WASM wrapper (`packages/wasm/didcomm`)
- `@hyperledger/identus-jwe` — JWE WASM wrapper (`packages/wasm/jwe`)
- `@hyperledger/identus-sdk` — main SDK (`packages/lib/sdk`)

```bash
npx nx test @hyperledger/identus-sdk          # test one package
npx nx build @hyperledger/identus-domain       # build one package
npx nx lint @hyperledger/identus-anoncreds    # lint one package
npx nx test-watch @hyperledger/identus-sdk    # vitest watch mode
npx nx coverage @hyperledger/identus-sdk      # coverage for one package
npx nx docs @hyperledger/identus-sdk          # TypeDoc for SDK
```

The `--tui false` flag disables Nx interactive UI in CI/terminals where TUI fails.

## Build Order & Prerequisites

**Required toolchain (all must be installed before building):**

1. **Node.js** — LTS version (20 recommended)
2. **Rust nightly + cargo** — required to compile WASM crates
3. **wasm-pack** — builds Rust → WASM with JS bindings (`curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh`)
4. **protobuf-compiler** (`protoc`) — compiles `.proto` files to TypeScript

**First-time build — submodules must be initialized first:**

```bash
bash externals/run.sh -x update    # git submodule update --init --recursive, then builds WASM
```

**Build sequence** (as coded in `build.sh`):

1. `yarn clean` + `npx nx reset`
2. `@hyperledger/identus-protos:build` (runs `protoc` then `tsup`)
3. `@hyperledger/identus-domain:build`
4. `@hyperledger/identus-anoncreds:build` (depends on `externals` target)
5. `@hyperledger/identus-didcomm:build` (depends on `externals` target)
6. `@hyperledger/identus-jwe:build` (depends on `externals` target)
7. `@hyperledger/identus-sdk:build`

WASM packages have an `externals` Nx target that runs `externals/run.sh -x update` if the submodule commit has changed. The build target depends on `externals` implicitly.

## Monorepo Structure

Yarn 4 workspaces + Nx. Three workspace groups:

```
packages/
├── lib/
│   ├── protos/    — @hyperledger/identus-protos   (protobuf definitions)
│   └── sdk/       — @hyperledger/identus-sdk      (main SDK)
├── shared/
│   └── domain/    — @hyperledger/identus-domain   (shared types/interfaces)
└── wasm/
    ├── anoncreds/ — @hyperledger/identus-anoncreds (AnonCreds WASM wrapper)
    ├── config/    — Nx/Vitest shared WASM config (scope:config tag)
    ├── didcomm/   — @hyperledger/identus-didcomm  (DIDComm WASM wrapper)
    └── jwe/       — @hyperledger/identus-jwe      (JWE WASM wrapper)

externals/
├── anoncreds/     — Git submodule: Rust AnonCreds crate source
├── didcomm/       — Git submodule: Rust DIDComm crate source
├── run.sh         — Submodule check/build/update script (-x check|build|update)
└── *.commit       — Tracks last-built submodule commit hashes
```

## Package Architecture

The main SDK (`packages/lib/sdk`) contains the Identus building blocks:

- **Apollo** (`src/apollo/`) — Cryptographic operations (key generation, signing, etc.)
- **Castor** (`src/castor/`) — DID creation, management, and resolution
- **Mercury** (`src/mercury/`) — DIDComm V2 message handling
- **Pluto** (`src/pluto/`) — Storage interface (portable, storage-agnostic)
- **Agent** (`src/edge-agent/`) — Edge agent using all building blocks; implements DIDComm V2 protocols
- **Pollux** (`src/pollux/`) — Verifiable credentials logic
- **Plugins** (`src/plugins/`) — Optional: anoncreds, didcomm, oidc, dif, oea

The SDK exports sub-path entry points: `@hyperledger/identus-sdk/plugins/anoncreds`, `/plugins/didcomm`, `/plugins/oidc`, `/plugins/dif`, `/plugins/oea`.

## Generated Code

**Never edit generated files.** They are overwritten on next build.

- `packages/wasm/anoncreds/generated/` — WASM bindings from `wasm-pack build` on the AnonCreds Rust crate
- `packages/wasm/didcomm/generated/` — WASM bindings from `wasm-pack build` on the DIDComm Rust crate
- `packages/wasm/jwe/generated/` — WASM bindings from `wasm-pack build` on the JWE Rust crate
- `packages/lib/protos/src/*.ts` — TypeScript output from `protoc` (invoked via `npm run protos` inside the protos package)

Clean all generated code: `yarn clean:generated` (finds and removes all `generated/` directories).

## Build Artifacts

- `packages/*/build/` — compiled JS + type declarations from `tsup`
- `.nx/` — Nx computation cache (deleted by `yarn clean:reset` / `npx nx reset`)
- `coverage/` — Vitest coverage output

## Testing

- **Unit tests**: Vitest config per package (`vitest.config.js`). Tests live in `packages/*/tests/`.
- **SDK tests** use `jsdom` environment (not Node) and load WASM via a custom Vite plugin (`WasmPlugin` in `packages/lib/sdk/vitest.config.js`) that reads `.wasm` files and exports them as base64.
- **Test aliases** resolve `@hyperledger/identus-*-wasm` to local `packages/wasm/*/generated/` dirs.
- **testTimeout**: 12 seconds for SDK tests.
- **E2E tests**: `integration-tests/e2e-tests/` — requires running Cloud Agent and Mediator. Run via `./integration-tests/e2e-tests/run.sh` or `npm run test:sdk` from within the e2e-tests directory. Requires `.env` configuration (see `integration-tests/e2e-tests/README.md`).

## Linting

- **ESLint**: flat config (`eslint.base.mjs`) with type-checked rules from `typescript-eslint`. Errors for async safety (`no-floating-promises`, `no-misused-promises`); warnings for `any` usage. Namespace declarations allowed (`@typescript-eslint/no-namespace: off`).
- **Excluded from ESLint**: `**/dist/**`, `**/build/**`, `**/node_modules/**`, `**/coverage/**`, `**/*.d.ts`, `**/generated/**`, `externals/**`, `src/castor/protos/**`
- **Text lint** (`yarn lint:text`): markdownlint-cli2, yamllint, editorconfig-checker
- **Lint fix**: `yarn lint:fix` (ESLint), `yarn lint:text:fix` (markdownlint only)

## Release

- Nx manages independent per-project releases (`projectsRelationship: "independent"` in `nx.json`)
- `release.sh` runs as the `preVersionCommand` — generates TypeDoc (`yarn docs`) and stages the output (`git add docs`) before versioning
- Conventional commits required for changelog generation
- Tag pattern: `{projectName}@{version}`
- GitHub releases created automatically by Nx