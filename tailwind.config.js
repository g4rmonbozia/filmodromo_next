/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'yellow': '#ffff00',
        'cyan': '#00ffff',
        'green': '#00ff00',
        'red': {
          DEFAULT: '#ff0000',
          400: '#ff4040',
          300: '#ff8080',
          200: '#ffbfbf',
        },
        'magenta': '#ff00ff',
        'blue': {
          DEFAULT: '#0000ff',
          400: '#4040ff',
          300: '#8080ff',
          200: '#bfbfff',
        },
      },
    },
  },
  plugins: [],
}
