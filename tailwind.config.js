/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/PhoneSignIn/PhoneSignIn.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-light-gray": "#F2F5F5",
      },
      boxShadow: {
        "custom-light": "0 2px 15px 0 rgba(0, 0, 0, 0.1)", // Adjust color if needed
      },
    },
  },
  plugins: [],
};
