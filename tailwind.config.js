/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        background: 'rgb(0 0 0)',
        primary: {
          DEFAULT: 'rgb(34 211 238)',
          foreground: 'rgb(255 255 255)',
        },
        input: 'rgb(255 255 255 / 0.2)',
      },
    },
  },
  plugins: [],
};
