import React, { useState } from 'react'
import '../styles/home.css'
import MovieItem from './Movies/MovieItem.js'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { getAllMovie, poster } from '../utils/api-helper'

const HomePages = () => {
  const [movies, setMovie] = useState(getAllMovie)

  return (
    <div className='home_container'>
      <div className='allContainer'>
        {poster.map((posters) => (
          <img src={posters.m_img} alt="" className='all_img' />
        ))}
      </div>
      <h1 className='h_heading'>Latest Releases</h1>
      <div className='h_box_container'>
        {movies.slice(0, 8).map((movie) => (
          <MovieItem
            title={movie.title}
            releaseDate={movie.releasDate}
            m__img={movie.m__img}
            description={movie.description}
          />
        ))}
      </div>
      <div className='movie_btn_view_all'>
        <Button LinkComponent={Link} to="/movies" variant='outlined' className='button'>VIEW ALL MOVIES</Button>
      </div>
    </div>
  )
}

export default HomePages