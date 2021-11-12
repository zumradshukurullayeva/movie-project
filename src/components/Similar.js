import React from 'react'

const Similar = (props) => {

    const IMAGE_URL= 'https://image.tmdb.org/t/p/w500';

    return (
        <div>
            
            <img className='actor-img' src={IMAGE_URL + props.actorobjcard.poster_path}/>
        </div>
    )
}

export default Similar
