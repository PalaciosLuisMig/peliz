
import { useFetch } from "../../hooks/useFetch";
import { usePage } from "../../hooks/usePage"

import { getTv} from "../../services/endpointsApi";

import { tvAdapters } from "../../adapters/tv.adapters";

import { CardDetail } from "../../components/CardDetail/CardDetail";
import { ButtonIcon } from "../../components/Button/Button"

import loading  from "../../assets/gifs/loading.gif";

import './Tv.css'


export const Tv = () => {

    const {page, increasePage,decrementPage} = usePage("");

    const {movies, isFetching} = useFetch(getTv(page));

    return(
        <div className="content-wrapper">
            <div className="container">
                <h1 className="title-page">Programas de Televisión</h1>
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
                </>
                )}
            </div>
        </div>
    );
}