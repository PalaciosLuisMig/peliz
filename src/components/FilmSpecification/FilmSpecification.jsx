import YouTube from 'react-youtube';

import './FilmSpecification.css'

export const FilmSpecification = ({title,budget,genres,originalTitle,overview
    ,posterPath,releaseDate,runtime,tagline,voteAverage,trailer}) => {
    
    let altImg = "Imagen de " + title.toString();
    let classVoteAverage = "card-search-vote-average-1";
    if (voteAverage >= 3) classVoteAverage = "card-search-vote-average-2";
    if(voteAverage >= 7) classVoteAverage ="card-search-vote-average-3";

    return(
        <>
            <div  id='film' className='film' >
                <div className='poster-film'>
                    <img className='img-film' src={posterPath} alt={altImg}/>
                </div>
                <div className='content-film'>
                    <p className='title-film'>🎬 {title}</p>
                    <p className='title-origin-film'>{originalTitle}</p>
                    <p className='det-film'> 📅 {releaseDate}  &nbsp; &nbsp;🎭 {genres}  &nbsp; &nbsp;⌛ {runtime} </p>
                    <p className='overview-title-film'>📝 Descripción general</p>
                    <p className='tagline-film'>&nbsp;&nbsp;{tagline}</p>
                    <p className='overview-content-film'>{overview}</p>
                    <div>
                        <p className='more-detail-film'>🔎 Más Detalles</p>
                        <div className='item-detail-film'>
                            <p>💸 Presupuesto: <span className='value-item-detail-film'>{budget}</span></p>
                            <p>🗳️ Voto promedio: <span className={classVoteAverage}>{voteAverage}</span> </p>
                        </div>
                    </div>
                </div>
            </div>
            {trailer ? (
                <div className='trailer'>
                    <p className='trailer-title'>🎞️ Trailer </p>
                    <YouTube
                        videoId={trailer.key}
                        className="reproductor"
                        opts={{
                            width: "100%",
                            height: "100%",
                            playerVars: {
                            autoplay: 0,
                            controls: 0,
                            cc_load_policy: 0,
                            fs: 0,
                            iv_load_policy: 0,
                            modestbranding: 0,
                            rel: 0,
                            showinfo: 0,
                            },
                        }}
                    />
                </div>
            ) : (
                <>
                <p className='trailer-title'>🎞️ Sin Trailer </p>
                </>
            )}
        </>
    );
}