//set
let uniqueNames = new Set(['Pesho', 'Gosho', 'Pesho']);
uniqueNames.add('Mariyka');
uniqueNames.add('Pesho');

console.log(uniqueNames);

for (const name of uniqueNames) {
    console.log(name);
}

console.log(uniqueNames.has('Mariyka'));
console.log(Array.from(uniqueNames));


//map
const map = new Map();

map.set('firstName', 'Pesho');
map.set('lastName', 'Petrov');
map.set('age', 13);

console.log(map.get('firstName'));
console.log(map.get('lastName'));
console.log(map.get('age'));
console.log(map.has('firstName'));

//Use non-string
map.set(5, 'Gosho');
console.log(map.get(5));

for (const [key, value] of map) {
    console.log(`${key} -> ${value}`);
}