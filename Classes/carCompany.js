function solve(input) {
    let cars = {};
    

    for (const car of input) {
        let [carBrand, carModel, producedCars] = car.split(' | ');
        producedCars = Number(producedCars);

        if(!cars[carBrand]) {
            cars[carBrand] = {};
        }
        if(!cars[carBrand][carModel]) {
            cars[carBrand][carModel] = 0;
        }

        cars[carBrand][carModel] += producedCars;
    }

    for (const brand in cars) {
        console.log(brand);
        for (const model in cars[brand]) {
            console.log(`###${model} -> ${cars[brand][model]}`);
        }
    }
}

solve(
    [
        'Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10',
    ]
);