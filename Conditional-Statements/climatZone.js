function solve(latitude, hemisphere) {
    let zone = '';

    if(latitude == 0) {
        zone = 'Equator';
    } else if(latitude > 0 && latitude <= 23.5) {
        zone = 'Tropic Zone';
    } else if(latitude > 23.5 && latitude <= 66.5) {
        zone = 'Temperate Zone';
    } else if(latitude < 0 || latitude > 66.5) {
        zone = 'Artic Zone';
    }

    console.log(zone);
}

solve(70, 'N');
solve(45, 'S');
solve(10, 'N');
solve(0, 'N');
solve(-85, 'S');