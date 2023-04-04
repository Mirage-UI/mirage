/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#03040E',
        primary600: '#3F4EC4',
      },
      fontSize: {
        xs: '12',
        sm: '14px',
        default: '16px',
        lg: '18px',
        h1: '56px',
        h2: '46px',
        h3: '38px',
        h4: '30px',
        h5: '24px',
        h6: '20px',
        core60: '60px',
        core80: '80px',
        core96: '96px',
      },
      fontWeight: {},
      spacing: {},
      backgroundImage: {
        hero: "url('../public/stars.svg')",
      },
    },
  },
  plugins: [],
};
