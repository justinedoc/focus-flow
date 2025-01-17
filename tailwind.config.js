/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBg1: "url('./src/assets/images/hero-bg_1.png')",
        heroBg2: "url('./src/assets/images/hero-bg_2.png')",
      },
    },
  },
  plugins: [],
};
