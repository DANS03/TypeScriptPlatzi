interface Person {
    name: string;
    age: number;
    active: boolean;
}

let person : Person = {
    name: "David",
    age: 30,
    active: true
};

console.log(person);
console.log(typeof(person));    

interface sum {
    (a: number, b: number): number;
}

let add: sum = (a: number, b: number): number => {
    return a + b;
};

console.log(add(5, 10));    

interface address {
    street: string;
    city ?: string;
    country: string;
}

let myAddress: address = {
    street: "123 Main St",
    country: "USA"
};

console.log(myAddress);

//Interface with readonly properties
interface User {
    readonly id: number;
    name: string;
}   

let user: User = {
    id: 1,
    name: "David"
};


//extended interfaces
interface Employee extends Person {
    salary: number;
}
let employee: Employee = {
    name: "Alice",
    age: 25,
    active: false,
    salary: 50000
};