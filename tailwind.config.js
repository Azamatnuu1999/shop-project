/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        fontPrimary: "#2A2C1F",
        fontSecondary: "#65665C",
        btnColor: "#CF6F49",
        bgColor: "#F5F5F2"
      },
    },
  },
  plugins: [],
}

