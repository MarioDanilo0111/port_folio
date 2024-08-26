/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontfamily: {
        primary: ["Poppins"],
      },
      /* screens: {
        md: "769px",
        ml: "425px",
        ms: "319px",
      }, */
      screens: {
        // Consider using default Tailwind breakpoints or adjust your custom breakpoints if needed
        ms: "319px",
        ml: "425px",
        // 'md' is typically set at 768px by default in Tailwind
        // You can customize if needed
        md: "768px", // or slightly adjust like 769px if you need
        lg: "1024px", // default large screen
      },
      spacing: {
        "18": "4.5rem", // Custom spacing value if you need more granular control
      },
    },
  },
  plugins: [],
};
