module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#333333", 
        accent: "#666666",
        background: "#ffffff"
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Montserrat", "sans-serif"]
      },
      backgroundImage: {
        'restaurant-bg': "url('/src/assets/background.png')"
      }
    },
  },
  plugins: [],
} 