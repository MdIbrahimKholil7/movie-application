import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className='banner'>
                <Container className='w-100 h-100'>
                    <div className='d-flex justify-content-center align-items-center flex-direction-column  h-100'>
                        <div className='text-white text-center'>
                            <h1 className='display-5 fw-bold'>WHAT’S ON <span className='primary-text-color'>TODAY</span></h1>
                            <h2 className='fs-4 lh-lg fst-italic'>AT MOVIEZONE CINEMA & THEATRES!</h2>
                            <p className='text'>All reserved seating – Choose your exact seat!</p>
                            <button className='rounded-pill px-4 py-2 text-uppercase text-white fw-bold  r-btn'>Discover Now!</button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Banner;