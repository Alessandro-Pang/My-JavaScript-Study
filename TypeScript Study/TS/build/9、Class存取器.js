"use strict";
var echo = (...any) => console.log(...any);
let passcode = 'secret passcode';
class Employees {
    constructor() {
        this._username = '';
    }
    get fullName() {
        return this._username;
    }
    set fullName(newName) {
        if (passcode && passcode == 'secret passcode') {
            this._username = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
class Employees_bak {
    constructor() {
        this._username = '';
    }
    fullName(newName) {
        if (passcode && passcode == 'secret passcode') {
            return this._username = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
        return '';
    }
}
let emp = new Employees();
emp.fullName = 'pangcy';
if (emp.fullName) {
    echo(emp.fullName);
}
let emp_bak = new Employees_bak();
let myName = emp_bak.fullName('pangcy');
echo('常规方法：' + myName);
class Employees2 {
    constructor() {
        this._username = '';
        this.oks = false;
    }
    get fullname() {
        return this._username;
    }
    set fullname(username) {
        if (this.oks) {
            this._username = username;
        }
        else {
            echo('对不起，您当前没有查询权限！');
        }
    }
}
let emp2 = new Employees2();
emp2.fullname = 'ziyang';
echo(emp2.fullname);
emp2.oks = true;
emp2.fullname = 'ziyang';
echo(emp2.fullname);
class Track {
    constructor(props) {
        this.props = props;
    }
    get name() {
        return this.props.name;
    }
    set name(name) {
        this.props.name = name;
    }
    get artist() {
        return this.props.artist;
    }
    set artist(artist) {
        this.props.artist = artist;
    }
    play() {
        console.log(`Playing ${this.name} by ${this.artist}`);
    }
}
class Track_bak {
    constructor(name, artist) {
        this.name = name;
        this.artist = artist;
    }
    play() {
        console.log(`Playing ${this.name} by ${this.artist}`);
    }
}
let track = new Track({ name: 'ziyang', artist: 'hhhhhh' });
track.name = 'wen.ziYang';
echo(track.name);
track.artist = '这是一段话，嗯，，，一段废话';
echo(track.artist);
track.play();
let track_bak = new Track_bak('ziyang', 'hhhhhh');
echo('常规：' + track_bak.name + '----' + track_bak.artist);
track_bak.play();
class Add {
    add() {
        return Add.x * Add.x - Add.y * Add.y;
    }
}
Add.x = 9;
Add.y = 6;
let add2 = new Add();
echo(add2.add());
class Grid {
    constructor(scale) {
        this.scale = scale;
    }
    calculateDistanceFromOrigin(point) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}
Grid.origin = { x: 0, y: 0 };
let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
