
import transmision from '../../assets/images/transmision.png';
import './Header.css'

import { ItemMenu } from "../ItemMenu/ItemMenu";

export function Header() {
    return(
        <header className="main-header">
            <div className="content-wrapper">
                {/* <!-- Logo --> */}
                <a href="http://localhost:3000">
                    <img src={transmision} alt='Logo de la página Peliz'></img>
                </a>
                <p>
                    Streaming online PELIZ
                </p>

                {/* <!-- Menu de navegacion --> */}
                <span id="open-menu-button" className="jam jam-menu" ></span>
                <nav id="main-menu" className="main-menu" >
                <span id="close-menu-button" className="jam jam-close" > </span>
                <ul id="ul-menu" >
                    <li>
                        <ItemMenu href="http://localhost:3000" jam="jam-home" text="Inicio"></ItemMenu>
                    </li>
                    <li>
                        <ItemMenu href="http://localhost:3000" jam="jam-movie" text="Películas"></ItemMenu>
                    </li>
                    <li>
                        <ItemMenu href="http://localhost:3000" jam="jam-camera-alt" text="Programas de televisión"></ItemMenu>
                    </li>
                    <li> 
                        <ItemMenu href="http://localhost:3000" jam="jam-folder-open" text="Géneros"></ItemMenu>
                    </li>
                    <li>
                        <ItemMenu href="http://localhost:3000" jam="jam-flashlight-on" text="Tendencias"></ItemMenu>
                    </li>
                </ul>
                </nav>
            </div>
        </header>
    );
}