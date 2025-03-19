/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Added custom color here
        primary: "#E97575",     
        secondary: "#F59E0B",
        softGray: "#f3f4f6"
      },
    },
  },
  plugins: [],
};
