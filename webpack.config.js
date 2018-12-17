const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      },
      { 
        test: /\.(png|jpg|jpeg|gif|svg|json|woff|woff2|eot|ttf)$/,
        use: [{
          loader: 'url-loader?limit=10000',
          options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
          }
      }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};