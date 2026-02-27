import { Employee } from "./employee";

let employee: Employee = new Employee("Alice", 28, true, 12345);
console.log(employee);
employee.greet();
console.log(`Employee ID: ${employee.getEmployeeId()}`);