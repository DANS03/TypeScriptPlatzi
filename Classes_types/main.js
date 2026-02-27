"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee_1 = require("./employee");
var employee = new employee_1.Employee("Alice", 28, true, 12345);
console.log(employee);
employee.greet();
console.log("Employee ID: ".concat(employee.getEmployeeId()));
