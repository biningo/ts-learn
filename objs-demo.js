//1、Number
console.log(Number.MAX_VALUE);
console.log(Number.NaN);
var num = new Number(18);
//2、Array
var arr = new Array(4);
console.log(arr.length);
console.log(arr);
arr = new Array(99, 2, 3, 4);
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) { //遍历value 1-4
    var i = arr_1[_i];
    console.log(i);
}
for (var i in arr) {
    console.log(i); //遍历index
}
//3、元祖
arr = [99, 2, 3, 4];
//4、联合类型
var val;
val = 1;
val = "2";
console.log(typeof val);
// val = new Array(); 报错
