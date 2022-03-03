module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff3f3',
      red: '#e6042c',
      black: '#000000',
      gray: '#a19e99',
      galleryButton: '#e5e5e5',
      blue: '#01317B',
    },
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
