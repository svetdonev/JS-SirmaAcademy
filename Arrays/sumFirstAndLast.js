function solve(input) {
    let firstElement = Number(input[0]);
    let lastElement = Number(input[input.length - 1]);

    let sum = firstElement + lastElement;

    console.log(sum);
}

solve(['20', '30', '40']);
solve(['10', '17', '22', '33']);
solve(['11', '58', '69']);
solve(['-5', '10', '0']);