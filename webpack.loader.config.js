/**
 * loader 用于对模块源代码进行转换。loader可以使你在import 或“加载”模块时预处理文件。因此，loader类似于其他构建工具中“任务（task）”，并提供了处理前端构建步骤的强大方法。loader可以将文件从不同的语言（如TypeScript）转换为JavaScript，或将内联图像转换为data URL。loader甚至允许你直接在JavaScript模块中importCSS文件！
 */

/**示例
 * 例如，你可以使用loader告诉webpack加载CSS文件，或者将TypeScript转为JavaScript。为此，首先安装对应的loader：
 */

//npm install--save - dev css - loader
//npm install--save - dev ts - loader

/**
 * 然后指示webpack对每个 .css使用css-loader,以及对所有 .ts文件使用ts-loader
 */
//webpack.config.js
module.exports = {
    module: {
        rules: [{
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                text: /\.ts&/,
                use: 'ts-loader'
            }
        ]
    }
};

/**使用loader
 * 在你的应用程序中，有三种使用loader的方法：
 * 配置（推荐）：在webpack.config.js 文件中指定loader
 * 内联：在每个import语句中显式指定loader
 * CLI：在shell命令中指定他们
 */

/**配置【Configuration】
 * module.rules  允许你在webpack配置中指定多个loader。这是展示loader的一种简明方式，并且有助于使代码变得简洁。同时让你对各个loader有个全局概览：
 */
module.exports = {
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }
            ]
        }]
    }
}

/**内联
 * 可以在import语句或任何等效于“import”的方式中指定loader。使用！将资源中的loader分开。分开的每个部分都相对于当前目录解析。
 * 
 */

import Style from 'style-loader!css-loader?modules!./styles.css';

/**
 * 通过前置所有规则及使用！，可以对应覆盖到配置中的任意loader。
 * 选项可以传递查询参数，例如 ？key=value&foo=bar，或者一个JSON对象，例如 ？{“key”:"value","foo":"bar"}.
 */

/**CLI
 * 你也可以通过CLI使用loader
 */
//webpack--module - bind jade - loader--module - bind 'css=style-loader!css-loader'
/**loader特性
 * 1、loader支持链式传递，能够对资源使用流水线（pipeline）。一组链式的loader将按照相反的顺序执行。loader链中的第一个loader返回值给下一个loader。在最后一个loa，返回webpack所预期的JavaScript
 * 2、loader可以使同步的，也可以使异步的。
 * 3、loader运行在Node.js中，并且能够执行任何可能的操作
 * 4、loader接收查询参数，用于对loa传递配置
 * 5、除了使用package.json常见的main属性，还可以将普通的npm模块导出为loader，做法是在package.json里定义一个loader字段
 * 6、插件（plugin）可以为loader带来更多特性
 * 7、loader能够产生额外的任意文件。
 * ****
 * loader通过（loader）预处理函数，为JavaScript生态系统提供了更多能力。用户现在可以更加灵活地引入细粒度逻辑，例如压缩、打包、语言翻译和其他更多。
 */

/**解析loader
 * loader遵循标准的模块解析、多数情况下，loader将从模块路径（通常将模块路径认为是npm install，node_modules）解析。
 * loader模块需要导出为一个函数并且使用Node.js兼容的JavaScript编写。通常使用npm进行管理，但是也可以将自定义loader作为应用程序中的文件。按照约定，loader通常被命名为XXX-loader（例如json-loader）。有关详细信息，请查看如何编写loader
 */