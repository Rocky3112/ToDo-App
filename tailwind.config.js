/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6841da",
        secondary: "#e64980",
        success: "#05d505",
        "black-100": "#353a40",
        "black-200": "#2c3137",
      },
    },
  },
  plugins: [],
}

