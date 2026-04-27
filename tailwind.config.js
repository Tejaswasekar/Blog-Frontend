/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      colors: {
        primary: '#1a1a1a',
        secondary: '#4b5563', // gray-600
        accent: '#10b981', // emerald-500
        surface: '#ffffff',
        background: '#f8fafc', // slate-50
      }
    },
  },
  plugins: [],
}
