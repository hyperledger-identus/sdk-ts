import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import js from "@eslint/js";

// ─── Production-ready rule tiers ───────────────────────────────────────────
// ERROR  = blocks CI — critical safety/correctness
// WARN   = surfaces issues — promote to error as violations are cleaned up
// OFF    = intentionally disabled (with documented reason)

/** Error-level rules: critical safety and correctness */
const errorRules = {
    // JS safety
    "no-debugger": "error",
    "no-const-assign": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-unreachable": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",

    // TS async safety (type-checked)
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/await-thenable": "error",

    // Module consistency
    "@typescript-eslint/no-require-imports": "error",
};

/** Warn-level rules: code quality, promote to error over time */
const warnRules = {
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": [
        "error",
        {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
        },
    ],
    "@typescript-eslint/ban-ts-comment": [
        "warn",
        {
            "ts-expect-error": "allow-with-description",
            "ts-ignore": true,
            "ts-nocheck": true,
            "ts-check": false,
        },
    ],
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
    ],
    "@typescript-eslint/no-empty-object-type": "warn",
    "no-console": "warn",
    // Downgraded from recommendedTypeChecked (these fire everywhere `any` is used)
    "@typescript-eslint/no-unsafe-argument": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/no-redundant-type-constituents": "warn",
    "no-empty": "warn",
};

/** Intentionally disabled rules (with reasons) */
const offRules = {
    // Project uses namespaces by design (Domain layer)
    "@typescript-eslint/no-namespace": "off",
    // Handled by TypeScript itself
    "no-redeclare": "off",
    // Too noisy for this codebase
    "@typescript-eslint/explicit-function-return-type": "off",
    // Covered by @typescript-eslint/no-unused-vars
    "no-unused-vars": "off",
    // TypeScript handles this
    "no-undef": "off",
    '@typescript-eslint/require-await': 'off'
};

/** Combined production rule set — exported for sub-package reuse */
export const productionRules = {
    ...errorRules,
    ...warnRules,
    ...offRules,
};

/** Common ignores — exported for sub-package reuse */
export const commonIgnores = [
    "**/dist/**",
    "**/build/**",
    "**/node_modules/**",
    "**/coverage/**",
    "**/*.d.ts",
    "**/generated/**",
    "externals/**",
    "integration-tests/**",
    "src/castor/protos/**",
];

/**
 * Helper to create a type-checked ESLint config scoped to source files.
 * Use this in sub-packages:
 *   import { createPackageConfig } from "../../../eslint.config.mjs";
 *   export default createPackageConfig(import.meta.dirname);
 */
export function createPackageConfig(dirname, extraIgnores = [], extraRules = {}) {
    return defineConfig(
        { ignores: [...commonIgnores, ...extraIgnores] },

        // Type-checked TS rules scoped to source files only
        {
            files: ["src/**/*.ts", "src/**/*.tsx"],
            extends: [
                js.configs.recommended,
                ...tseslint.configs.recommendedTypeChecked,
            ],
            languageOptions: {
                parserOptions: {
                    ecmaVersion: "latest",
                    sourceType: "module",
                    projectService: true,
                    tsconfigRootDir: dirname,
                },
            },
            rules: {
                ...productionRules,
                ...extraRules,
            },
        },
    );
}

export default createPackageConfig(import.meta.dirname);
