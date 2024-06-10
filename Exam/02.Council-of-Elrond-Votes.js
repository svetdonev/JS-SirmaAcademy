function solve(input) {
    if(input.length == 0) {
        console.log('There is no votes!');
        return;
    }

    let yesVotes = 0;
    let noVotes = 0;
    let abstainVotes = 0;
    let validVote = false;

    for (const vote of input) {
        if(vote == 'Yes') {
            yesVotes++;
            validVote = true;
        } else if(vote == 'No') {
            noVotes++;
            validVote = true;
        } else if(vote == 'Abstain') {
            abstainVotes++;
            validVote = true;
        }
    }

    if(!validVote) {
        console.log('No valid votes');
        return;
    }

    let maxVotes = Math.max(yesVotes, noVotes, abstainVotes);
    let tieCount = 0;

    if(yesVotes == maxVotes) {
        tieCount++;
    }

    if(noVotes == maxVotes) {
        tieCount++;
    } 

    if(abstainVotes == maxVotes) {
        tieCount++;
    }

    if(tieCount > 1) {
        console.log('Tie');
    } else if(yesVotes == maxVotes) {
        console.log('Yes');
    } else if(noVotes == maxVotes) {
        console.log('No');
    } else if(abstainVotes == maxVotes) {
        if(noVotes > 0) {
            if(noVotes > yesVotes){
                console.log('No');
            }
        } else if(yesVotes > 0) {
            if(yesVotes > noVotes){
                console.log('Yes');
            }
        } else {
            console.log('Abstain');
        }
    }
}

solve(['Yes', 'No', 'Yes', 'Abstain', 'Yes']);
solve(['No', 'No', 'Yes']);
solve(['Yes', 'No']);
solve(['Abstain']);
solve(['No', 'No', 'Abstain', 'Abstain', 'Yes', 'Yes']);
solve(['No', 'Abstain', 'Abstain']);
solve([]);
solve(['Abstain']);
solve(['Vote1', 'Vote2', 'Vote1']);
solve(['Vote1', 'Yes', 'Vote1']);