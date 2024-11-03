/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ['Pretendard'],
        AbhayaLibre: ['AbhayaLibre'],
      },
      colors: {
        'purple-main': '#A869EE',

        'main-primary': '#F7CE65',
        'main-secondary': '#00DE4F',
        'main-tertiary': '#E8E8E8',

        'typo-black': '#fff',
        'typo-white': '#fff',
        'typo-primary': '#F7CE65',

        'background-primary': '#111827',
        'background-secondary': '#1f2937',
        'background-default': '#4b5563',

        'networking-purple': '#DDD4FC',
        'networking-purple-2': '#F3EAFD',
        'networking-green': '#96F8C0',
        'networking-green-2': '#D7F5E4',
        'networking-yellow': '#F7CE65',
        'networking-yellow-2': '#FBEBC1',
        'networking-red': '#FFB6B6',
        'networking-blue': '#CEE9FA',
      },
      keyframes: {
        moveLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        moveRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'move-left': 'moveLeft 30s linear infinite',
        'move-right': 'moveRight 35s linear infinite',
      },
      backgroundImage: {
        'name-card-1': "url('/images/NameCard_1.png')",
        'name-card-2': "url('/images/NameCard_2.jpg')",
        'name-card-3': "url('/images/NameCard_3.svg')",
        banner: "url('/images/Banner_2.svg')",
      },
    },
    fontSize: {
      h1: ['3.125rem', { lineHeight: '3.5rem', fontWeight: 700 }],
      h2: ['2.5rem', { lineHeight: '2.8rem', fontWeight: 700 }],
      h3: ['1.625rem', { lineHeight: '2.4rem', fontWeight: 700 }],
      'sub-h1': ['1.2rem', { lineHeight: '2.3rem', fontWeight: 700 }],
      'sub-h2': ['1rem', { lineHeight: '1.5rem', fontWeight: 700 }],
      body1: ['1.3rem', { lineHeight: '2.3rem', fontWeight: 400 }],
      body2: ['1rem', { lineHeight: '1.5rem', fontWeight: 400 }],
      body3: ['0.8rem', { lineHeight: '1.3rem', fontWeight: 400 }],
      'mobile-h1': ['2.125rem', { lineHeight: '2.75rem', fontWeight: 700 }],
      'mobile-h2': ['1.125rem', { lineHeight: '1.75rem', fontWeight: 700 }],
      'mobile-body2': ['0.875rem', { lineHeight: '1.375rem', fontWeight: 400 }],
      'mobile-sub-h2': [
        '0.875rem',
        { lineHeight: '1.375rem', fontWeight: 700 },
      ],
    },
    screens: {
      'desktop-xl': '1920px',
      desktop: '1200px',
      tablet: '1024px',
      mobile: '1000px',
    },
    lineHeight: {
      14: '3.5rem',
    },
    rotate: {
      45: '45deg',
    },
  },
  plugins: [],
}
