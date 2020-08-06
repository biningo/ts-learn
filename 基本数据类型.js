/**
 * number
 * string
 * boolean
 *
 * Array
 * Tuple
 * Enum
 *
 * UnKnown
 * Any
 * Void
 * null
 * underfined
 * Nerver
 *
 * Object
 **/
//----------------------------1、Number
var n = 1.2;
console.log(n);
//--------------------2、string
var fullname = 'icepan';
var age = 18;
var info = "I'm " + fullname + "," + age + " years old";
console.log(info);
//-----------------------3、Array Tuple
var list = [1, 2, 3, 4];
var x = ['icepan', 18]; //tuple
console.log(x);
//-------------------------4、Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 1] = "A";
    Enum[Enum["B"] = 2] = "B";
    Enum[Enum["C"] = 2] = "C";
})(Enum || (Enum = {}));
var red = Color.Red;
console.log(red, typeof red); //number
var colorName = Color[4];
console.log(colorName); //Blue
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
var d = Direction.Up;
console.log(d, typeof d); //string
//-----------------------------5、Unknow 动态绑定类型
var notSure = 'a';
notSure = 12;
notSure = false;
if (typeof notSure === 'boolean') {
    var flag = notSure;
    console.log(flag);
}
else if (typeof notSure === 'number') {
    var num = notSure;
}
//-------------------------6、null undefine
var u = undefined;
var nu = null;
//---------------------------7、Object|object
function create(obj) {
    console.log(obj);
}
// create(1); 报错
// create("a"); 报错
create({ name: "hi" });
create(null);
var Obj = 1;
Obj = "a";
//-----------------------------8、类型断言
var sAny = "hi";
var sLen = sAny.length; //方法1
sLen = sAny.length; //方法2
console.log(sLen);
