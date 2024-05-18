function solve(number) {
    if(number != 0 && (number <= 100 && number >= -100)) {
        console.log("Yes");
    } else {
        console.log('No');
    }
}

solve(-25);
solve(0);
solve(25);