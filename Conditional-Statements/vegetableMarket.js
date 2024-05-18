function solve(product, day, quantity) {
    let finalPrice = 0;
    let isValid = true;

    if(product == 'tomato') {
        if(day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday') {
            finalPrice = 2.50 * quantity;
        } else {
            finalPrice = 2.80 * quantity;
        }
    } else if(product == 'onion') {
        if(day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday') {
            finalPrice = 1.20 * quantity;
        } else {
            finalPrice = 1.30 * quantity;
        }
    } else if(product == 'lettuce') {
        if(day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday') {
            finalPrice = 0.85 * quantity;
        } else {
            finalPrice = 0.85 * quantity;
        }
    } else if(product == 'cucumber') {
        if(day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday') {
            finalPrice = 1.45 * quantity;
        } else {
            finalPrice = 1.75 * quantity;
        }
    } else if(product == 'pepper') {
        if(day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday') {
            finalPrice = 5.50 * quantity;
        } else {
            finalPrice = 3.50 * quantity;
        }
    } else {
        isValid = false;
    }

    if(isValid) {
        console.log(finalPrice.toFixed(2));
    } else {
        console.log('error');
    }

}

solve('tomato', 'Tuesday', 2);
solve('onion', 'Sunday', 3);
solve('pepper', 'Monday', 10);
solve('banana', 'Friday', 5);
solve('lettuce', 'Friday', 5);
solve('cucumber', 'Saturday', 5);