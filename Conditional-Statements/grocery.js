function solve(product, city, quantity) {
    let finalPrice = 0;

    if(city == 'Varna') {
        if(product == 'tea') {
            finalPrice = 0.45 * quantity;
        } else if(product == 'water') {
            finalPrice = 0.70 * quantity;
        } else if(product == 'juice') {
            finalPrice = 1.10 * quantity;
        } else if(product == 'sweets') {
            finalPrice = 1.35 * quantity;
        } else if(product == 'chips') {
            finalPrice = 1.55 * quantity;
        }
    } else if(city == 'Plovdiv') {
        if(product == 'tea') {
            finalPrice = 0.4 * quantity;
        } else if(product == 'water') {
            finalPrice = 0.70 * quantity;
        } else if(product == 'juice') {
            finalPrice = 1.15 * quantity;
        } else if(product == 'sweets') {
            finalPrice = 1.30 * quantity;
        } else if(product == 'chips') {
            finalPrice = 1.50 * quantity;
        }

    } else if(city == 'Sofia') {
        if(product == 'tea') {
            finalPrice = 0.50 * quantity;
        } else if(product == 'water') {
            finalPrice = 0.80 * quantity;
        } else if(product == 'juice') {
            finalPrice = 1.20 * quantity;
        } else if(product == 'sweets') {
            finalPrice = 1.45 * quantity;
        } else if(product == 'chips') {
            finalPrice = 1.60 * quantity;
        }
        
    }

    console.log(finalPrice.toFixed(2));
}

solve('tea', 'Varna', 2);
solve('chips', 'Plovdiv', 1);
solve('juice', 'Sofia', 6)
solve('sweets', 'Plovdiv', 1);