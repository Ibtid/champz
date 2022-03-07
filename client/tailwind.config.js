module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      red: '#C62f41',
      black: '#000000',
      gray: '#a19e99',
      galleryButton: '#e5e5e5',
      blue: '#130832',
    },
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Orbitron: ['Orbitron', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
