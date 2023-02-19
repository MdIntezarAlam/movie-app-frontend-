import React from 'react'
import '../styles/home.css'
import MovieItem from './Movies/MovieItem.js'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const HomePages = () => {
  return (
    <div className='home_container'>
      <div className='allContainer'>
        <img src="https://www.bollywoodhungama.com/wp-content/uploads/2020/08/Pathaan-cover-news.jpg" alt="" />
        <img src="https://www.bollywoodhungama.com/wp-content/uploads/2020/08/Pathaan-cover-news.jpg" alt="" />
        <img src="https://www.bollywoodhungama.com/wp-content/uploads/2020/08/Pathaan-cover-news.jpg" alt="" />
        <img src="https://www.bollywoodhungama.com/wp-content/uploads/2020/08/Pathaan-cover-news.jpg" alt="" />
        <img src="https://www.bollywoodhungama.com/wp-content/uploads/2020/08/Pathaan-cover-news.jpg" alt="" />
      </div>
      <h1 className='h_heading'>Latest Releases</h1>
      <div className='h_box_container'>
        {[1, 2, 3, 4].map((movie) => (
          <MovieItem />
        ))}
      </div>
      <div className='movie_btn_view_all'>
        <Button LinkComponent={Link} to="movies" variant='outlined' className='button'>VIEW ALL MOVIES</Button>
      </div>
    </div>
  )
}

export default HomePages