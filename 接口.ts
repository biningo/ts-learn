//---------------------------1、可选择属性
interface SquareConfig {
    color?: string,
    width?: number
}

function createSquare(config: SquareConfig) {
    console.log(config)
}

createSquare({});
createSquare({color: "red"});
createSquare({width: 18});

//默认值
function createSquare2(config: SquareConfig) {
    let c: SquareConfig = {color: config.color || "black", width: config.width || 100};
    console.log(c)
}

createSquare2({color: 'red'});
createSquare2({name: 'bingo', width: 99} as SquareConfig); //强转化
console.log("---------");


//-----------------------2、只读属性
interface Point {
    readonly x: number,
    y: number
}

let p1: Point = {x: 10, y: 20};
// p1.x=19; error
p1.y = 100;
console.log(p1);

//只读数组
let arr: ReadonlyArray<number> = [1, 2, 3];
// arr[0]=12 error
let arr2: number[] = arr as number[];
arr2[0] = 99;


//----------------------3、Function Types 定义函数类型的接口
interface EchoFunc {
    (msg: string): string
}

let echo: EchoFunc = function (msg: string): string {
    return msg;
};
console.log(echo("hello"));


//----------------------4、Indexable Types  定义索引类型接口
interface StringArray {
    [index: number]: string
}

let myArr: StringArray = ["one", "tow"];
console.log(myArr[0]); //只能以数字索引


//------------------------5、Class Types 类接口
interface ClockInterface {
    currentTime: Date;

    setTime(d: Date): void
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();

    setTime(d: Date): void {
        this.currentTime = d;
    }
}

let c = new Clock();
console.log(c.currentTime);
c.setTime(new Date(2020, 5, 10));
console.log(c.currentTime);


//-----------------------6、构造函数
interface AnimalConstructor {
    new(what: string): AnimalInterface
}

interface AnimalInterface {
    say(): void
}

function createAnimal(new_func: AnimalConstructor, what: string): AnimalInterface {
    return new new_func(what)
}

class Dog implements AnimalInterface {
    private name: string;

    constructor(what: string) {
        this.name = what
    }

    say(): void {
        console.log(this.name)
    }

}

class Cat implements AnimalInterface {
    private name: string;

    constructor(what: string) {
        this.name = what
    }

    say(): void {
        console.log(this.name)
    }

}

let dog: AnimalInterface = createAnimal(Dog, "dog");
dog.say();
let cat: AnimalInterface = createAnimal(Cat, "cat");
cat.say();


//7、--------------接口扩展 可以继承多个
interface Shape {
    color: string
}

interface Square extends Shape {
    width: number
}

let square: Square = {} as Square;
square.width = 10;
square.color = 'red';
console.log(square);


//8、接口函数 让类型既充对象又充当函数
interface Counter {
    (start:number):string
    num:number,
    reset():void
}
function getCounter():Counter {
    let counter = function (start:number) { this.num=start;return `num is ${start}` } as Counter;
    counter.num = 1;
    counter.reset = ()=>{this.num=0};
    return counter
}

let cc = getCounter();
console.log(cc(10));
cc.reset();
console.log(cc.num);




