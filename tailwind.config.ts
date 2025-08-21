import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        verified: '#16a34a',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}

export default config


