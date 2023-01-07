
import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";

import { getTvDetail } from "../../services/endpointsApi";

import { detailTvAdapters } from "../../adapters/detailTv.adapters";

import { FilmSpecification } from "../../components/FilmSpecification/FilmSpecification";

import loading  from "../../assets/gifs/loading.gif";

import './DetailTv.css'

export const DetailTv = () => {

    const {id} = useParams();

    const {movies, isFetching} = useFetch(getTvDetail(id));
    
    const mov = detailTvAdapters(movies);

    return(
        <div className="content-wrapper">
            <div className="container">
                <h1 className="title-page">Detalle del Programa de TV</h1>
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
                            tagline={mov.tagline} budget={mov.budget} type="tv"> 
                            </FilmSpecification>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}