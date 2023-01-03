import { getPopularKidsMoviesURL } from "../../services/endpointsApi";
import { useFetch } from "../../hooks/useFetch";
import { popularKidsMoviesAdapters } from "../../adapters/popularKidsMovies.adapters";
import { Card } from "../../components/Card/Card";

import './PopularKidsMovies.css'

export const PopularKidsMovies = () => {

    const {movies, isFetching} = useFetch(getPopularKidsMoviesURL());

    if(isFetching) return(<p> ...loading </p>)


    return (
        <div>
            <h2>
                Peliculas Populares para Niños y Niñas
            </h2>
            <div className="popularKidsMovies">
                {movies.results.map(elemet=>{
                    let mov = popularKidsMoviesAdapters(elemet);
                    return (
                        <Card key={mov.id} title={mov.title} releaseDate={mov.releaseDate} 
                        posterPath={mov.posterPath} voteAverage={mov.voteAverage}> </Card>
                    );
                })}
            </div>
            
        </div>
    );
}