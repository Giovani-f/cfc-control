/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#1D2024',
        'custom-yellow': {
          50: '#FFF8EB',
          100: '#FFF1D6',
          200: '#FFF1D6',
          300: '#FFD685',
          400: '#FFCF70',
          500: '#FFC247',
          600: '#FFB41F',
          700: '#F5A300',
          800: '#CC8800',
          900: '#A36D00',
          950: '#7A5200',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
