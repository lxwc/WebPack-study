/**配置【configuration】
 * 你可能已经注意到，很少有webpack配置看起来很完全相同。这是因为webpack的配置文件，是导出一个对象的JavaScript文件。此对象，由webpack根据对象定义的属性进行解析。
 */
/**因为webpack配置是标准的Node.js CommonJS模块，你可以做到以下事情：
 * ①通过require（...）导入其他文件
 * ②通过require（...）使用npm的工具函数
 * ③使用JavaScript控制流表达式，例如？：操作符
 * ④对常用值使用常量或变量
 * ⑤编写并执行函数来生成部分配置
 */
//请在合适的时机使用这些特性
/**
 * 虽然技术上可行，但应避免一下做法：
 * ①在使用webpack命令行接口（CLI）（应该编写自己的命令行接口（CLI），或使用env）时，访问命令行接口（CLI）参数
 * ②导出不确定的值（调用webpack两次应该产生同样的输出文件）
 * ③编写很长的配置（应该降配置拆分为多个文件）
 */
/**
 * 接下来的例子展示了webpack配置对象（webpack configuration object）如何即具有表现力，又具有可配置性，这是因为配置对象即是代码：
 */

/**
 * 基本配置
 * webpack.config.js
 */

var path = require('path');

module.exports = {
    mode: 'development',
    entry: './foo.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'foo.bundle.js'
    }
}

/**
 * 多个Target
 */

/**
 * 使用其他配置语言
 */