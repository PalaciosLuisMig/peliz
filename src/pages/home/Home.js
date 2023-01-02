import React from 'react';
import './Home.css'
import { ButtonIcon } from "../../components/Button/Button";
import { PopularMovies } from "../../components/PopularMovies/PopularMovies";


export const Home = () => {

    console.log('Iniciando Home');

    return(
        <>
        {/* Banner */}
        <section className="main-banner">
            <h1 className='title-main-banner text-shadow'>
                Bienvenido.
            </h1>
            <h2 className='title-main-banner text-shadow'>
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
                <PopularMovies></PopularMovies>
                </div>
                <hr></hr>
            </div>
        </section>
        </>
    );
};