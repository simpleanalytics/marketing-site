const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

// Silence a deprecation warning
// https://github.com/tailwindlabs/tailwindcss/issues/4690
delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

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

module.exports = {
  darkMode: "class",
  theme: {
    colors: {
      ...colors,
      red: {
        100: "#FFC0CB",
        200: "#FFA2B4",
        300: "#FF859C",
        400: "#FF687F",
        500: "#FF4F64",
        600: "#DE3243",
        700: "#BC1F2A",
        800: "#9B0F1C",
        900: "#79040E",
      },
      blue: {
        50: "#FCFCFC",
        100: "#F2F9FC",
        200: "#D6F9FF",
        300: "#BCF7FE",
        400: "#92ECFC",
        500: "#64D8F5",
        600: "#43CEEE",
        700: "#28C6E6",
        800: "#13C2E1",
        900: "#00BDDC",
      },
      gray: {
        50: "#F9FBFB",
        100: "#F1F4F4",
        200: "#DFE4E5",
        300: "#C4CDCF",
        400: "#94A4A6",
        500: "#697D80",
        600: "#415659",
        700: "#2B3F42",
        800: "#1C3032",
        900: "#0F2123",
      },
    },
    extend: {
      fontFamily: {
        sans: ["SpaceGrotesk", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        themeBackground: "var(--background)",
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
