"use strict";
function fn1() {
    console.log('my name is pangcy');
}
fn1();
let fn2 = function () {
    console.log('my age is 21');
};
fn2();
let fn3 = (sex) => console.log('my sex is ' + sex);
fn3('男');
function fn4() {
    console.log('没有返回值');
}
function fn5() {
    fn4();
    return '返回一个字符串！';
}
console.log(fn5());
function fn6(num, num2) {
    return num + num2;
}
let add = fn6(100, 200);
console.log(add);
function fn7(str, str2) {
    if (str2) {
        console.log(str + '---' + str2);
    }
    else {
        console.log(str);
    }
}
fn7('aaa');
fn7('aaa', 'bbb');
function fn8(str1, str2, str3) {
    if (str1 && str2 && str3) {
        return `${str1}---${str2}---${str3}`;
    }
    else if (str1 && str2) {
        return `${str1}---${str2}`;
    }
    else {
        return `${str1}`;
    }
}
let result9 = fn8(1999, 'pang', 'chao');
console.log(result9);
result9 = fn8(1999, 'pang');
console.log(result9);
result9 = fn8(1999);
console.log(result9);
function fn9(x, y, z = 'chao') {
    if (y) {
        console.log(`${x}--${y}--${z}`);
    }
    else {
        console.log(`${x}--${z}`);
    }
}
fn9("1999", 'pang');
fn9('9999');
function f1(x, ...y) {
    console.log(x + y);
}
f1('1', '2', '3', '4');
(function (x, y) {
    console.log(x + y);
})(10, 20);
let myFn = new Function('a', 'b', 'return a * b');
let x = myFn(10, 20);
console.log(x);
function fabo(x) {
    if (x <= 0) {
        return 1;
    }
    else {
        return x * fabo(x - 1);
    }
}
console.log(fabo(5));
(a => {
    console.log(Math.pow(a, 2));
})(9);
function oFn(x, y) {
    return x + y;
}
console.log(oFn(1, '3'));
function test1(x, y) {
    return x + y;
}
console.log(oFn(1, '3'));
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
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
function my1(arr, text) {
    if (text) {
        return `${arr}--${text}`;
    }
    else {
        return `${arr}`;
    }
}
let adress = ["my", 'name', 'is', 'pang', 'chao', '!'];
console.log(my1(adress));
console.log(my1(1000, 11111));
console.log(my1('hahaah'));
console.log(my1('aaaaa', 9999));
