function solve(word) {
    let sum = 0;

    for(let i = 0; i < word.length; i++) {
        switch(word[i]) {
            case 'a':
                sum += 1;
                break;
            case 'o':
                sum += 4;
                break;
            case 'e':
                sum += 2;
                break;
            case 'u':
                sum += 5;
                break;
            case 'i':
                sum += 3;
                break;
            default:
                break;
                    
        }
    }
    console.log(sum);
}

solve('hello');
solve('hi');
solve('bye');
solve('zzzz');