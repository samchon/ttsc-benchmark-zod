// Flat ESLint config for the ttsc benchmark (legacy branch): the 12 shared
// lint rules, matching the ttsc-lint branch's lint.config.ts `rules` block.
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

// No-op shim so zod's pre-existing `// eslint-disable ban/ban` directives
// resolve to a known rule instead of erroring as "rule not found".
const banShim = {
  rules: { ban: { meta: {}, create: () => ({}) } },
};

export default [
  {
    // Global ignores: only the zod source tree under lint, never emitted
    // build output or unrelated workspace packages.
    ignores: [
      "**/node_modules/**",
      "**/lib/**",
      "packages/zod/v3/**",
      "packages/zod/v4/**",
      "packages/zod/v4-mini/**",
      "packages/zod/mini/**",
      "packages/zod/locales/**",
      "packages/zod/src/**/tests/**",
      "packages/zod/src/**/benchmarks/**",
      "packages/zod/src/**/*.test.ts",
      "packages/zod/src/**/*.source.ts",
    ],
  },
  {
    files: ["packages/zod/src/**/*.ts"],
    linterOptions: { reportUnusedDisableDirectives: "off" },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: { "@typescript-eslint": tsPlugin, ban: banShim },
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: "error",
      "object-shorthand": "error",
      "no-unneeded-ternary": "error",
      "prefer-template": "error",
      "no-useless-rename": "error",
      "dot-notation": "error",
      "no-extra-boolean-cast": "error",
      "no-useless-escape": "error",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/prefer-namespace-keyword": "error",
    },
  },
];
