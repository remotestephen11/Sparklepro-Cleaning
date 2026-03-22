/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          yellow: {
            50: '#fffbed',
            100: '#fff4c7',
            200: '#ffe893',
            300: '#ffd85c',
            400: '#f4c62d',
            500: '#ddb010',
            600: '#b98d0b',
            700: '#926b0e',
          },
          green: {
            50: '#effbf4',
            100: '#d9f4e4',
            200: '#b7e8cc',
            300: '#8dd8ad',
            400: '#5dbc86',
            500: '#379867',
            600: '#287950',
            700: '#215f41',
          },
          red: {
            50: '#fff2f1',
            100: '#ffe0dc',
            200: '#ffc4bd',
            300: '#ff9e92',
            400: '#f26f61',
            500: '#d94d3f',
            600: '#b83f33',
          },
        },
        surface: {
          0: '#ffffff',
          50: '#f8f8f7',
          100: '#f1f1ef',
          200: '#e7e7e4',
          300: '#d6d6d1',
          400: '#a0a09a',
          500: '#6f6f69',
          600: '#4d4d49',
          700: '#2b2b28',
        },
      },
      borderRadius: {
        sm: '0.5rem',
        DEFAULT: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(24, 24, 21, 0.06)',
        card: '0 12px 32px rgba(24, 24, 21, 0.08)',
      },
      maxWidth: {
        content: '72rem',
        reading: '48rem',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },
    },
  },
  plugins: [],
}
