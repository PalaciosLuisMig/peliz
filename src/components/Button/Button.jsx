
import { Link } from 'react-router-dom';
import './Button.css';


export const Button = (props) => {

    return(
        <Link className='button' to={props.href}>
            {props.text}
        </Link>
    );
};

export const ButtonIcon = (props) => {

    let iconJam = 'jam ' + props.jam;

    return(
        <Link className='button-icon' to={props.href}>
            <span className={iconJam} ></span>
            {props.text}
        </Link>
    )
}

export const ButtonGhost = (props) => {

    return(
        <Link className='button ghost' to={props.href}>
            {props.text}
        </Link>
    )
}