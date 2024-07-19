/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html","./src/**/*.{js,jsx,ts,tsx}", // Add this line
  ],
  darkMode: "class",
  theme: {
    extend: { fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    colors: {
      primary: "#1182c5",
      secondary: "#2aa6df",
      dark: "#1e1e1e",
      light: "#f5f5f5",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
      },
    },
    animation: {
      "spin-slow": "spin 40s linear infinite",
    },
  },
  },
  plugins: [],
}

