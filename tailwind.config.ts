import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xl": "5rem",
      },
      colors: {
        background: " rgba(var(--background)) ",
        text: " rgba(var(--text)) ",
        purple: " rgba(var(--purple)) ",
        btntext: " rgba(var(--btntext)) ",
        navbackground: " rgba(var(--navbackground)) ",
      },
    },
  },
  plugins: [],
};
export default config;
