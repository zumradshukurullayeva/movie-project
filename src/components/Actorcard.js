import React from 'react'

const Actorcard = (props) => {

    const IMAGE_URL= 'https://image.tmdb.org/t/p/w500';

    return (
        <div className='actor-cards'>
            <div className='actor-card'>
                <img className='actor-img' src={IMAGE_URL + props.actorobj.profile_path} alt=""/>
                <h2 className='actor-title'>{props.actorobj.name}</h2>
            </div>
        </div>
 
    )
}

export default Actorcard;
