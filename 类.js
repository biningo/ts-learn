var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//-------------------------------1、继承
//默认不加修饰符的每个属性都是public
var Animal = /** @class */ (function () {
    function Animal(name) {
        if (name === void 0) { name = ""; }
        this.name = name;
    }
    Animal.prototype.move = function (d) {
        console.log("animal move the " + d);
    };
    Animal.prototype.sayHi = function () {
        console.log("Hello");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    Dog.prototype.move = function (d) {
        console.log("I am dog");
        _super.prototype.move.call(this, d);
    };
    return Dog;
}(Animal));
var dog = new Dog("haba", 18);
dog.move(10);
dog.sayHi();
//-------------------------------------2、readonly字段
var Person = /** @class */ (function () {
    function Person() {
        this.name = "none";
    }
    return Person;
}());
var p = new Person();
// p.age=19; error
console.log(p.age); //undefined
console.log(p.name);
//---------------------------------------3、get set
var fullNameMaxLength = 10;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "FullName", {
        get: function () {
            return this.fullname;
        },
        set: function (newName) {
            if (newName && newName.length > fullNameMaxLength) {
                throw new Error("fullName has a max length of " + fullNameMaxLength);
            }
            this.fullname = newName;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.FullName = "icepan";
console.log(employee.FullName);
//---------------------------------4、static变量
var Color = /** @class */ (function () {
    function Color() {
    }
    Color.Red = 0;
    Color.Blue = 1;
    return Color;
}());
console.log(Color.Red);
var EnglishBook = /** @class */ (function () {
    function EnglishBook(price) {
        this.price = price;
    }
    EnglishBook.prototype.info = function () {
        console.log(this.price);
    };
    return EnglishBook;
}());
var english = new EnglishBook(10);
english.info();
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var p3d = { x: 1, y: 2, z: 3 };
console.log(p3d);
