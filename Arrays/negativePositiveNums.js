function solve(input) {
    let resultArr = [];

    for(let i = 0; i < input.length; i++) {
        if(input[i] < 0) {
            resultArr.unshift(input[i]);
        } else {
            resultArr.push(input[i]);
        }
    }

    console.log(resultArr);
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);