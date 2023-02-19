import React from 'react'

const MovieItem = () => {
    return (
        <div className='movie_item_container'>
            <img src="https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg" alt="" />
            <div className='mi_box_text_cotainer'>
                <h1 className='mi_heading'>Lizard</h1>
                <span className='mi_text'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                </span>
                <button>Share</button>
            </div>
        </div>
    )
}

export default MovieItem