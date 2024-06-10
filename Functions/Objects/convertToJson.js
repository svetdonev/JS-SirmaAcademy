function solve(name, surname, eyeColor) {
    let obj = {
        name,
        lastName: surname,
        eyeColor
    };

    let objJson = JSON.stringify(obj);

    console.log(objJson);
}

solve("Ivan", "Ivanov", "blue");