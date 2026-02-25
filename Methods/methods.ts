function printMessage(message: string): void {
    console.log(message);
}

printMessage("Hello World!");

function add(a: number, b: number): number {
    return a + b;
}
let sum : number= add(5, 10);
console.log("Sum:", sum);

//Optional parameters in a fucntion
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }   
}

console.log(greet("David"));
console.log(greet("Alice", "Hi"));

//Multiple parameters in a function
function sumaAll(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of all numbers:", sumaAll(1, 2, 3, 4, 5));

//default parameters in a function

function greetWithDefault(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

console.log(greetWithDefault("David"));
console.log(greetWithDefault("Alice", "Hi"));