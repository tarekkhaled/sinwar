/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'palestinian-red': '#CE1126',
        'palestinian-green': '#007A3D',
        'palestinian-black': '#000000',
        'palestinian-white': '#FFFFFF',
      },
      fontFamily: {
        'primary': ['var(--font-primary)'],
        'arabic': ['Noto Kufi Arabic', 'sans-serif'],
        'arabic-content': ['Noto Naskh Arabic', 'serif'],
      },
    },
  },
  plugins: [],
};
