module.exports = {
  content: ["../../public/**/*.html", "../../.tmp/**/*.html"],
  theme: {
    fontFamily: {
      sans: [
        "Raleway",
        "Proxima Nova",
        "Avenir",
        "Helvetica Neue",
        "system-ui",
      ],
    },
    extend: {
      colors: {
        water: {
          100: "#EEF7FF",
          200: "#E2F1FE",
          300: "#D7EBFC",
          400: "#CBE4FB",
          500: "#BDDCF9",
          600: "#B0D5F7",
          700: "#A3CEF5",
          800: "#96C6F2",
          900: "#8AC0F2",
        },
        apple: {
          12: "#FFD5D9",
          25: "#FFB8BE",
          50: "#FF9BA4",
          75: "#FF8792",
          100: "#FF7884",
          200: "#FF6D7A",
          300: "#FF6372",
          400: "#FE5969",
          500: "#FE4F60",
          600: "#F34C5C",
          700: "#E84857",
          800: "#DE4553",
          900: "#D44250",
        },
        sandy: {
          100: "#FFD3A6",
          200: "#FFCE9B",
          300: "#FFC891",
          400: "#FFC286",
          500: "#FFBD7B",
          600: "#FCAF6E",
          700: "#FAA762",
          800: "#FAA157",
          900: "#FA9C4E",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
