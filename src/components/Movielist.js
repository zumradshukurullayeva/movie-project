import React from 'react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Movie from '../components/Movie';
import styled from 'styled-components'
import { MY_API_KEY } from '../global';
import SwiperCore, {Autoplay} from 'swiper';
import { Link } from 'react-router-dom';


const Cards = styled.div`
display: flex;
overFlow: slide;
`
const Movielist = ({type, title}) => {
    SwiperCore.use([Autoplay]);
   
    const [moviesList, setMoviesList] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${MY_API_KEY}`).then( res => res.json()).then( data => {
                setMoviesList(data.results);
                setIsLoading(false);
            })
        }, 2000);
    }, []);

    return (
        <div>
            <div className='button'>
                <h2 className='card-title'>{title}</h2>
                <Link to='/catalog' className='btn'> all </Link>
            </div>
           
             <Swiper modules={[Autoplay]} spaceBetween={50} slidesPerView={5} loop autoplay={{ delay:2000, disableOnInteraction:false}}>
             
                 <Cards>{moviesList.map(movie => (
                 <SwiperSlide  key={movie.id} >
                     <Movie movieobj={movie}/>
                     </SwiperSlide>
                 ))}</Cards>
                 
             </Swiper>
        </div>
    ) 
}

export default Movielist;
