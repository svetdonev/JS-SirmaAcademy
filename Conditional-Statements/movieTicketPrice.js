function solve(age) {
    let ticketPrice = 0;
    if(age >= 0 && age <= 12) {
        ticketPrice = 5;
    } else if(age > 12 && age <= 19) {
        ticketPrice = 8;
    } else if(age > 20) {
        ticketPrice = 10;
    }

    console.log(`$${ticketPrice}`);
}

solve(10);
solve(16);
solve(25);
solve(13);