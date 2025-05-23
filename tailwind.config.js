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
        // custom colors for shadows are stored in the
        // ./styles/global.css file because TailwindCSS
        // default shadows don't work and custom <style jsx>
        // tags in React components can't interpolate props
        "title-text-home": "#ffe873ff",
        "title-text-about": "#b4b4b4ff",
        "title-text-team": "#73ebe4ff",
        "title-text-product": "#e7c7c7ff",
        "title-text-samples": "#8adc75ff",
        "title-text-order": "#decd7a",
        "title-text-contact": "#bba4eb",
        "title-text-ads": "#F7A969",
        "title-text-references": "#91baeaff",
        "navbar-home": "#ffe873ff",
        "navbar-about": "#b4b4b4ff",
        "navbar-team": "#73d9eb",
        "navbar-product": "#ffafafff",
        "navbar-samples": "#64df46ff",
        "navbar-order": "#f7eb7e",
        "navbar-contact-us": "#9177c9",
        "navbar-ads": "#F7A969",
        "navbar-references": "#6baaf5ff",
      },
      fontSize: {
        "2.5xl": ["1.65rem", { lineHeight: "2.3rem" }],
        "6.5xl": ["4.36rem", { lineHeight: "6rem" }],
        "6.4xl": ["3.50rem", { lineHeight: "5rem" }],
        "6.3xl": ["2rem", { lineHeight: "2.5rem" }],
      },
    },
  },
  plugins: [],
};
