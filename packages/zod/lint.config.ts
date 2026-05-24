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
    // The test corpus intentionally keeps string-concat and invalid-email
    // escape cases that legacy ESLint did not inspect.
    "prefer-template": "off",
    "no-useless-rename": "error",
    "dot-notation": "error",
    "no-extra-boolean-cast": "error",
    "no-useless-escape": "off",
    "prefer-as-const": "error",
    "prefer-namespace-keyword": "error",
  },
} satisfies ITtscLintConfig;
