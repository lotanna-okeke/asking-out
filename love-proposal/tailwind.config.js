export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#FECACA", // Soft pink
          secondary: "#FDF2F8", // Light pink background
          accent: "#BE185D", // Deep rose
        },
        fontFamily: {
          playful: ['"Comic Neue"', "cursive"],
        },
      },
    },
    plugins: [],
  };