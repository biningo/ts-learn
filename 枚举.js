//-------------------------1、枚举类型
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    kind: ShapeKind.Circle,
    radius: 100
};
var a = 0;
console.log(a);
//------------------------------2、枚举向下转化
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
    E["K"] = "1";
})(E || (E = {}));
function f(obj) {
    console.log(obj.K);
}
f(E); //E中包含K  所以可以向下转化
