/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  important: "#root",
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },
      dropShadow: {
        top: "0px -8px 16px rgba(0, 0, 0, 0.10)",
      },
      colors: {
        primary: {
          100: "#FCFAFF", // white text
          800: "#4EE1A0", // green
        },
        secondary: {
          600: "#9B9B9B", // gray text
        },
        status: {
          warningRed: "#FF6F5B", // invalid input
        },
      },
      backgroundColor: {
        primary: "#151515", // black
        secondary: "#4EE1A0", // green
        tertiary: "#FCFAFF", // white
        form: "#242424", // contact form
      },
      fontSize: {
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "56px",
        "6xl": "80px",
        "7xl": "88px",
        "8xl": "96px",
        "9xl": "128px",
      },
      letterSpacing: {
        mobileParagraph: "0.6px",
        mobileSpan: "0.8px",
        mobileH5: "0.8px",
        mobileH3: "0.8px",
        mobileH2: "1.2px",
        mobileH1: "2.8px",
        tabletParagraph: "1px",
        tabletSpan: "1.2px",
        tabletH5: "1.2px",
        tabletH3: "1.8px",
        tabletH2: "4px",
        tabletH1: "4.8px",
        desktopParagraph: "0.8px",
        desktopSpan: "1.2px",
        desktopH5: "1.2px",
        desktopH3: "1.8px",
        desktopH2: "4.4px",
        desktopH1: "6.4px",
      },
      lineHeight: {
        8: "30px",
        9: "35px",
        11: "100px",
      },
    },
  },
  plugins: [],
};
