import { getMoviesTheatresURL } from "../../services/endpointsApi";
import { useFetch } from "../../hooks/useFetch";
import { moviesTheatresAdapters } from "../../adapters/moviesTheatres.adapters";
import { Card } from "../../components/Card/Card";

import './MoviesTheatres.css'

export const MoviesTheatres = () => {

    const {movies, isFetching} = useFetch(getMoviesTheatresURL());


    if(isFetching) return(<p> ...loading </p>)


    return (
        <div>
            <h2>
                Peliculas en Cines (Últimos 7 días)
            </h2>
            <div className="moviesTheatres">
                {movies.results.map(elemet=>{
                    let mov = moviesTheatresAdapters(elemet);
                    return (
                        <Card key={mov.id} title={mov.title} releaseDate={mov.releaseDate} 
                        posterPath={mov.posterPath} voteAverage={mov.voteAverage}> </Card>
                    );
                })}
            </div>
            
        </div>
    );
}