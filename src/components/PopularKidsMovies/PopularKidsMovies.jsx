import { getPopularKidsMoviesURL } from "../../services/endpointsApi";
import { useFetch } from "../../hooks/useFetch";
import { popularKidsMoviesAdapters } from "../../adapters/popularKidsMovies.adapters";
import { Card } from "../../components/Card/Card";
import loading  from "../../assets/gifs/loading.gif";
import './PopularKidsMovies.css'

export const PopularKidsMovies = () => {

    const {movies, isFetching} = useFetch(getPopularKidsMoviesURL());

    return (
        <div>
            <h2>
                Peliculas Populares para Niños y Niñas
            </h2>
            {isFetching ? (
                <div className="img-loading">
                    <img  src={loading} alt="Cargando..."></img>
                </div>
            ):(
            <div className="popularKidsMovies">
                {movies.results.map(elemet=>{
                    let mov = popularKidsMoviesAdapters(elemet);
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