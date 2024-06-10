function solve(initialOrcs, increaseCount, hours) {
    let totalOrcs = 0;

    for(let i = 0; i < hours; i++) {
        totalOrcs += initialOrcs + i * increaseCount;
    }

    console.log(totalOrcs);
}

solve(5, 2, 3);
solve(7, 1, 2);
solve(10, -1, 1);
solve(8, -2, 3);
solve(5, 0, 0);