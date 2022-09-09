/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    tooltip: {
      styles: {
        base: {
          bg: "bg-white",
          color: "text-black",
        },
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1401px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1550px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "1141px" },
      // => @media (max-width: 767px) { ... }
      smd: { max: "959px" },

      sm: { max: "639px" },

      // => @media (max-width: 639px) { ... }
    },

    extend: {
      background: {
        headerMirror: "rgba(255,255,255,0.01)",
        card: "#DBF1FF",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      backgroundImage: {
        "header-img": "url('assets/images/bgHeaderr.svg')",
        "header-dark": "url('assets/images/bgHeaderrDark.svg')",
        "mid-img": "url('assets/images/light.svg')",
        "mid-dark": "url('assets/images/dark.svg')",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        headerTitle: "#3D3F3E",
        paragraph: "#5C5C5C",
        slate: "#0F172A",
        seaBlue: "#0080F0",
        darkColor: "#0F172A",
      },
    },
    container: {
      screens: {
        sm: "640px",
        md: "767px",
        lg: "1140px",
        xl: "1440px",
        "2xl": "1800px",
      },
    },
  },

  plugins: [],
});
