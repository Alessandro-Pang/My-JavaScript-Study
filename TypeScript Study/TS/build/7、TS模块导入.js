import echo from './common.js';
let str;
str = 'abcdefg';
echo(str.length);
str = {
    obj: 'aabb',
    name: 'pcy',
    age: 111,
    test: '哈哈哈'
};
echo(str.test);
let notSure = 4;
notSure.ifItExists();
notSure.toFixed();
let prettySure = 4;
