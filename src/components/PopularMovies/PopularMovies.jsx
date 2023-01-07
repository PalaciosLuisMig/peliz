import { getPopularMoviesURL } from "../../services/endpointsApi";
import { useFetch } from "../../hooks/useFetch";
import { popularMoviesAdapters } from "../../adapters/popularMovies.adapters";
import { Card } from "../../components/Card/Card";
import loading  from "../../assets/gifs/loading.gif";
import './PopularMovies.css'

export const PopularMovies = () => {

    const {movies, isFetching} = useFetch(getPopularMoviesURL());

    return (
        <div>
            <h2>
                Peliculas Populares
            </h2>
            {isFetching ? (
                <div className="img-loading">
                    <img  src={loading} alt="Cargando..."></img>
                </div>
            ):(
                <div className="popularMovies">
                    {movies.results.map(elemet=>{
                        let mov =  popularMoviesAdapters(elemet);
                        return (
                            <Card key={mov.id} id={mov.id} type="movie" title={mov.title} releaseDate={mov.releaseDate} 
                            posterPath={mov.posterPath} voteAverage={mov.voteAverage}> </Card>
                        );
                    })}
                </div>
                )
            }
        </div>
    );
}