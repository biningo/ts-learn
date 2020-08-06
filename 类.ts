//-------------------------------1、继承
//默认不加修饰符的每个属性都是public
class Animal {
    name: string;

    constructor(name: string = "") {
        this.name = name;
    }

    move(d: number) {
        console.log(`animal move the ${d}`)
    }

    sayHi() {
        console.log("Hello")
    }

}

class Dog extends Animal {
    age: number;

    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }


    move(d: number) {
        console.log("I am dog");
        super.move(d);
    }
}

let dog: Dog = new Dog("haba", 18);
dog.move(10);
dog.sayHi();


//-------------------------------------2、readonly字段
class Person {
    readonly age: number;
    readonly name: string = "none";
}

let p: Person = new Person();
// p.age=19; error
console.log(p.age); //undefined
console.log(p.name);


//---------------------------------------3、get set
const fullNameMaxLength = 10;

class Employee {

    private fullname: string;

    get FullName(): string {
        return this.fullname
    }


    set FullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }

        this.fullname = newName;
    }

}

let employee: Employee = new Employee();
employee.FullName = "icepan";
console.log(employee.FullName);




//---------------------------------4、static变量
class Color {
    static Red:number=0;
    static Blue:number=1;
}

console.log(Color.Red);




//----------------------------------5、接口和类
interface Book {
    price:number;
    info():void
}
class EnglishBook implements Book{
    price: number;
    constructor(price:number){
        this.price = price
    }
    info(): void {
        console.log(this.price)
    }
}
let english:EnglishBook = new EnglishBook(10);
english.info();



class Point {
    x:number;
    y:number;
}
interface Point3D extends Point{
    z:number;
}

let p3d:Point3D = {x:1,y:2,z:3};
console.log(p3d);




