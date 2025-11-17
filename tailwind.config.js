/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0f5c3b',
        'primary-green': '#1a4d3e',
        'accent-orange': '#ff8c42',
        'accent-orange-light': '#ffb380',
        'text-light': '#f0f0f0',
        'bg-dark': '#0d1117',
      },
    },
  },
  plugins: [],
}
