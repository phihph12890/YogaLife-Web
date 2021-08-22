module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      spacing: {
          '72': '18rem',
          '84': '21rem',
          '96': '24rem',
          '120': '30rem',
          '132': '33rem',
          '160': '40rem',
          '200': '38rem',

      },
      rotate: {
        '360': '360deg',
        '720': '720deg',
      },
      padding: {
        '16/9': '56.25%'
      }
    }
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-focus'],
    width: ['responsive', 'hover', 'focus','group-hover'],
    display: ['responsive', 'hover', 'focus','group-hover'],
    height: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
