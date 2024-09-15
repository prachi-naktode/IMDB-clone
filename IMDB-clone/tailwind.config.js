/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'box': 'rgba(233, 330, 214, 0.12) 0px 2px 4px 0px, rgba(229, 233, 235, 0.32) 0px 2px 16px 0px',
      }
    },
  },
  plugins: [],
}

