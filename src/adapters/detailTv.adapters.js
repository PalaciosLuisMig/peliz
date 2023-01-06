import { convertToDateEnUs } from "../utilities/convertToDateEnUs";
import  noimgmovie  from '../assets/images/no-img-movie-detail.jpg';
import { formatNumberES } from "../utilities/formatNumberES";

export const detailTvAdapters = (tvResults) => {
    
    let customDetailTv = []; 

    let posterPath = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${tvResults.poster_path}` ;
    let backdropPath = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${tvResults.backdrop_path}` ;

    if(tvResults.poster_path == null) posterPath = noimgmovie;
    
    customDetailTv.id = tvResults.id;
    customDetailTv.backdropPath = backdropPath
    customDetailTv.budget = tvResults.budget === "" || tvResults.budget === undefined ? "Sin información": "$ " + formatNumberES(tvResults.budget)
    customDetailTv.genres = tvResults.genres === undefined ? "" : tvResults.genres.map((item) => ` ${item.name} `).toString();
    customDetailTv.originalTitle = tvResults.original_name;
    customDetailTv.overview = tvResults.overview === "" ? "Sin descripción": tvResults.overview;
    customDetailTv.posterPath = posterPath;
    customDetailTv.releaseDate =  convertToDateEnUs(tvResults.first_air_date) ;
    customDetailTv.runtime =  `${tvResults.number_of_episodes} episodios - ${tvResults.number_of_seasons} temporadas`;
    customDetailTv.tagline = tvResults.tagline === "" ? "Sin eslogan" : tvResults.tagline  ;
    customDetailTv.title = tvResults.name; 
    customDetailTv.voteAverage = tvResults.vote_average;

    return customDetailTv;
    
};  