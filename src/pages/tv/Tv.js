
import { useFetch } from "../../hooks/useFetch";

import { getTv} from "../../services/endpointsApi";

import { tvAdapters } from "../../adapters/tv.adapters";

import { CardDetail } from "../../components/CardDetail/CardDetail";

import loading  from "../../assets/gifs/loading.gif";

import './Tv.css'


export const Tv = () => {

    const page = 1 //lLamar a la primera page
    const {movies, isFetching} = useFetch(getTv(page));

    return(
        <div className="content-wrapper">
            <div className="container">
                <h1 className="title-page">Programas de Televisión</h1>
                {isFetching ? (
                    <div className="img-loading">
                        <img  src={loading} alt="Cargando..."></img>
                    </div>
                ):(
                    <div className="content-tv-pages">
                        <div className="results-tv-pages">
                            {movies.results.map(elemet=>{
                                let mov = tvAdapters(elemet);
                                return (
                                    <CardDetail key={mov.id} id={mov.id} type="tv"title={mov.title} releaseDate={mov.releaseDate} 
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