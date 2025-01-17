/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBg1: "url('./src/assets/images/hero-bg_1.png')",
        "hero-grad":
          "linear-gradient(to bottom, #000000 0%, #200D42 34%, #4F21A1 65%, #A46EDB 82%)",
        "about-grad":
          "linear-gradient(to bottom, #000000 0%, #200D42 40%, #4F21A1 65%)",
        "text-gradient":
          "linear-gradient(90deg, #DD7DFF 0%, #E1CD86 29%, #8BCB92 51%, #71C2EF 76%, #3BFFFF 100%)",
      },
    },
  },
  plugins: [],
};
