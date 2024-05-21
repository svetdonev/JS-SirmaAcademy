function solve(num) {
    let result = '';
    let numberAsString = num.toString();

    for(let i = numberAsString.length - 1; i >= 0 ; i--) {
        result += numberAsString[i];
    }

    console.log(result);
}

solve(123);
solve(9876);
solve(505);
solve(10203);
solve(7);