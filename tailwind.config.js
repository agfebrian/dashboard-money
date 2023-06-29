/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      serif: ["DM Sans", "serif"],
    },
    extend: {
      colors: {
        primary: "#1d4ed8",
      },
    },
  },
  plugins: [],
};
