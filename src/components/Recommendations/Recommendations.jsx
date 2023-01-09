import { getMovieDetailRecommendations } from "../../services/endpointsApi";
import { useFetch } from "../../hooks/useFetch";
import { popularMoviesAdapters } from "../../adapters/popularMovies.adapters";
import { Card } from "../../components/Card/Card";
import loading  from "../../assets/gifs/loading.gif";
import './Recommendations.css'

export const Recommendations = ({id}) => {

    const {movies, isFetching} = useFetch(getMovieDetailRecommendations(id));

    return (
        <div>
            <h2>
                Más titulos similares a este
            </h2>
            {isFetching ? (
                <div className="img-loading">
                    <img  src={loading} alt="Cargando..."></img>
                </div>
            ):(
                <>
                {movies.results.length > 0 ? (
                    <div className="popularMovies recommendation">
                        {movies.results.map(elemet=>{
                            let mov =  popularMoviesAdapters(elemet);
                            return (
                                <Card key={mov.id} id={mov.id} type="movie" title={mov.title} releaseDate={mov.releaseDate} 
                                posterPath={mov.posterPath} voteAverage={mov.voteAverage}> </Card>
                            );
                        })}
                    </div>
                ) :
                (
                    <p> Por el momento no tenemos información 😞.</p>  
                )
                }
                </>
                )
            }
        </div>
    );
}