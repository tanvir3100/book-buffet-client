/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        loft: "loft 1s ease-in-out infinity",
      },
      keyframes:{
        loft: {
          "0% 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {transform: "rotate(3deg)"},
        },
      },
    },
  },
  plugins: [require("daisyui")],
}

