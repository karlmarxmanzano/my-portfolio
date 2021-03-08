module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        primary: {
          light: '#1565C0',
          DEFAULT: '#003C8F',
          dark: '#003C8F',
        },
        accent: {
          light: '#E3B341',
          DEFAULT: '#E3B341',
          dark: '#E3B341',
        },
        light: {
          light: '#8892B0',
          DEFAULT: '#6B7280',
          dark: '#6B7280',
        },
        night: {
          light: '#293F54',
          DEFAULT: '#192734',
          dark: '#15202B'
        },
      }
    }
  },
  variants: {
    extend: {
      display: ['dark']
    },
  },
  plugins: [],
}
