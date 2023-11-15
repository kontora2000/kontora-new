/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './public'
  ],
  theme: {
    extend: {
      content: {}
    },
    colors: {
      'ui-purple': '#FF18FC',
      'ui-black': '#151515',
      'ui-dark': '#353535',
      'ui-green': '#77FF00',
      'ui-blue': '#4639FE',
      'ui-white': '#FFFFFF',
      'ui-pale': '#FFFFFF3D',
      'ui-grek': '#FFFFFF66'
    },
    fontSize: {
      xxs: ['12px', '100%'],
      xs: ['14px', '133%'],
      smx: ['16px', '150%'],
      sm: ['18px', '133%'],
      base: ['20px', '24px'],
      mdx: ['22px', '133%'],
      md: ['24px', '24px'],
      lg: ['27px', '27px'],
      xl: ['32px', '32px'],
      '2xl': ['48px', '48px'],
      '3xl': ['60px', '60px'],
      '4xl': ['100px', '61px'],
      '5xl': ['200px', '132px']
    },
    screens: {
      xs: '360px',
      mb: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      base: '1440px',
      '2xl': '1536px'
    }
  }
};
