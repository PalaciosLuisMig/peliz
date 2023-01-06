import './CardDetail.css'

export const CardDetail = ({id,type,title, releaseDate, posterPath, voteAverage, overview}) => {
    let altImg = "Imagen de " + title.toString();
    let classVoteAverage = "card-search-vote-average card-search-vote-average-1";
    let hrefcard = `/${type}/${id}`
    if (voteAverage >= 3) classVoteAverage = " card-search-vote-average card-search-vote-average-2";
    if(voteAverage >= 7) classVoteAverage ="card-search-vote-average  card-search-vote-average-3";

    return(
        <a href={hrefcard} className='card-search'>
            <div>
                <img className='card-search-img' src={posterPath} alt={altImg}></img>
            </div>
            <div className='card-search-content'>
                <p className='card-search-title'>{title}</p>
                <p className='card-search-release-date'>{releaseDate}</p>
                <p className={classVoteAverage}>{voteAverage} / 10</p>
                <p className='card-search-overview'>{overview}</p>
            </div>
        </a>
    )
}