/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        'primary-dark': '#1A1A1A',
        'accent-blue': '#1e3a8a',
        'surface-light': '#F8F9FA',
        'gray-soft': '#E0E0E0'
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'loose': '0.02em',
      },
      lineHeight: {
        'tight': '1.1',
        'relaxed': '1.7',
      }
    }
  },
  plugins: [],
}