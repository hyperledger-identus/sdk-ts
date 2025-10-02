// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  // Global ignores, equivalent to your 'ignorePatterns'
  {
    ignores: ["target/", "src/configuration/inmemory/"],
  },

  // Start with the 'extends' configurations
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Add your custom configuration overrides
  {
    // IMPORTANT: This tells ESLint to apply the rules to these files.
    // This was the missing piece that caused your original error.
    files: ["**/*.ts", "**/*.tsx"],

    // Equivalent to your 'env'
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    // Your custom 'rules'
    rules: {
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "indent": ["error", 2],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "double"],
      "semi": ["error", "never"],
      "max-len": ["error", { "code": 140 }],
      "eol-last": ["error", "always"],
    },
  }
);