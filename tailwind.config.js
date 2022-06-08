module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        Mytheme: {
          primary: "#ecf0f3",
          secondary: "#ff014f",
          accent: "#ecf0f3",
          neutral: "#1e2125",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}