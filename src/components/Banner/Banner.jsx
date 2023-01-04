import { ButtonIcon } from "../../components/Button/Button";
import './Banner.css'
import { useState } from 'react';

export const Banner = () => {

    
    const [searchText, setSearchText] = useState("");


    return(
        <>
        <h1 className='title-main-banner text-shadow'>
            Bienvenido.
        </h1>
        <h2 className='title-main-banner text-shadow'>
            Millones de películas, programas de televisión y personas por descubrir. Explora ahora.
        </h2>
        <div className='input-search'>
            <input id="seatch-movie" className="input" placeholder='Buscar películas, programas de televisión ... '
            onChange={(e) => setSearchText("/search/"+e.target.value)}>
            </input>
            <div className='search' >
                <ButtonIcon href={searchText} text="Buscar" jam="jam-search"></ButtonIcon>
            </div>                
        </div>
        </>
    );
}