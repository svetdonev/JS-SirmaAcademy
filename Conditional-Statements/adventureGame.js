function solve(rightHandTool, leftHandTool) {
    let path = '';

    if(rightHandTool == 'sword') {
        if(leftHandTool == 'shield') {
            path = 'Path to the castle';
        } else {
            path = 'Path to the forest';
        }
    } else if(rightHandTool == 'map') {
        if(leftHandTool == 'coins') {
            path = 'Go to the town';
        } else {
            path = 'Camp';
        }
    } else {
        path = 'Wander aimlessly';
    }

    console.log(path);
}

solve('sword', 'shield');
solve('map', 'coins');
solve('torch', 'flower');
solve('sword', 'pouch');
solve('map', 'compass');