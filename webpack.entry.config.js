/**
 * 单个入口简写语法
 */
const config = {

    entry: './path/to/my/entry/file.js'
};
module.export = config;

/**
 * 单个入口语法
 */
const config = {
    entry: {
        main: './path/to/my/file.js'
    }
};

module.export = config;

/**
 * 对象语法
 */
const config = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    }
};

/**
 * 多页面应用程序
 */
const config = {
    entry: {
        pageOne: './src/pageOne/index.js',
        pageTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js'
    }
};