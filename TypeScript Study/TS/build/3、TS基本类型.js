"use strict";
let text;
text = {};
text = [];
text = '';
text = 0;
text = null;
let num;
num = 10;
num = Math.pow(10, 3);
let binaryLiteral = 0b1010;
let octalLiteral = 0o744;
let decLiteral = 6;
let hexLiteral = 0xf00d;
let str = '单引号字符串';
let str2 = "双引号字符串";
let str3 = `反引号字符串表达式${num}`;
let truth = true;
let falser = false;
let array = ['any', 'string', 'number', 'boolean'];
let array2 = [true, false, true, true];
let array3 = ['any', 'string', 'number', 'boolean'];
let array4 = [1, 2, 3, 4, 5, 6, 7];
let tuple;
tuple = ['a', 'b', 1, true];
tuple[1];
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["yellow"] = 2] = "yellow";
    Color[Color["green"] = 3] = "green";
})(Color || (Color = {}));
let c = Color.blue;
console.log(c);
var TextColor;
(function (TextColor) {
    TextColor["red"] = "255,0,0";
    TextColor["blue"] = "0,0,255";
    TextColor["yellow"] = "255,255,0";
    TextColor["green"] = "0,255,0";
    TextColor["black"] = "#000";
})(TextColor || (TextColor = {}));
let tc = TextColor.blue;
console.log(tc);
function fn() {
    console.log(1);
}
let x;
x = 1;
x = undefined;
x = null;
let x2;
x2 = 1;
x2 = undefined;
x2 = null;
let z;
let y;
function test2(message) {
    let nev;
    let n = nev;
    console.log(n);
    return nev;
}
test2('');
var v_1 = 'abc';
var v_2;
var v_3 = ['a', 'b'];
var v_4;
var uname = "Runoob";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("名字: " + uname);
console.log("第一个科目成绩: " + score1);
console.log("第二个科目成绩: " + score2);
console.log("总成绩: " + sum);
let s = 'abc';
var s2 = '1';
var s3 = s2;
console.log(s3);
let ass = 'true';
let ass2 = ass;
console.log(ass2 == true);
var es1;
(function (es1) {
    es1[es1["a"] = 0] = "a";
    es1[es1["b"] = 1] = "b";
    es1[es1["c"] = 2] = "c";
})(es1 || (es1 = {}));
let es2 = es1;
console.log(es2);
function computedNum(msg) {
    return Math.pow(msg, 2);
}
var em;
(function (em) {
    em[em["a"] = computedNum(9)] = "a";
    em[em["b"] = 3] = "b";
    em[em["c"] = 4] = "c";
})(em || (em = {}));
let impl = em.a;
console.log(impl);
let d_v1;
let d_v2 = 1000;
