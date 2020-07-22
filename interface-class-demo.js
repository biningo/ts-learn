"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student = {
    firstName: "bingo",
    lastName: "biningo",
    sayHi: function (name) {
        console.log("hello,", name);
    }
};
student.sayHi("jack");
//类
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.info = function () {
        console.log("engine:", this.engine);
    };
    return Car;
}());
exports.Car = Car;
var baoma = new Car("baoma");
baoma.info();
var HaBaDog = /** @class */ (function () {
    function HaBaDog(name) {
        this.name = name;
    }
    HaBaDog.prototype.wang = function () {
        console.log("wa wa,", this.name);
    };
    return HaBaDog;
}());
var d = new HaBaDog("haba");
d.wang();
function address(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
var newPoint = address({ x: 3, y: 4 }, { x: 3, y: 5 });
console.log(newPoint);
//2
var sites = {
    site1: "Runoob",
    site2: "Google",
};
var invokesites = function (obj) {
    console.log("site1 :" + obj.site1);
    console.log("site2 :" + obj.site2);
};
invokesites(sites);
