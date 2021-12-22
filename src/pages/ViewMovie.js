import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import { MY_API_KEY } from "../global";
import Actorcard from "../components/Actorcard";
import Similar from  "../components/Similar"

const SINGLE_MOVIE_API = `https://api.themoviedb.org/3/movie/`;
const ORIGINAL_IMAGE_URL= `https://image.tmdb.org/t/p/original`;
const IMAGE_URL= `https://image.tmdb.org/t/p/w500`;
const API_PARAMS = `?api_key=${MY_API_KEY}&language=en-US`;

const ViewMovie = () => {

    const [movieInfo, setMovieInfo] = useState({});

    const { id } = useParams();
    const [actor ,setactor] = useState([]);
    const [similar, setsimilar] = useState([]);

    useEffect(() => {
        console.log(id);
        fetch(SINGLE_MOVIE_API + id + API_PARAMS).then( res => res.json()).then(data => {
            setMovieInfo(data);
        });

        fetch(SINGLE_MOVIE_API + id +'/credits' + API_PARAMS).then( res => res.json())
        .then(data => {
            setactor(data.cast);
            console.log(data)
        });

        fetch(SINGLE_MOVIE_API + id +'/similar' + API_PARAMS).then( res => res.json()).then(data => {
            setsimilar(data.results);
            console.log(data)
        });
    }, [id]);

    const Card = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    heigth: 560px;
    z-index: -5;
    `;

 const newarr = actor.map((el, i) =>  <Actorcard  key={i} actorobj={el}/>)
 const newsimilar = similar.map((element, index) => {
    return(
        <div>
            {/* <h2>Smilar</h2> */}
            <Similar key={index} actorobjcard={element} />
        </div>

    )});


    return (
        <Card className = 'view-movie' style= {{ backgroundImage:`url(${ORIGINAL_IMAGE_URL + movieInfo.backdrop_path})`}}>
            <div className='cards'>
                <img alt="movies" src={IMAGE_URL + movieInfo.poster_path} className = 'movie-img'/>
                <div className='card-reference'>
                    <h1 className='texts'>{movieInfo.original_title}</h1>
                    <h1>{movieInfo.original_name}</h1>
                    <h2>{movieInfo.release_date}</h2>
                    <h2>{movieInfo.title}</h2>
                    <h2>{movieInfo.original_language}</h2>
                    <div className="production_companies">
                        {
                            movieInfo.production_companies && movieInfo.production_companies.map(el => (
                                <div key={id} className="company">
                                    <img className="company_logo" alt="logo" src={ORIGINAL_IMAGE_URL + el.logo_path}/> 
                                    <span className="company_title">{el.name}</span>
                                </div>
                            ))
                        }
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
            {newarr}
            
           
            </div>
            <h2 className='smil-title'>Smilar</h2>
            <div className='smil-cards'>
                
                {newsimilar}
            </div>

       
     
        </Card>
        
    )
}

export default ViewMovie;






// const MovieCard = styled.div`
//     background-color: #ccc;
//     margin-bottom: 20px;
// `;

// const MoviePoster = styled.img`
//     width: 200px;
//     border-radius: 15px;
// `;

// const MovieTitle = styled.span`
//     display: block;
//     font-size: 18px;
//     color: #222;
//     text-transform: uppercase;
// `;