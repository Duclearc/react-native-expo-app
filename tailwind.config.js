const { themeColors } = require("./constants/Colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    fontFamily: {
      mono: ["Space Mono"],
    },
    colors: themeColors,
  },
  plugins: [],
};
