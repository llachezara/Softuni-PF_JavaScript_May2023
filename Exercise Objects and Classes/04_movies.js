function moviesInfo(input) {
    let movies = [];

    for (const data of input) {

        if (data.includes('addMovie')) {

            let name = data.split('addMovie ').pop();
            movies.push({ name });

        } else if (data.includes(' directedBy ')) {

            let [movieName, director] = data.split(' directedBy ');

            movies.forEach(element => {
                if (element.name === movieName) {
                    element.director = director;
                }
            });

        } else if (data.includes(' onDate ')) {

            let [movieName, date] = data.split(' onDate ');

            movies.forEach(element => {
                if (element.name === movieName) {
                    element.date = date;
                }
            });
        }
    }

    movies.forEach(movie => {
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')) {
            console.log(JSON.stringify(movie));
        }
    });
}
moviesInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])