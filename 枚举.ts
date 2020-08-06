//-------------------------1、枚举类型
enum ShapeKind {
    Circle,
    Square
}
interface Circle {
    kind: ShapeKind.Circle; //kind:0
    radius: number;
}
interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c:Circle = {
    kind:ShapeKind.Circle,
    radius:100
};


let a:0 = 0;
console.log(a);


//------------------------------2、枚举向下转化
enum E {
    X,Y,Z,K="1"
}
function f(obj:{K:string}) {
    console.log(obj.K)
}
f(E); //E中包含K  所以可以向下转化












