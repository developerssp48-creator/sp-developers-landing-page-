import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        spBlue: '#0c65ad',
        spBlueDark: '#074a7f',
        spWhite: '#ffffff',
      },
    },
  },
  plugins: [],
} satisfies Config


