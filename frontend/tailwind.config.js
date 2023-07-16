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
          100: "FCFAFF", // main text
          800: "#4EE1A0", // green
        },
        secondary: {
          70: "#242424", // forms background
          600: "#D9D9D9", // secondary text
        },
        status: {
          warningRed: "#FF6F5B", // invalid input
        },
      },
      backgroundColor: {
        primary: "#151515",
      },
    },
  },
  plugins: [],
};
