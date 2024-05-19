function solve(year) {
    let isLeapYear = false;

    if(year % 4 == 0) {
        isLeapYear = true;

        if(year % 100 == 0) {
            isLeapYear = false;
            if(year % 400 == 0) {
                isLeapYear = true;
            }
        }
    }

    if(isLeapYear) {
        console.log('It\'s a leap year!');
    } else {
        console.log('It\'s not a leap year.');
    }
}

solve(2020);
solve(1900);
solve(2000);
solve(2023);
solve(1600);