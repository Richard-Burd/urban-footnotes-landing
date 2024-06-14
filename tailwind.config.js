/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-title": "#b5f5a5ff",
        "pink-title": "#e7c7c7ff",
        "navbar-home": "#9b8d78ff",
        "navbar-about": "#898886ff",
        "navbar-team": "#e6e6e6ff",
        "navbar-product": "#ffafafff",
        "navbar-samples": "#64df46ff",
        "navbar-ordering-our-product": "#ffffffff",
        "navbar-ads": "#9b8d78ff",
        "navbar-references": "#6baaf5ff",
      },
      fontSize: {
        "2.5xl": ["1.65rem", { lineHeight: "2.3rem" }],
        "6.5xl": ["4.36rem", { lineHeight: "6rem" }],
      },
    },
  },
  plugins: [],
};
