function solve(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    console.log(result);
}

solve(5);
solve(3);
solve(0);
solve(1);
solve(10);