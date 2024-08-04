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
        linkedin: {
          blue: "#0a66c2",
          "light-blue": "#e7f3ff",
          black: "#000000",
          "dark-gray": "#333333",
          "medium-gray": "#86888a",
          "light-gray": "#f3f2ef",
          white: "#ffffff",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "system-ui",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Fira Sans",
          "Ubuntu",
          "Oxygen",
          "Oxygen Sans",
          "Cantarell",
          "Droid Sans",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Lucida Grande",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
