//Fetch and select recet bad movies
const moviesUrl = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
   fetch(moviesUrl)
   .then(response => response.json())
   .then(movies => {
       let badMovies = movies.filter(movie => movie.rating < 3.5);
       let recentBadMovies = movies.filter(movie => movie.rating < 3.5 && movie.year > 2000)
        .map(movie => movie.title); //To get only titles of the movies
        console.log("Bad Movies", badMovies);
        console.log("Recent Bad Movies", recentBadMovies);
    })

 