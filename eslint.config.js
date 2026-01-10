import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

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
