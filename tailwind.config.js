/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster', "sans-serif"],
        rajdhani : ['Rajdhani', "sans-serif"],
      }
    },
  },
  plugins: [require("daisyui")],
}

