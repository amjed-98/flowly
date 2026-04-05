import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#020617",
        midnight: "#0F172A",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(circle at top, rgba(99,102,241,0.18), transparent 42%)",
      },
      boxShadow: {
        spotlight: "0 30px 80px rgba(15, 23, 42, 0.32)",
      },
      maxWidth: {
        content: "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
