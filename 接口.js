function createSquare(config) {
    console.log(config);
}
createSquare({});
createSquare({ color: "red" });
createSquare({ width: 18 });
//默认值
function createSquare2(config) {
    var c = { color: config.color || "black", width: config.width || 100 };
    console.log(c);
}
createSquare2({ color: 'red' });
createSquare2({ name: 'bingo', width: 99 }); //强转化
console.log("---------");
var p1 = { x: 10, y: 20 };
// p1.x=19; error
p1.y = 100;
console.log(p1);
//只读数组
var arr = [1, 2, 3];
// arr[0]=12 error
var arr2 = arr;
arr2[0] = 99;
var echo = function (msg) {
    return msg;
};
console.log(echo("hello"));
var myArr = ["one", "tow"];
console.log(myArr[0]); //只能以数字索引
var Clock = /** @class */ (function () {
    function Clock() {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var c = new Clock();
console.log(c.currentTime);
c.setTime(new Date(2020, 5, 10));
console.log(c.currentTime);
function createAnimal(new_func, what) {
    return new new_func(what);
}
var Dog = /** @class */ (function () {
    function Dog(what) {
        this.name = what;
    }
    Dog.prototype.say = function () {
        console.log(this.name);
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat(what) {
        this.name = what;
    }
    Cat.prototype.say = function () {
        console.log(this.name);
    };
    return Cat;
}());
var dog = createAnimal(Dog, "dog");
dog.say();
var cat = createAnimal(Cat, "cat");
cat.say();
var square = {};
square.width = 10;
square.color = 'red';
console.log(square);
function getCounter() {
    var _this = this;
    var counter = function (start) { this.num = start; return "num is " + start; };
    counter.num = 1;
    counter.reset = function () { _this.num = 0; };
    return counter;
}
var cc = getCounter();
console.log(cc(10));
cc.reset();
console.log(cc.num);
