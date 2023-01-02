
export const popularMoviesAdapters = (popularMovies) => {
    
    console.log('Ingrenso a popularMoviesAdapters.')
    console.log(popularMovies);

    let customMoviePopular = []; 

    customMoviePopular.title = popularMovies.title; 
    customMoviePopular.releasedate = popularMovies.release_date;

    return customMoviePopular;
    
};