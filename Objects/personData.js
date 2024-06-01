function personData(firstname, surname, age){
    let person = {};

    person.firstName = firstname;
    person.lastName = surname;
    person.age = age;

    console.log(person);
}

personData('Ivan', 'Ivanov', 29);