/**
    函数是一组一起执行一个任务的语句。
    在逻辑上，划分通常是根据每个函数执行一个特定的任务来进行的。
    函数声明告诉编译器函数的名称、返回类型和参数。
    函数定义提供了函数的实际主体。
 */

//声明一个函数
function fn1 (){
    console.log('my name is pangcy');
}
//调用函数
fn1();

//函数表达式
let fn2 = function(){
    console.log('my age is 21');
}
fn2();

//箭头函数
let fn3 = (sex:string) => console.log('my sex is '+ sex);
fn3('男');

//定义函数返回值
/**
    return_type 是返回值的类型。
    return 关键词后跟着要返回的结果。
    一个函数只能有一个 return 语句。
    返回值的类型需要与函数定义的返回类型(return_type)一致。

    function function_name():return_type { 
        // 语句
        return value; 
    }
 */
function fn4():void{
    console.log('没有返回值')
}

function fn5():string{
    fn4()
    return '返回一个字符串！'
}

console.log(fn5());

//参数类型
function fn6(num:number,num2:number):number{
    return num + num2;
}

let add = fn6(100,200);
console.log(add);


//可选参数 ?:
function fn7(str:string,str2?:string){
    if(str2){
        console.log(str + '---'+str2);
    }else{
        console.log(str );
    }
}
fn7('aaa');
fn7('aaa','bbb');

//TypeScript 中,如果声明了那些参数,就必须传入那些参数，不能多，也不能少
//如果想要设置可选参数，则在参数名后 追加一个 ? 号
//如果参数中某一个是可选参数，其参数后所有参数，都必须声明成为可选参数
function fn8(str1:number,str2?:string,str3?:string):string{
    if(str1 && str2 && str3){
        return `${str1}---${str2}---${str3}`
    }else if(str1 && str2){
        return `${str1}---${str2}`
    }else{
        return `${str1}`
    }
}
let result9 = fn8(1999,'pang','chao');
console.log(result9);

result9 = fn8(1999,'pang');
console.log(result9);

result9 = fn8(1999);
console.log(result9);

//默认参数
//在调用函数的时候，如果不传入该参数的值，则使用默认参数
//同一个参数不允许同时使用 可选，和默认！！！
function fn9(x:string,y?:string,z:string='chao'):void{
    if(y){
        console.log(`${x}--${y}--${z}`)
    }else{
        console.log(`${x}--${z}`)        
    }
}
fn9("1999",'pang');
fn9('9999');

//剩余参数
//通过 展开运算符 ...name 获取其他参数
//该参数类型是数组类型的！
function f1(x:string ,...y:string[]){
    console.log(x+y)
}
f1('1','2','3','4');

//函数的自调用
(function(x,y){
    console.log(x+y)
})(10,20);

//构造函数
let myFn = new Function('a','b','return a * b');
let x = myFn(10,20);
console.log(x);

//递归
function fabo(x:number):number{
    if(x <= 0){
        return 1;
    }else{
        return x * fabo(x-1);
    }
}
console.log(fabo(5)) ;

/**
    Lambda 函数
    Lambda 函数也称之为箭头函数。
    箭头函数表达式的语法比函数表达式更短。
    函数只有一行语句
        
    ( [param1, parma2,…param n] )=>statement;
 */
(a=>{
    console.log(a**2) 
 })(9);

//函数重载
// 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
// 每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。
function oFn(f1:string):string;
function oFn(f1:number,f2:string):string;

function oFn(x:any,y?:string):string{
    return x+y
}
console.log(oFn(1,'3'));

//重载：
//一、声明重载类型
function test1(f1:string):string;
function test1(f1:number,f2:string):string;
//二、实现重载函数
function test1(x:any,y?:string):string{
    return x+y
}
console.log(oFn(1,'3'));

//JavaScript本身是个动态语言。 
//JavaScript里函数根据传入不同的参数而返回不同类型的数据是很常见的。
/**
    pickCard方法根据传入参数的不同会返回两种不同的类型。 
    如果传入的是代表纸牌的对象，函数作用是从中抓一张牌。 
    如果用户想抓牌，我们告诉他抓到了什么牌。 
    但是这怎么在类型系统里表示呢。

    方法是为同一个函数提供多个函数类型定义来进行函数重载。 
    编译器会根据这个列表去处理函数的调用。 
    下面我们来重载 pickCard函数。
 */
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

//重载测试
//声明重载类型：
function my1(str:string):string;
function my1(str:string,str2:number):string;
function my1(str:number,str2:number):number;
function my1(str:Array<string>):string;
//实例重载对象：
function my1(arr:string|number|Array<string>,text?:any):any{
    if(text){
        return `${arr}--${text}`
    }else{
        return `${arr}`
    }
}

/**
 * 重载函数：
 *      参数不同，返回值不同，方法体相同的函数
 * 重载函数编写方法
 *      1、需要首先声明重载类型
 *      2、重载类型不需要方法体，只需要写参数、参数类型、返回类型
 *      3、编写重载函数方法体
 *      4、方法体参数个数必须满足重载类型
 *      5、返回值类型，必须满足重载类型
 * 类型的设置方式：
 *      通过 | 运算符设置多个参数类型，通过 ? 设置可选参数，通过 any 设置任意类型
 * 
 * JavaScript 中的重载方法：
 *     JavaScript 中不存在重载，因为JS是弱类型语言，且不限制参数个数；
 */

let adress:Array<string> = ["my",'name','is','pang','chao','!'];
console.log(my1(adress));
console.log(my1(1000,11111))
console.log(my1('hahaah'));
console.log(my1('aaaaa',9999))
