/**
 * Created by montage_fz on 2019-07-04
 */

class User {
    fullName: string;
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
}


// 定义接口
interface Person {
    firstName: string,
    lastName: string,
}


const greeter = (person: Person) => {
    const {firstName, lastName} = person;
    return `${firstName}: 你好, 我是:${lastName}`;
};
let str = greeter({
    firstName: '小芳',
    lastName: '小白',
});
console.log(str);

let user = new User('樊', '铮');


let str2 = greeter(user);
console.log(str2);
