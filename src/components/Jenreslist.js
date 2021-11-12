import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'



const Jenreslist = () => {
    const [janreList, setJanreList] =  useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3b62cbd3019cef6ea3bcc5ecce56c01c&language=en-US')
        .then( res => {
            return res.json()
        }).then(data => {
            console.log(data.genres);
            setJanreList(data.genres)
        })
    })
    
    return (
        <div>
            <h2 className='genre-title'>Genre</h2>
            {janreList.map(ganre => (
                <div className='list-item'  key={ganre.id}>
                    <Link to={`/catalog/${ganre.id}`} style={{color: 'white'}}>{ganre.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default Jenreslist;
