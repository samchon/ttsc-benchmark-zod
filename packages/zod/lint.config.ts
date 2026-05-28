import type { ITtscLintConfig } from "@ttsc/lint";

// @ttsc/lint config for the ttsc benchmark (ttsc-lint branch): the 12 shared
// lint rules, matching the legacy branch's eslint.config.mjs `rules` block.
//
// File scope mirrors the legacy `eslint.config.mjs` ignores list so both
// branches lint the same set of source files (zod's pre-existing test and
// benchmark fixtures contain intentional `\k`/`\a` escapes and other patterns
// that the shared 12-rule set was never meant to police).
export default {
  ignores: [
    "**/node_modules/**",
    "**/lib/**",
    "src/**/tests/**",
    "src/**/benchmarks/**",
    "src/**/*.test.ts",
    "src/**/*.source.ts",
  ],
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
    "typescript/prefer-as-const": "error",
    "typescript/prefer-namespace-keyword": "error",
  },
} satisfies ITtscLintConfig;
