import type { ITtscLintConfig } from "@ttsc/lint";

// @ttsc/lint config for the ttsc benchmark (ttsc-lint branch): the 12 shared
// lint rules, matching the legacy branch's eslint.config.mjs `rules` block.
export default {
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
