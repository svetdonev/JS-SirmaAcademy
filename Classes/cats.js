function solve(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says meow`);
        }
    }

    for (const record of input) {
        let [catName, catAge] = record.split(' ');
        let cat = new Cat(catName, catAge);
        cat.meow();
    }
}

solve(['Mellon 2', 'Tom 3']);
solve(['Branch 1', 'Poppy 3', 'Goldy 2']);