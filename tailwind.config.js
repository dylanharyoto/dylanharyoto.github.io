/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#34fb7b",
        darkBg: "#0c1c24",
        navBg: "#212121",
        gradientDark: "rgba(4, 12, 20, 1)",
        gradientDarker: "rgba(12, 28, 36, 1)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      fontSize: {
        "p-custom": "1.25rem",
        "h1-custom": "5rem",
        "h2-custom": "3rem",
        "h3-custom": "2.5rem",
        "h4-custom": "2.25rem",
        "h5-custom": "1.75rem",
        "h6-custom": "1.5rem",
      },
      screens: {
        mobile: "768px",
        large: "1500px",
      },
    },
  },
  plugins: [],
};