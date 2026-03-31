//Thanks to Type we can evaluete the type of a variable at compile time, which can help us catch errors before we run our code. For example, if we try to assign a string to a variable that is supposed to be a number, TypeScript will give us an error.
var personClass = /** @class */ (function () {
    function personClass(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return personClass;
}());
; //This an example of a class vs a Type
var person = {
    name: "John",
    age: 30
}; //This is an example of how to use the new type that we created with the mapped type. We can create a variable of type ParcialPerson and assign it an object that has some of the properties of PersonType, but not all of them, since they are optional. 
console.log(person);
function isNumber(value) {
    return (typeof value === "number");
} //This is an example of how to use the conditional type in a function. The function takes a value of type T and returns a boolean indicating whether the value is a number or not. The return type of the function is isANumber<T>, which will be either true or false depending on the type of T. 
var result = isNumber(42); // true
var result2 = isNumber("Hello"); // false
console.log(result);
console.log(result2);
