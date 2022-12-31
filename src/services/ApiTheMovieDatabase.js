import { useFetch } from "../hooks/useFetch";


const APIKEY = "***TMDB_API_KEY_ELIMINADA***";
const APIURL = "https://api.themoviedb.org/3/";


export const GetPopularMovies = () => {
    
    const url = `${APIURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`
    const response  =  useFetch(url);

    return response;
}

