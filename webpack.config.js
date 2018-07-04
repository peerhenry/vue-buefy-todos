const path = require("path")
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

function resolve(relativePath){
  return path.join(__dirname, relativePath);
}

// Config parts

const entry = {
  entry: resolve('src/main.js')
}

const output = {
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  }
}

const loaders = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,    // also applies to script in .vue files
        use: 'babel-loader'
      },
      {
        test: /\.css$/,   // also applies to css in .vue files
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}

const devServer = {
  devServer: {

  }
}

const htmlPlugin = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "My Page",
      template: 'src/index.html'
    })
  ]
}

const vuePlugin = {
  plugins: [
    new VueLoaderPlugin()
  ]
}

function mode(env){
  return {
    mode: env
  }
}

// Config composition

const common = merge(
  entry,
  loaders,
  htmlPlugin,
  vuePlugin
)

const production = merge(
  common,
  output,
  mode('production')
)

const debug = merge(
  common,
  devServer,
  mode('development')
)

module.exports = (env) => {
  console.log('### Running webpack with env: ' + env)
  var config;
  if(env == 'production') config = production
  else config = debug
  return config
}