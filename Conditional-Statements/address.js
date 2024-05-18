function solve(age, gender) {
    let result = '';

    if(gender == "f") {
        if(age < 16) {
            result = 'Miss';
        } else {
            result = 'Ms.';
        }
    } else if(gender == 'm') {
        if(age < 16) {
            result = 'Master';
        } else {
            result = 'Mr.';
        }
    }

    console.log(result);
}

solve(14, "f");
solve(17, "m");
solve(10, "m");
solve(32, "f");