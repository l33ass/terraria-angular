/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/*.{html,ts}",
    "./src/app/components/**/**/*.{html, ts}"
  ],
  theme: {
    fontFamily: {
      sans: ['Andy-Bold', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
