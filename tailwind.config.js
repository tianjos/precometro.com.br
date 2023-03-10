/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./resources/views/**/*.edge', './resources/views/*.edge'],
  theme: {
    // extend: { fontFamily: { 'ubuntu': 'Ubuntu', 'ubuntu-condensed': 'Ubuntu Condensed' } },
    fontFamily: {
      'ubuntu': 'Ubuntu',
      'ubuntu-condensed': 'Ubuntu Condensed',
    },
    colors: {
      main: {
        dark: '#242423',
        medium: '#333533',
        light: '#919191',
        rust: '#EB5E28',
      },
      ruler: {
        light: '##D6D6D6',
        neon: '#582F7F',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['halloween'],
  },
}
