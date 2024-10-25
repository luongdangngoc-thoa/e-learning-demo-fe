import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      letterSpacing: {
        0.36: '0.0225rem',
        0.5: '0.03125rem'
      },
      spacing: {
        7.5: '1.875rem',
        12.5: '3.125rem',
        15: '3.75rem',
        25: '6.25rem',
        30: '7.5rem',
        35: '8.75rem',
        56: '14rem'
      },
      gap: {
        7.5: '1.875rem',
        13: '3.25rem',
        15: '3.75rem',
        19: '4.75rem',
        25: '6.25rem',
        30: '7.5rem',
        43.5: '10.875rem'
      },
      fontSize: {
        '1.5xl': '1.375rem',
        '1.5sm': '0.938rem',
        '2.5xl': '2rem',
        '1.6xl': '1.625rem',
        '4.5xl': '2.8125rem',
        '6.5xl': '4rem'
      },
      width: {
        7.5: '1.875rem',
        15: '3.75rem',
        25: '6.25rem',
        84: '21rem',
        170: '42.5rem',
        184: '11.5rem'
      },
      height: {
        0.25: '0.0625rem',
        7.5: '1.875rem',
        15: '3.75rem',
        25: '6.25rem',
        60: '15rem',
        170: '42.5rem'
      },
      minWidth: {
        7.5: '1.875rem',
        15: '3.75rem',
        170: '42.5rem',
        25: '6.25rem'
      },
      minHeight: {
        7.5: '1.875rem',
        15: '3.75rem',
        170: '42.5rem',
        25: '6.25rem'
      },
      padding: {
        6.5: '1.625rem',
        16.5: '4.375rem',
        35: '8.75rem',
        56: '14rem',
        25: '6.25rem'
      },
      margin: {
        35: '8.75rem',
        56: '14rem',
        25: '6.25rem'
      },
      lineHeight: {
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        20: '5rem'
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        turquoise: {
          medium: '#49BBBD',
          light: 'rgba(73, 187, 189, 0.60)',
          bright: '#00CBB8',
          green: '#41BE90',
          cyan: '#00BCD4',
          sky: 'rgba(255, 255, 255, 0.30)'
        },
        blue: {
          bright: '#136CB5',
          dark: '#2F327D',
          charcoal: '#252641',
          light: '#9DCCFF',
          liberty: '#525596',
          electric: '#23BDEE'
        },
        gray: {
          charcoal: '#5B5B5B',
          light: '#D9D9D9',
          Silver: '#C2C2C2',
          dark: '#ACACAC',
          hex: '#B2B3CF',
          mauve: '#626381',
          granny: '#83839A'
        },
        slate: {
          blue: '#696984'
        },
        red: {
          light: 'rgba(255, 0, 0, 0.60)'
        },
        orange: {
          yellow: '#F48C06'
        },
        green: {
          light: '#55EFC4'
        }
      },
      borderRadius: {
        0.5: '0.125rem',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        banner: '26% 26% 50% 50% / 0% 0% 14% 12%',
        100: '6.25rem',
        '2.5xl': '1.25rem',
        '6xl': '2.375rem',
        '15xl': '3.75rem'
      },
      borderColor: {
        turquoise: {
          medium: '#49BBBD',
          light: 'rgba(73, 187, 189, 0.60)',
          bright: '#00CBB8'
        },
        gray: {
          light: '#D9D9D9',
          gunmetal: '#2D3436'
        }
      },
      boxShadow: {
        'soft-purple-shadow': '0px 18.83px 47.08px rgba(47,50,125,0.1)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      backgroundImage: {
        'literature-banner': "url('/images/literature-banner.png')"
      }
    }
  },
  plugins: [tailwindcssAnimate]
} satisfies Config

export default config
