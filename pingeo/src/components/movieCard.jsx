

function MovieCard({movie}) {

    function onFavoriteClick() {
        alert("Clicked");
    }

    return(

        <div className="movie-card">
            <div className="movie-poster">
                <img src ={movie.url} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}></button>
                </div>
            </div>
            <div className="movie-info">
                <h3 className="movie-title">
                    {movie.title}
                    <p className="movie-release_date">
                        {movie.release_date}
                    </p>
                </h3>
            </div>
        </div>

    ) ;
    }

    export default MovieCard;