// tailwind.config.js

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: '#f3f4f6', // Ana arka plan rengi
          text: '#333', // Metin rengi
          primary: '#3490dc', // Ana renk
          secondary: '#6b7280', // İkincil renk
          // Diğer renkler eklenebilir...
        },
      },
    },
  },
  plugins: [],
};

export default config;
