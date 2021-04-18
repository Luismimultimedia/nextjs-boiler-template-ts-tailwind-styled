const colors = {
  primary: {
    400: "var(--color-primary-400)",
    500: "var(--color-primary-500)",
    600: "var(--color-primary-600)",
  },
  gray: {
    100: "var(--color-gray-100)",
    200: "var(--color-gray-200)",
    300: "var(--color-gray-300)",
    400: "var(--color-gray-400)",
    500: "var(--color-gray-500)",
  },
}

const fontSize = {
  text: {
    sm: "var(--text-sm)",
    base: "var(--text-sm)",
    lg: "var(--text-sm)",
    xl: "var(--text-sm)",
    "2xl": "var(--text-sm)",
  }
}

module.exports = {
  purge: {
    enable: process.env.NODE_ENV === 'production',
    content: [
      'components/*'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors,
      fontSize,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
  ],
}
