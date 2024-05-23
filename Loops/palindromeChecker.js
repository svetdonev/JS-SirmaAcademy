function solve(word) {
    let isPalindrome = true;
    let counter = 0;

    for(let i = word.length - 1; i >= 0; i--) {
        if(word[i] != word[counter]){
            isPalindrome = false;
            break;
        }
        counter++;
    }

    if(isPalindrome) {
        console.log(true);
    } else {
        console.log(false);
    }
}

solve("radar");
solve("hello");
solve("racecar");
solve("java");
solve("madam");
solve("test");
solve("amama");