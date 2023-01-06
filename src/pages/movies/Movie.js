
import { useFetch } from "../../hooks/useFetch";

import { getMovie } from "../../services/endpointsApi";

import { movieAdapters } from "../../adapters/movie.adapters";

import { CardDetail } from "../../components/CardDetail/CardDetail";

import loading  from "../../assets/gifs/loading.gif";

import './Movie.css'

export const Movie = () => {

    let page = 1 //lLamar a la primera page
    const {movies, isFetching} = useFetch(getMovie(page));

    return(
        <div className="content-wrapper">
            <div className="container">
                <h1 className="title-page">Películas</h1>
                {isFetching ? (
                    <div className="img-loading">
                        <img  src={loading} alt="Cargando..."></img>
                    </div>
                ):(
                    <div className="content-movie-pages">
                        <div className="results-movie-pages">
                            {movies.results.map(elemet=>{
                                let mov = movieAdapters(elemet);
                                return (
                                    <CardDetail key={mov.id} id={mov.id} type="movie" title={mov.title} releaseDate={mov.releaseDate} 
                                    posterPath={mov.posterPath} voteAverage={mov.voteAverage} 
                                    overview={mov.overview}>  
                                    </CardDetail>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}