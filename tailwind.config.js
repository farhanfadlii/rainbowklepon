/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./src/index.css",
  ],
  theme: {
    screens: {
      'handphonekecil': '321px',
      'md': '768px',
    },
    extend: {
      fontFamily:{
        poppins: ["Poppins", "sans-serif"]
      },
      backgroundImage:{
        'wave-atas': "url('./assets/waveatas.svg')",
        'wave-bawah' : "url('./assets/wavebawah.svg')",
      },
    },
  },
  plugins: [],
}