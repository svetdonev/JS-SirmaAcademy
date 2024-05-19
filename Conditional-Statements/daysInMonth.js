function solve(monthNumber) {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    if(monthNumber >= 1 && monthNumber <= 12) {
        console.log(month[monthNumber - 1]);
    }
}

solve(1);
solve(2);
solve(4);
solve(7);