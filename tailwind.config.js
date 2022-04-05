const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

const fonts = [
  {
    fontWeight: 300,
    file: "light.woff2",
  },
  {
    fontWeight: 400,
    file: "regular.woff2",
  },
  {
    fontWeight: 500,
    file: "medium.woff2",
  },
  {
    fontWeight: 600,
    file: "semi-bold.woff2",
  },
  {
    fontWeight: 700,
    file: "bold.woff2",
  },
];

const red = {
  100: "#FFC0CB",
  200: "#FFA2B4",
  300: "#FF859C",
  400: "#FF687F",
  500: "#FF4F64",
  600: "#DE3243",
  700: "#BC1F2A",
  800: "#9B0F1C",
  900: "#79040E",
};

module.exports = {
  darkMode: "class",
  theme: {
    colors: {
      ...colors,
      red,
    },
    extend: {
      fontFamily: {
        sans: ["SpaceGrotesk", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": fonts.map(({ fontWeight, file }) => ({
          fontFamily: "SpaceGrotesk",
          fontStyle: "normal",
          fontWeight,
          src: `url("./fonts/space-grotesk/${file}") format("woff2");`,
        })),
      });
    }),
  ],
};
