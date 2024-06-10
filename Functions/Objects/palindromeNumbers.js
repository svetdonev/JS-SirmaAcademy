function solve(input) {

    for (const number of input) {
        let numberToString = number.toString();
        let reversedNumber = '';

        for(let i = numberToString.length - 1; i >= 0; i--){
            reversedNumber += numberToString[i];
        }

        if(number == reversedNumber) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

solve([123, 323, 421, 121]);