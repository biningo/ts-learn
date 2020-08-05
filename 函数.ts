//-------------------1、函数类型
let myAdd: (x: number, y: number) => number = function (x, y) {
    return x + y
};

console.log(myAdd(1, 2));


//-------------------2、可选类型
function Stu(name: string, age?: number) {
    if (age) {
        return name + "-" + age
    } else {
        return name
    }
}

console.log(Stu("icepan"));
console.log(Stu("icepan", 18));


//----------------------3、函数重载
function f4(name: string): void;
function f4(name: string, age: number): void;
function f4(name: string, age?: number) {
    console.log(name, age);
}

f4("bingo");
f4("bingo", 18);


//--------------4、匿名箭头函数
let hi = () => {
    console.log("Hi")
};
hi();
let hello = (name:string,age:number)=>{
    console.log(name,age);
    return name
};
console.log(hello("icepan", 18));


//-------------------5、默认值
function f2(name:string="bingo") {
    console.log(name)
}
f2("biningo");
f2();
f2(null); //null
f2(undefined); //bingo


//----------------6、剩余参数
function f3(name:string,...hobby:string[]) {
    console.log(name);
    console.log(hobby);
}

f3("bingo","running","basketball");


