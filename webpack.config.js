const path = require("path")
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

function resolvePath(relativePath){
  return path.resolve(__dirname, relativePath);
}

// Config parts

const entry = {
  entry: resolvePath('src/main.js')
}

const output = {
  output: {
    filename: 'bundle.js',
    path: resolvePath('dist')
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

const resolve = {
  resolve: {
    alias: {
      Common: path.resolve(__dirname, 'src/common/')
    }
  }
}

// Config composition

const common = merge(
  entry,
  loaders,
  htmlPlugin,
  vuePlugin,
  resolve 
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