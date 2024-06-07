function solve(number) {
    let days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if(number < 1 || number > 6){
        console.log('Invalid day!');
    } else {
        console.log(days[number - 1]);
    }
}

solve(3);
solve(6);
solve(0);
solve(11);