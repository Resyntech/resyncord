import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        discord: {
          black: "#1E1F22",
          "light-dark": "#313338",
          dark: "#2B2D31",
          "dark-special": "#41434A",
          gray: "#B5BAC1",
          "inactive-gray": "#80848E",
          paper: "#F2F3F5",
          contrast: "#5865F2",
          info: "#0D8AC3",
          active: "#23A559",
          idle: "#F0B232",
          busy: "#C0383D",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
