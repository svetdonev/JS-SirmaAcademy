function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;
    let numberStr = number.toString();
    let numberLength = numberStr.length;

    for(let i = 0; i < numberLength; i++) {
        let currentNumber = Number(numberStr[i]);
        if(currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);