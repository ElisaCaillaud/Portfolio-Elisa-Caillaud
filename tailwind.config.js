module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      darkGreen: "#3C6255",
      lightGreen: "#EDF1D6",
      green: "#609966",
      middleGreen: "#9DC08B",
    },
    fontFamily: {
      abril: ["Abril", "serif"],
      lato: ["Lato", "sans-serif"],
    },
    fontSize: {
      sm: "16px",
      base: "17px",
      xl: "23px",
      "40px": "40px",
      "45px": "45px",
      "28px": "28px",
    },
    borderRadius: {
      none: "0",
      sm: "16px",
      DEFAULT: "13px",
      md: "23px",
    },
    extend: {
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      boxShadow: {
        menu: "0 3px 36px -4px rgba(0, 0, 0, 0.14)",
      },
      width: {
        155: "155px",
      },
      backgroundImage: {
        booki: "url('public/images/booki.webp')",
        sophie: "url('src/assets/images/sophieBluel.webp')",
        nina: "url('src/assets/images/NinaCarducci.webp')",
        menuMaker: "url('src/assets/images/menuMaker.webp')",
        grimoire: "url('src/assets/images/vieuxGrimoire.webp')",
        kasa: "url('src/assets/images/kasa.webp')",
      },
      screens: {
        "max-1150": { max: "1150px" },
        "min-1825": { min: "1825px" },
      },
    },
  },

  plugins: [],
};
