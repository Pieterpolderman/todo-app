/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}", // If using Pages Router
    "./src/styles/**/*.css", // Ensure it scans your CSS files too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
