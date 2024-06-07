function sumEven(input) {
    let evenSum = 0;

    for(let i = 0; i < input.length; i++) {
        let currentNum = Number(input[i]);

        if(currentNum % 2 == 0) {
            evenSum += currentNum;
        }
    }

    console.log(evenSum);
}

sumEven(['1', '2', '3', '4', '5', '6']);
sumEven(['3', '5', '7', '9']);
sumEven(['2', '4', '6', '8', '10']);