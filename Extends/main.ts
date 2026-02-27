let randomName : string = "John";

console.log("Number from a string : " + randomName.length);

function getLength<T extends { length: number }>(arg: T): number {
    console.log("Argument type is : ", typeof(arg) );
    return arg.length;
}   


console.log("Number from an extended function : " + getLength(randomName)); // Output: 13

//getLength(10); // Error: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.