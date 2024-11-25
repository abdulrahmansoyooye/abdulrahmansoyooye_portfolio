module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Geneva"],
      },
      colors: {
        "alt-color": "#f8f9fa",
        "background-color": "#FFFF",

        "red-color": "#dd494b",
        "orange-color": "#D67D3E",
        "blue-color": "#408b94",
        "dark-blue-color": "#132135",
        "light-color": "#ffffff",
        "dark-color": "#132135",
      },
    },
    animation: {
      scroll:
        "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    },
    keyframes: {
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
    },
  },
};
