/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#282550',
        secondaryColor: '#4267B2',
        hightlightColor: '#212529',
      },
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1320px',
        '2xl': '1496px',
      },
    },
    plugins: [],
  },
};
