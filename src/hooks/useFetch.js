import { useState, useEffect } from "react";

/**
 * Custom Hook para realizar peticion a API
 * 
 * @param {string} url La URL a consultar 
 * @returns {movies} El resultado de la consulta
 * @returns {isFetching} Si la consulta finalizó correctamente
 */
export const useFetch = (url) =>{

    const [movies, setMovies] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    
    useEffect(() => {

            fetch(url)
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.log(error))
            .finally(() => setIsFetching(false))


    }, [url]); 

    return {movies,isFetching}
}
