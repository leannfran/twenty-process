/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#47A29B",
        secondary: "#235F5B",
        secondary2:"#09433E",
        texto:'#0F201E'
      },
    },
    dimensions: {
      xxl: "1440px",
    },
  },
  plugins: [
    require('tailwindcss-animated')

  ],
});
