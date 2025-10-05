/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          600: '#1d4ed8',
        },
      },
      borderRadius: { xl: '12px' },
      boxShadow: {
        soft: '0 8px 24px rgba(2,6,23,0.08)'
      }
    },
  },
  plugins: [],
}


