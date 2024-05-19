function solve(timeOfday, environment, item) {
    let activity = '';

    if(timeOfday == 'day') {
        if(environment == 'forest') {
            if(item == 'knife') {
                activity = 'Hunt for food';
            } else if(item == 'container') {
                activity = 'Collect berries';
            } else {
                activity = 'Explore';
            }
        } else if(environment == 'desert') {
            if(item == 'hat') {
                activity = 'Search for water';
            } else {
                activity = 'Find shade';
            }
        }
    } else if(timeOfday == 'night') {
        if(environment == 'forest') {
            if(item == 'firestarter') {
                activity = 'Make a campfire';
            } else {
                activity = 'Climb on a tree';
            }
        } else if(environment == 'desert') {
            if(item == 'blanket') {
                activity = 'Sleep';
            } else {
                activity = 'Keep moving to stay warm';
            }
        }
    }

    console.log(activity);
}

solve('day', 'forest', 'knife');
solve('day', 'forest', 'container');
solve('night', 'forest', 'firestarter');
solve('day', 'forest', 'bag');
solve('night', 'desert', 'blanket');
solve('day', 'desert', 'hat');
solve('night', 'desert', 'sword');
solve('night', 'forest', 'hat');