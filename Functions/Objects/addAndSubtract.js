function sum(first, second, third) {
    let sumResult =  first + second;

    function subtract(sum, number) {
        return sum - number;
    }

    let subtractionResult = subtract(sumResult, third);

    return subtractionResult;
}


console.log(sum(23, 6, 10));
sum(1, 17, 30);
sum(42, 58, 100);