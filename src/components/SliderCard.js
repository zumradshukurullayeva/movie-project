import React from 'react'
import styled from "styled-components";
const ORIGINAL_IMAGE_URL= `https://image.tmdb.org/t/p/original`;
const IMAGE_URL= `https://image.tmdb.org/t/p/w500`;



const Card = styled.div`
background-repeat: no-repeat;
background-size: cover;
heigth: 560px;
z-index: -5;
`;

const SliderCard = ({movieInfo}) => {
    return (
        <Card className = 'view-movie' style= {{ backgroundImage:`url(${ORIGINAL_IMAGE_URL + movieInfo.backdrop_path})`}}>
        <div className='cards'>
            <img src={IMAGE_URL + movieInfo.poster_path} className = 'movie-img'/>
            <div className='card-reference'>
                <h1 className='texts'>{movieInfo.original_title}</h1>
                <h1>{movieInfo.original_name}</h1>
                <h2>{movieInfo.release_date}</h2>
                <h2>{movieInfo.title}</h2>
                <h2>{movieInfo.original_language}</h2>
                <div className="production_companies">
            </div>
                <div className="production_countries">
                    {
                        movieInfo.production_countries && movieInfo.production_countries.map((el, index) => (
                            <span key={index}>{el.name}, </span>
                        ))
                    }
                </div>
            </div>
        </div>
        <h2 className='movie-title'>View Movie Page : {movieInfo.title}</h2>
        <div className='row'>
        </div>

   
 
    </Card>
    
    )
}

export default SliderCard
