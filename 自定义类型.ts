//-----------------------1、自定义类型
type Num = "one" | "tow" | "three"
function TestNum(num:Num):Num {
    return num
}

console.log(TestNum("tow"));
// console.log(TestNum("four")); 报错

type MyNumber = 1|2|3
function TestMyNumber(num:MyNumber) {
    console.log(num)
}
TestMyNumber(1);
//限定返回的数字
function LimitNum(): 1|2|3|4 {
    return 4
}



