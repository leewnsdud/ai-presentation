import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
      },
      colors: {
        ink: "#0f172a",
        "ink-weak": "#1f2937",
        "ink-soft": "#334155",
        surface: "#0b0f1a",
        "surface-card": "#0f172a",
        accent: "#7c3aed",
        "accent-soft": "#a855f7",
        line: "rgba(148, 163, 184, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;

