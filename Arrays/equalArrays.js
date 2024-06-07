function solve(arr1, arr2) {
    let sum = 0;
    let areIdentical = true;

    for(let i = 0; i < arr1.length; i++) {
        firstArrayNum = Number(arr1[i]);
        secondArrayNum = Number(arr2[i]);

        if(firstArrayNum != secondArrayNum) {
            console.log(`Array are not identical. Found difference at ${i} index`);
            areIdentical = false;
            break;
        } else {
            sum += firstArrayNum;
        }
    }

    if(areIdentical) {
        console.log(`Array are identical. Sum: ${sum}`);
    }
}

solve(['10', '20', '30'], ['10', '20', '30']);
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);