const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过npm安装
const webpack = require('webpack'); //用于访问内置插件

const config = {
    entry: './path/to/my/entry/file.js', //入口文件路径
    output: {
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [{
            test: /\.txt$/,
            use: 'raw-loader'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    mode: "prduction"
};

module.export = config;