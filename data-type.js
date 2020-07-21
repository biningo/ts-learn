/**
 * any
 * number
 * string
 * boolean
 * 数组
 * 元组
 * enum
 * void
 * null
 * underfined
 * nerver
 **/
//1、any
var x = 1;
x = "1";
x = {};
var arr = [1, "1", 1.2];
// //2、never
// let xx: never;
// let y: number;
//
// // 运行错误，数字类型不能转为 never 类型
// x = 123;
//
// // 运行正确，never 类型可以赋值给 never类型
// x = (()=>{ throw new Error('exception')})();
//
// // 运行正确，never 类型可以赋值给 数字类型
// y = (()=>{ throw new Error('exception')})();
//
// // 返回值为 never 的函数可以是抛出异常的情况
// function error(message: string): never {
//     throw new Error(message);
// }
//3、string
var username = "abc";
//4、类型推断
var num = 12;
console.log(typeof num);
var s = "bingo";
console.log(typeof s);
//5、变量作用域
var g = 1;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 2;
    }
    Numbers.prototype.say = function () {
        var val = 4;
        console.log(val);
    };
    Numbers.val = 3;
    return Numbers;
}());
console.log(g, Numbers.val);
var obj = new Numbers();
console.log(obj.num_val);
obj.say();
