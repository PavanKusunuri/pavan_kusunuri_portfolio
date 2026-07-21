/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        /* Apple-style accents */
        apple: {
          blue: "#0a84ff",
          emerald: "#10b981",
          "emerald-light": "#6ee7b7",
          cyan: "#06b6d4",
          surface: "rgba(255,255,255,0.05)",
          border: "rgba(255,255,255,0.08)",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        glass: "0 8px 32px 0 rgba(0,0,0,0.37)",
        glow: "0 0 40px rgba(16,185,129,0.25)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
      },
      backdropBlur: {
        xs: "2px",
        apple: "20px",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "apple-spring": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      letterSpacing: {
        apple: "-0.022em",
      },
    },
  },
  plugins: [],
};