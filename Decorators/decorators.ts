
function personDecorator(target: Function) {
    console.log("Decorating class:", target);
    target.prototype.goodBye = function() {
        console.log(`Goodbye, my name is ${this.name} and I am ${this.age} years old.`);
    };
}


@personDecorator
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }  

    greetings() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };

    goodBye !: () => string; 
};

let user = new Person("DAVID", 24);
user.greetings();
user.goodBye();