/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    container: 
    { 
      center: true, 
      padding: '1rem'
    },
    fontFamily: 
    { 
      sans: 'Inter, sans-serif',
    },
    colors: 
    {
      transparent: 'transparent',
      primary:
      { 
        black: '#000000', 
        yellow: '#FEE600', 
        white: '#FFFFFF'
      }, 
      secondary: 
      { 
        100: '#17A000',
        200: '#FDFFFB',
        300: '#ADADAD', 
        400: '#57F4FE', 
        500: '#FAFAFA', 
        600: '#FFFBEB', 
        700: '#DDDDDD',
        800: '#0C0C0C',
      },
      others:
      { 
        yellow: 
        { 
          100: '#FFFCE5', 
          200: '#FFF8B7', 
          300: '#FFF48A', 
          400: '#FFEF5C',
          500: '#FFEB2E', 
          600: '#FEE600', 
          700: '#D5C100', 
          800: '#AC9C00', 
          900: '#847700',
          1000: '#5B5200'
        },
        grey: 
        { 
          100: '#F5F5F5', 
          200: '#E0E0E0', 
          300: '#CCCCCC', 
          400: '#B8B8B8',
          500: '#A3A3A3', 
          600: '#8F8F8F', 
          700: '#7A7A7A', 
          800: '#666666', 
          900: '#525252',
          1000: '#3D3D3D'
        },
      },
    },
    keyframes: 
    { 
      "waving-hand": 
      { 
        "0%": {transform: "rotate( 0.0deg)"},
        "15%": {transform: "rotate(14.0deg)"}, 
        "30%": {transform: "rotate(-8.0deg)"},
        "40%": {transform: "rotate(14.0deg)"},
        "50%": {transform: "rotate(-4.0deg)"}, 
        "60%": {transform: "rotate(10.0deg)"},
        "70%": {transform: "rotate( 0.0deg)"},  
        "100%": {transform: "rotate( 0.0deg)"}      
      }, 
      "spin": 
      { 
        "to": 
        {
          transform: "rotate(1turn)"
        }
      }
    },
    animation: 
    { 
      "waving-hand": "waving-hand 2.5s infinite",
      "spin": "spin 4s linear infinite"
    }
  },
  plugins: [],
}