/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1920px",
      "3xl": "2560px",
      "4xl": "3840px",
      "5xl": "5120px",
    },
    extend: {
      strongCyan: "hsl(271, 66%, 44%)",
      lightBlue: "hsl(233, 100%, 69%)",
      darkGrayishBlue: "hsl(210, 10%, 33%)",
      grayishBlue: "hsl(201, 11%, 66%)",
    },
    fontFamily: {
      sans: ["Bai Jamuree , Arial", "Times New Roman", "sans-serif"],
    },
  },
  plugins: [],
};
