import { useState, useEffect } from "react";

export const useFetch = (url) =>{
    const [movies, setMovies] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    
    useEffect(() => {
        fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setMovies(data)
        })
        .finally(() =>{
            setIsFetching(false);
        })
    }, [url]); 

    return {movies,isFetching}
}