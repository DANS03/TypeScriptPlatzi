"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, active) {
        this.name = name;
        this.age = age;
        this.active = active;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.isActive = function () {
        return this.active;
    };
    return Person;
}());
exports.Person = Person;
// A class must be absnostict so we create another file that uses it and we export the class from this file and import it in the other file
