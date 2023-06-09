/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
      },
      colors: {
        marineBlue: 'hsl(213, 96%, 18%)',
        purplishBlue: 'hsl(243, 100%, 62%)',
        pastelBlue: 'hsl(228, 100%, 84%)',
        lightBlue: 'hsl(206, 94%, 87%)',
        StrawberryRed: 'hsl(354, 84%, 57%)',

        coolGray: 'hsl(231, 11%, 63%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
        
      },
      backgroundImage: {
        mobileSidebar: 'url(/images/bg-sidebar-mobile.svg)',
        desktopSidebar: 'url(/images/bg-sidebar-desktop.svg)',
      },
      
    },
  },
  plugins: [],
}

