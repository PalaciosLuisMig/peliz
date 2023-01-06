
import { convertToDateEnUs } from "../utilities/convertToDateEnUs";
import  noimgmovie  from '../assets/images/no-img-movie-detail.jpg';

export const movieAdapters = (movieResults) => {
    
    let customMovie = []; 

    let posterPath = `https://image.tmdb.org/t/p/w94_and_h141_bestv2${movieResults.poster_path}` ;

    if(movieResults.poster_path == null) posterPath = noimgmovie;
    
    customMovie.id = movieResults.id;
    customMovie.posterPath = posterPath;
    customMovie.title = movieResults.title; 
    customMovie.releaseDate =  convertToDateEnUs(movieResults.release_date) ;
    customMovie.voteAverage = movieResults.vote_average;
    customMovie.overview = movieResults.overview;

    return customMovie;
    
};