function solve(age) {
    let movieCategory = '';

    if(age < 13) {
        movieCategory = 'U-rated movies';
    } else if(age >= 13 && age <= 17) {
        movieCategory = 'U and PG-13 rated movies';
    } else if(age > 17) {
        movieCategory = 'All movies';
    }

    console.log(movieCategory);
}

solve(10);
solve(16);
solve(21);