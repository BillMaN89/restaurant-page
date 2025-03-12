const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { watchFile } = require("fs");

module.exports = {
    mode: `development`,
    entry: `./src/index.js`,
    output: {
        filename: `bundle.js`,
        path: path.resolve(__dirname, `dist`),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./src/template.html`,
        }),
    ],
    devtool: `eval-source-map`,
    devServer: {
        static: `./dist`,
        hot: true,
        open: true,
        watchFiles: ["./src/template.html"],
    },
    module: {
        rules: [
          {
            test: /\.(png|jpg|jpeg|gif|svg)$/i, // Υποστήριξη για εικόνες
            type: "asset/resource", // Μετατρέπει τις εικόνες σε αρχεία στον dist  
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
      
}