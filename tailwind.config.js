/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["./templates/*.html", "./templates/fragments/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("htmx-settling", ["&.htmx-settling", ".htmx-settling &"])
      addVariant("htmx-request", ["&.htmx-request", ".htmx-request &"])
      addVariant("htmx-swapping", ["&.htmx-swapping", ".htmx-swapping &"])
      addVariant("htmx-added", ["&.htmx-added", ".htmx-added &"])
    })
  ]
}
 