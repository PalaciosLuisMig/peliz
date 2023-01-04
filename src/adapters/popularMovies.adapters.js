import { convertToDateEnUs } from "../utilities/convertToDateEnUs";
import  noimgmovie  from '../assets/images/no-img-movie.jpg';

export const popularMoviesAdapters = (popularMovies) => {
    
    let customMoviePopular = []; 
    let posterPath = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${popularMovies.poster_path}`;

    if(popularMovies.poster_path == null) posterPath = noimgmovie;

    customMoviePopular.id = popularMovies.id;
    customMoviePopular.posterPath = posterPath;
    customMoviePopular.title = popularMovies.title; 
    customMoviePopular.releaseDate =  convertToDateEnUs(popularMovies.release_date) ;
    customMoviePopular.voteAverage = popularMovies.vote_average;

    return customMoviePopular;
    
};