/**
 * Created by montage_fz on 2019-07-04
 */
// boolean
let isDone: boolean = true;

// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o774;

// string
let names: string = '小丽';
let age: number = 12;
let sentence: string = `my name is ${names}, I'm ${age} years old`;


// undefined
let num: number | undefined;

// null
let nu: null | undefined | number;


// array 数组
let list: number [] = [1, 2, 3, 4];
let allList: Array<number> = [1, 2, 3, 4];
let arr3: any[] = [1, true, 'string'];
// 元组, 表示已知数量和内容的数组, 该数组里面的元素类型, 必须和声明时相同
let x: [string, number];
x = ['你好', 123];
x[0].substr(1);

// 枚举类型主要是用来反向查询或者是正向查询的, 让对应的数字变得更有语义化
enum Color {
    Red,
    Green,
    Blue
}

let r: Color = Color.Red;
let colorName: string = Color[0];
console.log(r);
console.log(colorName);

// any 当不清楚变量的类型, 或者不需要类型检查的时候, 可以使用, 可以用来 表示任何类型
// 当你获取dom节点的时候, 使用这个类型, 可以解决ts的报错问题
let bom: any = document.getElementById('box');
console.log(bom);
bom.style.color = 'red';

console.log(bom);
let notSure: any = 4;
notSure = '123';
notSure = {};

// void 于any 类型相反, 表示不是任何类型, 通常当函数没有返回值的时候, 我们可以定义为 void
// 如果你声明了一个void 变量, 那么这个变量只能赋予null和undefined
let u: void = undefined;
let n: void = null;

// 函数没有返回值
function fun1(): void {
}

// 函数有返回值
function fun2(): number {
    return 123;
}

// never, 可以用做抛出异常
let c: never;

// object 表示非原始类型, 也就是除了number, string, boolean, symbol, null 和 undefined 之外的类型.
let o: object = {};
let a: object = [];


// 类型断言
// 我们将这个变量定义为any类型, 这样编辑器就不知道这个变量是数组, 还是字符串,
// 那么就不知道这个变量复制后, 有没有数组的方法或者字符串的方法, 但是我们明确知道这个变量是字符串,
// 我们就可以使用断言, 告诉编辑器,这个变量是字符串, 从而就可以使用字符串的方法

let someValue: any = `hello world`;
// someValue as string 表示 告诉编辑器,这个变量是字符串
let valLength = someValue as string;
console.log(valLength.length);
