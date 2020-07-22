function to_sum(one:number,tow:number):number {
    return one+tow;
}

console.log(to_sum(1,2));


function hello():string {
    return "hello";
}

console.log(hello());



//可选参数和默认参数
function f1(name:string,age?:number) {
    console.log(name,age)
}

f1("bingo"); //bingo  undefined

//默认值
function f2(name:string="bingo") {
    console.log(name)
}
f2("biningo");
f2();


//剩余参数
function f3(name:string,...hobby:string[]) {
    console.log(name);
    console.log(hobby);
}

f3("bingo","running","basketball");



//匿名函数
var ping = function ():string {
  return "pong";
};

console.log(ping());


//函数重载
function f4(name:string):void;
function f4(name:string,age:number):void;
function f4(name:string,age?:number) {
    console.log(name,age);
}

f4("bingo");
f4("bingo",18);





