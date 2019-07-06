/**
 * Created by montage_fz on 2019-07-04
 */


// 二维数组
function sumMatrix(matrix: number[][]): number {
    let sum: number = 0;
    for (let i = 0; i < matrix.length; i++) {
        let num = matrix[i];
        for (let j = 0; j < num.length; j++) {
            sum += num[j];
        }
    }
    return sum;
}

let matrix = [
    [1, 2, 3,],
    [4, 5, 6,],
    [7, 8, 9,]
];
console.log(sumMatrix(matrix));

// 解构
// 数组解构
let input: number[] = [123, 456, 789, 1000, 1200, 1300];
let [num1, num2, num3, ...rest] = input;

function fn1([first, second]: number[]) {
    console.log(first);
    console.log(second);

}

fn1([num1, num2, num3]);
console.log(rest);

// 对象解构
let dd = {
    e: 1,
    b: 2,
    c: 3
};
let {e: ccc, ...rest2} = dd;
console.log(ccc);
console.log(rest2);

// type 语法
type C = { a: string, b?: number }

function F({a, b}: C): void {

}


// 展开 , 相当于浅拷贝
let first: number[] = [1, 2, 3];
let second: number[] = [5, 6, 7];
let bothPlus: number[] = [0, ...first, ...second, 8, 9];

let defaultObj = {
    a: 1,
    b: 2,
    c: 3
};
let objPlus = {
    d: 4,
    e: 5,
    ...defaultObj
};
