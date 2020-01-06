"use strict";
function test(num) {
    return Math.pow(num, num);
}
console.log('----------- test Start ----------');
console.log(test(5));
console.log('----------- test End ----------');
var myEnum;
(function (myEnum) {
    myEnum["name"] = "\u5E9E\u8D85";
    myEnum["age"] = "18";
    myEnum["sex"] = "\u7537";
})(myEnum || (myEnum = {}));
console.log('-------Enum Start--------');
console.log(myEnum['name']);
console.log(myEnum['男']);
console.log('-------Enum End--------');
function person(person) {
    console.log(person.name);
    console.log(person.age);
    console.log(person.sex);
}
console.log('----------- interface Start ----------');
person({ name: '庞超', age: 21, sex: '男' });
console.log('----------- interface End ----------');
