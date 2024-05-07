/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Mono', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "primary": "hsl(172, 67%, 45%)",
        "very_dark_cyan": "hsl(183, 100%, 15%)",
        "dark_cyan": "hsl(186, 14%, 43%)",
        "gray_cyan": "hsl(184, 14%, 56%)",
        "light_gray_cyan": "hsl(185, 41%, 84%)",
        "very_light_gray_cyan": "hsl(189, 41%, 97%)"
      }
    }
  },
  plugins: [],
}

