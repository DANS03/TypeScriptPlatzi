var names = ["David", "Alice", "Bob"];
var ages = [30, 25, 35];
var activeStatuses = [true, false, true];
var mixedArray = ["David", 30, true, "Alice", 25, false];
console.log(names);
console.log(ages);
console.log(activeStatuses);
console.log(mixedArray);
console.log(typeof (mixedArray));
var people = [
    { name: "David", age: 30, active: true },
    { name: "Alice", age: 25, active: false },
    { name: "Bob", age: 35, active: true }
];
people.push({ name: "Charlie", age: 28, active: false });
console.log(people);
people.forEach(function (person) {
    console.log(person.name, person.age, person.active);
});
console.log(typeof (people));
//tuple : a tuple can not be modiefied after it is created
var personTuple = ["David", 30, true];
console.log(personTuple);
console.log(typeof (personTuple));
//Enum : a way to define a set of named constants
var dayofWeek;
(function (dayofWeek) {
    dayofWeek[dayofWeek["Sunday"] = 0] = "Sunday";
    dayofWeek[dayofWeek["Monday"] = 1] = "Monday";
    dayofWeek[dayofWeek["Tuesday"] = 2] = "Tuesday";
    dayofWeek[dayofWeek["Wednesday"] = 3] = "Wednesday";
    dayofWeek[dayofWeek["Thursday"] = 4] = "Thursday";
    dayofWeek[dayofWeek["Friday"] = 5] = "Friday";
    dayofWeek[dayofWeek["Saturday"] = 6] = "Saturday";
})(dayofWeek || (dayofWeek = {}));
var today = dayofWeek.Monday;
console.log(dayofWeek[today]);
