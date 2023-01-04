import { useState, useEffect } from "react";

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
