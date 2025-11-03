import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Disable this rule as it's a false positive for SSR hydration patterns
      // The pattern of setting mounted state in useEffect/useLayoutEffect is
      // the recommended approach for preventing hydration mismatches
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);

export default eslintConfig;
