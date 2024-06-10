function solve(input) {
    let arr = [];

    for (let char of input) {
        if (char == '(' || char == '{' || char == '!') {
            arr.push(char);
        } else if (char == ')' && arr.pop() != '(') {
            console.log('Not Legendary');
            return;
        } else if (char == '}' && arr.pop() != '{') {
            console.log('Not Legendary');
            return;
        } else if (char == '!' && arr.pop() != '!') {
            console.log('Not Legendary');
            return;
        }
    }

    if(arr.length == 0) {
        console.log('Legendary');
    } else {
        console.log('Not Legendary');
    }
}

solve('()()(()())');
solve('((!!)(({!!})))');
solve('((())');
solve('{!}!');
solve('({(!!}))');