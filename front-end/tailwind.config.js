/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors:{
      gold : '#daa520',
      black : '#010b13',
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'lightGold': '#FFEC8B',
      'lightGray' : '#CCCCCC',
      'darkGray' : '#333333',
      'darkGold' : '#b8860b',
      'beige' : '#fde5d4',
      'darkBlue': '#071e2f',
      'deep-purple': '#6a1b9a',
      'gold1': '#ffd700',
      'silver1': '#c0c0c0',
      charcoal: '#333333', // Charcoal
      onyx: '#353535', // Onyx
      'jet-black': '#1e1e1e', // Jet Black
      ebony: '#555555', // Ebony
      licorice: '#1a1a1a', // Licorice
      coal: '#2d2d2d',
    },
    extend: {
      fontFamily:{
        'oswald' : ["Oswald", 'sans-serif']
      }
    },
  },
  plugins: [

  ],
}

