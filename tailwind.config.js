/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        primary_c : '#26C6DA'
      }
    },
    plugins: [],
  }
}
module.exports = {
  //...
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#26C6DA",
        "secondary": "#f6d860",
        "accent": "#37cdbe",
        "neutral": "#3d4451",
        "base-100": "#ffffff",
      },
    },
      , "dark", "cupcake"],
  },
}