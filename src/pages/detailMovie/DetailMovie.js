
import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";

import { getMovieDetail} from "../../services/endpointsApi";

import { detailMovieAdapters } from "../../adapters/detailMovie.adapters";

import { FilmSpecification } from "../../components/FilmSpecification/FilmSpecification";
import { Recommendations } from "../../components/Recommendations/Recommendations";

import loading  from "../../assets/gifs/loading.gif";

import './DetailMovie.css'

export const DetailMovie = () => {

    const {id} = useParams();

    const {movies, isFetching} = useFetch(getMovieDetail(id));

    const mov = detailMovieAdapters(movies);

    return(
        <div className="content-wrapper">
            <div className="container">
                <h1 className="title-page">Detalle de la Película</h1>
                {isFetching ? (
                    <div className="img-loading">
                        <img  src={loading} alt="Cargando..."></img>
                    </div>
                ):(
                    <div className="content-movie-pages">
                        <div className="results-movie-pages">
                            <FilmSpecification key={mov.id} title={mov.title} originalTitle={mov.originalTitle} 
                            releaseDate={mov.releaseDate} posterPath={mov.posterPath} voteAverage={mov.voteAverage} 
                            overview={mov.overview} genres={mov.genres} runtime={mov.runtime}
                            tagline={mov.tagline} budget={mov.budget} trailer={mov.trailer} type="movie"> 
                            </FilmSpecification>
                            
                            {/* Recomendaciones en base a la películas seleccionada */}
                            <Recommendations id={mov.id}></Recommendations>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}