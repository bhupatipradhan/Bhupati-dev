/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eef9ff',
          100: '#d8f0ff',
          200: '#b9e5ff',
          300: '#8bd5ff',
          400: '#54baff',
          500: '#2d9cff',
          600: '#1677f5',
          700: '#1260e0',
          800: '#154fb5',
          900: '#17448e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in':       'fadeIn 0.6s ease-out both',
        'slide-up':      'slideUp 0.6s ease-out both',
        'slide-left':    'slideLeft 0.6s ease-out both',
        'slide-right':   'slideRight 0.6s ease-out both',
        'pulse-glow':    'pulseGlow 3s ease-in-out infinite',
        'gradient-x':    'gradientX 4s ease infinite',
        'float':         'float 6s ease-in-out infinite',
        'float-slow':    'float 9s ease-in-out infinite',
        'shimmer':       'shimmer 2.5s linear infinite',
        'spin-slow':     'spin 8s linear infinite',
        'bounce-slow':   'bounceSlow 3s ease-in-out infinite',
        'typing':        'typing 2s steps(20, end) forwards',
        'blink':         'blink 1s step-end infinite',
        'scale-in':      'scaleIn 0.4s ease-out both',
        'blob':          'blob 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        slideLeft: {
          '0%':   { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)',      opacity: '1' },
        },
        slideRight: {
          '0%':   { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)',     opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(45,156,255,0.3), 0 0 20px rgba(168,85,247,0.15)' },
          '50%':      { boxShadow: '0 0 20px rgba(45,156,255,0.7), 0 0 40px rgba(168,85,247,0.4)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scaleIn: {
          '0%':   { transform: 'scale(0.85)', opacity: '0' },
          '100%': { transform: 'scale(1)',    opacity: '1' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%':      { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%':      { borderRadius: '50% 60% 30% 60% / 40% 40% 60% 50%' },
          '75%':      { borderRadius: '40% 60% 60% 40% / 70% 30% 50% 40%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
      backgroundSize: {
        '200%': '200%',
      },
    },
  },
  plugins: [],
}



