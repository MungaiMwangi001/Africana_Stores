module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ochre: '#CC7722',
        olive: '#556B2F',
        brown: '#5D4037',
        charcoal: '#1C1C1C',
        black: '#212121',
        gray: '#F5F5F5',
        // For backwards compatibility with existing primary/background
        primary: {
          ochre: '#CC7722',
          olive: '#556B2F',
          brown: '#5D4037',
          black: '#212121',
          white: '#FFFFFF',
          green: '#16A34A',
          red: '#E3342F',
          blue: '#2563EB',
          yellow: '#FACC15',
        },
        background: {
          light: '#FFFFFF',
          dark: '#1C1C1C',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'Poppins', 'sans-serif'],
        body: ['Source Sans Pro', 'Lora', 'serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(44, 62, 80, 0.08)',
      },
      borderRadius: {
        xl: '1.25rem',
        full: '9999px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.4s cubic-bezier(0.4,0,0.2,1) forwards',
        'fade-in': 'fade-in 0.5s ease-in-out forwards',
        'reveal-up': 'reveal-up 0.7s cubic-bezier(0.4,0,0.2,1) forwards',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}; 