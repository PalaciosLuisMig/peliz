import { useState, useEffect } from "react";

export const useFetch = (url) => {

    console.log('Ingreso al useFetch con la URL: ' + url);

    const[fetchResponse, setFetchResponse] = useState('...');

    useEffect(()=>{
        const fetchRequets = async () =>{

            console.log('Realizando el requets...');
            
            let resquest = await fetch(url);
            let data = await resquest.json();
            setFetchResponse(data.results[0].original_title);
        }

        fetchRequets();

    }, [url]);

    console.log(fetchResponse);

    return fetchResponse;
}