import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

// import reactConfig from "@ytvee-dev/eslint-config-react/configs/react";

export default tseslint.config({ ignores: ["dist"] }, ...reactConfig, {
  plugins: {
    "react-refresh": reactRefresh,
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
});
