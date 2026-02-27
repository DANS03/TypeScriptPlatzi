export class Person {
    public name: string; //Public; it is accessible from anywhere
    protected age: number; //Protected; it is accessible within the class and its subclasses 
    private active: boolean;//Private; it is accessible only within the class

    constructor(name: string, age: number, active: boolean) {
        this.name = name;
        this.age = age;
        this.active = active;
    }   
    public greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    protected getAge(): number {
        return this.age;
    }

    private isActive(): boolean {
        return this.active;
    }
}

// A class must be absnostict so we create another file that uses it and we export the class from this file and import it in the other file
