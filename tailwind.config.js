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
        "title-text-home": "#9b8d78ff",
        "title-text-about": "#8a8a8aff",
        "title-text-team": "#79d3fc",
        "title-text-product": "#e7c7c7ff",
        "title-text-samples": "#b5f5a5ff",
        "title-text-ordering-our-product": "#e1d3bfff",
        "title-text-ads": "#ffbf00",
        "title-text-references": "#91baeaff",
        "navbar-home": "#9b8d78ff",
        "navbar-about": "#898886ff",
        "navbar-team": "#73d9eb",
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
