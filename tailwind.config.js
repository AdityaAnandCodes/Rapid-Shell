/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xsm': '0.5rem', // Custom size smaller than `text-xs`
      },
   
    },
  },
  plugins: [],
}