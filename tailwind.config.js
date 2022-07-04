module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#ff6720',
          2: '#ef4e03',
          3: '#ff9425',
          4: '#ffa479',
          5: '#fff0e9'
        },
        secondary: {
          1: '#1A6DE3',
          2: '#0051CD'
        },
        tertiary: {
          1: '#f59e0b',
          2: '#fcd34d'
        },
        accent: {
          1: '#8862E0',
          2: '#a70000',
          3: '#f33240',
          4: '#ff8900',
          5: '#ffc400',
          6: '#23C247',
          7: '#00875a',
          8: '#0c9ab2',
          9: '#2684ff',
          10: '#034a93',
          11: '#5243aa',
          12: '#42526e'
        },
        background: {
          1: '#DBDBDB',
          2: '#FFE7CC',
        },
        info: {
          500: '#0184FF',
          400: '#2395FF',
          300: '#72B7FB',
          200: '#CCE7FF',
          100: '#E5F2FF'
        },
        success: {
          500: '#20913A',
          400: '#28A745',
          300: '#88CE97',
          200: '#DFFCE6',
          100: '#E9F6EC'
        },
        warning: {
          500: '#F3A72E',
          400: '#FFC107',
          300: '#F8CE8B',
          200: '#FCF0CB',
          100: '#FEF6E9'
        },
        error: {
          500: '#DA072D',
          400: '#EB3B5B',
          300: '#F17585',
          200: '#FCE6EA',
          100: '#FDEBE9'
        },
        neutral_1_text: {
          900: '#2C333A',
          800: '#424752',
          700: '#5A6271',
          600: '#6B7280',
          500: '#858F9B',
          400: '#929DAA',
          300: '#A1ACB8',
          200: '#CDD3DB',
          100: '#D2D8E0',
          50: '#DDE2E9'
        },
        neutral_2_border: {
          300: '#DFE7EC',
          200: '#E2E7ED',
          100: '#E9EDF2',
          50: '#F2F4F7'
        },
        neutral_3_textInverseBlue: {
          900: '#C8D4E5',
          400: '#7D8DA4'
        },
        neutral_3_dark_bg: {
          900: '#131D26',
          800: '#212E39',
          700: '#213240',
          600: '#2B3D4D'
        },
        neutral_3_light: {
          300: '#E3E6E9',
          200: '#EBEDEF',
          100: '#F0F1F3',
          50: '#F8F9FB'
        },
        transparent_black: {
          800: 'rgba(0, 0, 0, 0.8)',
          500: 'rgba(0, 0, 0, 0.5)',
          400: 'rgba(0, 0, 0, 0.4)'
        },
        transparent_bluegray: {
          50: 'rgba(30, 41, 59, 0.05)',
          900: 'rgba(19, 29, 38, 0.9)',
          400: 'rgba(19, 29, 38, 0.4)'
        }
      },
      inset: {
        '0%': '0%',
       '1/10': '10%',
      },
      padding: {
        50: '50px',
        8.5: '34px',
        '15px': '15px',
        '22px': '22px'
      },
      width: {
        '7px': '7px',
        '4.5': '18px',
        '256px': '256px'
      },
      height: {
        '7px': '7px',
        '4.5': '18px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      fontSize: {
        '13px': ['13px', '20px']
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/custom-forms'),
  ],
}
