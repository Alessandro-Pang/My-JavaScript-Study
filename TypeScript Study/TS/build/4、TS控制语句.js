"use strict";
let result = '';
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        result = result + '<br>' + i + ' :偶数';
    }
    else if (i % 2 == 1) {
        result = result + '<br>' + i + ' :奇数';
    }
    else {
        result = '我也不知道这是个啥，但应该是个奇数！！！！';
    }
}
window.onload = function () {
    window.document.getElementById('app').innerHTML = result;
};
function isPrime(n) {
    if (n <= 3) {
        return n > 1;
    }
    if (n % 2 == 0 || n % 3 == 0) {
        return false;
    }
    for (var i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}
let n = 0;
for (let i = 0; i < 101; i++) {
    if (isPrime(i)) {
        n++;
    }
}
console.log('质数的个数：' + n);
let date = '周三';
switch (date) {
    case '周一':
        console.log('wow !:' + date);
        break;
    case '周二':
        console.log('wow !:' + date);
        break;
    case '周三':
        console.log('wow !:' + date);
        break;
    case '周四':
        console.log('wow !:' + date);
        break;
    case '周五':
        console.log('wow !:' + date);
        break;
    case '周六':
        console.log('wow !:' + date);
        break;
    case '周日':
        console.log('wow !:' + date);
        break;
    default:
        console.log('你牛逼！！！');
}
let num = 0;
for (let i; i < 101; i++) {
    num = num + i;
}
console.log(num);
let arr = ['haha', 'gaga', 'gege', 'laka'];
for (let i in arr) {
    console.log(i);
}
let obj = {
    abc: 1,
    bd: 99,
    com: 1000,
    dub: 'haha'
};
for (let i in obj) {
    console.log(obj[i]);
}
let sr = '庞 超-666';
for (let i in sr) {
    console.log(sr[i]);
}
let arr2 = ['1', 'wq', 'q!'];
for (let i of arr2) {
    console.log(i);
}
let sp = '';
arr2.forEach(function (val, index, arr) {
    sp = sp + val + '-' + index + '-' + arr;
});
console.log(sp);
let list = [4, 5, 6, 7, 8, 9, 10];
list.forEach((val, idx, array) => {
    console.log(val);
});
var arrList = list.every(function (val, index, arr) {
    return val >= 7;
});
var arr2List = list.some(function (val, index, arr) {
    return val >= 7;
});
console.log(arrList);
console.log(arr2List);
let a = 9;
while (a >= 0) {
    console.log(a);
    a--;
}
let b = false;
do {
    console.log('do...while循环，无论如何都会执行一次');
} while (b);
let w = 0;
while (true) {
    w++;
    if (w == 99) {
        console.log(localStorage);
        break;
    }
}
var count = 0;
for (let num = 0; num <= 20; num++) {
    if (num % 2 == 0) {
        continue;
    }
    count++;
}
console.log("0 ~20 之间的奇数个数为: " + count);
