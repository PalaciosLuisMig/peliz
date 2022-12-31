import whatsapp from '../../assets/icones/whatsapp.svg';
import instagram from '../../assets/icones/instagram.svg';
import facebook from '../../assets/icones/facebook.svg';

import './Footer.css'


export function Footer() {
    return(
        // <!-- Pie de página -->
        <footer className="main-footer">
        <div className="content-wrapper">
            {/* <!-- Item Películas --> */}
            <div className="container">
            <h4 className="title">Películas</h4>
            <div className="footer-item">
                <span className="jam-footer jam jam-movie"></span>
                <ul>
                <li>
                    <a href="http://localhost:3000">Populares</a>
                </li>
                <li>
                    <a href="http://localhost:3000">Proximanente</a>
                </li>
                <li>
                    <a href="http://localhost:3000">En cartelera hoy</a>
                </li>
                </ul>
            </div>
            </div>
            {/* <!-- Programas de TV --> */}
            <div className="container">
            <h4 className="title">Programas de Televisión</h4>
            <div className="footer-item">
                <span className="jam-footer jam jam-camera-alt"></span>
                <ul>
                <li>
                    <a href="http://localhost:3000" > Popular</a>
                </li>
                <li>
                    <a href="http://localhost:3000" >Se Emite Hoy</a>
                </li>
                <li>
                    <a href="http://localhost:3000" >Mejores Valorados</a>
                </li>
                </ul>
            </div>
            </div>
            {/* <!-- Acerca de nosotros --> */}
            <div className="container">
            <h4 className="title">Acerca de nosostros</h4>
            <div className="footer-item">
                <span className="jam-footer jam jam-castle"></span>
                <ul>
                <li>
                    <p>Streaming online PELIZ es una combinación de la palabra PELICULAS y FELIZ.
                    </p>
                </li>
                <li>
                    <a className="redes-sociales" href="http://localhost:3000" target="_blank" title="Facebook" rel="noreferrer">
                    <img src={facebook} alt="" />
                    </a>
                    <a className="redes-sociales" href="http://localhost:3000" target="_blank" title="Instagram" rel="noreferrer">
                    <img src={instagram} alt="" />
                    </a>
                    <a className="redes-sociales" href="http://localhost:3000" target="_blank" title="Whatsapp" rel="noreferrer">
                    <img src={whatsapp} alt="" />
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        <p>Todos los derechos reservados &copy; 2022-2023 | Con ❤️ LUIS PALACIOS | Materia Desarrollo Web Full Stack - UNIR</p>
        </footer>
    );
}