import './Error404.css';
import imgError404  from "../../assets/images/error-404.png";
import { ButtonIcon } from "../../components/Button/Button";

export const Error404 = () =>{
    return(
        <div className='error404'>
            <p className='error404-title'>
                ERROR 404 !!!
            </p>
            <img className='error404-img' src={imgError404} alt="Imagen de un ovni con error 404">
            </img>
            <ButtonIcon href="http://localhost:3000" text="Regresar" jam="jam-rocket" ></ButtonIcon>
        </div>
    );
};