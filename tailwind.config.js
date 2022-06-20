const plugin = require('tailwindcss/plugin');

const focusedSiblingPlugin = plugin(({ addVariant }) => {
  addVariant('focused-sibling', ({ container }) => {
    container.walkRules((rule) => {
      // eslint-disable-next-line no-param-reassign
      rule.selector = `:focus + .focused-sibling\\:${rule.selector.slice(1)}`;
    });
  });
});

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cs-gray': '#B6B6B6',
        'cs-soft-gray': '#f2f2f2',
        'cs-red': '#B6B6B6',
        'cs-blue': '#157FFF',
        'cs-black': '#001226',
        'cs-hard-black': '#000E1F',
        'cs-rose': '#FF338F',
        'cs-white': '#F2F2F7',
        'cs-yellow': '#F6AE13',
        'cs-pink': '#E91E63',
        'cs-orange': '#E91E63',
      },
      fontFamily: {
        title: ['Poppins', 'sans-serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['focused-sibling'],
    },
  },
  plugins: [focusedSiblingPlugin],
};
