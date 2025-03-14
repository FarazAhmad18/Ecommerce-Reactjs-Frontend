/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom color here
        primary: "#DB4444",       // You can name it anything
        secondary: "#F59E0B",
        softGray: "#f3f4f6"
      },
    },
  },
  plugins: [],
};
