
import { convertToDateEnUs } from "../utilities/convertToDateEnUs";
import  noimgmovie  from '../assets/images/no-img-movie.jpg';

export const moviesTheatresAdapters = (moviesTheatres) => {
    
    let customMoviesTheatres = []; 
    let posterPath = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${moviesTheatres.poster_path}` ;

    if(moviesTheatres.poster_path == null) posterPath = noimgmovie;
    
    customMoviesTheatres.id = moviesTheatres.id;
    customMoviesTheatres.posterPath = posterPath;
    customMoviesTheatres.title = moviesTheatres.title; 
    customMoviesTheatres.releaseDate =  convertToDateEnUs(moviesTheatres.release_date) ;
    customMoviesTheatres.voteAverage = moviesTheatres.vote_average;

    return customMoviesTheatres;
    
};