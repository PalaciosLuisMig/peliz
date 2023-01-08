import { convertToDateYYYYMMDD } from "../utilities/convertToDateEnUs";

const APIURL = process.env.REACT_APP_API_THE_MOVIE_DATABASE_URL;
const APIKEY = process.env.REACT_APP_API_THE_MOVIE_DATABASE_KEY;

export const getPopularMoviesURL = () => {
    
    const url = `${APIURL}discover/movie?sort_by=popularity.desc&language=es&api_key=${APIKEY}`;

    return url;
}


export const getPopularKidsMoviesURL = () =>{
    
    const url = `${APIURL}discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&language=es&api_key=${APIKEY}`;

    return url;
}

export const getMoviesTheatresURL = () => {

    const date = new Date();
    const dateNow = convertToDateYYYYMMDD(date);
    const date7DaysAgo= convertToDateYYYYMMDD(date,"day",-7);
    const url = `${APIURL}discover/movie?primary_release_date.gte=${date7DaysAgo}&primary_release_date.lte=${dateNow}&language=es&api_key=${APIKEY}`;

    return url;
}

export const getsearchURL = (query) =>{

    const url = `${APIURL}search/movie?query=${query}&language=es&api_key=${APIKEY}`;
    
    return url;
}

export const getMovie = (page) =>{

    const url = `${APIURL}discover/movie?page=${page}&language=es&api_key=${APIKEY}`;
    return url;
}

export const getTv = (page) =>{

    const url = `${APIURL}discover/tv?page=${page}&language=es&api_key=${APIKEY}`;
    return url;
}

export const getMovieDetail = (idMovie) =>{

    const url = `${APIURL}movie/${idMovie}?append_to_response=videos&language=es&api_key=${APIKEY}`;
    
    return url;
}

export const getMovieDetailRecommendations = (idMovie) => {
    
    const url = `${APIURL}movie/${idMovie}/recommendations?language=es&api_key=${APIKEY}`;
    
    return url;
}

export const getTvDetail = (idTv) => {
    
    const url = `${APIURL}tv/${idTv}?language=es&api_key=${APIKEY}`;

    return url;
}
