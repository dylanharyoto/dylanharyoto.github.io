module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bg-animate': 'bg-animate 16s ease-in-out infinite',
      },
      keyframes: {
        'bg-animate': {
          '0%': { backgroundImage: 'url(/Users/dylanharyoto/Documents/dylanharyoto.github.io/public/a1.JPG)' },
          '25%': { backgroundImage: 'url(/Users/dylanharyoto/Documents/dylanharyoto.github.io/public/a3.jpg)' },
          '50%': { backgroundImage: 'url(/Users/dylanharyoto/Documents/dylanharyoto.github.io/public/a4.jpg)' },
          '75%': { backgroundImage: 'url(/Users/dylanharyoto/Documents/dylanharyoto.github.io/public/a5.jpeg)' },
        },
      },
    },
  },
  plugins: [],
}