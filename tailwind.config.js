/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {},
    colors: {
      'ui-purple': '#FF18FC',
      'ui-black': '#151515',
      'ui-dark': '#353535',
      'ui-green': '#77FF00',
      'ui-blue': '#4639FE'
    },
    fontSize: {
      sm: ['18px', '24px'],
      base: ['20px', '24px'],
      lg: ['27px', '27px'],
      xl: ['32px', '32px'],
      '2xl': ['48px', '48px'],
      '3xl': ['60px', '60px'],
      '4xl': ['200px', '120%']
    }
  },
  plugins: []
};
