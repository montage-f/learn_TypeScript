/**
 * Created by montage_fz on 2019-07-04
 */


// 传入的参数 label 类型为 string, label的默认值为 ''
function printLabel(labelledObj: { label: string } = {label: ''}): void {
    console.log(labelledObj.label);
}


let myObj = {size: 10, label: 'size 10 object'};
printLabel(myObj);

// 上面的对象, 因为可能有多个属性, 我们可以使用接口来描述参数类型, 使用关键字 interface
interface LabelledObj {
    label: string
}

function printLabel2(labelLedObj: LabelledObj) {
    console.log(labelLedObj.label);
}

// 下面这种参数传入会报错, 因为直接写入对象字面量, 会有额外的属性检查, 没有匹配的话, 就会报错
// printLabel2({size: 10, label: 'size 10 object'});
printLabel2(myObj);


// 接口的只读属性
interface Square {
    color: string;
    area: number;
}

// ? 表示可选属性
interface SquareConfig {
    color?: string;
    width?: number;

    // 表示 属性名是一个字符串, 对应的值是任意类型, 还允许有多个其他属性
    [propName: string]: any
}


function createSquare(config: SquareConfig): Square {
    let newSquare: Square = {
        color: 'white',
        area: 100
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;

}

let mySquare1 = createSquare({
    width: 5
});
console.log(mySquare1);


let mySquare2 = createSquare({
    width: 10,
    color: 'blue',
    abc: 123
});
console.log(mySquare2);


// readonly 表示该属性只读
interface Point {
    readonly x: number;
    readonly y: number
}

// 跑p1 这个对象, 的x, y 不能修改
const p1: Point = {
    x: 1,
    y: 2
};

// 函数类型
interface SearchFunc {
    (source: string, subString: string): boolean
}

const fun: SearchFunc = (source, subString) => {
    let result = source.search(subString);
    console.log(result);
    return result > -1;
};
let result = fun('123456', '56');
console.log(result);
