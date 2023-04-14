/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          h5: '#00c8c8'
        },
        blue: {
          h5: '#052e53'
        },
        purple: {
          h5: '#403073'
        },
        pink: {
          h5: '#ba0e5f'
        }
      }
    },
  },
  plugins: [],
};

module.exports = config;
