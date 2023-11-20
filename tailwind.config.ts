/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      '2sm': '320px',
      sm: '375px',
      md: '425px',
      lg: '768px',
      xl: '1024px',
      '2xl': '1440px',
      '3xl': '1536px',
    },
    extend: {
      height: {
        screen: ['100vh', '100svh'],
      },
      colors: {
        laboBlue: '#1499d6',
        laboGreen: '#61a944',
        laboRed: '#ab1e2d',
        laboOrange: '#e75424',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        rotating: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },

        'reciprocal-horizontal': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' },
        },

        'move-in-circle': {
          '0%': { transform: ' translate(0, 0) ' },
          '25%': { transform: 'translate(30px, 0)' },
          '50%': { transform: ' translate(0, 30px) ' },
          '75%': { transform: ' translate(-30px, 0) ' },
          '100%': { transform: ' translate(0, 0) ' },
        },
        'reciprocal-vertical': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'reciprocal-vertical':
          'reciprocal-vertical 2s linear infinite alternate',
        'reciprocal-horizontal':
          'reciprocal-horizontal 2s linear infinite alternate',
        'move-in-circle': 'move-in-circle 5s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
