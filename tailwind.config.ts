import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFA",
          300: "#FFFFFA",
          400: "#FFFFF5",
          500: "#FFFFF3",
          600: "#FFFF8F",
          700: "#FFFF2E",
          800: "#C7C700",
          900: "#666600",
          950: "#333300",
        },
        charcoal: {
          50: "#EBEAEA",
          100: "#DAD7D7",
          200: "#B3ADAD",
          300: "#8F8585",
          400: "#685F5F",
          500: "#3F3A3A",
          600: "#322E2E",
          700: "#252222",
          800: "#181616",
          900: "#0D0C0C",
          950: "#050505",
        },
      },
    },
  },
  plugins: [],
};

export default config;
