import { useState } from "react";
import { useParams } from "react-router";

import { useFetch } from "../../hooks/useFetch";

import { getsearchURL } from "../../services/endpointsApi";

import { searchAdapters } from "../../adapters/search.adapters";

import { CardDetail } from "../../components/CardDetail/CardDetail";
import { PopularMovies } from "../../components/PopularMovies/PopularMovies";

import loading  from "../../assets/gifs/loading.gif";

import './Search.css'

export const Search = () =>{
    
    const {value} = useParams();

    const [searchInput, setSearchInput] = useState(value);

    const {movies, isFetching} = useFetch(getsearchURL(searchInput));

    return (
        <>
            <div className="content-wrapper">
                <div className="container">
                    <h1 className="title-page">Busca las películas que desees...</h1>
                    <div className="pages-search-input">
                        <div className="pages-search-input-item">
                            <span className="jam jam-search"></span>
                            <input defaultValue={searchInput} onChange={(e) => setSearchInput(e.target.value)}
                            className="input-search-pages" type="text" placeholder="Escribe la película a buscar..."></input>
                        </div>
                    </div>
                    {isFetching ? (
                        <div className="img-loading">
                            <img  src={loading} alt="Cargando..."></img>
                        </div>
                    )
                    :(<>
                        {searchInput === "" || value === searchInput ?
                        (<>
                            {/* Popular Movies */}
                            <section className='section'>
                                <div className='content-wrapper'>
                                    <div className='container'>
                                    <PopularMovies></PopularMovies>
                                    </div>
                                </div>
                            </section>
                        </>) : (<>
                            {movies.success === false ? 
                            ( <></>
                            ) : (
                                <div className="pages-search">
                                    
                                    {(movies.results).length === 0? (
                                        <p className="not-results-search">No hay películas que coincidan con tu consulta 😞.</p>
                                    )
                                    :(<>
                                        <div className="pages-search-result">
                                            <div>
                                                {movies.results.map(elemet=>{
                                                    let mov = searchAdapters(elemet);
                                                    return (
                                                        <CardDetail key={mov.id} id={mov.id} type="movie" title={mov.title} releaseDate={mov.releaseDate} 
                                                        posterPath={mov.posterPath} voteAverage={mov.voteAverage} 
                                                        overview={mov.overview}> 
                                                        </CardDetail>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </>)
                                    }
                                </div>
                            )}
                        </>)
                        }
                    </>)}
                </div>
            </div>
        </>
    );
}