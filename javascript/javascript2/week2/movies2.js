console.log("script loaded");
console.log(movies);

//with short names
const shortName = movies.filter(movie => movie.title.length < 5)
.forEach(movie => console.log(movie.title));

//with long names
const longName = movies.filter(movie => movie.title.length > 15)
.forEach(movie => console.log(movie.title));

//80s movies
const eighties = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989)
.forEach(movie => console.log(movie.title));

//Movies with tags
const moviesWithTag = movies.map(movie => {
    if (movie.rating >= 7){
        tag = 'Good';
    } else if (movie.rating >= 4){
        tag = 'Average';
    } else {
        tag = 'Bad';
    }
    return {...movie, tag: tag};                        
  });

console.log(moviesWithTag);

//Chaining
const highRatings = movies.filter(movie => movie.rating > 6)
.map(movie => movie.rating);
console.log(highRatings);

//Find keyWords
const keywords = ['Surfer', 'Alien', 'Benjamin'];
keywords.forEach(keyword => {
  let keywordsEach = keyword.toLowerCase();
  const moviesWithKeyWords = movies.filter(movie => movie.title
    .toLowerCase()
    .includes(keywordsEach));
    console.log(moviesWithKeyWords.length)
  })

//Duplicated Words in Titles
const titleWithDupWords = [];
const regex = /[^A-Za-z0-9\s']/gi;
const titleSplit = movies
  .map(movie =>
    movie.title
      .replace(regex, "")
      .toLowerCase()
      .split(" ")
  )
  .forEach(title =>
    title.filter((item, index) =>
    title.indexOf(item) != index
        ? titleWithDupWords.push(title.join(" "))
        : false
    )
  );

console.log(titleWithDupWords);


//Average Rating
const allRating = movies.map(movie => movie.rating);
const averageRating = allRating.reduce((a, b) => a + b, 0) / allRating.length;
console.log(averageRating);

//Movie Qualities
const moviesSort = moviesWithTag.map(movie => 
    movie.tag === 'Good'
        ? (movie.tag = "GoodMovies")
        : movie.tag === 'Average'
        ? (movie.tag = "AverageMovies")
        : (movie.tag = "BadMovies")
    );
    
    const moviesWithRating = moviesSort.reduce((total, movie) => {
      total[movie] = (total[movie] || 0) + 1;
      return total;
    }, {});
    
    console.log(moviesWithRating)