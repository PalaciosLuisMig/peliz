
import transmision from '../../assets/images/transmision.png';
import './Header.css'

import { ItemMenu } from "../ItemMenu/ItemMenu";

export function Header() {

    const activeMenu = (active) => {

        let mainMenu =  document.getElementById('main-menu');
        active ? mainMenu.classList.add('active') : mainMenu.classList.remove('active'); 
    }

    return(
        <header className="main-header">
            <div className="content-wrapper">
                {/* <!-- Logo --> */}
                <a href="/">
                    <img src={transmision} alt='Logo de la página Peliz'></img>
                </a>
                <p>
                    Streaming online PELIZ
                </p>

                {/* <!-- Menu de navegacion --> */}
                <span id="open-menu-button" className="jam jam-menu" onClick={(e) => activeMenu(true)} ></span>
                <nav id="main-menu" className="main-menu" >
                <span id="close-menu-button" className="jam jam-close" onClick={(e) => activeMenu(false)}> </span>
                <ul id="ul-menu" >
                    <li onClick={(e) => activeMenu(false)}>
                        <ItemMenu href="/" jam="jam-home" text="Inicio"></ItemMenu>
                    </li>
                    <li onClick={(e) => activeMenu(false)}>
                        <ItemMenu href="/movie" jam="jam-movie" text="Películas"></ItemMenu>
                    </li>
                    <li onClick={(e) => activeMenu(false)}>
                        <ItemMenu href="/tv" jam="jam-camera-alt" text="Programas de televisión"></ItemMenu>
                    </li>
                    <li onClick={(e) => activeMenu(false)}> 
                        <ItemMenu href="/search" jam="jam-search-plus" text="Buscar"></ItemMenu>
                    </li>
                </ul>
                </nav>
            </div>
        </header>
    );
}