/*************模块解析【module resolution】**************/
/**
 * resolve是一个库（library），用于帮助找到模块的绝对路径。一个模块可以作为另一个模块的依赖模块，然后被后者引用，如下：
 * 
 */

import foo from 'path/to/module'
//或者
require('path/to/module');
/**
 * 所依赖的模块可以是来自应用程序代码或第三方的库（library）。resolver帮助webpack找到bundle中需要引入的模块代码，这些代码在包含在每个require/import语句中。当打包模块时，webpack使用enhanced-resolve来解析文件路径。
 */

/***********webpack中解析规则*********/
//使用enhanced-resolve，webpack能够解析三中文件路径：


/****************绝对路径**************** */
import '/home/me/file';
import 'C:\\Users\\me\\file';
/*************相对路径************************** */
import '../src/file';
import './file2';
/*****************模块路径********************** */
import "module";
import "module/lib/file";

/**
 * 
 */