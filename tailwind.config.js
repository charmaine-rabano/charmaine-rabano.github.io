/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-white": "#f2f2f2",
        "custom-black": "#262626",
        "custom-dark-pink": "#dd7f7a",
        "custom-light-pink": "#e8a9a6",
      },
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
        Inconsolata: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
};
