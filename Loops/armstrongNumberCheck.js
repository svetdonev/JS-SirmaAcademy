function solve(number) {
    let numberToString = number.toString();
    let result = 0;

    for(let i = 0; i < numberToString.length; i++) {
        result = result + Math.pow(parseInt(numberToString[i]), numberToString.length);
    }

    if (result == number) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

solve(153);
solve(370);
solve(123);
solve(407);
solve(1634);