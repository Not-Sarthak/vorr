import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "offwhite": "#EAEAEA",
        "light-gray": "#A9A9A9",
        "off-black": "#111111",
      },
      fontFamily: {
        instrument: ["Instrument Sans", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
