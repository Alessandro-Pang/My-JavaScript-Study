import echo from './common.js';
function fn(f1) { return f1; }
;
function fn2(f1) { return f1; }
;
function identify(age) {
    return age;
}
echo(identify(100));
echo(identify('传入了一个String'));
echo(identify(100), identify('传入了一个String'));
echo(identify(['1', 'qps', '2', 'qvf']));
function fs(name, age) {
    let v2 = `my name is ${name},and age is ${age}`;
    return v2;
}
let v1 = fs('pangchao', '18');
echo(v1);
let myFs = fs;
echo(myFs('chaoyue', '21'));
function identity1(arg) {
    return arg;
}
let myIdentity1 = identity1;
function identity2(arg) {
    return arg;
}
let myIdentity2 = identity2;
function identity3(arg) {
    return arg;
}
let myIdentity3 = identity3;
function myfs(age) {
    return age;
}
let Implmyfs = myfs;
echo(Implmyfs(100));
function myfs2(name) {
    return name;
}
let implmyfs2_1 = myfs2;
let implmyfs2_2 = myfs2;
let implmyfs2_3 = myfs2;
echo(implmyfs2_1('pang'), implmyfs2_2('chao'), implmyfs2_1('yue'));
class myfs3 {
}
let cMyfs3 = new myfs3();
cMyfs3.age = 199;
cMyfs3.add = function (x, y) {
    return x + y;
};
echo(cMyfs3.add(100, 200));
class myfs4 {
}
let cf4 = new myfs4();
cf4.name = 'pangchao';
cf4.age = "19";
cf4.add = function (x, y, z) {
    return x + y + z;
};
cf4.diff = function (x, y) {
    return x + '--???--' + y;
};
echo(cf4.name, cf4.age);
echo(cf4.add('pang', 'chao', 'yue'), cf4.diff('cls', 'ln'));
let cf4_2 = new myfs4();
cf4_2.age = 199;
cf4_2.add = function (x, y, z) {
    return x * y * z;
};
cf4_2.diff = function (x, y) {
    return x / y;
};
echo(cf4_2.age, cf4_2.add(3, 6, 7), cf4_2.diff(100, 3));
function myfs5(age) {
    echo('age.length: ' + age.length);
    return age;
}
echo(myfs5({ length: 10, value: 100 }));
function myfs6(num, key) {
    return '' + num + key;
}
let Imyfs6 = myfs6;
echo(Imyfs6(100, '哈哈哈'));
echo(myfs6(1000, '啦啦啦'));
function create(c) {
    return new c();
}
