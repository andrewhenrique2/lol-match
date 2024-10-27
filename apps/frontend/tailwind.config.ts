import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(220, 13%, 18%)', // Cor primária baseada no Zinc
        'primary-foreground': '#ffffff', // Texto branco sobre Zinc
        secondary: 'hsl(220, 9%, 30%)', // Outra variação do Zinc
        'secondary-foreground': '#ffffff', // Texto branco sobre secundário
        destructive: 'hsl(0, 84%, 60%)', // Cor destrutiva (vermelho)
        'destructive-foreground': '#ffffff', // Texto branco para destrutivo
        background: '#09090b', // Cor de fundo escura
        button: '#020817',
        card: '#171825',
        foreground: '#ffffff', // Texto no fundo escuro
        accent: 'hsl(220, 13%, 20%)', // Cor de destaque (Zinc)
        'accent-foreground': '#ffffff', // Texto branco para o destaque
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], // Apenas a fonte Outfit
      },
    },
  },
  plugins: [],
}

export default config
