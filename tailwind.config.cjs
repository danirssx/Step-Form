/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      purple: "#EA4492",
      blue: {
        100: "#D5EEEC",
        200: "#A7DBD8",
        300: "#69D2E7",
        400: "#255058",
      },
      gray: {
        100: "#EBEBEB",
        200: "#707070",
        300: "#515050",
      },
      orange: {
        100: "#F38630",
        200: "#FA6900",
      },
    },
  },
  plugins: [],
};
