function solve(score, activities) {
    let admittedMsg = 'Not admitted';
    
    if(score >= 90) {
        admittedMsg = 'Admitted'
    } else if(score >= 80 && score <= 89) {
        if(activities >= 2){
            admittedMsg = 'Admitted';
        }
    }

    console.log(admittedMsg);
}

solve(85, 3);
solve(88, 1);
solve(91, 0);
solve(75, 12);