function solve(kg, dimension) {
    let weightFee = '';
    let sizeFee = '';
    let charge = 0;

    if(kg > 50) {
        charge += 100;
        weightFee = 'Overweight';
    }

    if(dimension > 158) {
        let diff = dimension - 158;

        if(diff >= 1 && diff <= 20) {
            charge += 50;
            sizeFee = 'Slightly oversize';
        } else if(diff > 20 && diff <= 50) {
            charge += 100;
            sizeFee = 'Oversize';
        } else if(diff > 50) {
            charge += 200;
            sizeFee = 'Oversize';
        }
    }

    if(weightFee == 'Overweight' && sizeFee == 'Oversize') {
        charge += 50;
        console.log(`$${charge} (${weightFee}) + (${sizeFee}) + (Handling)`);
    } 
    
    if(weightFee != '' && sizeFee != '') {
        console.log(`$${charge} (${weightFee}) + (${sizeFee})`);
    }

    if(weightFee == '' && sizeFee != '') {
        console.log(`$${charge} (${sizeFee})`);
    }

    if(sizeFee == '' && weightFee != '') {
        console.log(`$${charge} (${weightFee})`);
    }
}

solve(52, 160);
solve(48, 180);
solve(55, 190);