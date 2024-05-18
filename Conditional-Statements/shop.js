function solve(renovationPrice, powdersCount, lipstricksCount, spiralsCount, shadowsCount, correctorsCount) {
    let powderPrice = 2.60;
    let lipstrickPrice = 3;
    let spiralPrice = 4.10;
    let shadowsPrice = 8.20;
    let correctorPrice = 2;
    
    let totalPrice = (powderPrice * powdersCount) + (lipstrickPrice * lipstricksCount) + (spiralPrice * spiralsCount) + (shadowsPrice * shadowsCount) + (correctorPrice * correctorsCount);
    let totalCount = powdersCount + lipstricksCount + spiralsCount + shadowsCount + correctorsCount;

    if(totalCount >= 50) {
        totalPrice *= 0.75; //discount
    }

    let finalPrice = totalPrice * 0.90;

    let moneyLeft = 0;

    if(finalPrice >= renovationPrice) {
        moneyLeft = (finalPrice - renovationPrice).toFixed(2);
        console.log(`Yes! ${moneyLeft} BGN left.`);
    } else {
        moneyLeft = (renovationPrice - finalPrice).toFixed(2);
        console.log(`Not enough money! ${moneyLeft} BGN needed.`)
    }
}

solve(40.8, 20, 25, 30, 50, 10);
solve(320, 8, 2, 5, 5, 1)