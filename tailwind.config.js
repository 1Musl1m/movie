/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      'sm': {'max': '639px'},

      'md': {'max': '767px'},

      'lg': {'max': '1023px'},

      'xl': {'max': '1279px'},

      '2xl': {'min': '1535px'},
    }
  },
  plugins: [],
}

