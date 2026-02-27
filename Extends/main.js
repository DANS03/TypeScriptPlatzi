var randomName = "John";
console.log("Number from a string : " + randomName.length);
function getLength(arg) {
    console.log("Argument type is : ", typeof (arg));
    return arg.length;
}
console.log("Number from an extended function : " + getLength(randomName)); // Output: 13
