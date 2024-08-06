/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/react-simple-headless-carousel/**/*.js"],
  theme: {
    extend: {
      colors: {
        "peachy-pink": "#F8B195",
        "coral-blush": "#F67280",
        rosewood: "#C06C84",
        "dusty-purple": "#6C5B7B",
        "deep-teal": "#355C7D",
      },
    },
  },
  plugins: [],
};
