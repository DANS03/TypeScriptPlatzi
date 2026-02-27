import { Person } from "./classes";

let person1 = new Person("David", 30, true);
console.log(person1);
person1.greet();

console.log(person1.name); // Accessible because it's public
//console.log(person1.age); // Error: Property 'age' is protected and only accessible within class 'Person' and its subclasses.
//console.log(person1.active); // Error: Property 'active' is private and only accessible within class 'Person'.