/**
 * Created by montage_fz on 2019-07-05
 */
class Persons {
    // 在ts中, 所有的 属性默认都是public
    public name: string;
    // 如果使用了 private 他就不能在声明它的类的外部访问
    private age: number;

    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age;
    }

    run() {
        alert(`${this.name}在跑步`);
    }

    work() {
        alert(`${this.name}在工作`);
    }

    // 静态方法
    static print() {
        alert(`我是静态方法`);
    }
}

class Xiao extends Persons {
    constructor(name: string, age: number) {
        super(name, age);
    }
}

let xiao = new Xiao('小红', 123);
console.log(xiao.name);


// 抽象类
abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;

    }

// 抽象方法,
    abstract eat(): void
}

// 继承抽象类, 必须要实现被继承类里面的抽象方法
class Rat extends Animal {
    constructor(name: string) {
        super(name);

    }

    eat() {

    }
}

const rat = new Rat('老鼠');
