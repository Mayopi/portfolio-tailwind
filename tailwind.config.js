/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "contact.html"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#06b6d4",
        dark: "#0f172a",
        secondary: "#64748b",
      },

      screens: {
        "2xl": "1320px",
      },

      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-7deg)" },
          "50%": { transform: "rotate(7deg)" },
        },
      },
    },
  },
  plugins: [],
};
