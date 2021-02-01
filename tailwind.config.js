module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#B73225"
        },
        blue: {
          DEFAULT: "#004E7C"
        },
        marron: {
          DEFAULT: "#591COB"
        },
        gray: {
          light: "#DCE1E3",
          DEFAULT: "#5C5F58",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
