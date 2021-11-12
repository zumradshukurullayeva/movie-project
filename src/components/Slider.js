import React from 'react'
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import { MY_API_KEY } from '../global';
// import Slider from '../components/Slider';
import SliderCard from './SliderCard';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Autoplay} from 'swiper';
import styled from 'styled-components'

// const MoviesSlider = ({moviesArr}) => {
//     return (
//         <Swiper spaceBetween={50} slidesPerView={4}>
//             {moviesArr.map(movie => (<SwiperSlide><Movie movieobj={movie} key={movie.id}/></SwiperSlide>))}
//         </Swiper>
//     )
// }

const Slider = ({type, title}) => {
    SwiperCore.use([Autoplay]);
    const [moviesList, setMoviesList] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [error, setError] = useState();
    
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${MY_API_KEY}`)
            .then( res => {
                if(!res.ok) {
                    throw Error('Serverdan ma`lumot olishda xatolik');
                }
                return res.json()
            }) 
            .then( data => {
                setMoviesList(data.results.slice(1, 4));
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err.massege)
            })
        }, 2000);
    }, []);

    // const doRequest = (list) => {
    //     setMoviesList(list);
    // }


    
    // const result = isLoading ? <Loader /> : <MoviesSlider moviesArr={moviesList}/>;
    // const errors = error ? error : <MoviesSlider moviesArr={moviesList}/>
 

    return (
        <div>
        <div className='button'>
            <h2 className='card-title' style={{color: 'white'}}>Popular</h2>
            <button className='btn' type='button'>all</button>
        </div>
       
         <Swiper modules={[Autoplay]} spaceBetween={50} slidesPerView={1} loop autoplay={{ delay:2000, disableOnInteraction:false}}>
         
             <div>{moviesList.map(movie => (
             <SwiperSlide  key={movie.id} >
                 <SliderCard movieInfo={movie}/>
                 </SwiperSlide>
             ))}</div>
             
            
         </Swiper>
    </div>
    )

}

export default Slider;
