/*----------------------------------------------------*/
/*----------------------基本类型----------------------*/
/*---------------------------------------------------*/
// 1、 any 任意类型
let text : any ;
text = {};
text = [];
text = '';
text = 0;
text = null;

//2、number 数字类型
//注意：TypeScript 和 JavaScript 没有整数类型。
let num : number;
num = 10;
num = 10 ** 3;
//双精度 64 位浮点值。它可以用来表示整数和分数。
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744;    // 八进制
let decLiteral: number = 6;    // 十进制
let hexLiteral: number = 0xf00d;    // 十六进制

//3、String 字符串类型
let str :string= '单引号字符串';
let str2 :string= "双引号字符串";
let str3 :string= `反引号字符串表达式${num}`;

//4、boolean 布尔类型
let truth :boolean= true;
let falser:boolean= false;

//5、Array 数组类型:[]
//没有专门的关键字，再声明变量类型是追加 [] 即可
let array :string[]=['any','string','number','boolean'];
let array2 :boolean[]=[true,false,true,true] ;
//使用泛型定义数组类型
let array3 :Array<string> = ['any','string','number','boolean'];
let array4 :Array<number> = [1,2,3,4,5,6,7];

//6、tuple 元组:[]
//元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
let tuple : [string,string,number,boolean];
tuple=['a','b',1,true];
tuple[1];//-->'b'

//7、enum 枚举
//枚举类型用于定义数值集合。
enum Color {
    red,
    blue,
    yellow,
    green
}
let c : Color = Color.blue;
console.log(c);

enum TextColor {
    red='255,0,0',
    blue='0,0,255',
    yellow='255,255,0',
    green='0,255,0',
    black = '#000'
}
let tc :TextColor = TextColor.blue;
console.log(tc);

//8、void 没有返回值
//用于标识方法返回值的类型，表示该方法没有返回值
function fn():void{
    console.log(1)
}

//9、null 空 && undefined 未定义
// null 表示对象缺失
// 在 JavaScript 中 null 表示 "什么都没有"。
// null是一个只有一个值的特殊类型。表示一个空对象引用。
// 用 typeof 检测 null 返回是 object。
// undefined
// 在 JavaScript 中, undefined 是一个没有设置值的变量。
// typeof 一个没有值的变量会返回 undefined。
// Null 和 Undefined 是其他任何类型（包括 void）的子类型，可以赋值给其它类型，如数字类型，
// 此时，赋值后的类型会变成 null 或 undefined。
// 而在TypeScript中启用严格的空校验（--strictNullChecks）特性，
// 就可以使得null 和 undefined 只能被赋值给 void 或本身对应的类型

// 启用 --strictNullChecks
let x: number;
x = 1; // 运行正确
x = undefined;    // 运行错误
x = null;    // 运行错误

// 上面的例子中变量 x 只能是数字类型。如果一个类型可能出现 null 或 undefined， 可以用 | 来支持多种类型，示例代码如下：

// 启用 --strictNullChecks
let x2: number | null | undefined;
x2 = 1; // 运行正确
x2 = undefined;    // 运行正确
x2 = null;    // 运行正确

//10、never 其他类型
//never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
//这意味着声明为 never 类型的变量只能被 never 类型所赋值，
//在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环），示例代码如下：
let z: never;
let y: number;

function test2(message:string):never{
    let nev : never;
    // nev = 12345 -> type error
    //nev = 'abc' -> type error
    let n : number = nev;
    console.log(n)
    // throw new Error('强制抛出异常 ：error!');
    return nev
}

test2('');

/*----------------------------------------------------*/
/*----------------------变量声明----------------------*/
/*---------------------------------------------------*/

/**
    变量是一种使用方便的占位符，用于引用计算机内存地址。
    我们可以把变量看做存储数据的容器。
    TypeScript 变量的命名规则：
    变量名称可以包含数字和字母。
    除了下划线 _ 和美元 $ 符号外，不能包含其他特殊字符，包括空格。
    变量名不能以数字开头。
    变量使用前必须先声明，我们可以使用 var 来声明变量。
    我们可以使用以下四种方式来声明变量：
 */
//声明变量的类型及初始值：
// var [变量名] : [类型] = 值;
var v_1 : string = 'abc';// v_1 --> 'abc'

//声明变量的类型，但没有初始值，变量值会设置为 undefined：
//var [变量名] : [类型];
var v_2 :number; // v_2 --> undefined

//声明变量并初始值，但不设置类型类型，该变量可以是任意类型：
//var [变量名] = 值;
var v_3 = ['a','b']; // v_3 -->['a','b'] && type = any

// 声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：
// var [变量名];
var v_4 ; // v_4 --> undefined && type = any

//实例：
//注意：变量不要使用 name 否则会与 DOM 中的全局 window 对象下的 name 属性出现了重名。
var uname:string = "Runoob";
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2
console.log("名字: "+uname)
console.log("第一个科目成绩: "+score1)
console.log("第二个科目成绩: "+score2)
console.log("总成绩: "+sum)

//类型断言（Type Assertion）
// 类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。

// 语法格式：
//<类型>值  ||  值 as 类型
let s :string = <string>'abc';

/*---demo1---*/
var s2 = '1' 
var s3:number = <number> <any> s2  //str、str2 是 string 类型
console.log(s3);

/*---demo2---*/
let ass :string= 'true';
// console.log(ass2 == true) --> error
let ass2 :boolean = <any>ass;
console.log(ass2 == true)

/*----demo3---*/
enum es1 {
    a,b,c
}
let es2 :string = es1 as any;
console.log(es2)

function computedNum(msg:number):number{
    return msg**2
}
enum em{
    a=computedNum(9),
    b=3,//枚举中，某一个元素是通过计算所得，其元素的下一个兄弟元素必须有默认值
    c
}
let impl :em = em.a;
console.log(impl)

/*----------------------------------------------------*/
/*----------------------类型判断----------------------*/
/*---------------------------------------------------*/
//当声明变量时没有给出类型，则默认 any;
let d_v1;
//当变量没有声明，但已给变量赋值，将会判断该值的类型，同时设置该变量的类型;
let d_v2 = 1000; // type --> number
//此时再将它赋值为非number类型将会报错
//d_v2 = 'number';
