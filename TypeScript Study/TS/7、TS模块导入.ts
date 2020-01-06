import echo from './common.js';
/*
 TS 模块导入，
    需要html 引入script时，type = 'module' ,
    在import 时，也需要写明 xx.js 后缀
*/

/* object 不是TS标准类型，所以此处声明没有意义 */
let str :string | Object | any ;
str = 'abcdefg'

echo(str.length);

str = {
    obj:'aabb' as string,
    name:'pcy' as string,
    age:111 as number,
    test :<string>'哈哈哈'
}

/*如果不声明str:any 此处将会报错！ */
echo(str.test)


/**
any:
    有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。
    这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 
    这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 
    那么我们可以使用 any类型来标记这些变量：

        let notSure: any = 4;
        notSure = "maybe a string instead";
        notSure = false; // okay, definitely a boolean

    在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。
    你可能认为 Object有相似的作用，就像它在其它语言中那样。 
    但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：
 */
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
