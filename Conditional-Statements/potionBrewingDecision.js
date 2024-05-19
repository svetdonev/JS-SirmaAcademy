function solve(ingredient1, ingredient2) {
    let potion = '';

    if(ingredient1 == 'herbs') {
        if(ingredient2 == 'water') {
            potion = 'Health potion';
        } else if(ingredient2 == 'oil') {
            potion = 'Stealth potion';
        } else {
            potion = 'Minor stamina potion'
        }
    } else if(ingredient1 == 'berries') {
        if(ingredient2 == 'sugar') {
            potion = 'Speed potion';
        } else {
            potion = 'Minor energy potion'
        }
    } else {
        potion = 'No potion';
    }

    console.log(potion);
}

solve('herbs', 'water');
solve('herbs', 'oil');
solve('herbs', 'banana');
solve('berries', 'sugar');
solve('berries', 'banana');
solve('herbs', 'sugar');
solve('sugar', 'salt');