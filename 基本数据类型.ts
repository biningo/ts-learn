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
let n:number = 1.2;
console.log(n);

//--------------------2、string
let fullname:string = 'icepan';
let age:number = 18;
let info:string = `I'm ${fullname},${age} years old`;
console.log(info);

//-----------------------3、Array Tuple
let list:number[] = [1,2,3,4];
let x:[string,number] = ['icepan',18]; //tuple
console.log(x);

//-------------------------4、Enum
enum Color {
    Red,
    Green=3,
    Blue
}
let red:Color = Color.Red;
console.log(red,typeof red); //number

let colorName:string = Color[4];
console.log(colorName); //Blue

//-----------------------------5、Unknow 动态绑定类型
let notSure:unknown = 'a';
notSure = 12;
notSure=false;

if(typeof notSure==='boolean'){
    var flag:boolean = notSure;
    console.log(flag);
}else if(typeof notSure==='number'){
    var num:number = notSure;
}

//-------------------------6、null undefine
let u:undefined = undefined;
let nu:null = null;


//---------------------------7、Object|object
function create(obj:object|null) {
    console.log(obj)
}
// create(1); 报错
// create("a"); 报错
create({name:"hi"});
create(null);

let Obj:Object = 1;
Obj = "a";




//-----------------------------8、类型断言
let sAny:any = "hi";
let sLen:number = (sAny as string).length; //方法1
sLen = (<string>sAny).length; //方法2
console.log(sLen);

