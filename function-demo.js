function to_sum(one, tow) {
    return one + tow;
}
console.log(to_sum(1, 2));
function hello() {
    return "hello";
}
console.log(hello());
//可选参数和默认参数
function f1(name, age) {
    console.log(name, age);
}
f1("bingo"); //bingo  undefined
//默认值
function f2(name) {
    if (name === void 0) { name = "bingo"; }
    console.log(name);
}
f2("biningo");
f2();
//剩余参数
function f3(name) {
    var hobby = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        hobby[_i - 1] = arguments[_i];
    }
    console.log(name);
    console.log(hobby);
}
f3("bingo", "running", "basketball");
//匿名函数
var ping = function () {
    return "pong";
};
console.log(ping());
function f4(name, age) {
    console.log(name, age);
}
f4("bingo");
f4("bingo", 18);
