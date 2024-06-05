class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        const [firstName, lastName] = value.split(' ');

        this.firstName = firstName;
        this.lastName = lastName;
    }

}

let person = new Person('Pesho', 'Petrov');
console.log(person.fullName);
person.fullName = 'Gosho Geshev';

console.log(person.fullName);
console.log(person);