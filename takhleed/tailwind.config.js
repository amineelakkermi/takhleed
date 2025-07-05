/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  mode: "jit",
  darkMode: false, // désactive le mode sombre si non utilisé
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      white: "#fff",
      brownText: "#90714f",
      brownText2: "#72461e",
      brown1: "#50241c",

      brown2: "#bf564b",
      brown3: "#281c14",
      beige: "#f8ecd4",
      orange: "#b86c2c",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
    },
    fontFamily: {
      'arabic': ['NeoSansArabic', 'sans-serif'],
      'ghaith': ['GHAITHSANS', 'sans-serif'],
      'handicrafts': ['TheYearofHandicrafts', 'sans-serif'],
      'english': ['Poppins', 'sans-serif'],
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};