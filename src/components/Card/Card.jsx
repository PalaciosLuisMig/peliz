import './Card.css'


export const Card = ({title, releaseDate, posterPath, voteAverage}) =>{

    let altImg = "Imagen de " + title;
    let classVoteAverage = "card-vote-average card-vote-average-1";
    if (voteAverage >= 3) classVoteAverage = " card-vote-average card-vote-average-2";
    if(voteAverage >= 7) classVoteAverage ="card-vote-average  card-vote-average-3";

    return(
        <div className='card'>
            <div>
                <img className='card-img' src={posterPath} alt={altImg}></img>
            </div>
            <div className='card-content'>
                <p className='card-title'>{title}</p>
                <p className='card-release-date'>{releaseDate}</p>
                <p className={classVoteAverage}>{voteAverage} / 10 </p>
            </div>
        </div>
    )

}