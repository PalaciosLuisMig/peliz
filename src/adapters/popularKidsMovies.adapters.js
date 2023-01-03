
import { convertToDateEnUs } from "../utilities/convertToDateEnUs";

export const popularKidsMoviesAdapters = (popularKidsMovies) => {
    
    let customKidsMoviePopular = []; 

    customKidsMoviePopular.id = popularKidsMovies.id;
    customKidsMoviePopular.posterPath = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${popularKidsMovies.poster_path}`;
    customKidsMoviePopular.title = popularKidsMovies.title; 
    customKidsMoviePopular.releaseDate =  convertToDateEnUs(popularKidsMovies.release_date) ;
    customKidsMoviePopular.voteAverage = popularKidsMovies.vote_average;

    return customKidsMoviePopular;
    
};