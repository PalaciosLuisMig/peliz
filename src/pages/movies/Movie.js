
import { useFetch } from "../../hooks/useFetch";
import { usePage } from "../../hooks/usePage"

import { getMovie } from "../../services/endpointsApi";

import { movieAdapters } from "../../adapters/movie.adapters";

import { CardDetail } from "../../components/CardDetail/CardDetail";
import { ButtonIcon } from "../../components/Button/Button"

import loading  from "../../assets/gifs/loading.gif";

import './Movie.css'

export const Movie = () => {

    const {page, increasePage,decrementPage} = usePage("");

    const {movies, isFetching} = useFetch(getMovie(page));

    return(
        <div className="content-wrapper">
            <div className="container">
                <h1 className="title-page">Películas</h1>
                {isFetching ? (
                    <div className="img-loading">
                        <img  src={loading} alt="Cargando..."></img>
                    </div>
                ):(<>
                    
                    <div className="action-list">
                        <span onClick={decrementPage}>
                            <ButtonIcon text="" jam="jam-arrow-square-left"></ButtonIcon>
                        </span>
                        <span className="action-list-page"> Página {page}</span>
                        <span onClick={increasePage}>
                            <ButtonIcon text="" jam="jam-arrow-square-right"></ButtonIcon>
                        </span>
                    </div>
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
                    </>
                )}
            </div>
        </div>
    );
}