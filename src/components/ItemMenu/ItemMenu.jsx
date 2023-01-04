import { NavLink } from 'react-router-dom';
import './ItemMenu.css';

export const ItemMenu = (props) =>{

    let iconJam = 'jam ' + props.jam;

    return(

        <NavLink to={props.href} style={({isActive}) =>{
            return {color:isActive?'var(--primary-color)':''}
        }}>
            <span className={iconJam} ></span>
            {props.text}
        </NavLink>

    );

};