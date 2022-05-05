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
        50: "#FFEEF1",
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
        100: "#E7F4F4",
        200: "#D0E1E3",
        300: "#A4BDC0",
        400: "#8DA3A6",
        500: "#697D80",
        600: "#425659",
        700: "#2A373A",
        800: "#232E2F",
        900: "#1F2728",
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
          fontDisplay: "swap",
          src: `url("/fonts/space-grotesk/${file}") format("woff2");`,
        })),
      });
    }),
  ],
};
