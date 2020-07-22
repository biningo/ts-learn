interface Person {
    firstName:string,
    lastName:string,
    sayHi:(name:string)=>void
}


var student:Person = {
    firstName:"bingo",
    lastName:"biningo",
    sayHi:name => {
        console.log("hello,",name)
    }
};

student.sayHi("jack");



//类
class Car {
    engine:string;
    constructor(engine:string){
        this.engine = engine;
    }

    info():void{
        console.log("engine:",this.engine)
    }

}

var baoma = new Car("baoma");
baoma.info();


//类和接口
interface Dog {
    name:string;
    wang():void;
}


class HaBaDog implements Dog{
    name: string;

    constructor(name:string){
        this.name = name;
    }
    wang(): void {
        console.log("wa wa,",this.name)
    }
}


var d = new HaBaDog("haba");
d.wang();


//对象

//1
interface Point {
    x:number;
    y:number;
}

function address(p1:Point,p2:Point) {
    var x = p1.x+p2.x;
    var y = p1.y+p2.y;
    return {x,y}
}

var  newPoint = address({x:3,y:4},{x:3,y:5});
console.log(newPoint);


//2
var sites = {
    site1:"Runoob",
    site2:"Google",
};
var invokesites = function(obj: { site1:string, site2 :string }) {
    console.log("site1 :"+obj.site1);
    console.log("site2 :"+obj.site2)
};
invokesites(sites);