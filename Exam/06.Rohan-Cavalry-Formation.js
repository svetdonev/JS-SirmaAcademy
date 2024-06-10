function solve(riders, commands) {
    for(let i = 0; i < commands.length; i++) {
        let splittedCommand = commands[i].split(' ');
        let currentCommand = splittedCommand[0];
        
        if(currentCommand == 'destroy') {
            let index = Number(splittedCommand[1]);

            if(index >= 0 && index <= riders.length - 1) {
                riders.splice(index, 1);
                console.log(riders.join(' '));
            }
            
        } else if(currentCommand == 'swap') {
            let firstToSwap = Number(splittedCommand[1]);
            let secondToSwap = Number(splittedCommand[2]);

            if(firstToSwap == secondToSwap) {
                continue;
            }

            if((firstToSwap >= 0 && firstToSwap <= riders.length - 1) && (secondToSwap >= 0 && secondToSwap <= riders.length - 1)) {
                [riders[firstToSwap], riders[secondToSwap]] = [riders[secondToSwap], riders[firstToSwap]];
                console.log(riders.join(' '));
            }
        } else if(currentCommand == 'add') {
            let riderToAdd = Number(splittedCommand[1]);
            riders.push(riderToAdd);
            console.log(riders.join(' '));
        } else if(currentCommand == 'insert') {
            let riderToInsert = Number(splittedCommand[1]);
            let index = Number(splittedCommand[2]);

            riders.splice(index, 0, riderToInsert);
            console.log(riders.join(' '));
            
        } else if(currentCommand == 'center') {
            if(riders.length % 2 == 0) {
                let centerTwo = riders.splice(riders.length / 2 - 1, 2);
                console.log(centerTwo.join(' '));
            } else {
                let centerOne = riders.splice(riders.length / 2, 1);
                console.log(centerOne[0]);
            }
        }
    }
}

solve([1, 2, 3, 4, 5],
[
'destroy 3',
'swap 0 1',
'add 6',
'center']
);

solve([1, 2, 3, 4, 5],
[
'add 6',
'swap 0 5',
'swap 1 4',
'swap 2 3',
'swap 2 100',
'swap 2 2',
'center']
);

solve(
    [1, 2],
[
'insert 3 2',
'center',
'destroy 1',
'destroy 2',
'center']
);