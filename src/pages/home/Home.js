import React from 'react';
import './Home.css'
import { ButtonIcon } from "../../components/Button/Button";
import { GetPopularMovies } from "../../services/ApiTheMovieDatabase";

export const Home = () => {

    const response = GetPopularMovies();
    console.log("HOME response:" + response)
    console.log(response)

    return(
        <>
        {/* Banner */}
        <section className="main-banner">
            <h1>
                Bienvenido.
            </h1>
            <h2>
                Millones de películas, programas de televisión y personas por descubrir. Explora ahora.
            </h2>
            <div className='input-search'>
                <input className="input" placeholder='Buscar películas, programas de televisión ... '></input>
                <div className='search'>
                    <ButtonIcon text="Buscar" jam="jam-search" ></ButtonIcon>
                </div>                
            </div>
        </section>

        <section>
            <div className='content-wrapper'>
                <div className='container'>
                    <h3>
                        Películas Populares
                    </h3>
                </div>
                <p>
                    {response} 
                </p>
            </div>
        </section>
        </>
    );
};