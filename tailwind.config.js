/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PITLAB Brand Colors
        'pit': {
          yellow: '#FFD700',  // Gold, sweat, effort
          'yellow-light': '#FFE44D',
          'yellow-dark': '#CCB000',
          blue: '#0066CC',    // Tech, trust, Base chain
          'blue-light': '#3385D6',
          'blue-dark': '#004C99',
          dark: '#0A0A0A',    // Sleek, professional
          gray: '#1A1A1A',
          'gray-light': '#2A2A2A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-pit': 'linear-gradient(135deg, #FFD700 0%, #0066CC 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}
