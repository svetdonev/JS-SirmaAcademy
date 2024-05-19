function solve(age, membership) {
    let discount = 0;

    if(age < 18) {
        discount = 10;
    } else if(age >= 18 && age <= 64) {
        if(membership == 'Yes') {
            discount = 20;
        } else if(membership == 'No') {
            discount = 10;
        }
        
    } else if(age > 64) {
        discount = 30;
    }

    console.log(`${discount}% discount`);
}

solve(20, 'Yes');
solve(15, 'No');
solve(70, 'No');