import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#08080A",
        charcoal: "#0F0F12",
        panel: "#16161A",
        panelLight: "#1D1D22",
        hairline: "#2A2A30",
        silver: {
          100: "#F5F5F7",
          200: "#E4E4E8",
          300: "#C9C9D1",
          400: "#A7A7B2",
          500: "#84848F",
          600: "#5C5C66",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.7)",
        glow: "0 0 0 1px rgba(196,196,210,0.08), 0 0 40px -8px rgba(196,196,210,0.15)",
      },
      backgroundImage: {
        "silver-gradient": "linear-gradient(135deg, #F5F5F7 0%, #C9C9D1 45%, #84848F 100%)",
        "panel-gradient": "linear-gradient(180deg, #16161A 0%, #0F0F12 100%)",
      },
      keyframes: {
        eq: {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        eq1: "eq 1.1s ease-in-out infinite",
        eq2: "eq 0.9s ease-in-out infinite 0.15s",
        eq3: "eq 1.3s ease-in-out infinite 0.3s",
        eq4: "eq 0.8s ease-in-out infinite 0.45s",
        eq5: "eq 1.0s ease-in-out infinite 0.6s",
        fadeUp: "fadeUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
