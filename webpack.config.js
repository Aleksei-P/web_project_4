const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin"); // connect plugin
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: './pages/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 8080,
    open: true
  },
   module: {
    rules: [ // this is an array of rules
      // add an object containing rules for Babel to it
      {
        // a regular expression that searches for all js files
        test: /\.js$/,
        // all files must be processed by babel-loader
        loader: "babel-loader",
        // exclude the node_modules folder, we don't need to process files in it
        exclude: "/node_modules/"
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource"
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          // add postcss-loader
          "postcss-loader"
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: "./index.html" // path to our index.html file
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin()
],
}

// module.exports is the syntax for export in Node.js
