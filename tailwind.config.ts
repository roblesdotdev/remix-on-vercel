import { type Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '65ch',
      },
    },
    extend: {},
  },
  plugins: [],
} satisfies Config
