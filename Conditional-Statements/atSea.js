function solve(daysToStay, typeOfRoom, assessment) {
    let singleRoomPricePerNight = 25;
    let apartmentPricePerNight = 50;
    let presidentialPricePerNight = 100;
    let nights = daysToStay - 1;
    let priceForNights = 0;

    if(typeOfRoom == 'single room') {
        priceForNights = nights * singleRoomPricePerNight;
    } else if(typeOfRoom == 'apartment') {
        priceForNights = apartmentPricePerNight * nights;
        if(daysToStay < 10) {
            priceForNights *= 0.7;
        } else if(daysToStay >= 10 && daysToStay <= 15) {
            priceForNights *= 0.65;
        } else if(daysToStay > 15) {
            priceForNights *= 0.5;
        }
    } else if(typeOfRoom = 'presidential') {
        priceForNights = presidentialPricePerNight * nights;
        if(daysToStay < 10) {
            priceForNights *= 0.9;
        } else if(daysToStay >= 10 && daysToStay <= 15) {
            priceForNights *= 0.85;
        } else if(daysToStay > 15) {
            priceForNights *= 0.8;
        }
    }

    if(assessment == 'positive') {
        priceForNights *= 1.25;
    } else if(assessment == 'negative') {
        priceForNights *= 0.9;
    }

    console.log(priceForNights.toFixed(2));
}

solve(11, 'apartment', 'positive');
solve(30, 'president apartment', 'negative');
solve(12, 'single room', 'positive');
solve(2, 'apartment', 'positive');