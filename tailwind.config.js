/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0B001A", // main background
        primary: "#9D4EDD", // neon purple glow
        secondary: "#5A189A", // deep purple
        accent: "#C77DFF", // light glow
        light: "#E0AAFF", // text and highlights
        muted: "#B794F4", // soft text for paragraphs
      },
      backgroundImage: {
        gradient: "radial-gradient(ellipse at top, #2B005E 0%, #0B001A 70%)",
        "gradient-bg": "radial-gradient(circle at 50% 0%, #2B005E 0%, #0B001A 100%)",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
