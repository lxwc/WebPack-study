/**模块【modules】
 * 在模块化编程中，开发者将程序分解成离散功能块（discrete chunks offunctionality），并称之为_模块_
 */

/**
 * 每个模块具有比完整程序更小的接触面，使得校验、调试、测试轻而易举。精心编写的_模块_提供了可靠的抽象和封装界限，使用应用程序中每个模块都具有条理清楚的设计和明确的目的。
 */
/**
 * Node.js从最一开始就支持模块化编程。然而，在web,模块化的支持正缓慢到来。在web存在多种支持JavaScript模块化的工具，这些工具各有优势和限制。webpack基于从这些系统获得的经验教训，并将_模块_的概念永贵项目中的任何文件。
 */

/********什么是webpack模块*********/
/**对比Node.js模块，webpack_模块_能够以各种方式表达他们的依赖关系，几个例子如下： */
//ES2015 import 语句
//CommonJS require（）语句
//AMD define和require语句
//css/sass/less文件中的@import语句
//样式（url（...））或者HTML文件（<ing src=...>）中的图片链接（image url）

/**********支持的模块类型***********/

/**
 * webpack通过loader可以支持各种语言和预处理器编写模块。loader描述了webpack如何处理非JavaScript（non-JavaScript）_模块_,并且在bundle中引入这些_依赖_。webpack社区已经为各种流行语言和语言预处理器构建了loader，包括：
 * CoffeeScript
 * TypeScript
 * ESNext(Babel)
 * Sass
 * Less
 * Stylus
 * 总的来说，webpack提供了可定制的、强大和丰富的API，语序任何技术栈使用webpack，支持了在你的开发、测试和生成流程中无侵入性（non-opiniinated）
 */