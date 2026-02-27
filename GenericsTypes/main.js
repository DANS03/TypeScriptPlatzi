function genericFunction(arg) {
    return arg;
}
var output1 = genericFunction("Hello, World!");
console.log(output1); // Output: Hello, World!
var output2 = genericFunction(42);
console.log(output2); // Output: 42 
var output3 = genericFunction(true);
console.log(output3); // Output: true
var GenericClass = /** @class */ (function () {
    function GenericClass(value) {
        this.value = value;
    }
    GenericClass.prototype.getValue = function () {
        return this.value;
    };
    return GenericClass;
}());
var genericInstance1 = new GenericClass("Hello, Generics!");
console.log(genericInstance1.getValue()); // Output: Hello, Generics!
var genericInstance2 = new GenericClass(100);
console.log(genericInstance2.getValue()); // Output: 100
