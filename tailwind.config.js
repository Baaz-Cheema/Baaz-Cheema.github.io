/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,html}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
      'xs': { 'max': '450px' }
    },
    extend: {
      colors: {
        custom: '#1E2D3D',
      },
      fontFamily: {
        'fira': ['Fira Code', 'monospace'],
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}

