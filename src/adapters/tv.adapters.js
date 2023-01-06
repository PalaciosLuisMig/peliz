
import { convertToDateEnUs } from "../utilities/convertToDateEnUs";
import  noimgmovie  from '../assets/images/no-img-movie-detail.jpg';

export const tvAdapters = (tvResults) => {
    
    let customTv = []; 

    let posterPath = `https://image.tmdb.org/t/p/w94_and_h141_bestv2${tvResults.poster_path}` ;

    if(tvResults.poster_path == null) posterPath = noimgmovie;
    
    customTv.id = tvResults.id;
    customTv.posterPath = posterPath;
    customTv.title = tvResults.name; 
    customTv.releaseDate =  convertToDateEnUs(tvResults.first_air_date) ;
    customTv.voteAverage = tvResults.vote_average;
    customTv.overview = tvResults.overview;

    return customTv;
    
};