/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0B',
        foreground: '#F8FAFC',
        brand: {
          orange: '#FF5A1F',
          cyan: '#00F0FF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Archivo Narrow', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
