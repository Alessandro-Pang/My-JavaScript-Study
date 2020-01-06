import echo from './common.js';
/**
 * 软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。
 * 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
 * 在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 
 * 这样用户就可以以自己的数据类型来使用组件。
 */

/** 封装一个输出函数 */ 
// var echo = (...any:any)=>console.log(...any);

// 泛型的作用
// 如果不使用泛型，则会写死参数类型
function fn(f1:string):string{return f1};
// 或者使用 any ，但这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。
//如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。
function fn2(f1:any):any{return f1};

/**
 * 因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 
 * 这里，我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值。
 */
function identify<T>(age :T):T{
    return age
}
echo(identify<number>(100));
echo(identify<string>('传入了一个String'));
echo(identify<number>(100),identify<string>('传入了一个String'));
echo(identify<Array<string>>(['1','qps','2','qvf']))

//泛型的主要目的就是约束 输入类型与输出类型一致
function fs<U>(name:U,age:U):string{
    let v2 = `my name is ${name},and age is ${age}`;
    return v2;
}
let v1 = fs('pangchao','18');
echo(v1);

/* ------------------------------------------------------------------------*/
/* -----------------------------泛型类型------------------------------------
                            <T>(name:T,age:T) --> 参数
                            string --> 返回值
                            fs 泛型函数
--------------------------------------------------------------------------*/
/* -----------------------------------------------------------------------*/

let myFs: <T>(name:T,age:T)=> string = fs;
echo(myFs('chaoyue','21'));

/*--------------------------------------------------------------------------------------*/
/*    泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样   */
/*-------------------------------------------------------------------------------------*/
function identity1<T>(arg: T): T {
    return arg;
}

let myIdentity1: <T>(arg: T) => T = identity1;

/*--------------------------------------------------------------------------------------*/
/*            我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以          */
/*-------------------------------------------------------------------------------------*/
function identity2<T>(arg: T): T {
    return arg;
}

let myIdentity2: <U>(arg: U) => U = identity2;

/*--------------------------------------------------------------------------------------*/
/*                       我们还可以使用带有调用签名的对象字面量来定义泛型函数               */
/*-------------------------------------------------------------------------------------*/
function identity3<T>(arg: T): T {
    return arg;
}

let myIdentity3: {<T>(arg: T): T} = identity3;


//泛型接口
/*---------------Demo1-------------*/
interface Imyfs{
    <T>(age:T):T
}

function myfs<T>(age:T):T{
    return age
}

let Implmyfs:Imyfs = myfs;
echo(Implmyfs(100));

/*---------------Demo2-------------*/
interface Imyfs2{
    <U>(name:U):U
}
function myfs2<T>(name:T):T{
    return name;
}
let implmyfs2_1 : <T>(name:T) => T = myfs2;
let implmyfs2_2 : Imyfs2 = myfs2;
let implmyfs2_3 : {<T>(name:T):T}=myfs2;
echo(implmyfs2_1('pang'),implmyfs2_2('chao'),implmyfs2_1('yue'));

//泛型类
class myfs3<T>{
    age:T;
    add:(x:T,y:T)=>T;
}

let cMyfs3 = new myfs3<number>();
cMyfs3.age = 199;
cMyfs3.add = function(x,y){
    return x+y
}
echo(cMyfs3.add(100,200));

// 这里的 class 类,写法了类似于对象；
// 多个泛型应该以逗号分隔 <T,U>
class myfs4<U>{
    name:U;
    age:U;
    add:(x:U,y:U,z:U)=> U;
    diff:(x:U,y:U)=>U;
}

let cf4 = new myfs4<string>();
cf4.name='pangchao';
cf4.age="19";
cf4.add = function(x,y,z){
    return x + y + z;
}
cf4.diff = function(x,y){
    return x+'--???--'+y
}

echo(cf4.name,cf4.age);
echo(cf4.add('pang','chao','yue'),cf4.diff('cls','ln'))

let cf4_2 = new myfs4<number>();
cf4_2.age = 199;
cf4_2.add=function(x,y,z){
    return x*y*z
}
cf4_2.diff = function(x,y){
    return x/y
}
echo(cf4_2.age,cf4_2.add(3,6,7),cf4_2.diff(100,3));

//泛型约束
interface  LengthWise {
    length:number;
}
function myfs5<T extends LengthWise>(age:T):T{
    echo('age.length: '+age.length)
    return age
}
// 现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：
//myfs5(100) --> Error, number doesn't have a .length property

//我们需要传入符合约束类型的值，必须包含必须的属性：
echo(myfs5({length:10,value:100}));

function myfs6<T,K>(num:T,key:K){
    return '' + num + key
}

let Imyfs6 : <T,K>(num:T,key:K) => string = myfs6;
echo(Imyfs6<number,string>(100,'哈哈哈'));
echo(myfs6(1000,'啦啦啦'))

/**
 * 在泛型约束中使用类型参数
 * 你可以声明一个类型参数，且它被另一个类型参数所约束。
 * 比如，现在我们想要用属性名从对象里获取这个属性。 
 * 并且我们想要确保这个属性存在于对象 obj上，
 * 因此我们需要在这两个类型之间使用约束。
 */
// function getProperty(obj: T, key: K) {
//     return obj[key];
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };

// getProperty(x, "a"); // okay
// getProperty(x, "m"); --> error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// 在泛型里使用类类型
// 在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。
// 比如:
function create<T>(c: {new(): T; }): T {
    return new c();
}