import React from 'react'

const MovieItem = ({ title, releaseDate, m__img,description }) => {
    return (
        <div className='movie_item_container'>
            <img src={m__img} alt="" />
            <div className='mi_box_text_cotainer'>
                <h1 className='mi_heading'>{title}</h1>
                <span className='mi_headings'>{releaseDate}</span>
                <span className='mi_text'>
                    {description}
                </span>
                <button>Book Now</button>
            </div>
        </div>
    )
}

export default MovieItem