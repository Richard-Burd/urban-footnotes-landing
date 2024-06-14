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
        "green-title": "#b5f5a5ff", // Your custom color value
      },
      fontSize: {
        "2.5xl": ["1.65rem", { lineHeight: "2.3rem" }],
      },
    },
  },
  plugins: [],
};
