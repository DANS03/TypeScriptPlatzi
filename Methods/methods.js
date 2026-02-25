function printMessage(message) {
    console.log(message);
}
printMessage("Hello World!");
function add(a, b) {
    return a + b;
}
var sum = add(5, 10);
console.log("Sum:", sum);
//Optional parameters in a fucntion
function greet(name, greeting) {
    if (greeting) {
        return "".concat(greeting, ", ").concat(name, "!");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
console.log(greet("David"));
console.log(greet("Alice", "Hi"));
//Multiple parameters in a function
function sumaAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log("Sum of all numbers:", sumaAll(1, 2, 3, 4, 5));
//default parameters in a function
function greetWithDefault(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(greetWithDefault("David"));
console.log(greetWithDefault("Alice", "Hi"));
