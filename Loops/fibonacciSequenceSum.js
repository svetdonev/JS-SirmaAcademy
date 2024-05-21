function solve(n) {
    let fibSum = 1;
    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        fibSum += next;
        prev = curr;
        curr = next;
    }

    if (n <= 0) {
        console.log(0);
    } else if (n === 1) {
        console.log(1);
    } else {
        console.log(fibSum);
    }
}

solve(3);
solve(5);
solve(1);
solve(0);
solve(10);