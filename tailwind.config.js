/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ubuntuGreen: "#006b3c", // Deep green from logo
        ubuntuBlue: "#0057b8",  // Strong blue from logo
      },
    },
  },
  plugins: [],
};
