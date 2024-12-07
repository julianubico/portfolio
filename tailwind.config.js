/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          "100%": { transform: "translateX(0)" },
          "0%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
