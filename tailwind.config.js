/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
       fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
       fontFamily: {
        sans: ['Ubuntu', 'sans-serif'], // заменяем дефолтный sans
      },
    },
  },
       screens:{
      "mb":{max:"510px"}
    },
  plugins: [],
}

