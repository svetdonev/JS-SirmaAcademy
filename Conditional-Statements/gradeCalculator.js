function solve(precentage) {
    let grade = '';

    if(precentage >= 0 && precentage <= 59) {
        grade = 'F';
    } else if(precentage > 59 && precentage <= 69) {
        grade = 'D';
    } else if(precentage > 69 && precentage <= 79) {
        grade = 'C';
    } else if(precentage > 79 && precentage <= 89) {
        grade = 'B';
    } else if(precentage > 89 && precentage <= 100) {
        grade = 'A';
    }

    console.log(grade);
}

solve(95);
solve(82);
solve(76);
solve(65);
solve(0);
solve(1);
solve(69);
solve(70);