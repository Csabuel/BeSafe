/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'color--primary': '#282224',
        'color--bg': '#fff',
        'color--secondary': '#DB2777  ',

      },
    },
  },
  plugins: [],
}