/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBg: '#FFFFFF',
        dropdownBg: '#F9F9F9',
        primaryButton: '#FF0000',
        buttonText: '#FFFFFF',
        navLink: '#000000',
      },
    },
  },
  plugins: [],
}

export default config
