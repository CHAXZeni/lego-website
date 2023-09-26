import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      containers: {
        '2xs': '14rem'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        fade: 'fadeOut 2s ease-in-out 1s',
        drop: 'drop 2s ease-in-out 3s'
      },

      // that is actual animation
      keyframes: {
        drop: {
          '0%': { transform: "translateY(-50px)" },
          '100%': { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require('@tailwindcss/container-queries'),
  ],

}
export default config
