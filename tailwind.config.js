module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
         primary: 'FF6363',
         secondary: {
           100: 'E2E2D5',
           200: '888883',
         }
      },
      fontSize: {
         mammoth: ['10rem', {lineHeight:'1'}]
      }, 
      fontFamily: {
        custom: [
          'Helvetica',
          'Arial',
          'Lato'
        ]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
