/**
 * 用法【Usage】
 * filename：用于输出文件的文件名
 * path：目标输出目录的绝对路径
 */
const config = {
    output: {
        filename: 'bundle.js',
        path: '/home/project/public/assets'
    }
};

module.exports = config;

/**
 * 多入口起点：
 * 多入口起点或使用CommonsChunkPlugin这样的插件，则应该使用占位符（substitutions）来确保每个文件具有唯一的名称
 */

const congit = {
    entry: {
        app: './src/app.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
}
module.exports = config;

/**
 * 高级进阶：
 * 使用CDN和资源hash的复杂示例
 */
//config.js
const config = {
        output: {
            path: "/home/proj/cdn/[hash]",
            publicPath: "http://cdn.example.com/assets/[hash]/"
        }
    }
    //编译时不知道最终输出文件的publicPath的情况下，publicPath可以留空，并且在入口起点文件运行时动态设置。
    //如果你在编译时不知道publicPath，你可以先忽略它，并且在入口起点设置__webpack_public_path__
__webpack_public_path__ = myRuntimePublicPath