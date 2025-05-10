import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))", 
      },
      colors: {
        "orange1" : "#FC8A06",
        "white1" : "#FAFAFA",
        "green1" : "#028643",
        "blue1" : "#03081F",
        "grey1" : "#D9D9D9",
        "blue2" : "#03081F",
        "black1" : "#060606"
      }
    },
  },
  plugins: [],
};
export default config;
