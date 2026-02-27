import {Person} from "./classes";

export class Employee extends Person {
    private employeeId: number;
    constructor(name: string, age: number, active: boolean, employeeId: number) {
        super(name, age, active);
        this.employeeId = employeeId;
    }
    public getEmployeeId(): number {
        return this.employeeId;
    }
}   