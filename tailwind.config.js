/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          // Backgrounds - Switched to Deep Slate/Navy for localized contrast
          bg: {
            primary: '#0B1120',   // Deepest Slate (approaching black) - Professional, Tech
            secondary: '#162032', // Rich Slate - Cards, sections
            elevated: '#233248',  // Lighter Slate - Hovers, borders
          },
          // Text - Crisp cool greys/whites
          text: {
            primary: '#F8FAFC',   // Slate 50
            secondary: '#CBD5E1', // Slate 300
            muted: '#94A3B8',     // Slate 400
          },
          // Accents - Preserved Green identity but tweaked for Slate compatibility
          accent: {
            main: '#2F8F6B',      // Original Forest Green (still works well)
            soft: '#5CAB92',      // Lighter/Brighter Sage for better visibility on slate
            gold: '#D4B969',      // Slightly brighter gold for luxury accents
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
