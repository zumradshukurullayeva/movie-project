import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import Loader from '../components/Loader';
import Movie from '../components/Movie';
import Intro from '../components/Intro'
import { MY_API_KEY } from '../global';
import Movielist from '../components/Movielist';
import Slider from '../components/Slider';
const TRENDING_MOVIES_API = `https://api.themoviedb.org/3/trending/all/day?api_key=${MY_API_KEY}lol`;

const MoviesSlider = ({moviesArr}) => {
    return (
        <Swiper spaceBetween={50} slidesPerView={4}>
            {moviesArr.map(movie => (<SwiperSlide><Movie movieobj={movie} key={movie.id}/></SwiperSlide>))}
        </Swiper>
    )
}


const Home = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        setTimeout(() => {
            fetch(TRENDING_MOVIES_API)
            .then( res => {
                if(!res.ok) {
                    throw Error('Serverdan ma`lumot olishda xatolik');
                }
                return res.json()
            }) 
            .then( data => {
                setMoviesList(data.results);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err.massege)
            })
        }, 2000);
    }, []);

    const doRequest = (list) => {
        setMoviesList(list);
    }

    

    const result = isLoading ? <Loader /> : <MoviesSlider moviesArr={moviesList}/>;
    const errors = error ? error : <MoviesSlider moviesArr={moviesList}/>


    return (
      <div className="search">
        
          <Intro doRequest={doRequest}/>
          <Slider />
          <div className="page-content">
            { result }
            { errors }
            <Movielist type='upcoming' title='Upcoming movies' />
            <Movielist type='top_rated' title='Top movies' />
            <Movielist type='popular' title='Popular movies' />
            {/* <Similar type='smilar' title='Smilar'/> */}
          
          </div>
      </div>
    );
}
  
export default Home;