function solve(speed) {
    if(speed >= 0 && speed <= 10) {
        console.log("slow");
    } else if(speed > 10 && speed <= 60) {
        console.log("average");
    } else if(speed > 60 && speed <= 120) {
        console.log("fast");
    } else if(speed > 120 && speed <= 160) {
        console.log("super-fast");
    } else {
        console.log("turbo-fast");
    }
}

solve(10);
solve(0);
solve(59);
solve(60);
solve(119);
solve(120);
solve(160);
solve(200);