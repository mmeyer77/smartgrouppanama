// See https://next.tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    screens: {
      'xs': '370px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#01AAA5',
      'secondary': '#007874',
      
     })
  },
  variants: {},
  important: true,
  plugins: []
};
