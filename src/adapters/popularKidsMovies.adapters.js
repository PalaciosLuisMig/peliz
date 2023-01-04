import { convertToDateEnUs } from "../utilities/convertToDateEnUs";
import  noimgmovie  from '../assets/images/no-img-movie.jpg';


export const popularKidsMoviesAdapters = (popularKidsMovies) => {
    
    let customKidsMoviePopular = []; 
    let posterPath = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${popularKidsMovies.poster_path}`;

    if(popularKidsMovies.poster_path == null) posterPath = noimgmovie;

    customKidsMoviePopular.id = popularKidsMovies.id;
    customKidsMoviePopular.posterPath = posterPath;
    customKidsMoviePopular.title = popularKidsMovies.title; 
    customKidsMoviePopular.releaseDate =  convertToDateEnUs(popularKidsMovies.release_date) ;
    customKidsMoviePopular.voteAverage = popularKidsMovies.vote_average;

    return customKidsMoviePopular;
    
};