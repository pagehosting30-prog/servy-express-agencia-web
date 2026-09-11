import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#EDE0C3",
        "sand-deep": "#E2D0A0",
        cream: "#FBF6E9",
        ink: "#2B2118",
        "ink-soft": "#55493A",
        teal: "#0F5C52",
        "teal-deep": "#0A413A",
        terracotta: "#C1502E",
        "terracotta-deep": "#9F3E22",
        mango: "#E29321",
        olive: "#6E7C2C",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
      boxShadow: {
        hard: "5px 5px 0 #2B2118",
        "hard-lg": "6px 6px 0 #2B2118",
      },
      borderRadius: {
        card: "10px",
      },
    },
  },
  plugins: [],
};

export default config;
