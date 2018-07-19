/**插件【plugins】
 * 插件是webpack的支柱功能。webpack自身也是构建于，你在webpack配置中用到的相同的插件系统之上
 */
/**
 * 插件目的在于解决loader无法实现的其他事
 */

/**剖析
 * webpack插件是一个具有apply属性的JavaScript对象。apply属性会被webpack compiler对象可以整个编译生命周期访问。
 */

/**
 * ConsoleLogOnBuildWebpackPlugin.js
 */

const pluginName = "ConsoleLogOnBuildWebpackPlugin";

class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, compilation => {
            console.log("webpack 构建过程开始！");
        })
    }
}

/**
 * compiler hook 的tap方法的第一个参数，应该是驼峰式命名的插件名称。建议为此使用一个敞亮，以便它可以在所有哦hook中复用。
 */

/**
 * 用法
 * 由于插件可以携带参数/选项，你必须在webpack配置中，向plugins属性传入new实例。
 * 根据你的webpack用法，这里有多种方式使用插件
 */
/**
 * 配置
 * webpack.config.js
 */

const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过npm安装
const webpack = require('webpack'); //访问内置的插件
const path = require('path');

const config = {
    entry: './path/to/my/entry/file.js',
    output: {
        filename: 'my-first-webpack.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};

module.exports = config;

/**Node API
 * [TODO]：即便使用Node API，用户也应该在配置中传入plugins属性。
 * compiler.apply并不是推荐的使用方法。
 */
//some-node-script.js
const webpack = require('webpack'); //访问webpack运行时（runtime）
const configuration = require('./webpack.config.js');

let compiler = webpack(configuration);
compiler.apply(new webpack.ProgressPlugin());

compiler.run(function(err, stats) {

    //。。。。。
})

//参见webpack源码，有大量使用示例，可在自己的配置和脚本中使用