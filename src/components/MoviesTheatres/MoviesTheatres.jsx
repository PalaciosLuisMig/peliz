import { getMoviesTheatresURL } from "../../services/endpointsApi";
import { useFetch } from "../../hooks/useFetch";
import { moviesTheatresAdapters } from "../../adapters/moviesTheatres.adapters";
import { Card } from "../../components/Card/Card";
import loading  from "../../assets/gifs/loading.gif";
import './MoviesTheatres.css'

export const MoviesTheatres = () => {

    const {movies, isFetching} = useFetch(getMoviesTheatresURL());

    return (
        <div>
            <h2>
                Peliculas en Cines (Últimos días)
            </h2>
            {isFetching ? (
                <div className="img-loading">
                    <img  src={loading} alt="Cargando..."></img>
                </div>
            ):(
            <div className="moviesTheatres">
                {movies.results.map(elemet=>{
                    let mov = moviesTheatresAdapters(elemet);
                    return (
                        <Card key={mov.id} id={mov.id} type="movie" title={mov.title} releaseDate={mov.releaseDate} 
                        posterPath={mov.posterPath} voteAverage={mov.voteAverage}> </Card>
                    );
                })}
            </div>
            )}
        </div>
    );
}