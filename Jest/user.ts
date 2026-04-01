export class User {
    name: string;
    age: number;
    profesion: string;
    trayectory: string;
    isActive: string;
    
    constructor( name: string,  age: number ,  profesion: string,  trayectory: string,  isActive: string) {
        this.name = name;
        this.age = age;
        this.profesion = profesion;
        this.trayectory = trayectory;
        this.isActive = isActive;
    }

    getName() {
        return this.name;
    }
    getProfile() {
        return `Name: ${this.name}, Age: ${this.age}, Profesion: ${this.profesion}, Trayectory: ${this.trayectory}, IsActive: ${this.isActive}`;
    }
    isUSerActive() {
        console.log(`User ${this.name} is active: ${this.isActive}`);
        return this.isActive;

    }
}