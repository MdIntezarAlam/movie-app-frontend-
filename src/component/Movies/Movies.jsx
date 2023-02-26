import React, { useState, useEffect } from 'react'
import { getAllMovie } from '../../utils/api-helper'
import '../../styles/home.css'

const Movies = () => {
  const [movies, setmovie] = useState(getAllMovie)


  console.log(movies);
  return (
    <div className='movie_container'>
      <div className='mobie_heading'>All Movies..</div>
      <div className='movie_box_containers'>
        {movies && movies.length > 0 ? movies.map((movie) => (
          <div className='movie_inner_box'>
            <img className='movie_inner_img' src={movie.m__img} alt="" />
            <div className='movie_inner_text'>
              <h3>Title:{movie.title}</h3>
              <span className='movie_inner_texts'>relese Data:{movie.releaseDate}</span>
              <button className='movie_inner_btn'>Boook</button>
            </div>
          </div>
        )) : (<p>movie not found</p>)}
      </div>
    </div>
  )
}

export default Movies