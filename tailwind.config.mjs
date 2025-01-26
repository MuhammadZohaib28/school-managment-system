/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customSky: "#C3EBFA",
        customLightSky: "#EDF9FD",
        customPurple: "#CFCEFF",
        customLightPurple: "#F1F0FF",
        customYellow: "#FAE27C",
        customLightYellow: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
