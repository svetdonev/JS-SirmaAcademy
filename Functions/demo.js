function printTriangle(side) {
    let result = '';

    for(let i = 1; i <= side; i++) {
        for(let j = 1; j <= i; j++) {
            result += j + ' ';
        }

        result += '\n';
    }

    for(let i = 0; i < side - 1; i++) {
        for(let j = 1; j <= side - 1 - i; j++) {
            result += j + ' ';
        }

        result += '\n';
    }

    console.log(result);
}

printTriangle(7);
printTriangle(3);