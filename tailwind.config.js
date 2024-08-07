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
        booki: "url('../assets/images/booki.webp')",
        sophie: "url('src/images/sophieBluel.webp')",
        nina: "url('src/images/NinaCarducci.webp')",
        menuMaker: "url('src/images/menuMaker.webp')",
        grimoire: "url('src/images/vieuxGrimoire.webp')",
        kasa: "url('src/images/kasa.webp')",
      },
    },
  },

  plugins: [],
};
