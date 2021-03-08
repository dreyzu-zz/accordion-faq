module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "375px",
      md: "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
