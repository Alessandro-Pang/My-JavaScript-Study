var echo = (...any:any)=>console.log(...any);
class Greeter {
    private greeting : string ;
    constructor(message :string ){
        this.greeting = message;
    }
    greet(){
        return 'Hello '+ this.greeting;
    }
}

let greeter = new Greeter("pangcy");
let hello = greeter.greet();
echo(hello);

interface IAnimal{
    name:string;
    age : number;
    sex : string;
    play ?: object | any;
}

class Animal{
    private name : string;
    private age : number;
    private sex : string;
    private play : object | any;
    
    constructor(animal : IAnimal){
        this.name = animal.name;
        this.age = animal.age;
        this.sex = animal.sex;
        this.play = animal.play;
    }

    public drink(){
        return 'He want to for a drink!'
    }
    public eat(){
        return 'He want to for a eat food';
    }

    public move(distanceInMeters: number = 0) {
        return `Animal moved ${distanceInMeters}m.`;
    }

    public info(){
        return `the animal name is ${this.name} ,he age is ${this.age},sex is ${this.sex}`
    }
}

class Cat extends Animal{
    constructor(animal:IAnimal){
        super(animal);
    }
    bark() {
        console.log('Woof! Woof!');
    }
}
/**
 * 这个例子展示了最基本的继承：类从基类中继承了属性和方法。
 * 这里， Cat 是一个 派生类，它派生自 Animal 基类，通过 extends关键字。 
 * 派生类通常被称作 子类，基类通常被称作 超类。
 * 因为 Dog继承了 Animal的功能，因此我们可以创建一个 Dog的实例
 */
let cat = new Cat({name:'miaomiao',age:3,sex:'boy'});
echo(cat.drink());
echo(cat.eat());
echo(cat.move(10));
echo(cat.info())
cat.bark();


class DemoAnimal {
    private name:string;
    //constructor 必须是public 否则无法实例构造函数
    public constructor(name:string){
        this.name = name;
    }
    public move(step:number=0){
        console.log(`${this.name} moved ${step}m.`);
    }
}

class Snake extends DemoAnimal{
    public constructor(name:string){
        super(name);
    }
    //重写move()方法
    public move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Dog extends DemoAnimal{
    public constructor(name:string){
        super(name);
    }
    //重写move()方法
    public move(distanceInMeters = 45) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

let snake = new Snake('小绿');
let dog:DemoAnimal = new Dog('小黄');

snake.move();
dog.move();

/**
 * 公共，私有与受保护的修饰符
 * 默认为 public
 * 在上面的例子里，我们可以自由的访问程序里定义的成员。 
 * 如果你对其它语言中的类比较了解，就会注意到我们在之前的代码里并没有使用 public来做修饰；
 * 例如，C#要求必须明确地使用 public指定成员是可见的。 
 * 在TypeScript里，成员都默认为 public。
 * 你也可以明确的将一个成员标记成 public。 
 */

class Demo2Animal{
    private name :string ;
    private sex:string = 'boy';
    constructor(name:string){
        this.name=name;
    }
    animalName(){
        echo('animal name is '+this.name);
    }
} 
class Rhino extends Demo2Animal{
    constructor(){
       super("an-na")
    }
    enter(){
        //sex 是私有属性，只能在Demo2Animal中访问
        //echo(this.sex)
    }
} 
class Employee {
    private name: string;
    constructor(theName: string) { 
        this.name = theName; 
    }
    animalName(){
        echo('animal name is '+this.name);
    }
}
/**
 * 这个例子中有 Animal和 Rhino两个类， Rhino是 Animal类的子类。 
 * 还有一个 Employee类，其类型看上去与 Animal是相同的。
 * 我们创建了几个这些类的实例，并相互赋值来看看会发生什么。 
 * 因为 Animal和 Rhino共享了来自 Animal里的私有成员定义 private name: string，因此它们是兼容的。 
 * 然而 Employee却不是这样。
 * 当把 Employee赋值给 Animal的时候，得到一个错误，说它们的类型不兼容。 
 * 尽管 Employee里也有一个私有成员 name，但它明显不是 Animal里面定义的那个。
 */
let animal = new Demo2Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

//可以赋值
animal = rhino;

// 不可以相互赋值
// 不能将类型“Employee”分配给类型“Demo2Animal”。
// 类型具有私有属性“name”的单独声明。
// animal = employee; // 错误: Animal 与 Employee 不兼容.

class Person {
    protected name : string;
    constructor(name:string){
        this.name = name;
    }
}

class Son extends Person{
    private department : string;
    constructor(name:string,department:string){
        super(name);
        this.department = department;
    }
    public getElevatorPitch(){
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
/**
 * 我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee是由 Person派生而来的。
 * 构造函数也可以被标记成 protected。 
 * 这意味着这个类不能在包含它的类外被实例化，但是能被继承。 
 */
let howard = new Son("Howard", "Sales");
console.log(howard.getElevatorPitch());
//属性“name”受保护，只能在类“Person”及其子类中访问。
// console.log(howard.name); // 错误

class ReadOnly {
    readonly name :string ;
    readonly sex  :string;
    public age:number = 18;
    constructor(name:string,sex:string){
        this.name=name;
        this.sex = sex;
    }
    print(){
        // 只读修饰符
        // this.name = 'ziyang'//错误
        echo(`${this.name}-${this.sex}-${this.age}`)
    }
}
let readonly = new ReadOnly('pangcy','boy');
// 只读修饰符，不可以修改属性值
//Cannot assign to 'name' because it is a read-only property.ts(2540)
// readonly.name = 'ziyang' //错误
readonly.print();
readonly.age = 99;
readonly.print();

/**
 * 修饰符总结：
 *      1、public
 *          public 是默认的，他允许方法、属性在任何地方访问
 *      2、private
 *          private 私有的，他只允许在 Class 类中访问
 *      3、protected 
 *          protected 受保护的，他允许在 继承类中访问属性
 *      4、readonly 
 *          readonly 只读，他允许在任何地方访问，但不允许修改
 * 
 * constructor 应该只使用public 或者 protected
 *      因为当你对类构造器使用protected 时，该类将无法实例化，也无法继承
 *      constructor 在protected修饰符下，将只能被继承，无法被单独实例化
 *      readonly 无法修饰 constructor ,这么做将会报错！
 */