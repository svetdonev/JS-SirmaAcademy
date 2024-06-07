function solve(input) {
    let initialNumber = 1;
    let resultArr = [];

    for(let i = 0; i < input.length; i++) {
        if(input[i] == 'add') {
            resultArr.push(initialNumber);
            initialNumber++;
        } else {
            resultArr.splice(i - 1, 1);
        }
    }

    if(resultArr < 1) {
        console.log('Empty');
    } else {
        console.log(resultArr);

    }
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);