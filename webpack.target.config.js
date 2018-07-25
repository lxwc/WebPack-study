/*******构建目标********** */
/***
 * 因为服务器和浏览器代码都可以用JavaScript编写，所以webpack提供了多种构建目标（target），
你可以在你的webpack配置中设置。
 */

/****
 * webpacak的target属性不要和output。libraryTarget属性混淆。有关output属性的更多信息
 */

/*******
 * 用法
 * 要设置target属性，只需要在你的webpack配置中设置target的值。
 */
//webpack.config,js
module.exports = {
    target: node
}

/*
在上面例子中，使用node webpack会编译为用于  类Node.js   环境（使用Node.js的require，而不是使用任意内置模块（如fs或path）来加载chunk）
*/


/***
 * 
 * 多个Target
 * 尽管webpack不支持向target传入多个字符串，你可以通过打包两份分离的配置来创建同构的库：
 * 
 */

//webpack.config.js
var path = require("path");
var serverConfig = {
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lib.node.js'
    }
};
var clientConfig = {
    target: 'web', //<==默认是‘web’，可省略
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lib.js'
    }
};
module.exports = [serverConfig, clientConfig];