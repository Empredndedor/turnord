/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563eb', // --brand
          dark: '#1e40af',    // --brand-dark
        },
        accent: '#22c55e',    // --accent
        warning: '#facc15',   // --warning
        'bg-soft': '#f8fafc', // --bg-soft
        'text-main': '#0f172a', // --text-main
      },
    },
  },
  plugins: [],
}
