let cat = {
    name: 'Navcho',
    age: 9,
    breed: 'Persian',
    makeSound() { 
        console.log(`${this.name} MEOW`);
    },
    eyeColor: 'Yellow',
}


let car = {
    manufacturer: 'Tesla',
    model: '3',
    year: 2023,
};

//Get object values
let carValues = Object.values(car);
let carKeys = Object.keys(car); //most useful
let carEntries = Object.entries(car);

for (const key of carKeys) {
    console.log(`${key} - ${car[key]}`);
}   
