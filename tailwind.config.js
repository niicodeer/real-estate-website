/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-60": "#703BF7",
        "purple-70": "#946CF9",
        "purple-75": "#A685FA",
        "gray-08": "#141414",
        "gray-10": "#1A1A1A",
        "gray-15": "#262626",
        "gray-20": "#333333",
        "gray-30": "#4D4D4D",
        "gray-40": "#666666",
        "gray-50": "#808080",
        "gray-60": "#999999",
      },
      fontFamily:{
        'urbanist': ['Urbanist', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
