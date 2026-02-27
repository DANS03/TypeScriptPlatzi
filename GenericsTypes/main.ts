function genericFunction<T>(arg: T): T {
    return arg;
}

let output1 = genericFunction<string>("Hello, World!");
console.log(output1); // Output: Hello, World!

let output2 = genericFunction<number>(42);
console.log(output2); // Output: 42 

let output3 = genericFunction<boolean>(true);
console.log(output3); // Output: true

class GenericClass<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    public getValue(): T {
        return this.value;
    }
}

let genericInstance1 = new GenericClass<string>("Hello, Generics!");
console.log(genericInstance1.getValue()); // Output: Hello, Generics!

let genericInstance2 = new GenericClass<number>(100);
console.log(genericInstance2.getValue()); // Output: 100