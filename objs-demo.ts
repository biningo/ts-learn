//1、Number
console.log(Number.MAX_VALUE);
console.log(Number.NaN);
var num = new Number(18);


//2、Array

var arr = new Array(4);
console.log(arr.length);
console.log(arr);
arr = new Array(99,2,3,4);
for (let i of arr){ //遍历value 1-4
    console.log(i)
}

for(let i in arr){
    console.log(i)  //遍历index
}



//3、元祖
arr = [99,2,3,4];



//4、联合类型
var val:string|number;
val = 1;
val = "2";
console.log(typeof val);

// val = new Array(); 报错


