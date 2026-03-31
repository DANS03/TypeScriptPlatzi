"use strict";
console.log("Hello, World!");
const h1 = document.querySelector("h1"); //The querySelector method returns the first element that matches the specified CSS selector. In this case, it will return the first h1 element in the document.
let title = document.querySelector(".title"); //The querySelector method returns the first element that matches the specified CSS selector. In this case, it will return the first element with the class "title". We are using a type assertion to tell TypeScript that we expect this element to be an HTMLHeadingElement (which is the type for h1, h2, etc.). This allows us to access properties specific to heading elements without TypeScript throwing an error.
console.log(title === null || title === void 0 ? void 0 : title.textContent);
let message = document.querySelector("#message"); //The querySelector method returns the first element that matches the specified CSS selector. In this case, it will return the first element with the id "message". We are using a union type to indicate that this variable can either be an HTMLInputElement (if the element is found) or null (if the element is not found).
console.log(message === null || message === void 0 ? void 0 : message.placeholder); //The optional chaining operator (?.) allows us to safely access the placeholder property of the message variable. If message is null, it will return undefined instead of throwing an error.
if (h1) {
    h1.textContent = "Hello, TypeScript!";
}
