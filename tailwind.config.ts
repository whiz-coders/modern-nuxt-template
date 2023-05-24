export default {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'gray-dark': '#273444'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/*.vue',
    './pages/**/*.vue',
    './pages/**/**/*.vue',
    './pages/**/**/**/*.vue',
    './composables/*.{js,ts}',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwindcss-dark-mode')()
  ],
  variants: {
    extend: {
      display: ['dark']
    }
  }
}
