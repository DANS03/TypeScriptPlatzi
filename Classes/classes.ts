export class Person {
    name: string;
    age: number;
    active: boolean;

    constructor(name: string, age: number, active: boolean) {
        this.name = name;
        this.age = age;
        this.active = active;
    }   
    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// A class must be absnostict so we create another file that uses it and we export the class from this file and import it in the other file
