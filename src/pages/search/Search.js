import { useState } from "react";
import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";

import { getsearchURL } from "../../services/endpointsApi";
import { searchAdapters } from "../../adapters/search.adapters";

import { CardDetail } from "../../components/CardDetail/CardDetail";


import './Search.css'

export const Search = () =>{

    console.log("Iniciando Search")
    
    const {value} = useParams();
    
    const [searchInput, setSearchInput] = useState(value);

    const {movies, isFetching} = useFetch(getsearchURL(searchInput));

    if(isFetching) return(<p> ...loading </p>)

    return (
        <>
            <div className="content-wrapper">
                <div className="container">
                    <h2 className="search-title">Busca lo que desees...</h2>
                    <div className="pages-search-input">
                        <div className="pages-search-input-item">
                            <span className="jam jam-search"></span>
                            <input defaultValue={searchInput} onChange={(e) => setSearchInput(e.target.value)}
                            className="input-search-pages" type="text" placeholder="Buscar películas, programas de televisión ..."></input>
                        </div>
                    </div>
                    {searchInput == "" ? 
                    ( <></>
                    ) : (
                        <div className="pages-search">
                            <div className="pages-search-result">
                                <div>
                                    {movies.results.map(elemet=>{
                                        let mov = searchAdapters(elemet);
                                        return (
                                            <CardDetail key={mov.id} title={mov.title} releaseDate={mov.releaseDate} 
                                            posterPath={mov.posterPath} voteAverage={mov.voteAverage} 
                                            overview={mov.overview}> 
                                            </CardDetail>
                                        );
                                    })}
                                </div>
                                
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}