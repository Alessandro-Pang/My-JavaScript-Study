function test(num:number):number{
    return num ** num
}  
console.log('----------- test Start ----------')
console.log(test(5));
console.log('----------- test End ----------')

//enum 枚举
enum myEnum {
    name = '庞超',
    age = '18',
    sex = '男',
}
console.log('-------Enum Start--------');
console.log(myEnum['name']);
//enum 并不能反过来用
console.log(myEnum['男'])
console.log('-------Enum End--------');

//声明 一个 接口
interface Iperson{
    name:string,
    age:number,
    sex:'男'|'女'
}

function person(person:Iperson):void{
    console.log(person.name)
    console.log(person.age)
    console.log(person.sex)
}

//接口所传入的参数是一个 object 类型的
console.log('----------- interface Start ----------')
person({name:'庞超',age:21,sex:'男'})
console.log('----------- interface End ----------')

declare var a:number;