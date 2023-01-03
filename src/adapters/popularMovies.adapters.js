
import { convertToDateEnUs } from "../utilities/convertToDateEnUs";

export const popularMoviesAdapters = (popularMovies) => {
    
    let customMoviePopular = []; 

    customMoviePopular.id = popularMovies.id;
    customMoviePopular.posterPath = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${popularMovies.poster_path}`;
    customMoviePopular.title = popularMovies.title; 
    customMoviePopular.releaseDate =  convertToDateEnUs(popularMovies.release_date) ;
    customMoviePopular.voteAverage = popularMovies.vote_average;

    return customMoviePopular;
    
};