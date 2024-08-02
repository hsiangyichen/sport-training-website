/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          "linear-gradient(to right, rgba(27, 27, 27, 1) 0%, rgba(0, 0, 0, 0.5) 43%, rgba(130, 117, 97, 0) 100%)",
      },
      colors: {
        "dark-blue": "#1C2433",
      },
    },
  },
  plugins: [],
};
