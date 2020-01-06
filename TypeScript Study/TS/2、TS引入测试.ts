//tsc 编译默认为 ES5 语法
//Error: Typescript ReferenceError: exports is not defined
//解决方式： tsc fileName.ts --target es6
import * as $ from 'jquery'
//仍然有问题，好像需要指定模块？？？

/**
    TypeScript 作为 JavaScript 的超集，
    在开发过程中不可避免要引用其他第三方的 JavaScript 的库。
    虽然通过直接引用可以调用库的类和方法，但是却无法使用TypeScript 诸如类型检查等特性功能。
    为了解决这个问题，需要将这些库里的函数和方法体去掉后只保留导出类型声明，
    而产生了一个描述 JavaScript 库和模块信息的声明文件。
    通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件了。
 */
//正常编写 TS 不需要加declare关键字
//通过 tsc fileName.ts --declaration 输出 fileName.d.ts 文件
declare var foo : number;
foo = 100;
$(function(){
    $('body').append('<div> HHH </div>')
})

// tsc fileName.ts --removeComments  编译时去除注释