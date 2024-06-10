function solve(input, word) {
    let firstOccurrence = -1;
    let lastOccurrence = -1;

    for(let i = 0; i < input.length; i++) {
        let currentWord = input[i];

        if(firstOccurrence == -1 && currentWord == word) {
            firstOccurrence = i;
        } else if(lastOccurrence == -1 && currentWord == word) {
            lastOccurrence = i;
        }

        if(i == input.length - 1 && firstOccurrence != -1 && currentWord == word) {
            lastOccurrence = i;
        }
    }

    if(firstOccurrence == -1 && lastOccurrence == -1) {
        console.log('Record not found');
    } else {
        console.log(`First Occurrence: ${firstOccurrence}`);
        console.log(`Last Occurrence: ${lastOccurrence}`);
    }
}

solve(['Frodo', 'Sam', 'Frodo', 'Merry'], 'Frodo');
solve(['Pippin', 'Merry', 'Sam', 'Pippin'], 'Pippin');
solve(['Aragorn', 'Legolas', 'Gimli'], 'Boromir');
solve(['Gandalf', 'Sam', 'Aragorn', 'Frodo'], 'Frodo');
solve(['Boromir', 'Test', 'Gimli', 'Test'], 'Test');