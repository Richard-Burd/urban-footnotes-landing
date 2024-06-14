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
      },
      fontSize: {
        "2.5xl": ["1.65rem", { lineHeight: "2.3rem" }],
        "6.5xl": ["4.36rem", { lineHeight: "6rem" }],
      },
    },
  },
  plugins: [],
};
