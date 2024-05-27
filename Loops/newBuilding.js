function solve(numberOFFloors, numberOfRoomsPerFloor) {
    let result = '';

    for(let i = 1; i <= numberOFFloors; i++) {
        for(let j = 0; j < numberOfRoomsPerFloor; j++) {
            if (i == numberOFFloors) {
                result += `L${i}${j} `;
            } else if (i % 2 == 0) {
                result += `O${i}${j} `;
            } else {
                result += `A${i}${j} `;
            }
        }

        result += '\n';
    }

    console.log(result);
}

solve(1, 3);
solve(6, 4);