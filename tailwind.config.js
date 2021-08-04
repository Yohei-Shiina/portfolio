const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      widest: ".3em",
    },
    container: {
      center: true,
    },
    extend: {
      height: {
        200: "200px",
        250: "250px",
        300: "300px",
        350: "350px",
        400: "400px",
        450: "450px",
        500: "500px",
        550: "550px",
      },
      spacing: {
        21: "10rem",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      inset: {
        "1/5": "20%",
        "15%": "15%",
        "10%": "10%",
        "5%": "5%",
      },
      backgroundImage: (theme) => ({
        myself: "url('/img_myself.svg')",
        engineering: "url('/img_engineering.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.4xl") },
        h2: { fontSize: theme("fontSize.2xl") },
        h3: { fontSize: theme("fontSize.xl") },
      });
    }),
  ],
};
