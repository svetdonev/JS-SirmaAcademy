function solve(arr) {
    let movies = [];
    
    for (const record of arr) {
        if (record.includes('addMovie')) {
            let recordArr = record.split(' ');
            recordArr.shift();
            let movieName = recordArr.join(' ');
            let movie = { name: movieName };
            movies.push(movie);

        } else if (record.includes('directedBy')) {
            let movieInfo = record.split(' directedBy ');
            let movieName = movieInfo[0];
            let directorName = movieInfo[1];

            let movie = movies.find(function(el) {
                return el.name === movieName;
            });

            if(movie) {
                movie.director = directorName;
            }
        } else if (record.includes('onDate')) {
            let movieInfo = record.split(' onDate ');
            let movieName = movieInfo[0];
            let movieDate = movieInfo[1];

            let movie = movies.find(function(el) {
                return el.name === movieName;
            });

            if(movie){
                movie.date = movieDate;
            }
        }
        
    }

    for (const movie of movies) {
        let movieJson = JSON.stringify(movie);
        console.log(movieJson);
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Spinderman 2 onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);