/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        pirata: ['"Pirata One"', 'cursive'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        orbitron: ['"Orbitron"', 'sans-serif'],
        cinzelDeco: ['"Cinzel Decorative"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        op: {
          gold: '#f59e0b',
          amber: '#d97706',
          crimson: '#dc2626',
          flame: '#ea580c',
          nika: '#fff8dc',
          sun: '#facc15',
          zoro: '#059669',
          zorodark: '#064e3b',
          sanji: '#2563eb',
          brook: '#9333ea',
          ocean: '#0c4a6e',
          deep: '#030712',
          marine: '#1e3a8a',
          parchment: '#fef3c7',
        }
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'sword-flash': 'swordFlash 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'cloud-drift': 'cloudDrift 20s linear infinite',
        'spin-slow': 'spin 30s linear infinite',
        'elastic-bounce': 'elasticBounce 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6)',
        'flame-flicker': 'flameFlicker 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 35px rgba(245, 158, 11, 0.8))' },
        },
        cloudDrift: {
          '0%': { transform: 'translateX(-5%)' },
          '100%': { transform: 'translateX(5%)' },
        },
        elasticBounce: {
          '0%': { transform: 'scale(0.8)' },
          '60%': { transform: 'scale(1.08)' },
          '80%': { transform: 'scale(0.96)' },
          '100%': { transform: 'scale(1)' },
        },
        flameFlicker: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(234, 88, 12, 0.5)) hue-rotate(-5deg)' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(239, 68, 68, 0.9)) hue-rotate(15deg)' },
        }
      }
    },
  },
  plugins: [],
}
