function solve(num) {
    let sum = 0;

    for (let i = 0; i < num; i++) {
        sum += (i * 2) + 2;
    }

    console.log(sum);
}

solve(3);
solve(5);
solve(1);
solve(0);
solve(10);