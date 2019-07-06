/**
 * Created by montage_fz on 2019-07-05
 */

// 函数的定义
// 01. 函数声明法
function run(): string {
    return 'string';
}

// 没有返回值
function run1(): void {

}

// 有返回值
function getInfo(name: string, age: number): string {
    return `${name}---${age}`;
}

// 方法的可选参数, ? 表示当前参数可选, 可选参数必须放到参数的最后面!
function getInfo2(name: string, age?: number): string {
    return `${name}---${age}`;
}

// 默认参数
function getInfo3(name: string = '张三', age: number): string {
    return `${name}---${age}`;

}

// 剩余参数, 剩余参数也必须放到函数参数的最后一位, 如果有可选参数和剩余参数, 可选参数放到剩余参数的前面
function sum2(a?: number, ...rest: number[]): number {
    let result: number = 0;
    rest.forEach(item => {
        result += item;
    });
    return result;
}

console.log(sum2(1, 2, 3, 4, 5));

// 函数的重载, 对参数进行校验
function getInfo_(name: string): string
function getInfo_(age: number): number
function getInfo_(name: string, age?: number): any
function getInfo_(str: any, age?: number): any {
    if (typeof str === 'string' && !age) {
        return `我的名字是:${str}`;
    } else if (age) {
        return `我的名字是:${str}---我今年:${age}岁`;
    }
    return `我的年龄是:${str}`;
}

console.log(getInfo_('小芳'));
console.log(getInfo_(12));
console.log(getInfo_('小芳', 12));


// 02. 匿名函数
const run2 = function (): number {
    return 123;
};

// 没有返回值
const run3 = function (): void {

};
// 又返回值
const getInfo1 = function (name: string, age: number): string {
    return `${name}---${age}`;

};


// 箭头函数
let myAdd = (x: number, y: number): number => x + y;
let myAdd1: (x: number, y: number) => number = (x, y) => x + y;
console.log(myAdd(1, 2));
console.log(myAdd1(1, 2));


// 函数类型接口
interface Encrypt {
    (key: string, value: string): string
}

const encrypt: Encrypt = (key, value) => key + value;
encrypt('key', '12345');
