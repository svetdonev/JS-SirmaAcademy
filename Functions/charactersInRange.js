function charactersBetween(firstChar, secondChar) {
    let first = firstChar.charCodeAt(0);
    let second = secondChar.charCodeAt(0);
    let result = '';
    let temp;

    if(first > second){
        temp = first;
        first = second;
        second = temp;
    }

    for(let i = first + 1; i < second; i++) {
        result += String.fromCharCode(i) + ' ';
    }

    console.log(result);
}

charactersBetween('a', 'd');
charactersBetween('#', ':');
charactersBetween('C', '#');