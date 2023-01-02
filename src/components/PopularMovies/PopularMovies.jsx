import { getPopularMoviesURL } from "../../services/endpointsApi";
import { useFetch } from "../../hooks/useFetch";
import { popularMoviesAdapters } from "../../adapters/popularMovies.adapters";
import { Card } from "../../components/Card/Card";

import './PopularMovies.css'

export const PopularMovies = () => {

    const {movies, isFetching} = useFetch(getPopularMoviesURL());

    if(isFetching) return(<p> ...loading </p>)


    return (
        <div>
            <h2>
                Peliculas Populares
            </h2>
            <ul>
                {movies.results.map(m=>{
                    let m2 = popularMoviesAdapters(m);
                    return (
                        <>
                        {/* <p key={m2.title}>titlulo: {m2.title}</p>
                        <p key={m2.releasedate}>releasedate: {m2.title}</p> */}
                        <Card title={m2.title} releasedate={m2.releasedate}></Card>
                        </>
                    );
                })}
            </ul>
        </div>
    );
}