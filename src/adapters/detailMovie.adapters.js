
import { convertToDateEnUs } from "../utilities/convertToDateEnUs";
import  noimgmovie  from '../assets/images/no-img-movie-detail.jpg';
import { formatNumberES } from "../utilities/formatNumberES";
import { formatRuntime } from "../utilities/formatRuntime";

export const detailMovieAdapters = (movieResults) => {
    
    let customDetailMovie = []; 

    let posterPath = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movieResults.poster_path}` ;
    let backdropPath = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieResults.backdrop_path}` ;

    if(movieResults.poster_path == null) posterPath = noimgmovie;
    
    customDetailMovie.id = movieResults.id;
    customDetailMovie.backdropPath = backdropPath
    customDetailMovie.budget = movieResults.tagline === "" ? "Sin información": "$ " + formatNumberES(movieResults.budget)
    customDetailMovie.genres = movieResults.genres === undefined ? "" : movieResults.genres.map((item) => ` ${item.name} `).toString();
    customDetailMovie.originalTitle = movieResults.original_title;
    customDetailMovie.overview = movieResults.overview;
    customDetailMovie.posterPath = posterPath;
    customDetailMovie.releaseDate =  convertToDateEnUs(movieResults.release_date) ;
    customDetailMovie.runtime = formatRuntime(movieResults.runtime);
    customDetailMovie.tagline = movieResults.tagline === "" ? "Sin eslogan" : movieResults.tagline  ;
    customDetailMovie.title = movieResults.title; 
    customDetailMovie.voteAverage = movieResults.vote_average;

    if (movieResults.videos && movieResults.videos.results) {

        console.log(movieResults.videos.results);
        const trailer = movieResults.videos.results.find((element) => element.type === "Trailer");
        customDetailMovie.trailer =  trailer ? trailer : movieResults.videos.results[0];
    }
    
    return customDetailMovie;
    
};  