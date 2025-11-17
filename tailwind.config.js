/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sake-dark': '#2c1810',
        'sake-brown': '#8b4513',
        'sake-cream': '#f5e6d3',
      },
    },
  },
  plugins: [],
}
