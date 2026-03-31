type PersonType = {
    name: string;
    age: number;
    gender: string;
}; //An data type is very similar to an interface, but it can also be used to define primitive types, union types, and intersection types.Types can not store functions 


//Thanks to Type we can evaluete the type of a variable at compile time, which can help us catch errors before we run our code. For example, if we try to assign a string to a variable that is supposed to be a number, TypeScript will give us an error.



class personClass {
    name: string
    age: number
    gender: string
    constructor(name: string, age: number, gender: string) {
        this.name = name
        this.age = age
        this.gender = gender
    }
};//This an example of a class vs a Type

type Parcial<T> ={
    [K in keyof T]?: T[K];
};//This is an example of a mapped type, it creates a new type based on an existing type, but with all properties optional. The keyof operator is used to get the keys of the type T, and the [K in keyof T] syntax is used to iterate over those keys and create a new type with the same keys but with the values set to optional.

type ReadonlyType<T> = {
    readonly [K in keyof T]: T[K];
};//This is another example of a mapped type, it creates a new type based on an existing type, but with all properties read-only. The readonly modifier is used to make the properties read-only, which means that they cannot be modified after they are set.


type ParcialPerson = Parcial<PersonType>;//This is an example of how to use the mapped type to create a new type based on an existing type. In this case, we are creating a new type called ParcialPerson that has the same properties as PersonType, but all properties are optional.


let person : ParcialPerson = {
    name: "John",
    age: 30
};//This is an example of how to use the new type that we created with the mapped type. We can create a variable of type ParcialPerson and assign it an object that has some of the properties of PersonType, but not all of them, since they are optional. 

console.log(person);

//Templates Literals Types

type EventName = "click" | "hover" | "scroll";
type classCss = 'button-${VarName}';

type isANumber <T> = T extends number ? true : false;//This is an example of a conditional type, it creates a new type based on a condition. In this case, we are creating a new type called isANumbre that checks if the type T is a number. If it is, it returns "Yes", otherwise it returns "No".


function isNumber <T>(value: T): isANumber<T> {
    return (typeof value === "number") as isANumber<T>;
}//This is an example of how to use the conditional type in a function. The function takes a value of type T and returns a boolean indicating whether the value is a number or not. The return type of the function is isANumber<T>, which will be either true or false depending on the type of T. 

const result = isNumber(42); // true
const result2 = isNumber("Hello"); // false

console.log(result);
console.log(result2);