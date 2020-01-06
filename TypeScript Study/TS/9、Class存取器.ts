var echo = (...any:any) => console.log(...any);

let passcode:string = 'secret passcode';
/**
 * 首先，存取器要求你将编译器设置为输出ECMAScript 5或更高。 
 * 不支持降级到ECMAScript 3。 
 * 其次，只带有 get不带有 set的存取器自动被推断为 readonly。 
 * 这在从代码生成 .d.ts文件时是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值。
 */
class Employees{
    private _username :string ='';
    
    get fullName():string {
        return this._username;
    }

    set fullName(newName:string){
        if(passcode && passcode == 'secret passcode'){
            this._username = newName;
        }else{
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

/**
 * 常规方法：    
 */
class Employees_bak {
    private _username :string = '';

    fullName(newName:string):string{
        if(passcode && passcode == 'secret passcode'){
            return this._username = newName;
        }else{
            console.log("Error: Unauthorized update of employee!");
        }
        return ''
    }
}

let emp = new Employees();
emp.fullName='pangcy';
if(emp.fullName){
    echo(emp.fullName)
}

let emp_bak = new Employees_bak();
let myName = emp_bak.fullName('pangcy');
echo('常规方法：'+myName);

/**
 * 语法规则:
 *      通过get和set关键字创建的 _username 属性的getter和setter函数。
 *      get函数是没有参数的，set函数会将等号右边的值作为参数。
 */
class Employees2{
    private _username:string ='';
    public oks: boolean = false;
    get fullname():string{
        return this._username;
    }
    set fullname(username:string){
        if(this.oks){
            this._username = username;
        }else{
            echo('对不起，您当前没有查询权限！')
        }
    }
}

let emp2 = new Employees2();
emp2.fullname = 'ziyang';
echo(emp2.fullname);
emp2.oks = true;

//调用前getter 前，要先对setter 设置;
//否则将不会显示东西！
emp2.fullname = 'ziyang';
echo(emp2.fullname)


/*--------------------------------------------------*/
/*---------------------Demo-------------------------*/
/*--------------------------------------------------*/

interface ITrackProps {
    name: string;
    artist: string;
  }
  
class Track {  
    private props: ITrackProps;

    get name (): string {
        return this.props.name;
    }

    set name (name: string) {
        this.props.name = name;
    }

    get artist (): string {
        return this.props.artist;
    }

    set artist (artist: string) {
        this.props.artist = artist;
    }

    constructor (props: ITrackProps) {
        this.props = props;
    } 

    public play (): void {    
        console.log(`Playing ${this.name} by ${this.artist}`);
    }
}
/**
 * 常规方法
 */

  
class Track_bak {  
    public name: string;
    public artist: string;
  
    constructor (name: string, artist: string) {
      this.name = name;
      this.artist = artist;
    } 
  
    public play (): void {    
        console.log(`Playing ${this.name} by ${this.artist}`);
    }
}

let track = new Track({name:'ziyang',artist:'hhhhhh'});
track.name = 'wen.ziYang';
echo(track.name);
track.artist = '这是一段话，嗯，，，一段废话';
echo(track.artist);
track.play();

let track_bak = new Track_bak('ziyang','hhhhhh');
echo('常规：'+ track_bak.name +'----'+track_bak.artist)
track_bak.play();

/**
 * static 静态属性
 */
class Add{
    static x:number = 9;
    static y:number = 6
    add(){
        //static 静态属性，调用时需要加上类名
        //否则将会报错：ReferenceError: x,y is not defined
        return Add.x*Add.x - Add.y*Add.y;
    }
}

let add2 = new Add();
echo(add2.add());

/**
 * 静态属性
 *      到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。 
 *      我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。
 *      在这个例子里，我们使用 static定义 origin，因为它是所有网格都会用到的属性。 
 *      每个实例想要访问这个属性的时候，都要在 origin前面加上类名。
 *      如同在实例属性上使用 this.前缀来访问属性一样，这里我们使用 Grid.来访问静态属性。
 */ 


class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));