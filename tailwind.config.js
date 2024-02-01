/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Segoe UI"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
