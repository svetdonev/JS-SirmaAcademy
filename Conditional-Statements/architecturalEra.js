function solve(year, primaryMaterial) {
    let architecturalEra = '';

    if(year < 500) {
        primaryMaterial = 'stone';
        architecturalEra = 'Ancient';
    } else if(year >= 500 && year <= 1500) {
        primaryMaterial = 'stone';
        architecturalEra = 'Medieval';
    } else if(year > 1500 && year <= 1800) {
        primaryMaterial = 'wood';
        architecturalEra = 'Colonial';
    } else if(year > 1800 && year <= 1900) {
        primaryMaterial = 'steel';
        architecturalEra = 'Industrial';
    } else if(year > 1900) {
        primaryMaterial = 'steel';
        architecturalEra = 'Modern';
    }

    console.log(architecturalEra);
}

solve(300, 'stone');
solve(1500, 'wood');
solve(1501, 'stone');
solve(2000, 'steel');
solve(1100, 'wood');