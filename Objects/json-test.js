//Convert object to json
let cat = {
    name: 'Navcho',
    age: 9,
    isMale: true
};

let catJSON = JSON.stringify(cat);
console.log(catJSON);

//Convert json to object
let catObject = JSON.parse(catJSON);
console.log(catObject);