module.exports = {
  purge: {
    enable: process.env.NODE_ENV === 'production',
    content: [
      'components/*'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
