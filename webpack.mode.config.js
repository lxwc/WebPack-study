/**模式【mode】
 * 提供mode配置选项，告知webpack使用相应模式的内置优化
 * string
 */

/**用法【Usage】
 * 只在配置中提供mode选项：
 */
module.exports = {
    mode: 'production'
};

/**或者从CLI 参数中传递 */
//webpack --mode=production

//支持字符串值
//development    production

/**mode:development
 */
//webpack.development.config.js
module.exports = {
    mode: 'development',
    Plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
    ]
}

//mode:production
//webpack.production.config.js
module.exports = {
    mode: 'production',
    Plugins: [
        new UglifyJsPlugin( /*...*/ ),
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}