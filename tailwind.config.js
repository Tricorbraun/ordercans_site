/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        barlowbold: ['vessel-barlow-bold', 'sans-serif'],
        roboto: ['vessel-roboto', 'sans-serif'],
        robotobold: ['vessel-roboto-bold', 'sans-serif'],
        avenirmed: ['tb-avenir-med', 'sans-serif'],
        avenirroman: ['tb-avenir-roman', 'sans-serif'],
        avenirlight: ['tb-avenir-light', 'sans-serif'],
      },
      colors: {
        'vp-yellow': '#DEB83B',
        'vp-white': '#EBEBEA',
        'vp-copper': '#b17c3f',
        'vp-green': '#33b69f',
        'vp-black': '#222222',
        'vp-orchid': '#F5F5F5',
        'vp-red': '#E0612D',
        'tb-white': '#ffffff',
        'tb-gray': '#98989A',
        'tb-violet': '#484B5D',
        'tb-light-gray': '#FAFAFA',
        'tb-brown': '#b17c3f',
        'tb-turq': '#33b69f',
        'tb-green': ' #56BC76',
        'tb-darkgreen': '#00A388',
        'tb-blue': '#448BCA',
        'tb-lightblue': '#3BC0C1',
        'tb-pink': '#ED7FAE',
        'tb-orange': '#F8991D',
        'tb-bloodorange': '#E0612D',
        'tb-peach': '#E66665',
      },
      lineHeight: {
        11: '0.9',
        12: '2',
      },
      fontSize: {
        small: '0.85rem',
      },
      maxWidth: {
        custom: '760px',
      },
      screens: {
        760: '760px',
      },
      minHeight: {
        'screen-minus-210': 'calc(100vh - 210px)',
      },
      spacing: {
        'quart': '8vh',
        'third': '12vh',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        '.underline': {
          textDecoration: 'underline',
          'text-decoration-color': '#FFbF40',
          'text-decoration-skip': 'ink 0.5rem',
        },
      };
      addUtilities(extendUnderline);
    },
  ],
};
