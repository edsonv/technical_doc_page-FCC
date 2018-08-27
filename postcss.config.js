
module.exports= {
  plugins: [
  require('postcss-import')( {
    plugins: [ require('stylelint')]
  }),
  require('postcss-font-magician')( {
    variants: {
      'Lato': {
        '300': [],
        '400': [],
      }
    }
  }),
  require('postcss-preset-env')( {
    stage: 2,
    features: {
      customProperties: false,
      calc: false
    },
    browsers: 'last 2 versions'
  }),
  require('css-mqpacker'),
  require('cssnano'),
  ]
}
