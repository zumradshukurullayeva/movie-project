import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink} from 'react-router-dom'



const Jenreslist = () => {
    const [janreList, setJanreList] =  useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3b62cbd3019cef6ea3bcc5ecce56c01c')
        .then( res => {
            return res.json()
        }).then(data => {
            // console.log(data.genres);
            setJanreList(data.genres)
        })
    })
    // const genres = janreList.map(genre => <Link to={`/catalog/${genre.id}`} key={genre.id} className="genre"  >{genre.name}</Link>)
    
    return (
        <div>
            <h2 className='genre-title'>Genre</h2>
            {janreList.map(genre => (
                // <div className='list-item'  key={genre.id}>
                    <NavLink className='list-item' to={`/catalog/${genre.id}`} style={{color: 'white'}}>{genre.name}</NavLink>
                // </div>
            ))}
        </div>
    )
}

export default Jenreslist;
