/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aeonik: ["Aeonik", "sans-serif"],
      },
      animation: {
        blink: 'blink 1s infinite', // Defines a custom 'blink' animation with a 1s duration
        fadeOut: 'fadeOut 0.5s ease-out forwards', // 1s fade-out animation
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }, // Blinks by changing opacity

        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
