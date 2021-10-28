module.exports = {
  // purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class' or false
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: {
        DEFAULT: "#d32f2f",
      },
      white: {
        DEFAULT: "#ffffff",
      },
      black: {
        text: "#212529",
        opacity30: "rgba(0 ,0 ,0, 0.3)",
        DEFAULT: "#111111",
      },
      gray: {
        light: "#E3E3E3",
        light_2: "#f8f9fa",
        DEFAULT: "#909090",
      },
      deepOrange: {
        DEFAULT: "#ffab91",
      },
      yellow: {
        DEFAULT: "#ffc107",
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  plugins: [],
}
