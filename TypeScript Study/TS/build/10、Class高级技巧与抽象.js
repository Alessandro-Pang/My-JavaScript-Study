"use strict";
class Animals {
    move() {
        console.log('roaming the earch...');
    }
}
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log('Department name: ' + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing');
    }
    printMeeting() {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports() {
        console.log('Generating accounting reports...');
    }
}
let department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
class Greeters2 {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeters2;
greeters2 = new Greeters2("world");
console.log(greeters2.greet());
