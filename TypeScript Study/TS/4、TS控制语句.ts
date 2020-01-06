/*-----------------------------------------------*/
/*--------------------控制语句--------------------*/
/*-----------------------------------------------*/

//for循环 + if 控制语句
let result : string ='';
for(let i:number=0;i<100;i++){
    if(i % 2 == 0){
        result = result + '<br>' + i+' :偶数';
    }else if(i % 2 == 1){
        result = result + '<br>' + i+' :奇数';
    }else{
        result = '我也不知道这是个啥，但应该是个奇数！！！！'
    }
}
// document.body.innerHTML = result;
window.onload = function(){
    window.document.getElementById('app').innerHTML = result
}
//检查是否是质数
function isPrime(n:number):boolean {
    if (n <= 3) { return n > 1; }
    if (n % 2 == 0 || n % 3 == 0) { return false; }
 
    for (var  i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) { return false; }
    }
    return true;
}
let n:number=0;
for(let i:number=0;i<101;i++){
    
    if(isPrime(i)){
        n++
    }
}
console.log('质数的个数：'+n)

//switch 语句
let date :string = '周三';
switch(date){
    case '周一':
        console.log('wow !:' + date );
        break;
    case '周二':
        console.log('wow !:' + date );
        break;
    case '周三':
        console.log('wow !:' + date );
        break;
    case '周四':
        console.log('wow !:' + date );
        break;
    case '周五':
        console.log('wow !:' + date );
        break;
    case '周六':
        console.log('wow !:' + date );
        break;
    case '周日':
        console.log('wow !:' + date );
        break;
    default :
        console.log('你牛逼！！！')
}

/*-----------------------------------------------*/
/*--------------------循环语句--------------------*/
/*-----------------------------------------------*/
//for循环
let num = 0;
for(let i:number;i<101;i++){
    num = num+i;
}
console.log(num);

// for...in.. 循环
let arr : Array<string> = ['haha','gaga','gege','laka'];
for(let i in arr ){
    console.log(i)
}

//遍历 object
let obj : Object = {
    abc:1,
    bd:99,
    com:1000,
    dub:'haha'
}
for(let i in obj){
    console.log(obj[i])
}

//遍历字符串，必须是any类型
let sr :any = '庞 超-666';
for(let i in sr){
    console.log(sr[i])
}

// for...of.. 循环
let arr2 :Array<string> = ['1','wq','q!']
for(let i of arr2){
    console.log(i);
}

// forEach、every 和 some 是 JavaScript 的循环语法，TypeScript 作为 JavaScript 的语法超集，当然默认也是支持的。
// 因为 forEach 在 iteration 中是无法返回的，所以可以使用 every 和 some 来取代 forEach。

//forEach 循环
let sp : string = '';
arr2.forEach(function(val ,index,arr){
    sp = sp + val + '-' + index  + '-' + arr
})
console.log(sp);

// every()与some()方法都是JS中数组的迭代方法。
// every()是对数组中每一项运行给定函数，如果该函数对 每一项 返回true,则返回true。
// some()是对数组中每一项运行给定函数，如果该函数对 任一项 返回true，则返回true。

let list = [4, 5, 6,7,8,9,10];
list.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log(val)
});

// some一直在找符合条件的值，一旦找到，则不会继续迭代下去。
// every从迭代开始，一旦有一个不符合条件，则不会继续迭代下去。

//every && some 有点像 filter
var arrList:boolean= list.every(function(val,index,arr){
    return val >=7  //-->return false
    // 给定数组中的每一个值 都必须 >= 7
})
var arr2List:boolean= list.some(function(val,index,arr){
    return val >=7  //-->return true
    // 给定数组中的 某 一个值 >= 7 即返回 true
})
console.log(arrList)
console.log(arr2List)

// while 循环
let a:number = 9;
while(a >= 0){
    console.log(a);
    a--
}

// do...while 循环
let b : boolean = false;
do{
    console.log('do...while循环，无论如何都会执行一次')
}while(b);

//break 语句
let w = 0;
while(true){
    w++
    if(w == 99){
        console.log(localStorage)
        break;
    }
}

//continue 语句
var count:number = 0;
for(let num:number=0;num<=20;num++) {
    if (num % 2==0) {
        continue
    }
    count++
}
console.log ("0 ~20 之间的奇数个数为: "+count)    //输出10个偶数

// for 死循环
// for(;;){
//     console.log('for 死循环！')
// }

// while 死循环！
// while(true){
//     console.log('while 死循环！')
// }