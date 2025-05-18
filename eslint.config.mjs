import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export const disabledRules = {
	"@typescript-eslint/ban-ts-comment": "off",
	"@typescript-eslint/no-explicit-any": "off",
	"@typescript-eslint/no-unused-vars": "off",
	"react/display-name": "off",
	"no-unused-vars": "off",
	"no-undef": "off",
	"@typescript-eslint/no-empty-object-type": "off",
	"@typescript-eslint/no-unused-vars": "off",
	"@typescript-eslint/explicit-function-return-type": "off",
	"@typescript-eslint/no-explicit-any": "off",
	"@typescript-eslint/no-unnecessary-type-assertion": "off",
	'@typescript-eslint/no-namespace': 'warn',
	'no-redeclare': 'warn'
}

export default defineConfig([
	{
		ignores: [
			"dist",
			"node_modules",
			".eslintrc.js",
			"build",
			"coverage",
			'build/*',
			'build/**/*',
			'/**/*.d.ts',
			'integration-tests',
			'externals',
			'generated',
			"src/castor/protos"
		]
	},
	// Base JS config for all files
	{
		files: ["src/**/*.{js,mjs,cjs,ts}"],
		plugins: { js },
		rules: {
			...js.configs.recommended.rules,
			...disabledRules,
			"@typescript-eslint/no-require-imports": "off",
		},
	},
	// TypeScript specific configuration
	{
		files: ["src/**/*.ts"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				project: "./tsconfig.json"
			},
		},
		plugins: {
			"@typescript-eslint": tseslint
		},
		rules: {
			...tseslint.configs.recommended.rules,
			...disabledRules,
			"@typescript-eslint/no-require-imports": "off",
		},
	}
]);