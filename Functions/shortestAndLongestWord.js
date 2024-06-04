function solve(input) {
    let shortestWord = '';
    let longestWord = '';
    let maxLength = Number.MIN_VALUE;
    let minLength = Number.MAX_VALUE;
    let splittedInput = input.split(' ');
    let skipWord = false;

    function isLetter(char) {
        let code = char.charCodeAt(0);
        return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
    }

    for (const currentWord of splittedInput) {
        let currentLength = currentWord.length;

        for(let i = 0; i < currentLength; i++){
            if(!isLetter(currentWord[i])){
                skipWord = true;
                break;
            }
        }

        if(skipWord || currentWord == '') {
            skipWord = false;
            continue;
        }

        if(currentLength > maxLength) {
            maxLength = currentLength;
            longestWord = currentWord;
        }

        if(currentLength < minLength) {
            minLength = currentLength;
            shortestWord = currentWord;
        }
    }

    console.log(`Longest -> ${longestWord}`);
    console.log(`Shortest -> ${shortestWord}`);
}

solve('Hello how are you today? I hope you are fine');
solve('Lorem Ipsum is dummy text of the typesetting industry.');