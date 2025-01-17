/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBg1: "url('./src/assets/images/hero-bg_1.png')",
        "hero-grad":
          "linear-gradient(to bottom, #000000 0%, #200D42 34%, #4F21A1 65%, #A46EDB 82%)",
      },
    },
  },
  plugins: [],
};
