function solve(hour, minute) {
    let hours = hour;
    let minutes = minute + 15;

    if (minutes > 59) { 
        hours += 1;
        minutes -= 60;
    }

    if (hours >= 24) {
        hours -= 24;
    }

    console.log(`${hours}:${minutes.toString().padStart(2, 0)}`);
}

solve(1, 47);
solve(0, 2);
solve(23, 59);
solve(11, 7);