/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark1: '#131319',
        dark2: '#27292D',
        gray1: '#6B6C70',
        gray2: '#7F8084',
        darkGray: '#35373B',
        darkBg: '#191920',
        lightGray: '#C5C7CA',
        blueAccent: '#4A96FF',
      },
    },
  },
  plugins: [],
}
