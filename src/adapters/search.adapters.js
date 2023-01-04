
import { convertToDateEnUs } from "../utilities/convertToDateEnUs";
import  noimgmovie  from '../assets/images/no-img-movie.jpg';

export const searchAdapters = (searchResults) => {
    
    let customSearch = []; 
    // let posterPath = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${searchResults.poster_path}` ;

    let posterPath = `https://image.tmdb.org/t/p/w94_and_h141_bestv2${searchResults.poster_path}` ;

    if(searchResults.poster_path == null) posterPath = noimgmovie;
    
    customSearch.id = searchResults.id;
    customSearch.posterPath = posterPath;
    customSearch.title = searchResults.title; 
    customSearch.releaseDate =  convertToDateEnUs(searchResults.release_date) ;
    customSearch.voteAverage = searchResults.vote_average;
    customSearch.overview = searchResults.overview;

    return customSearch;
    
};