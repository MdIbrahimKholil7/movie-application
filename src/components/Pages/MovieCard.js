import React from 'react';
import '../Style/MovieCard.css'
const MovieCard = ({movie,index,setIndex}) => {
    console.log(movie)
    const {image:{original},name,language,rating,schedule:{time}}=movie.show || {}
    return (
        <div>
            <div className='card-container'>
                <div className='movie-card'>
                    <img className='img' src={original} alt={name} />
                    <div className='movie-name'>
                        <h3 className='fs-4'>Movie Name:{name}</h3>
                        <h3 className='fs-5'>Category:{language} Movie</h3>
                    </div>
                </div>
                <div className='details-btn-container'>
                    <button className='details-btn'>Details</button>
                    <p className=''>Rating {rating.average}</p>
                </div>
                <p className='time'>{time ? time:'19:12'}</p>
            </div>
        </div>
    );
};

export default MovieCard;