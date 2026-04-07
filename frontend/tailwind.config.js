/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'exrsim-dark': '#0f172a',
        'exrsim-gray': '#1e293b',
        'exrsim-orange': '#f97316',
        'exrsim-orange-light': '#fb923c',
      },
    },
  },
  plugins: [],
}