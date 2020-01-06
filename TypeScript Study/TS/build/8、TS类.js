"use strict";
var echo = (...any) => console.log(...any);
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return 'Hello ' + this.greeting;
    }
}
let greeter = new Greeter("pangcy");
let hello = greeter.greet();
echo(hello);
class Animal {
    constructor(animal) {
        this.name = animal.name;
        this.age = animal.age;
        this.sex = animal.sex;
        this.play = animal.play;
    }
    drink() {
        return 'He want to for a drink!';
    }
    eat() {
        return 'He want to for a eat food';
    }
    move(distanceInMeters = 0) {
        return `Animal moved ${distanceInMeters}m.`;
    }
    info() {
        return `the animal name is ${this.name} ,he age is ${this.age},sex is ${this.sex}`;
    }
}
class Cat extends Animal {
    constructor(animal) {
        super(animal);
    }
    bark() {
        console.log('Woof! Woof!');
    }
}
let cat = new Cat({ name: 'miaomiao', age: 3, sex: 'boy' });
echo(cat.drink());
echo(cat.eat());
echo(cat.move(10));
echo(cat.info());
cat.bark();
class DemoAnimal {
    constructor(name) {
        this.name = name;
    }
    move(step = 0) {
        console.log(`${this.name} moved ${step}m.`);
    }
}
class Snake extends DemoAnimal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Dog extends DemoAnimal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
let snake = new Snake('小绿');
let dog = new Dog('小黄');
snake.move();
dog.move();
class Demo2Animal {
    constructor(name) {
        this.sex = 'boy';
        this.name = name;
    }
    animalName() {
        echo('animal name is ' + this.name);
    }
}
class Rhino extends Demo2Animal {
    constructor() {
        super("an-na");
    }
    enter() {
    }
}
class Employee {
    constructor(theName) {
        this.name = theName;
    }
    animalName() {
        echo('animal name is ' + this.name);
    }
}
let animal = new Demo2Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");
animal = rhino;
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Son extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Son("Howard", "Sales");
console.log(howard.getElevatorPitch());
class ReadOnly {
    constructor(name, sex) {
        this.age = 18;
        this.name = name;
        this.sex = sex;
    }
    print() {
        echo(`${this.name}-${this.sex}-${this.age}`);
    }
}
let readonly = new ReadOnly('pangcy', 'boy');
readonly.print();
readonly.age = 99;
readonly.print();
