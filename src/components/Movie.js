
import { Link } from "react-router-dom";
import styled from 'styled-components'
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';


const Movie = ({ movieobj }) => {
    const url = `/movie/${movieobj.id}`;
    return (
       
            <div className="movie">
            <img src={IMAGE_URL + movieobj.poster_path} alt={movieobj.title} />
            <div className="movie_title">{movieobj.title ? movieobj.title : movieobj.name}</div>
            <Link className='link' to={url}>View this movie</Link>
            </div>
        
    );
}

export default Movie;