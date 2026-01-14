export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'tighter': '-0.02em',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out',
        'card-lift': 'cardLift 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        cardLift: {
          '0%': { transform: 'translateY(0)', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' },
          '100%': { transform: 'translateY(-4px)', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' },
        }
      },
      colors: {
        'emerald': {
          '800': '#065f46',
          '900': '#064e3b',
        },
        'stone': {
          '25': '#fcfcfb',
          '50': '#fafaf9',
        },
        'neutral': {
          '25': '#fcfcfc',
        }
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-emerald': 'linear-gradient(to right, #065f46, #064e3b)',
        'gradient-overlay': 'linear-gradient(to bottom, rgba(250, 250, 249, 0.95), rgba(250, 250, 249, 0.9), rgba(250, 250, 249, 0.7))',
      },
    },
  },
  plugins: [],
}