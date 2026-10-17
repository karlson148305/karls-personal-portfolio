import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: "#F0F0EB", deep: "#E7E8E2" },
        surface: "#FAFAF7",
        line: { DEFAULT: "#D5D6CF", strong: "#C9CAC2" },
        ink: { DEFAULT: "#15171A", soft: "#2E3237", muted: "#4B5057" },
        board: { DEFAULT: "#1F2226", line: "#33383E", edge: "#3A3F45", text: "#B9BDC3" },
        signal: { DEFAULT: "#F2B705", ink: "#7A5200" },
      },
      fontFamily: {
        sans: ["Barlow", "system-ui", "sans-serif"],
        display: ['"Barlow Condensed"', "Barlow", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        page: "1200px",
      },
    },
  },
  plugins: [],
} satisfies Config;
