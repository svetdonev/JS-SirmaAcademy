//Declare class
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    makeSound() {
        console.log(this.name + ': Meow...');
    }
}

class Dog {
    constructor(name){
        this.name = name;
    }
}

//Create object from class
let firstCat = new Cat('First CAt', 5);
let secondCat = new Cat('Second Cat', 10);

console.log(firstCat);
console.log(secondCat);

console.log(firstCat instanceof Cat);
console.log(secondCat instanceof Dog);

firstCat.makeSound();
secondCat.makeSound();