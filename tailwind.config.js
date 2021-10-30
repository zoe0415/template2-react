module.exports = {
  // purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class' or false
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      // 'lg': '1024px',
      // 'xl': '1280px',
      lg: "990px",
      xl: "1200px",
      "2xl": "1536px",
    },
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
        DEFAULT: "#111111",
      },
      gray: {
        light: "#E3E3E3",
        light2: "#f8f9fa",
        DEFAULT: "#909090",
      },
      deepOrange: {
        DEFAULT: "#ffab91",
      },
      yellow: {
        light: "#fff2d1",
        DEFAULT: "#ffc107",
      },
      geyser: {
        DEFAULT: "#d2dae2",
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
      height: ["group-hover"],
      inset: ["group-hover"],
      textColor: ["hover"],
    },
  },
  plugins: [],
}
