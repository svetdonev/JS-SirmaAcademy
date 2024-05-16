function solve(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds - minutes * 60;

    console.log(minutes + ":" + secs);
}

solve(60);
solve(90);