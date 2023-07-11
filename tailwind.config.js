/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // container: {
  //   center: true,
  //   screens: {
  //     sm: '640px',
  //     md: '768px',
  //     lg: '1024px',
  //     xl: '1408px',
  //     '2xl': '1408px',
  //   },
  //   padding: {
  //     DEFAULT: '1rem',
  //     sm: '2rem',
  //     lg: '2rem',
  //     xl: '0rem',
  //     '2xl': '0rem',
  //   },
  // },
  variants: {
    // display:['group-hover']
  },
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        brightRed: '#B11E31',
        brightRedLight: '#FFF0F6',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        faintBtn: '#FFDEEB',
        faintBtnText: '#B11E31',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPalRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}


