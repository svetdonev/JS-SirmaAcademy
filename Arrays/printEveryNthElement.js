function solve(input, step) {
    let resultArr = [];

    for(let i = 0; i < input.length; i+= step) {
        resultArr.push(input[i]);
    }

    console.log(resultArr.join(' '));
}

solve(['5', '15', '31', '14', '20'], 2);
solve(['dsa', 'asd', 'demo', 'test'], 2);
solve(['1', '2', '3', '4', '5'], 6);