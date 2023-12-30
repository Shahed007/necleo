/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        work_sans: "'Work Sans', sans-serif",
      },
      colors: {
        primary: "#FA782F",
        color_secondary: "#C4C4C4",
      },
    },
  },
  plugins: [],
};
