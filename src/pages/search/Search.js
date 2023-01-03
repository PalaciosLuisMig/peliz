import { useState } from "react";
import { useLocation } from "react-router";

import './Search.css'

export const Search = () =>{

    console.log("Iniciando Search")
    const location = useLocation();
    const value = location.pathname.split('/')[location.pathname.split('/').length-1];
    const [searchInput, setSearchInput] = useState(value);
    console.log(searchInput);

    return (
        <>
            <div className="content-wrapper">
                <div className="container">
                    <div className="pages-search-input">
                        <span className="jam jam-search"></span>
                        <input defaultValue={searchInput} className="input" type="text" placeholder="Buscar películas, programas de televisión ..."></input>
                    </div>
                    <div className="pages-search">
                        <div className="pages-search-filter">
                            <p>hola</p>
                        </div>
                        <div className="pages-search-result">
                            <p>mundo</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}