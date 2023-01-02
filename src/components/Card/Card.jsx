import './Card.css'


export const Card = ({title,releasedate}) =>{

    return(
        <>
        <h6>{title}</h6>
        <p>{releasedate}</p>
        </>
    )

}