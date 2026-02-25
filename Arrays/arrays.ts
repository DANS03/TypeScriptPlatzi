let names : string[] = ["David", "Alice", "Bob"];
let ages : number[] = [30, 25, 35];
let activeStatuses : boolean[] = [true, false, true];

let mixedArray : any[] = ["David", 30, true, "Alice", 25, false];

console.log(names);
console.log(ages);
console.log(activeStatuses);
console.log(mixedArray);
console.log(typeof(mixedArray));


interface Person {
    name: string;
    age: number;
    active: boolean;
}

let people : Person[] = [
    { name: "David", age: 30, active: true },
    { name: "Alice", age: 25, active: false },
    { name: "Bob", age: 35, active: true }
];

people.push({ name: "Charlie", age: 28, active: false });

console.log(people);

people.forEach(person => {
    console.log(person.name, person.age, person.active);
});


console.log(typeof(people));    


//tuple : a tuple can not be modiefied after it is created
let personTuple : [string, number, boolean] = ["David", 30, true];
console.log(personTuple);
console.log(typeof(personTuple));


//Enum : a way to define a set of named constants

enum dayofWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

let today : dayofWeek = dayofWeek.Monday;
console.log(dayofWeek[today]);