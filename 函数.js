//-------------------1、函数类型
var myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(1, 2));
//-------------------2、可选类型
function Stu(name, age) {
    if (age) {
        return name + "-" + age;
    }
    else {
        return name;
    }
}
console.log(Stu("icepan"));
console.log(Stu("icepan", 18));
function f4(name, age) {
    console.log(name, age);
}
f4("bingo");
f4("bingo", 18);
//--------------4、匿名箭头函数
var hi = function () {
    console.log("Hi");
};
hi();
var hello = function (name, age) {
    console.log(name, age);
    return name;
};
console.log(hello("icepan", 18));
//-------------------5、默认值
function f2(name) {
    if (name === void 0) { name = "bingo"; }
    console.log(name);
}
f2("biningo");
f2();
f2(null); //null
f2(undefined); //bingo
//----------------6、剩余参数
function f3(name) {
    var hobby = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        hobby[_i - 1] = arguments[_i];
    }
    console.log(name);
    console.log(hobby);
}
f3("bingo", "running", "basketball");
