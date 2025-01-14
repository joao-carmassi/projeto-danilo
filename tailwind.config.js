import tailwindcssAnimate from "tailwindcss-animate";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        montSerrat: ["Montserrat", "sans-serif"],
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [tailwindcssAnimate, daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#009fe3",

          secondary: "#080069",

          accent: "#00ffff",

          neutral: "gray",

          "base-100": "white",
          "base-200": "#f5f5f5",
          "base-300": "#ebebeb",

          info: "#0000ff",

          success: "green",

          warning: "yellow",

          error: "red",
        },
      },
    ],
  },
};
