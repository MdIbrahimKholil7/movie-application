import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/MovieCard.css'
const MovieCard = ({movie,index,movieIndex}) => {
    console.log(movie)
    const {image:{original},name,language,rating,schedule:{time},id}=movie.show || {}
    const navigate=useNavigate()
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className={` card-container  ${ index === movieIndex ? 'active-card hover-card':'inactive-card disable-btn'}`}>
                <div className='movie-card'>
                    <img className='img' src={original} alt={name} />
                    <div className='movie-name'>
                       
                        <h3 className='fs-5'>Category:{language} Movie</h3>
                    </div>
                </div>
                <div className='details-btn-container'>
                    <button onClick={()=>navigate(`movie-details/${id}`)} className={`${index === movieIndex ? 'cursor-point':'disable-btn'} details-btn `}>Details</button>
                    <p className=''>Rating {rating.average}</p>
                </div>
                <p className='time'>{time ? time:'19:12'}</p>
            </div>
        </div>
    );
};

export default MovieCard;