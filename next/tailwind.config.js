/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,mjs,jsx,mdx,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      '2xs': ['0.75rem', { lineHeight: '1.25rem' }],
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: [
        '19px',
        {
          fontFamily: 'var(--font-spectral)',
          fontWeight: 400,
          lineHeight: '1.6em',
          marginBottom: '20px',
        },
      ],
      lg: [
        '1.625em',
        {
          fontFamily: 'var(--font-lora)',
          fontWeight: 600,
          lineHeight: '1.16em',
          marginBottom: '0.625em',
          marginTop: '1em',
        },
      ],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': [
        '1.875em',
        {
          fontFamily: 'var(--font-lora)',
          fontWeight: 600,
          lineHeight: '36px',
          marginBottom: '0.875em',
        },
      ],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: require('./typography'),
    extend: {
      colors: {
        black: '#22322E',
        blue: {
          700: '#335E6B',
          500: '#428F9F',
          200: '#BDDFE4',
          50: '#F1F9FA',
        },
        gray: {
          dark: '#5B5B5B',
          DEFAULT: '#A0A0A0',
          light: '#DCDCDC',
        },
        green: {
          700: '#205C30',
          500: '#39904C',
          200: '#B9E1BD',
          50: '#F0F9F1',
        },
        paper: '#FAFAFA',
        text: '#363737',
        warning: '#CE0000',
        white: '#FFF',
      },
      cursor: {
        play: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAPwAAAD8BR5eJ4AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAS7SURBVFiFxZddbJNlFMd/52mpmxkfiQwD2m5hBAiDRBkahES8gAtJwAuzrYA4PsI6JSbOC6OOSGMchpCIWQKjI8IgBtc1ejH8SJg3SGTROOLFRrYLCO1IJqJhA8LI1r7Hi3Zb+6yFDkn8373n4/n/n/c953nOK+SJRduaZo3FCzapOOtAVqI8C8xOuYcRrqN0i3C+4J77bH/H7jv5rCsPC/BWh8oMNChsAQry1Dsi0OZA40A4cOWRBJTuOFngjIx+AtQD7jyJbcSBw6bQ8/G11p338xbgrQ6VCXQAyx6R2EYvrsTm2Jm3rz5UgK/yeIUY50eF4gcseBvoAf5JPT8FrABm5sxQ/kLNxlhkT3dOAanv3ZWDfBRoFZFT0bY9XSCa4Q0GTUnfgtWKswOVGsCTTYQKa9LrYkJA6pt3k/21nzPiBK61vXUt5w7TUOpvLnUcVwuiG7K4L5tCT8V4TbjGrTMXv/qZiLyWRXVTrL32jaGeF4byIQcY6vl+aLi346vZK7oBXrHcxRpPPDHc+10npN5Aquj6sKpdlAPR9kADQNn25nljo+a8gAH9MBqu+zYfMSVVoUYVPrLMcYWlA+HAFQNgoMEmB85F22v3TWSMudYCSxUWK/KNrzrU6as89tAuibbX7kOl0zK7SYkyi7Y1zUodMukYNeIE0gtNVW2B6zHyR0lV6POFlaHZ5ISoMYlakkWcZmVLceWRIjM65tnM1BOuNc+Cm6FCfdzQ760+tpNg0GQLSq112jIXPulybzaIrJui2dHWPMjT8bQgJ3x9838r8besyRrhcMo2qfKyQXjest+Olv/56zQFpFakQlUveP2hL8u2N89Ld8XKBy8Cd62MlSZ1q01C6CUYdB5JQBJGlF1jo6bfVx16l8r2ZKsHg45ArxXrNUxeqeO7+Ps/kKdjDnDYJ7cmOknRm3ZM1qJ5rBDryLZggOHMBOY+JuohoD7mzGmcXFoy7xjllgEGLOPyXO2UJxwVTszwOEti4cAXRKoSAASDRqE8I9LIgBu4BKxKM88s6VuwOgoXp00tdEtC34lF6rpsl7fvmbXgFGWEq3YbQX62gxVnxzSpbyi6K7Z08MVoFvLkolpjmxzVC6ZgxNUBjGQGS02pv7k0D+IxUQ67HZYMhOtO5mrfUn9zqaDbLfO9+5o4a/o7dt8RaLOcHsdxtYBOzAsiErdifsLR56LtgfeuRgLD5ISKo+Y41oCiyNc3I3vvGgAHGkkOkJMQ3VBS1fLp+KN7RuIX4DLQJ+jrsXBgQyxSdzk3cRI+f6gRWG+Z4+KKH4C0ichXHToIvD91AzTFlg3WT/90VPH5W/aj7M/iOhhrr/0gQ0BqJPsdu1WSCZ3GJGqnNZIlX7u9c4BeU+hZNT6SZQylvq1HFxJ3dSHMy5I4CpzG4VSsfPDilDcSDBpf7/w1GGqAN8kxlOJOvJQ+nmcdyxHnhxwixnFX0R4heW8ozBVkOVD0gJwbAhuj4cCldOP//mOS9cgdCAeumEJPBXAIuzumhzhwyBR6VmUjhzx+Tn1bjy5Ux9UgyhagME/iEUXOiCt+IBdx3gLGUVx5pKhAXJskOcKtBLwk73xQbiFcBy6p6vn7mjh7M7LXnn6y4l+sB9RILGCItAAAAABJRU5ErkJggg=="), wait',
      },
      boxShadow: {
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        lg: '33rem',
        '2xl': '40rem',
        '3xl': '50rem',
        '5xl': '66rem',
      },
      opacity: {
        1: '0.01',
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
