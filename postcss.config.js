module.exports = (env) => {
  if(env.env !== 'production') return
  return {
    plugins: [
      require('autoprefixer'),
      require('cssnano'),
    ]
  }
}
